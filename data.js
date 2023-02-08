//--------------Lav et data objekt----------
//sport og deres spillere kunne være et data objekt.
// der er både mænd og kvinder og flere sportsgrene.
// det kan være svært at overskue hvad den optimale struktur er, det er ikke forkert at lave strukturen om


//----fil struktur------------
// data.js hav data objektet
//index.js arbejder med logikken
// i index.html referere du først til data.js, da den skal være indlæst, førend der kan arbejdes med den
//index.js bagefter.

//--------vis data i HTML---------------
//i HTML eg. vil du have data ind i et element eller oprette et nyt element. 
// index.html: lav en h1 med class: heading
//JS
//console.log(ministre) <- lad dig se objektet i consolen og finde ud af hvilken dot-notation man kan bruge.
//let heading = document.queryselector('.heading)
//heading.textContent = ministre.partiforhold.socialdemokratiet.mand.name + " " + ministre.partiforhold.socialdemokratiet.mand.ministerpost

//--- template litteral------------------
//heading.textContent = `
//${ministre.partiforhold.socialdemokratiet.mand.name}
//${ministre.partiforhold.socialdemokratiet.mand.ministerpost}
//`
//

//-----------flere måder at vise data i html-----------
// i html eg. footer>(data herind)<footer>
//index.js: 
// let footer = document.querySelector("footer")
// footer.innerHTML = `<adress>${minister.partiforhold.moderaterne.}
// dette er en anden måde at sætte dynamisk javascript data ind i htmlen, dog har den nogle begrænsninger i forhold til eventloop.

// -----------hvordan opretter man et element inde i bodyen via javascript.
//index.js:
//let liste = document.createElement("ul"); <-- eksiterer ikke i domen a det fortsat blot er en reference
// let body = document.queryselector("body");
// men appender det til DOM'en, det betyder at tilføje
// minister.partiforhold.forEach((element) =>{
    //liste.innerHTML += `<li>${element}</li>`;
    //})
//})
// liste.innerHTML += `<li>${minister.mand[1]}</li>`;
//body.append(liste);

let ministre = {
    partiforhold: {// hvis vi laver et overordnet objekt giver det os mulighed for at udvide med andre kategorier
        Socialdemokratiet:
            {// der er lavet et objekt rundt om for at kunne lave nogle properties som kategorisere arrayet
            Mand: [{name: "Nicolai Wammen", ministerpost: "Finansminister", age: 52, married: true, kids:["dreng","dreng","dreng"], birthdate: "7.11.1971", education: "Cand.scient.pol"}, 
                    {name: "Morten Bødskov", ministerpost: "Erhvervsminister", age: 53, married: undefined, kids: undefined, birthdate: "01.05.1970", education: "BA i samfundsfag"}, 
                    {name: "Dan Jørgensen", ministerpost: "Minister for udviklingsamarbejde og global klimapolitik", age: 48 , married: undefined, kids: undefined, birthdate: "12.06.1975", education: "Cand.scient.pol"}, 
                    {name: "Magnus Johannes Heunicke", ministerpost:"Miljøminister", age: 48, married: true, kids:["pige", "pige"], birthdate:"28.11.1975", education: "Journalist"},
                    {name: "Mattias Tesfaye", ministerpost: "Børne- og undervisningsminister", age: 42, married: true, kids: true, birthdate: "31.03.1981", education: "muresvend"},
                    {name: "Peter Hummelgaard Thomsen", ministerpost:"Justitsminister", age: 40, married: undefined, kids: undefined, birthdate: "17.01.1983", education:"Cand.jur"},
                    {name: "Kaare Dybvad Bek", ministerpost: "Udlændinge- og integrationsminister", age: 39, married: undefined, kids: undefined, birthdate: "05.08.1984", education:"Cand.scient"},
                    {name: "Jeppe Bruus Christensen", ministerpost: "Skatteminister", age: 45, married: true, kids: ["pige", "pige"], birthdate: "20.04.1978", education: "Cand.scient.pol"},
            ],
            Kvinde:[{name: "Mette Frederiksen", ministerpost: "Statsminister", age: 46, married: true, kids:["dreng", "pige"], birthdate: "19.11.1977", education: "Ma i Afrikastudier"}, 
                    {name: "Pernille Rosenkrantz-Theil" , ministerpost: "Social- og boligminister", age: 46, married: undefined, kids: undefined, birthdate:"17.01.1977", education: "Ba Statskundskab" }, 
                    {name: "Ane Halsboe-Jørgensen", ministerpost: "beskæftigelsesminister", age: 40, married: undefined, kids: undefined, birthdate:"04.05.1983", education:"Cand.scient.pol"}
            ],
                },
        Moderaterne:
            {// der er lavet et objekt rundt om for at kunne lave nogle properties som kategorisere arrayet
            Mand: [{name: "Lars Løkke Rasmussen", ministerpost: "Udenrigsminister", age: 59, married: true, kids: undefined, birthdate: "15.05.1964", education: "Cand.jur"}, // Null indicates the absence of a value for a variable. Undefined indicates the absence of the variable itself.
                    {name: "Jakob Engel-Schmidt", ministerpost: "moderakulturminister", age: 37, married: undefined, kids: undefined, birthdate: "24.oktober.1983", education: "Cand.merc"},
                    {name: "LArs Aagaard", ministerpost: "Klima-, energi- og forsyningsminister", age: undefined, married: undefined, kids: undefined, birthdate: undefined, education: undefined},    
                ],
            Kvinde: [{name: "Christina Egelund", ministerpost:"Uddannelses- og forskningsminister", age: 46, married: true, kids: undefined, birthdate: "9.12.1977", education: "Stud gym."},
                     {name: "Mette Kierkegaard", ministerpost:"Ældreminister", age: 51, married: true, kids: ["dreng", "dreng"], birthdate: "5.03.1972", education: "Cand.scient.soc"},

        ]
        },
        Venstre:
            {// der er lavet et objekt rundt om for at kunne lave nogle properties som kategorisere arrayet
             Mand: [{name: "Jakob Elleman-Jensen", ministerpost: "Forsvarsminister", age: 50, married: true, kids: true, birthdate: "25.09.1973", education:"cand.merc.jur"},
                    {name:"Troels Lund Poulsen", ministerpost: "Økonomiminister", age: 47, married: undefined, kids: undefined, birthdate: "30.03.1976", education:"Stud.gym" },
                     {name:"Jacob Jensen", ministerpost: "Minister for fødevarer, landbrug og fiskeri", age: 50, married: undefined, kids: undefined, birthdate: "26.05.1973", education: "Cand.merc.jur"}, 
                     {name:"Thomas Danielsen", ministerpost: "Transportminister", age: 40, married: undefined, kids: undefined, birthdate: "24.06.1983", education: "Bankrådgiver"}, 

                    ],
            Kvinde: [{name:"Sophie Løhde", ministerpost: "Indenrigs- og sundhedsminister", age: 37, married: undefined, kids: undefined, birthdate: "11.09.1983", education:"Bachelor i erhvevsøkonomi"}, 
                {name:"Louise Schack Elholm", ministerpost: "kirkeminister", age: 46, married: true, kids:["dreng", "pige"], birthdate:"26.10.1977", education:"cand.polit"},
                {name:"Marie Bjerre", ministerpost: "Digitaliseringsminister", age: 36, married: true, kids:["pige", "pige"], birthdate:"06.05.1986", education:"cand.jur"},
            ]
            },
    },
    

}