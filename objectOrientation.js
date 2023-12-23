var car1 = { brand: "Tata", model: "Nexon", year: 2020 };
var car2 = { brand1: "Mahindra", model1: "Thar", year1: 2021 };

var merged = { ...car1, ...car2 };

console.log(merged);