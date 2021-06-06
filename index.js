//Hey kiddo
const adultCheck = function (age){
    return age >= 18;

    };

const greetings = function (age){
    if (adultCheck(age)) {
        return "Hello there"
    } else {
        return "Hey kiddo"
    }
}
console.log(greetings(17));

//VAT
const vatAmount = function (basePrice, vatPercentage) {
    vatPrice = basePrice * (vatPercentage / 100);    
    return vatPrice
    };


const PriceIncludeVat = function (basePrice, vatPercentage) {
    totalPrice = basePrice + vatAmount(basePrice, vatPercentage)
    return totalPrice;
}
total = PriceIncludeVat(1000, 21);
console.log(total);

//VAT
const vatAmount2 = function (priceIncludeVat, vatPercentage) {
    const vatPrice = (priceIncludeVat / (100 + vatPercentage)) * vatPercentage;
    return vatPrice;
}

const PriceExVat = function (priceIncludeVat, vatPercentage) {
    const basePrice = priceIncludeVat - vatAmount2(priceIncludeVat, vatPercentage);
    total = [basePrice, vatAmount2(priceIncludeVat, vatPercentage)];
    return total
}
total = PriceExVat(100, 20);
console.log(total);