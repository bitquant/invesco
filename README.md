# invesco
Companies in the Nasdaq 100 index based on Invesco QQQ ETF portfolio holdings

## Install
```
$ npm install invesco --save
```

## Usage
```javascript
var invesco = require("invesco");

invesco.getNasdaq100().then((companyList) => {
   console.log(JSON.stringify(companyList, null, 2));
}).catch((err) => {
   console.log("caught error: " + err.stack);
});

/*
[
  {
    "symbol": "AAPL",
    "name": "Apple Inc",
    "weight": "12.094"
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com Inc",
    "weight": "9.903"
  },
  {
    "symbol": "MSFT",
    "name": "Microsoft Corp",
    "weight": "9.496"
  },
  {
    "symbol": "FB",
    "name": "Facebook Inc",
    "weight": "5.568"
  },
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc",
    "weight": "4.819"
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet Inc",
    "weight": "4.135"
  },
  {
    "symbol": "INTC",
    "name": "Intel Corp",
    "weight": "3.227"
  },
  {
    "symbol": "CSCO",
    "name": "Cisco Systems Inc",
    "weight": "2.822"
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA Corp",
    "weight": "1.969"
  },
  {
    "symbol": "NFLX",
    "name": "Netflix Inc",
    "weight": "1.823"
  },
  {
    "symbol": "CMCSA",
    "name": "Comcast Corp",
    "weight": "1.812"
  },
  {
    "symbol": "AMGN",
    "name": "Amgen Inc",
    "weight": "1.555"
  },
  {
    "symbol": "ADBE",
    "name": "Adobe Systems Inc",
    "weight": "1.499"
  },
  {
    "symbol": "TXN",
    "name": "Texas Instruments Inc",
    "weight": "1.346"
  },
  {
    "symbol": "BKNG",
    "name": "Booking Holdings Inc",
    "weight": "1.341"
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom Inc",
    "weight": "1.243"
  },
  {
    "symbol": "PYPL",
    "name": "PayPal Holdings Inc",
    "weight": "1.176"
  },
  {
    "symbol": "COST",
    "name": "Costco Wholesale Corp",
    "weight": "1.095"
  },
  {
    "symbol": "GILD",
    "name": "Gilead Sciences Inc",
    "weight": "1.095"
  },
  {
    "symbol": "SBUX",
    "name": "Starbucks Corp",
    "weight": "1.02"
  },
  {
    "symbol": "QCOM",
    "name": "QUALCOMM Inc",
    "weight": "1.001"
  },
  {
    "symbol": "BIDU",
    "name": "Baidu Inc ADR",
    "weight": "0.933"
  },
  {
    "symbol": "KHC",
    "name": "Kraft Heinz Co/The",
    "weight": "0.907"
  },
  {
    "symbol": "CHTR",
    "name": "Charter Communications Inc",
    "weight": "0.82"
  },
  {
    "symbol": "WBA",
    "name": "Walgreens Boots Alliance Inc",
    "weight": "0.793"
  },
  {
    "symbol": "CELG",
    "name": "Celgene Corp",
    "weight": "0.792"
  },
  {
    "symbol": "MU",
    "name": "Micron Technology Inc",
    "weight": "0.75"
  },
  {
    "symbol": "BIIB",
    "name": "Biogen Inc",
    "weight": "0.738"
  },
  {
    "symbol": "MDLZ",
    "name": "Mondelez International Inc",
    "weight": "0.734"
  },
  {
    "symbol": "AMAT",
    "name": "Applied Materials Inc",
    "weight": "0.724"
  },
  {
    "symbol": "ADP",
    "name": "Automatic Data Processing Inc",
    "weight": "0.716"
  },
  {
    "symbol": "CSX",
    "name": "CSX Corp",
    "weight": "0.703"
  },
  {
    "symbol": "ATVI",
    "name": "Activision Blizzard Inc",
    "weight": "0.688"
  },
  {
    "symbol": "ISRG",
    "name": "Intuitive Surgical Inc",
    "weight": "0.66"
  },
  {
    "symbol": "TSLA",
    "name": "Tesla Inc",
    "weight": "0.659"
  },
  {
    "symbol": "INTU",
    "name": "Intuit Inc",
    "weight": "0.628"
  },
  {
    "symbol": "MAR",
    "name": "Marriott International Inc/MD",
    "weight": "0.627"
  },
  {
    "symbol": "TMUS",
    "name": "T-Mobile US Inc",
    "weight": "0.612"
  },
  {
    "symbol": "CTSH",
    "name": "Cognizant Technology Solutions Corp",
    "weight": "0.561"
  },
  {
    "symbol": "EA",
    "name": "Electronic Arts Inc",
    "weight": "0.511"
  },
  {
    "symbol": "FOXA",
    "name": "Twenty-First Century Fox Inc",
    "weight": "0.506"
  },
  {
    "symbol": "ESRX",
    "name": "Express Scripts Holding Co",
    "weight": "0.493"
  },
  {
    "symbol": "EBAY",
    "name": "eBay Inc",
    "weight": "0.492"
  },
  {
    "symbol": "ILMN",
    "name": "Illumina Inc",
    "weight": "0.491"
  },
  {
    "symbol": "VRTX",
    "name": "Vertex Pharmaceuticals Inc",
    "weight": "0.482"
  },
  {
    "symbol": "ADI",
    "name": "Analog Devices Inc",
    "weight": "0.436"
  },
  {
    "symbol": "JD",
    "name": "JD.com Inc ADR",
    "weight": "0.436"
  },
  {
    "symbol": "LRCX",
    "name": "Lam Research Corp",
    "weight": "0.414"
  },
  {
    "symbol": "ROST",
    "name": "Ross Stores Inc",
    "weight": "0.398"
  },
  {
    "symbol": "SIRI",
    "name": "Sirius XM Holdings Inc",
    "weight": "0.387"
  },
  {
    "symbol": "REGN",
    "name": "Regeneron Pharmaceuticals Inc",
    "weight": "0.383"
  },
  {
    "symbol": "ADSK",
    "name": "Autodesk Inc",
    "weight": "0.379"
  },
  {
    "symbol": "FOX",
    "name": "Twenty-First Century Fox Inc",
    "weight": "0.378"
  },
  {
    "symbol": "FISV",
    "name": "Fiserv Inc",
    "weight": "0.376"
  },
  {
    "symbol": "MNST",
    "name": "Monster Beverage Corp",
    "weight": "0.352"
  },
  {
    "symbol": "ALXN",
    "name": "Alexion Pharmaceuticals Inc",
    "weight": "0.329"
  },
  {
    "symbol": "WDC",
    "name": "Western Digital Corp",
    "weight": "0.297"
  },
  {
    "symbol": "PCAR",
    "name": "PACCAR Inc",
    "weight": "0.287"
  },
  {
    "symbol": "PAYX",
    "name": "Paychex Inc",
    "weight": "0.284"
  },
  {
    "symbol": "ORLY",
    "name": "O'Reilly Automotive Inc",
    "weight": "0.283"
  },
  {
    "symbol": "DLTR",
    "name": "Dollar Tree Inc",
    "weight": "0.282"
  },
  {
    "symbol": "MCHP",
    "name": "Microchip Technology Inc",
    "weight": "0.274"
  },
  {
    "symbol": "ALGN",
    "name": "Align Technology Inc",
    "weight": "0.273"
  },
  {
    "symbol": "WYNN",
    "name": "Wynn Resorts Ltd",
    "weight": "0.261"
  },
  {
    "symbol": "CTRP",
    "name": "Ctrip.com International Ltd ADR",
    "weight": "0.255"
  },
  {
    "symbol": "CERN",
    "name": "Cerner Corp",
    "weight": "0.251"
  },
  {
    "symbol": "MYL",
    "name": "Mylan NV",
    "weight": "0.251"
  },
  {
    "symbol": "AAL",
    "name": "American Airlines Group Inc",
    "weight": "0.25"
  },
  {
    "symbol": "NTES",
    "name": "NetEase Inc ADR",
    "weight": "0.248"
  },
  {
    "symbol": "CTAS",
    "name": "Cintas Corp",
    "weight": "0.242"
  },
  {
    "symbol": "WDAY",
    "name": "Workday Inc",
    "weight": "0.238"
  },
  {
    "symbol": "IDXX",
    "name": "IDEXX Laboratories Inc",
    "weight": "0.229"
  },
  {
    "symbol": "SYMC",
    "name": "Symantec Corp",
    "weight": "0.227"
  },
  {
    "symbol": "XLNX",
    "name": "Xilinx Inc",
    "weight": "0.222"
  },
  {
    "symbol": "SWKS",
    "name": "Skyworks Solutions Inc",
    "weight": "0.222"
  },
  {
    "symbol": "VRSK",
    "name": "Verisk Analytics Inc",
    "weight": "0.22"
  },
  {
    "symbol": "KLAC",
    "name": "KLA-Tencor Corp",
    "weight": "0.218"
  },
  {
    "symbol": "LBTYK",
    "name": "Liberty Global PLC",
    "weight": "0.217"
  },
  {
    "symbol": "CHKP",
    "name": "Check Point Software Technologies Ltd",
    "weight": "0.208"
  },
  {
    "symbol": "STX",
    "name": "Seagate Technology PLC",
    "weight": "0.207"
  },
  {
    "symbol": "MXIM",
    "name": "Maxim Integrated Products Inc",
    "weight": "0.205"
  },
  {
    "symbol": "BMRN",
    "name": "BioMarin Pharmaceutical Inc",
    "weight": "0.198"
  },
  {
    "symbol": "EXPE",
    "name": "Expedia Group Inc",
    "weight": "0.198"
  },
  {
    "symbol": "ULTA",
    "name": "Ulta Beauty Inc",
    "weight": "0.193"
  },
  {
    "symbol": "FAST",
    "name": "Fastenal Co",
    "weight": "0.189"
  },
  {
    "symbol": "CTXS",
    "name": "Citrix Systems Inc",
    "weight": "0.187"
  },
  {
    "symbol": "ASML",
    "name": "ASML Holding NV",
    "weight": "0.186"
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre Inc",
    "weight": "0.183"
  },
  {
    "symbol": "CA",
    "name": "CA Inc",
    "weight": "0.182"
  },
  {
    "symbol": "VOD",
    "name": "Vodafone Group PLC ADR",
    "weight": "0.174"
  },
  {
    "symbol": "INCY",
    "name": "Incyte Corp",
    "weight": "0.173"
  },
  {
    "symbol": "SNPS",
    "name": "Synopsys Inc",
    "weight": "0.172"
  },
  {
    "symbol": "JBHT",
    "name": "JB Hunt Transport Services Inc",
    "weight": "0.169"
  },
  {
    "symbol": "TTWO",
    "name": "Take-Two Interactive Software Inc",
    "weight": "0.169"
  },
  {
    "symbol": "CDNS",
    "name": "Cadence Design Systems Inc",
    "weight": "0.15"
  },
  {
    "symbol": "SHPG",
    "name": "Shire PLC ADR",
    "weight": "0.147"
  },
  {
    "symbol": "QRTEA",
    "name": "Qurate Retail Inc QVC Group",
    "weight": "0.14"
  },
  {
    "symbol": "HSIC",
    "name": "Henry Schein Inc",
    "weight": "0.14"
  },
  {
    "symbol": "HAS",
    "name": "Hasbro Inc",
    "weight": "0.137"
  },
  {
    "symbol": "XRAY",
    "name": "DENTSPLY SIRONA Inc",
    "weight": "0.13"
  },
  {
    "symbol": "HOLX",
    "name": "Hologic Inc",
    "weight": "0.13"
  },
  {
    "symbol": "DISH",
    "name": "DISH Network Corp",
    "weight": "0.09"
  },
  {
    "symbol": "LBTYA",
    "name": "Liberty Global PLC",
    "weight": "0.085"
  }
]

*/
```

## License
MIT license; see [LICENSE](./LICENSE).
