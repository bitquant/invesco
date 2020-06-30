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

        indexData.symbol = company['Fund Ticker'];
        indexData.date = company['Date'];

        var companyInfo = {
            symbol: company['Holding Ticker'],
            name: company['Name'],
            weight: Number(company['Weight']),
            class: company['Class of Shares'],
            sector: company['Sector']
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
    const data = await neatCsv(csvData);
    const companyList = processCsvData(data);

    return companyList;
};

exports.getNasdaq100 = getNasdaq100;
