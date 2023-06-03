function hoverarrowl() {
   document.getElementById("arrow_l").style.borderColor = "white"
}
function hoverarrowr() {
   document.getElementById("arrow_r").style.borderColor = "white"
}
function nohoverarrowl() {
   document.getElementById("arrow_l").style.borderColor = "black"
}
function nohoverarrowr() {
   document.getElementById("arrow_r").style.borderColor = "black"
}

let poster = [
   {
      image: "Images/Demon S.webp",
      colour: "rgb(37,64,61)",
      gradient: "radial-gradient(circle, rgba(37,64,61,1) 35%, rgba(3,22,20,1) 100%)"
   },
   {
      image: "Images/dr stone.jpg",
      colour: "rgb(13,68,11)",
      gradient: "radial-gradient(circle, rgba(13,68,11,1) 35%, rgba(68,135,71,1) 100%)"
   },
   {
      image: "Images/JJK.webp",
      colour: "rgb(5,20,32)",
      gradient: "radial-gradient(circle, rgba(5,20,32,1) 35%, rgba(27,35,50,1) 100%)"
   },
   {
      image: "Images/Oshi No Ko.png",
      colour: "rgb(12,59,139)",
      gradient: "radial-gradient(circle, rgba(12,59,139,1) 35%, rgba(7,6,47,1) 100%)"
   },
   {
      image: "Images/OnePiece.jpg",
      colour: "rgb(249,134,236)",
      gradient: "radial-gradient(circle, rgba(249,134,236,1) 35%, rgba(151,71,203,1) 100%)"
   },
   {
      image: "Images/AOT.jpg",
      colour: "rgb(28,23,13)",
      gradient: "radial-gradient(circle, rgba(28,23,13,1) 55%, rgba(22,9,4,1) 100%)"
   }
];

let hinddivs = [
   {image: "Images/DemonSlayer.jpeg", 
   contents: "Demon Slayer" },
   {image: "Images/Radiant.jpeg", 
   contents: "RADIANT" },
   {image: "Images/RankingofKings.jpeg", 
   contents: "Ranking of Kings" },
   {image: "Images/TheCaseStudyofVanitas.jpeg", 
   contents: "The Case Study of Vanitas" },
   {image: "Images/VinlandSaga2.jpeg", 
   contents: "VINLAND SAGA" },
   {image: "Images/MyDressUpDarling.jpeg", 
   contents: "My Dress-Up Darling" },
   {image: "Images/Spy Family.jpeg", 
   contents: "Spy Family" },
   {image: "Images/Naruto Shippuden.jpeg", 
   contents: "Naruto Shippuden" },
   {image: "Images/OPM.jpeg", 
   contents: "One Punch Man" },
   {image: "Images/JJBA.jpeg", 
   contents: "JoJo's Bizarre Adventure" },
   {image: "Images/Darling in the Franxx.jpeg", 
   contents: "Darling in the Franxx" }
];

let pinfo = [
   document.getElementById('p0'),
   document.getElementById('p1'),
   document.getElementById('p2'),
   document.getElementById('p3'),
   document.getElementById('p4'),
   document.getElementById('p5')
];

let getpost = document.getElementById('postimg');
let getcol = document.getElementById('colour');
let i = 0;
let j = 0;

const changepost = (a) => {
   if (a == 1) {
      if (i < 5) {
         pinfo[i].style.backgroundColor = "#3f3c3c";
         pinfo[i].style.borderTopColor = "#3f3c3c";
         ++i;
         getpost.src = poster[i].image;
         getcol.style.background = poster[i].colour;
         getcol.style.background = poster[i].gradient;
      }
   }
   else {
      if (i > 0) {
         pinfo[i].style.backgroundColor = "#3f3c3c";
         pinfo[i].style.borderTopColor = "#3f3c3c";
         --i;
         getpost.src = poster[i].image;
         getcol.style.background = poster[i].colour;
         getcol.style.background = poster[i].gradient;
      }
   }
   pinfo[i].style.backgroundColor = 'rgb(63, 95, 109)'
   pinfo[i].style.borderTopColor = "#969696";
   pinfo.map((elem) => {
      if (j != i && a == 1) {
         pinfo[j].style.backgroundColor = "#3f3c3c";
         pinfo[j].style.borderTopColor = "#3f3c3c";
         ++j;
      }
      else if (j != i && a == -1) {
         pinfo[j].style.backgroundColor = "#3f3c3c";
         pinfo[j].style.borderTopColor = "#3f3c3c";
         --j;
      }
      else {
         a = 0;
      }
   });
}


const post = (b) => {
   pinfo[b].style.backgroundColor = 'rgb(63, 95, 109)'
   pinfo[b].style.borderTopColor = "#969696";
   getpost.src = poster[b].image;
   getcol.style.background = poster[b].colour;
   getcol.style.background = poster[b].gradient;
   i = b;
   for (k = 0; k < pinfo.length; k++) {
      if (k != i) {
         pinfo[k].style.backgroundColor = "#3f3c3c";
         pinfo[k].style.borderTopColor = "#3f3c3c";
      }
   }
}

const hinddiv = (x) => {
   if (x == 1) {
      ih1.src = hinddivs[5].image
      ht1.innerHTML = hinddivs[5].contents
      ih2.src = hinddivs[6].image
      ht2.innerHTML = hinddivs[6].contents
      ih3.src = hinddivs[7].image
      ht3.innerHTML = hinddivs[7].contents
      ih4.src = hinddivs[8].image
      ht4.innerHTML = hinddivs[8].contents
      ih5.src = hinddivs[9].image
      ht5.innerHTML = hinddivs[9].contents
      ih6.src = hinddivs[10].image
      ht6.innerHTML = hinddivs[10].contents
      // hinarr.style.content = "none";
   } 
   else {
      ih1.src = hinddivs[0].image
      ht1.innerHTML = hinddivs[0].contents
      ih2.src = hinddivs[1].image
      ht2.innerHTML = hinddivs[1].contents
      ih3.src = hinddivs[2].image
      ht3.innerHTML = hinddivs[2].contents
      ih4.src = hinddivs[3].image
      ht4.innerHTML = hinddivs[3].contents
      ih5.src = hinddivs[4].image
      ht5.innerHTML = hinddivs[4].contents
      ih6.src = hinddivs[5].image
      ht6.innerHTML = hinddivs[5].contents
      // hinarl.style.content = "none";
   }
}