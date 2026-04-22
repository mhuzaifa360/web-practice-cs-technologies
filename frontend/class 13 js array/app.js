//! example 1
const numbers = [1,{name:'ali',address:'abcd'},'khan',[1,2,3,4]];
console.log(numbers[numbers.length-1]);
console.log(numbers[numbers.length-1][3]);

//! example 2
const flight = {
  id: 184,
  pricingSource: "ADVJR1",
  legs: [
    {
      id: 45,
      elapsedTime: 680,
      schedules: [
        {
          id: 58,
          departure: {
            airport: "LHR",
            city: "LON",
            country: "GB",
            time: "09:10:00Z",
            terminal: "3",
          },
          arrival: {
            airport: "DXB",
            city: "DXB",
            country: "AE",
            time: "20:00:00+04:00",
            terminal: "3",
          },
          carrier: {
            marketing: "EK",
            marketingFlightNumber: 8,
          },
          travdate: "2026-03-20",
        },
        {
          id: 16,
          departure: {
            airport: "DXB",
            city: "DXB",
            country: "AE",
            time: "21:30:00+04:00",
            terminal: "3",
          },
          arrival: {
            airport: "ISB",
            city: "ISB",
            country: "PK",
            time: "01:30:00+05:00",
          },
          carrier: {
            marketing: "EK",
            marketingFlightNumber: 614,
          },
          travdate: "2026-03-20",
        },
      ],
    },
    {
      id: 9,
      elapsedTime: 775,
      schedules: [
        {
          id: 82,
          departure: {
            airport: "ISB",
            city: "ISB",
            country: "PK",
            time: "09:00:00+05:00",
          },
          arrival: {
            airport: "DXB",
            city: "DXB",
            country: "AE",
            time: "11:35:00+04:00",
          },
          carrier: {
            marketing: "EK",
            marketingFlightNumber: 613,
          },
          travdate: "2026-03-26",
        },
        {
          id: 76,
          departure: {
            airport: "DXB",
            city: "DXB",
            country: "AE",
            time: "12:55:00+04:00",
          },
          arrival: {
            airport: "LHR",
            city: "LON",
            country: "GB",
            time: "16:55:00Z",
          },
          carrier: {
            marketing: "EK",
            marketingFlightNumber: 41,
          },
          travdate: "2026-03-26",
        },
      ],
    },
  ],
};

console.log(flight.legs);
console.log(flight.legs[0]);
console.log(flight.legs[0].elapsedTime);
console.log(flight.legs[0].schedules);
console.log(flight.legs[0].schedules[0].departure);
console.log(flight.legs[0].schedules[0].departure.terminal);
console.log(flight.legs[0].schedules[0].departure.time);

for (let i = 0; i < flight.legs[0].schedules.length ; i++) {
  console.log(flight.legs[0].schedules[i]);
}

