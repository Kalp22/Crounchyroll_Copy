let arrowl = document.getElementById('l_arrow');
let arrowr = document.getElementById('r_arrow');

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
   "Images/Demon S.jpg",
   "Images/Dr Stone.webp",
   "Images/JJK.jpg",
   "Images/Demon S.jpg",
   "Images/Ranking Kings.webp",
   "Images/Cheat Skill in another world.webp"
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
let i = 0;
let j = 0;

const changepost = (a) => {
   if (a == 1) {
      if (i < 5) {
         ++i;
         getpost.src = poster[i];
      }
   }
   else {
      if (i > 0) {
         --i;
         getpost.src = poster[i];
      }
   }

   if (i == 0) {
      pinfo[0].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[0].style.borderTopColor = "#969696";
   }
   else if (i == 1) {
      pinfo[1].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[1].style.borderTopColor = "#969696";
   }
   else if (i == 2) {
      pinfo[2].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[2].style.borderTopColor = "#969696";
   }
   else if (i == 3) {
      pinfo[3].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[3].style.borderTopColor = "#969696";
   }
   else if (i == 4) {
      pinfo[4].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[4].style.borderTopColor = "#969696";
   }
   else {
      pinfo[5].style.backgroundColor = 'rgb(63, 95, 109)'
      pinfo[5].style.borderTopColor = "#969696";
   }
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