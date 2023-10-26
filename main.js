const distance = parseInt(prompt("Inserire distanza da percorrere"));
const age = parseInt(prompt("Inserire età"));
const kilometerP = 0.21 * distance;



if (age <= 18) {
    const priceyoung = kilometerP - ((20/100)*kilometerP)
    document.getElementById("prezzogiovani").innerHTML = `Il prezzo del biglietto è di : ${priceyoung} euro`

    
}

else if (age >= 65) {
    const priceold = kilometerP - ((40/100)*kilometerP)
    document.getElementById("prezzoanziani").innerHTML = `Il prezzo del biglietto è di : ${priceold} euro`
    
}
else if (age >18, age <65) {
    document.getElementById("prezzonormale").innerHTML = `Il prezzo del biglietto è di : ${kilometerP} euro`

}
