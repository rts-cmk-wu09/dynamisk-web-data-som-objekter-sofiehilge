//---------VIS socialdemokratiet og årstal i heading
let heading = document.querySelector(".heading")

heading.textContent = ministre.partiforhold.socialdemokratiet.partinavn + " " + ministre.partiforhold.socialdemokratiet.oprettet

//----------vis venstre og årstal i paragraf med template litterals.
let para = document.querySelector(".p")

para.textContent = `
${ministre.partiforhold.venstre.Partinavn}
${ministre.partiforhold.venstre.Oprettet}
`
//------------------- vis moderaterne i element i dom--------
 let footer = document.querySelector("footer")
footer.innerHTML = `
<address>
${ministre.partiforhold.moderaterne.partinavn},
${ministre.partiforhold.moderaterne.oprettet}
</address>
`


// i html eg. footer>(data herind)<footer>
//index.js: 
// let footer = document.querySelector("footer")
// footer.innerHTML = `<adress>${minister.partiforhold.moderaterne.}
// dette er en anden måde at sætte dynamisk javascript data ind i htmlen, dog har den nogle begrænsninger i forhold til eventloop.