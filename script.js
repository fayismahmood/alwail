let res=[
    {
     "NO.": 1,
     "NAME": "QAMARU ZAMAN",
     "COLLEGE": "DARUL HUDA CHEMMAD"
    },
    {
     "NO.": 2,
     "NAME": "ABDUL QADAR",
     "COLLEGE": "MALIK DEENAR"
    },
    {
     "NO.": 3,
     "NAME": "AFSAL PT",
     "COLLEGE": "SFADC ODAMALA"
    },
    {
     "NO.": 4,
     "NAME": "MOHAMMED NOUFAL",
     "COLLEGE": "HAMDAN FOUDATION"
    },
    {
     "NO.": 5,
     "NAME": "ABDUL BASITH",
     "COLLEGE": "HAMDAN FOUNDATION"
    },
    {
     "NO.": 6,
     "NAME": "ADIL PN",
     "COLLEGE": "DARUSALAM NANDI"
    },
    {
     "NO.": 7,
     "NAME": "SEYYID HADI",
     "COLLEGE": "ISLAHUL ULOOM THANUR"
    },
    {
     "NO.": 8,
     "NAME": "MIDLAJ AMMINIKKAD",
     "COLLEGE": "SFADC ODAMALA"
    },
    {
     "NO.": 9,
     "NAME": "MUHAMMED IZZUDEEN PC",
     "COLLEGE": "HAIDROOS MUSLIYAR COLLEGE "
    },
    {
     "NO.": 10,
     "NAME": "NIZAM",
     "COLLEGE": "IRSHADIYYA D'AWA COLLEGE"
    },
    {
     "NO.": 11,
     "NAME": "NAJEEB",
     "COLLEGE": "DARUNNAJATH VALLPPUZHA"
    },
    {
     "NO.": 12,
     "NAME": "VAHID",
     "COLLEGE": "DIIA PANDIKKAD"
    },
    {
     "NO.": 13,
     "NAME": "NIHAL PM",
     "COLLEGE": "DIIA PANDIKKAD"
    },
    {
     "NO.": 14,
     "NAME": "SAHAL AP",
     "COLLEGE": "DARUNNAJATH KOONANCHERI"
    },
    {
     "NO.": 15,
     "NAME": "RAZI AP",
     "COLLEGE": "DARUL HASANATH KANNADIPARAMB"
    },
    {
     "NO.": 16,
     "NAME": "FAVAS MS",
     "COLLEGE": "DARUL IRSHAD ACADEMY "
    },
    {
     "NO.": 17,
     "NAME": "NAZIM",
     "COLLEGE": "RAHEEMIYYA COLLEGE"
    },
    {
     "NO.": 18,
     "NAME": "MUHAMMED JASIR",
     "COLLEGE": "NAHJURASHAD CHAMAKKALA"
    },
    {
     "NO.": 19,
     "NAME": "SWADIQ PATTAMBI",
     "COLLEGE": "DARUL HUDA CHEMMAD"
    }
   ]


let ResCont=document.querySelector(".res>.cont")

res.forEach((e,i)=>{
    let Res=document.createElement("div")
    Res.className="E"
    Res.innerHTML=`
    <h2>
        ${e.NAME}
    </h2>
    <b>${e.COLLEGE}</b>
    
    `
    ResCont.append(Res)
})