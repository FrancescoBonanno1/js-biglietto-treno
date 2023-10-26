const distance = parseInt(prompt("Inserire distanza da percorrere"));
const age = parseInt(prompt("Inserire età"));
const kilometerP = 0.21 * distance;



if (age <= 18) {
    const priceyoung = kilometerP - ((20/100)*kilometerP)

    
}

else (age >= 65) {
    const priceold = kilometerP - ((40/100)*kilometerP)
    
}
