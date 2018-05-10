var cookie = require("cookie");
const request = require('request-promise-native').defaults({timeout: 9000});


const findEtfHoldingLink = (pageData) => {

    var lineArray = pageData.split("\n");
    var etfHoldingLink = null;

    for (var line = 0; line < lineArray.length; line++) {

        var regex = /href="([^"]+etf_holdings[^"]+)"/

        var matchArray = lineArray[line].match(regex);

        if (matchArray) {

            etfHoldingLink = matchArray[1];
            etfHoldingLink = etfHoldingLink.replace(/&amp;/g, "&");
            break;
        }
    }

    return etfHoldingLink;
}

const findDownloadLink = (pageData) => {

    var lineArray = pageData.split("\n");
    var downloadUrlLink = null;

    for (var line = 0; line < lineArray.length; line++) {

        var regex = /#downloadUrlLink[^\/]+([^']+)/

        var matchArray = lineArray[line].match(regex);

        if (matchArray) {

            downloadUrlLink = matchArray[1];
            downloadUrlLink = downloadUrlLink.slice(0, -1); // remove last ? char
            downloadUrlLink = downloadUrlLink.replace(/&amp;/g, "&");
            break;
        }
    }

    return downloadUrlLink;
}


const getSessionCookie = (rsp) => {

    var cookieList = rsp.headers["set-cookie"];
    var cookieHeader = null;

    if (cookieList) {

        for (var idx = 0; idx < cookieList.length; idx++) {

            var parsedCookie = cookie.parse(cookieList[idx]);

            if ("JSESSIONID" in parsedCookie) {
                cookieHeader =  "JSESSIONID=" + parsedCookie.JSESSIONID;
                break;
            }
        }
    }

    return cookieHeader;
}

const grabEtfHoldingLink = async () => {

    const options = {
        url: "https://www.invesco.com/portal/site/us/financial-professional/etfs/product-detail?productId=QQQ",
        resolveWithFullResponse: true
    };

    const rsp = await request(options);

    var etfHoldingLink = findEtfHoldingLink(rsp.body);
    if (etfHoldingLink == null) {
        throw new Error("etf link not found");
    }

    var sessionCookie = getSessionCookie(rsp);

    return {
        url: "https://www.invesco.com" + etfHoldingLink,
        sessionCookie: sessionCookie
    };
}

const grabDownloadLink = async (link) => {

    var options = {
        url: link.url,
        resolveWithFullResponse: true
    };

    if (link.sessionCookie != null) {
        options.headers = { "Cookie": link.sessionCookie }
    }

    const rsp = await request(options);

    const downloadLink = findDownloadLink(rsp.body);
    if (downloadLink == null) {
        throw new Error("download link not found");
    }

    return {
        url: "https://www.invesco.com" + downloadLink,
        sessionCookie: link.sessionCookie
    }
}

const grabNdxCsvData = async (link) => {

    var options = {
        url: link.url
    };

    if (link.sessionCookie != null) {
        options.headers = { "Cookie": link.sessionCookie }
    }

    const rsp = await request(options);

    return rsp;
}

const parseCsvData = (csvData) => {

    var lineArray = csvData.split("\n");
    var companyList = [];

    for (var line = 1; line < lineArray.length; line++) {

        var modifiedLine = lineArray[line].replace(/ ,".*"/g, "");

        var fieldList = modifiedLine.split(",");

        var companyInfo = {
            symbol: fieldList[2],
            name: fieldList[4],
            weight: fieldList[3]
        }

        if (companyInfo.symbol != "-CASH-") {
            companyList.push(companyInfo);
        }
    }

    companyList.sort(function(a, b) {
        return parseFloat(b.weight) - parseFloat(a.weight);
    });

    return companyList;
}

const getNasdaq100 = async () => {

    const holdingLink = await grabEtfHoldingLink();
    const downloadLink = await grabDownloadLink(holdingLink);
    const csvData = await grabNdxCsvData(downloadLink);
    const companyList = parseCsvData(csvData);

    return companyList;
};

exports.getNasdaq100 = getNasdaq100;
