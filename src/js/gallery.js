

$(document).ready(function () {
  var gallery = document.querySelector('.gallery-new');
  var overlay = document.querySelector('.overlay');
  function handleClick(e) {
    var src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }
  function close() {
    overlay.classList.remove('open');
  }
  function generateHTML(h, v, img, tilte) {
    return '<div class="item h' + h + ' v' + v + '"><img src="assets/' + img + '"><div class="item__overlay"><h4>' + tilte + '</h4><h4>' + subtitle + '</h4></div></div>';
  }
  if (gallery) {


    var imgs = ["Alemania_Berlin_2_2.jpg","Alemania_Berlin_3_2.jpg","Alemania_Checkpoint-Charlie_1_3.jpg","Bahamas_Bimini_4_4.jpg","Belgica_Brujas_1_1.jpg",
    "Belgica_Bruselas_3_2.jpg","Bulgaria_Veliko-tarnovo_2_4.jpg","Bulgaria_Veliko-tarnovo_3_2.jpg","Cuba_Calles-Habana_3_2.jpg","Cuba_Habana_1_1.jpg","Cuba_Habana_3_2.jpg",
    "Dinamarca_Copenhague_1_1.jpg","Dinamarca_Copenhague_1_2.jpg","Dinamarca_Copenhague_2_2.jpg","Dinamarca_Copenhague_2_3.jpg","Francia_Niza_3_2.jpg","Francia_Paris_1_3.jpg",
    "Francia_Saillagouse_1_1.jpg","Jordania_Amman_3_3.jpg","Jordania_Aqaba_1_1.jpg","Jordania_Aqaba_3_3.jpg","Jordania_Mar-muerto_1_1.jpg","Jordania_Petra_2_3.jpg",
    "Jordania_Petra_3_3.jpg","Jordania_Wadi-Rum_1_1.jpg","Jordania_Wadi-Rum_1_3.jpg","Jordania_Wadi-Rum_4_4.jpg","Londres_Camden-Market_1_1.jpg","Malta_Sliema_3_3.jpg",
    "Marruecos_Cordillera-Atlas_3_2.jpg","Marruecos_Fez_2_3.jpg","Marruecos_Ouzarete_1_1.jpg","Marruecos_Rabat_3_2.jpg","Mexico_Chichen-Itza_3_2.jpg","Mexico_Playa-paraiso_3_2.jpg",
    "Miami_South-Beach_3_3.jpg","Miami_South-Beach_4_3.jpg","Monaco-Casino_4_4.jpg","Paises-Bajos_Amsterdam_2_2.jpg","Qatar_Doha_1_1.jpg","Qatar_Qatar_1_1.jpg",
    "Reino-Unido_Londres_2_3.jpg","Republica-Checa_Praga_1_2.jpg","Republica-Checa_Praga_2_3.jpg","Rumania_Bucarest_3_2.jpg","Rumania_Transilvania_1_1.jpg",
    "Rumania_Transilvania_4_3.jpg","Sahara_Merzouga_1_1.jpg","Sahara_Merzouga_1_2.jpg","Sahara_Merzouga_4_3.jpg","Sahara_Merzouga_4_4.png","Suecia_Malmo_1_1.jpg",
    "Suecia_Malmo_1_3.jpg","Thailandia_Ayutthaya_2_2.jpg","Thailandia_Ayutthaya_3_3.jpg","Thailandia_Mu-Ko-Ang-Thong_4_3.jpg","Thailandia_big-buddha_1_2.jpg"];
      
    imgs = imgs.sort(function () { return Math.random() - 0.5; });

    var html = imgs.map(function (img) {
      var res = img.split(["."]);
      res = res[0].split('_').concat(res[1]);
      var h = 2;
      var v = 2;
      var title = '';
      console.log(res);
      // h = res[res.length - [3]];
      // v = res[res.length - [2]];
      title = res[0].split('-').join(' ');
      subtitle = res[1].split('-').join(' ');
      console.log(title);
      return generateHTML(h, v, img, title, subtitle);
    }).join('');
    gallery.innerHTML = html;
  }




});



// $(document).ready(function () {
//     var gallery = document.querySelector('.gallery-new');
//     var overlay = document.querySelector('.overlay');
//     var overlayImage = overlay.querySelector('img');
//     var overlayClose = overlay.querySelector('.close');

//     function generateHTML([h, v]) {
//         return `
//             <div class="item h${h} v${v}">
//               <img src="assets/${randomNumber(12)}.jpg">
//               <div class="item__overlay">
//                 <button>View →</button>
//               </div>
//             </div>
//           `;
//     }

//     function randomNumber(limit) {
//         return Math.floor(Math.random() * limit) + 1;
//     }

//     function handleClick(e) {
//         const src = e.currentTarget.querySelector('img').src;
//         overlayImage.src = src;
//         overlay.classList.add('open');
//     }


//     function close() {
//         overlay.classList.remove('open');
//     }

//     const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

//     const html = digits.map(generateHTML).join('');
//     gallery.innerHTML = html;

//     const items = document.querySelectorAll('.item');

//     items.forEach(item => item.addEventListener('click', handleClick));

//     overlayClose.addEventListener('click', close);

// });