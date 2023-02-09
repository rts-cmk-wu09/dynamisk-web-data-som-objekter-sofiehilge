//DOM - Document object model: document står for html, object er de enkelte elementer i HTMLen: heading, header, article, footer etc., model: strukturen vi har sat tingene op efter

//---------VIS socialdemokratiet og årstal i heading
let heading = document.querySelector(".heading");

heading.textContent =
  ministre.partiforhold.socialdemokratiet.partinavn +
  " " +
  ministre.partiforhold.socialdemokratiet.oprettet;

//----------vis venstre og årstal i paragraf med template litterals.
let para = document.querySelector(".p");

para.textContent = `
${ministre.partiforhold.venstre.Partinavn}
${ministre.partiforhold.venstre.Oprettet}
`;
//------------------- vis moderaterne i element i dom--------
let footer = document.querySelector("footer");
footer.innerHTML = `
<address>
${ministre.partiforhold.moderaterne.partinavn},
${ministre.partiforhold.moderaterne.oprettet}
</address>
`;

//-----------------opret element i body med javascript
let body = document.querySelector("body");
let socialdemokratiMinistre = document.createElement("ul");
ministre.partiforhold.socialdemokratiet.medlemmer.kvinde.forEach((kvinde) => {
  socialdemokratiMinistre.innerHTML += `<li>${kvinde.name}</li>`;
});

body.append(socialdemokratiMinistre);

// kan kun vise strings i arrayet, men ikke objekterne i arrayet.

//------------------
document.querySelector(".socialdemokratiet").innerHTML = `
<section>
<p>Navn: ${ministre.partiforhold.socialdemokratiet.medlemmer.kvinde[0].name}</p>
`;
