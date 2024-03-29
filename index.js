const request = require('request-promise-native').defaults({timeout: 9000});
const neatCsv = require('neat-csv');


const processCsvData = (data) => {

    const companyList = [];

    const indexData = {
        name: 'PowerShares QQQ',
        symbol: null,
        date: null,
        companyList: companyList
    }

    for (let company of data) {

        indexData.symbol = company['Fund Ticker'].trim();
        indexData.date = company['Date'].trim();

        var companyInfo = {
            symbol: company['Holding Ticker'].trim(),
            name: company['Name'].trim(),
            weight: Number(company['Weight'].trim()),
            class: company['Class of Shares'].trim(),
            sector: company['Sector'].trim(),
            shares: company['Shares/Par Value'].trim(),
            marketValue: company['MarketValue'].trim(),
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
        url: 'https://www.invesco.com/us/financial-products/etfs/holdings/main/holdings/0?audienceType=Investor&action=download&ticker=QQQ'
    };

    return request(options);
}

function removeDuplicateLines(csvData) {

    const csvLines = csvData.split('\n');
    csvLines.pop();
    const headerLine = csvLines[0];
    const adjustedLines = Array.from(new Set(csvLines.slice(1)));
    adjustedLines.unshift(headerLine);
    const adjustedData = adjustedLines.join('\n') + '\n';

    return adjustedData;
}

const getNasdaq100 = async () => {

    const csvData = await fetchNasdaq100Holdings();
    const data = await neatCsv(removeDuplicateLines(csvData));
    const companyList = processCsvData(data);

    return companyList;
};

exports.getNasdaq100 = getNasdaq100;
