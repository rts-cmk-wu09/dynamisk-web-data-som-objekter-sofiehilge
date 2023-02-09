//DOM - Document object model: document står for html, object er de enkelte elementer i HTMLen: heading, header, article, footer etc., model: strukturen vi har sat tingene op efter
//-------------indsæt header element og overskrift med Java Script-----

document.querySelector(
  "body"
).innerHTML = `<header><h1>Ministre i regeringen 2023</h1></header>`;
document.querySelector("h1").style.color = "gold";

//------opret section med header----

document.querySelector("body").innerHTML += `
<section>
    <h2>Partier</h2>
        <h3>${ministre.partiforhold.socialdemokratiet.partinavn}</h3>
            <h4>ministre</4>
                <h5>mandlige</5>
                    <div id=socMaleList></div>
</section>`;
//--tilføj liste med mandlige socialdemokrat ministre
let divSocMale = document.querySelector("#socMaleList");
let socMaleList = document.createElement("ul");
ministre.partiforhold.socialdemokratiet.medlemmer.mand.forEach((mand) => {
  socMaleList.innerHTML += `<li>${mand.name}</li>`;
});

divSocMale.append(socMaleList);

//tilføj liste med kvindelige socialdemokrat ministre

document.querySelector("body").innerHTML += `
<section>
                <h5>kvindelige</5>
                    <div id=socFemaleList></div>
</section>`;

let divSocFemale = document.querySelector("#socFemaleList");
let socFemaleList = document.createElement("ul");
ministre.partiforhold.socialdemokratiet.medlemmer.kvinde.forEach((kvinde) =>{
    socFemaleList.innerHTML += `<li>${kvinde.name}</li>`;
});

divSocFemale.append(socFemaleList); //<---- udskriver listen på DOMen



///////////STYLLING

document.querySelector("h2").style.color = "darkgrey";
document.querySelector("h3").style.color = "red";

//---------VIS socialdemokratiet og årstal i heading
/* let heading = document.querySelector(".heading"); */

/* heading.textContent = ministre.partiforhold.socialdemokratiet.partinavn +
  " " +
  ministre.partiforhold.socialdemokratiet.oprettet;
 */
//----------vis venstre og årstal i paragraf med template litterals.
/* let para = document.querySelector(".p"); */

/* para.textContent = `
${ministre.partiforhold.venstre.Partinavn}
${ministre.partiforhold.venstre.Oprettet}
`; */
//------------------- vis moderaterne i element i dom--------
/* let footer = document.querySelector("footer");
footer.innerHTML = `
<address>
${ministre.partiforhold.moderaterne.partinavn},
${ministre.partiforhold.moderaterne.oprettet}
</address>
`;
 */
//-----------------opret element i body med javascript
/* let body = document.querySelector("body");
let socialdemokratiMinistre = document.createElement("ul");
ministre.partiforhold.socialdemokratiet.medlemmer.kvinde.forEach((kvinde) => {
  socialdemokratiMinistre.innerHTML += `<li>${kvinde.name}</li>`;
});

body.append(socialdemokratiMinistre); */

// kan kun vise strings i arrayet, men ikke objekterne i arrayet.

//------------------
/* document.querySelector(".socialdemokratiet").innerHTML = `
<section>
<p>Navn: ${ministre.partiforhold.socialdemokratiet.medlemmer.kvinde[0].name}</p>
`; */

//-----------------------------------Styling i javascript:

/* document.querySelector(".socialdemokratiet").style.color = "red";
 */
