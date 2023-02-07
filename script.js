//-----Datatyper-----------
// datatype er en gruppering af data 
//String: eg. "Plantevej 17, 2870 Dyssegård"
//Boolean: kan kun indeholde true eller false
//Number: 3 eller 3.34
//Array: defineres ved:- [ , , , , ] - ved array arbejder vi med INDEX
//null: primitive value
//obejct: defineres ved : { , , , } - hjælper os med at samle data i et sted. Hvis man har kategoriere med flere elementer i, bliver det i et array en lang liste, hvor man i et objekt
// bedre kan holde styr på data med forskellige datatyper i et object.

//----Dot-notation----
//primære metode til at udvælge værdier i ens datatyper.
// er det et array skrives det med []
// eg dot-notation til at få værdien i et object:
// let person={
    // firstname: "maria"
    // lastname: "hansen"
//} for at få værdien firstname bruger vi dot-notation:
// console.log(person.firstname) -- result: maria
//----------------------OBS! Ved array arbejder vi med index for at finde værdierene, er det et objekt bruger man object-------------------

//--- barcketnotation----
// en anden metode til at udvælge værdier i ens datatyper:
// let person={
    // firstname: "maria"
    // lastname: "hansen"
//} for at få værdien firstname bruger vi bracketnotation:
//console.log(person["firstname"])
//fordelen ved dot-notation er at den kommer med forslag til hvilken properti vi skal have fat i.

//----------------eksempel med et object som indeholder et array------------
//// let person={ <-- dette er et objekt
    // firstname: "Maria"
    // pets: ["kat", "hund", "elefant"] <--- dette er et array der ligger inde i et objekt.
//}
//console.log(person.pets[1]) printer ---------> hund.
// vi arbejder med arrayet på samme måde som altid, selvom det ligger i et objekt. vi skal bare hen til det først, vha dot-notation.

//------------------- et object der indeholder et object-------------
// let person={ <-- dette er et objekt
    // firstname: "Maria"
    // hobbies: ["reptiller", "frimærker", "programmør"] <--- dette er et array der ligger inde i et objekt.
    // pet: {
        //type: "kat",
        //name: "mis"
    //} 
//} console.log(person.pet.name) printer---------> mis

//--------------------et object der indeholder et array med et object inden i-----------
// let person={ <-- dette er et objekt
    // firstname: "Maria"
    // hobbies: ["reptiller", "frimærker", "programmør"] <--- dette er et array der ligger inde i et objekt.
    // pets: [
        //{type: "kat", name: "mis"}
        //{type: "guldfisk", name:"blup"}
    // ]
// console.log(person.pets[0].name) printer ----> mis

//-------------printe begge navne på engang-----------
//BRUG for each!!!!!!!!!!!!!!!!!
// let person={ <-- dette er et objekt
    // firstname: "Maria"
    // hobbies: ["reptiller", "frimærker", "programmør"] <--- dette er et array der ligger inde i et objekt.
    // pets: [
        //{type: "kat", name: "mis"} <--- element refrere til denne her
        //{type: "guldfisk", name:"blup"}
    // ]
// console.log(person.pets.foreach(element =>{
// element.type <--- element referere til hvert objekt.
//})) printer -----> kat og guldfisk

// --------------daten kommer fra en database------------
// API'en er en gateway der tillader os at kommunikere med skyen
//uanset om dataen kommer fra ekstern eller intern ressource, vil det stadig være den samme Javascript vi skriver. 


//-------- hvornår bruger vi for og hvornår bruger vi forEach------------------
//const frugter = [
    //"æble",
    //"melon",
    //"rosiner"
//]
// for (counter, condition - længden på arrayet, betingelsen for hvor mange gange den skal køre., i++ lægger en til i og få at vide hvordan man increaser counteren)
// for: for(i=0; i<frugter.length; i++)
//hvis vi ikke kender længden så kan man ikke bruge for loop, der er foreach tilgengæld god.

//Kender vi ikke længden BRUG forEach

//--------------Opgave 1-------------------
//Opret et objekt som indeholder mindst fire forskellige egenskaber. Udskriv de fire egenskaber i konsollen en ad gangen.
// Brug begge syntakser til at udskrive egenskaberne med, så du får prøvet både "dot notation" og "bracket notation".

let person = {
    firstname: "Holger",
    lastname: "Find",
    age: 36,
    hometown: "Roskilde"
}

console.log(person.firstname)
console.log(person["firstname"])

console.log(person.lastname)
console.log(person["lastname"])

console.log(person.age)
console.log(person["age"])

console.log(person.hometown)
console.log(person["hometown"])

//--------------Opgave 2------------------------
//- Lav en kopi af dit objekt fra opgave 1, og udvid det, så det indeholder både booleans, arrays og objekter. 
let parent = {
    firstname: "Holger",
    lastname: "Find",
    age: 36,
    happy: true,
    hometown: "Roskilde",
    hobbies: ["literature", "photography", "gardening"],
    children: [
        {gender: "male", name: "Viggo"},
        {gender: "female", name: "Louise"}
    ]
}
//- Lav en løkke som udskriver værdierne af dit array i konsollen.
parent.hobbies.forEach(function(hobby) {
    console.log(hobby)
  })
//- udskriv værdierne fra det *nestede* objekt i konsollen.

parent.children.forEach(function(element){
   
    console.log(element.name)
})

//-udskriv elementerne i html'en

parent.children.forEach(function(element){
   
    document.getElementById("demo").innerHTML = `${element.name}`
   
})

// `` <-- template literal is a new kind of string literal that can span multiple line and expressions.
//${} is a placeholder with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string

//et objekt med et array med et objekt, med et array---

/* let parent2 = {
    firstname: "Holger",
    lastname: "Find",
    age: 36,
    happy: true,
    hometown: "Roskilde",
    hobbies: ["literature", "photography", "gardening"],
    children: [
        {gender: "male", name: "Viggo", 
        ["fodbold", "dans", "tegne"]},
        {gender: "female", name: "Louise"}
    ]
} */

parent2.children.forEach(function(element){
   
    console.log(element.name)
})