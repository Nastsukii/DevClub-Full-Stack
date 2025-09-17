const companies = [
    { name: 'samsung', marketValue: 500, CEO: 'Kim Hyun Suk', country: 'South Korea', founded: 1938 },
    { name: 'apple', marketValue: 1000, CEO: 'Tim Cook', country: 'USA', founded: 1976 },
    { name: 'amazon', marketValue: 700, CEO: 'Jeff Bezos', country: 'USA', founded: 1994 },
    { name: 'alibaba', marketValue: 400, CEO: 'Daniel Zhang', country: 'China', founded: 1999 },
    { name: 'facebook', marketValue: 750, CEO: 'Mark Zuckerberg', country: 'USA', founded: 2004 },
    { name: 'tesla', marketValue: 800, CEO: 'Elon Musk', country: 'USA', founded: 2003 }
];

const add10PercentValue = company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}

const lessThan1990 =  company => company.founded < 1990

 const totalSum = (acc, company) => {
    return acc + company.marketValue
}

const newMarketValue = companies
.map(add10PercentValue)
.filter(lessThan1990)
.reduce(totalSum, 0)


console.log(newMarketValue)