//---------VIS socialdemokratiet og årstal i heading
let heading = document.querySelector(".heading")

heading.textContent = ministre.partiforhold.socialdemokratiet.partinavn + " " + ministre.partiforhold.socialdemokratiet.oprettet

//----------vis moderaterne og årstal i paragraf med template litterals.
let para = document.querySelector(".p")

para.textContent = `
${ministre.partiforhold.venstre.Partinavn}
${ministre.partiforhold.venstre.Oprettet}
`
