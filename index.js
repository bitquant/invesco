const request = require('request-promise-native').defaults({timeout: 9000});



const parseCsvData = (csvData) => {

    var lineArray = csvData.split("\n");
    lineArray.pop();

    const companyList = [];

    const indexData = {
        name: 'PowerShares QQQ',
        symbol: null,
        date: null,
        companyList: companyList
    }

    for (var line = 1; line < lineArray.length; line++) {

        var modifiedLine = lineArray[line].replace(/ ,".*"/g, "");

        var fieldList = modifiedLine.split(",");

        indexData.symbol = fieldList[0];
        indexData.date = fieldList[6].replace(/^\s+|\s+$/g, ''); // remove \r

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

    let rank = 1;
    for (company of companyList) {
        company.rank = rank;
        rank++;
    }

    return indexData;
}

const fetchNasdaq100Holdings = async () => {

    const options = {
        url: 'https://www.invesco.com/us/financial-products/etfs/holdings/main/holdings/0?ticker=QQQ&action=download',
    };

    return request(options);
}

const getNasdaq100 = async () => {

    const csvData = await fetchNasdaq100Holdings();
    const companyList = parseCsvData(csvData);

    return companyList;
};

exports.getNasdaq100 = getNasdaq100;
