const flight = {
  diversitySwapper: { weighedPrice: 6142.261 },
  id: 200,
  isPrivateFare: true,

  pricingInformation: {
    totalPrice: 2824.89,
    totalTaxAmount: 367.89,
    currency: "GBP",
    baseFareAmount: 3278,
    baseFareCurrency: "USD",
    constructionAmount: 3278.3,
    constructionCurrency: "NUC",
    equivalentAmount: 2457,
    equivalentCurrency: "GBP",
    diversity: {
      diversitySwapper: { Price: 6142.261 },
      id: 200,
      isPrivateFare: true,
    },
  },
};
delete flight.diversitySwapper.weighedPrice;
flight.diversitySwapper.weighedPrice = 211.12;


console.log(flight);
console.log(flight.pricingInformation.diversity.diversitySwapper.Price);
console.log(flight["pricingInformation"]["totalPrice"]);


const flight = {
 id: 28, frequency: "****T**", stopCount: 0, eTicketable: true, totalMilesFlown: 3405 ,
arrival: 
  {airport: "DXB", city: "DXB", country: "AE", time: "20:30:00+04:00", terminal: "3"},
carrier: 
  {marketing: "EK", marketingFlightNumber: 12, operating: "EK", operatingFlightNumber: 12},
departure: 
  {airport: "LGW", city: "LON", country: "GB", time: "09:40:00Z", terminal: "N"},
eTicketable: true,
elapsedTime: 410,
frequency: "****T**",
id: 28,
stopCount: 0,
totalMilesFlown: 3405,
travdate: "2026-03-19"
}