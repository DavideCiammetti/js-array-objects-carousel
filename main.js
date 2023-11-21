'use strict';
// bonus 2

//<div class="right-box">
//<img src="../img/02.jpg" alt="img.2" />
// </div>


// variabili della parte di destra
const rightContainer = document.querySelector('.right-container');  

// immagini array foto grande
const imgArray = [
    {
        'url':'01.jpg',
        'titolo': 'Mountain',
        'descrizione': 'Bellissima alba in un paesaggio montano, ammirata da un pescatore alla fine del turno di lavoro'
    },
    {
        'url':'02.jpg',
        'titolo': 'Country',
        'descrizione':'Paesino del nord della svizzera, circondato da natura incontaminata'
    },
    {
        'url':'03.jpg',
        'titolo': 'London',
        'descrizione':'Il meraviglioso big-bang della città di Londra in una calda notte estiva'
    },
    {
        'url':'04.jpg',
        'titolo': 'Bruxlelles',
        'descrizione':'Uno dei più importanti palazzi nella città di Bruxelles'
    },
    {
        'url':'05.jpg',
        'titolo': 'Maldive',
        'descrizione':'Vista panoramica di una delle più belle spiagge al mondo, le Maldive'
    }
];
// immagini array foto lato destro
const rightArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
// frecce per cambiare foto
const tastoAlto = document.querySelector('.prev');
const tastoBasso = document.querySelector('.next');
// classi items = container item = content
const items = document.querySelector('.items');
// variabile di incremento per cambiare immagini 
let actualImg = 0;

for(let i= 0; i < imgArray.length; i++){

   // creo l'elemento html <div>
    const item = document.createElement('div');
    // aggiungo la classe item a div
    item.classList.add('item');
    // aggiungo l'immagine a div
    item.innerHTML += `<img src="../img/${imgArray[i]}" alt="img.1" />`;

    if(i === actualImg){
        item.classList.add('active');
    }

    items.append(item);
}

// parte di destra foto piccole
for(let i= 0; i < rightArray.length; i++){

    // creo l'elemento html <div>
    const rightBox = document.createElement('div');
     // aggiungo la classe right-box a div
     rightBox.classList.add('right-box', 'gray-scale');
     // aggiungo l'immagine a div
     rightBox.innerHTML += `<img src="../img/${imgArray[i]}" alt="img.1" />`;
    
     rightContainer.append(rightBox);
 }

const allRightBox = document.querySelectorAll('.right-box');
const allItem = document.querySelectorAll('.item');
console.log(allItem);

// creo evento per premere pulsante in alto
tastoAlto.addEventListener('click', function() {
    console.log(actualImg);
    if(actualImg < imgArray.length -1){
        console.log(`array ${imgArray.length}`);

        allRightBox[actualImg].classList.remove('gray-scale');  //remove gray-scale
        // rimuovi classe active per vedere foto
        allItem[actualImg].classList.remove('active');
        allRightBox[actualImg].classList.add('gray-scale');     //add gray-scale
        actualImg++;
        // aggiungi classe active per vedere foto
        allItem[actualImg].classList.add('active');

        allRightBox[actualImg].classList.remove('gray-scale');  //remove gray-scale

    }else if(actualImg <= 4){
        allRightBox[actualImg].classList.add('gray-scale');     //add gray-scale
         // rimuovi classe active per vedere foto
        allItem[actualImg].classList.remove('active');
        // riporo a 0 la variabile da incrementare  
        actualImg = 0;
         // riporo a 0 l'array
        imgArray.length = 5;
        // aggiungi classe active per vedere foto
        allItem[actualImg].classList.add('active');
        allRightBox[actualImg].classList.remove('gray-scale');  //remove gray-scale
    }
     
});

// creo evento per premere pulsante in basso
tastoBasso.addEventListener('click', function() {
    console.log(`immagine attuale ${imgArray.actualImg}`);
    if(actualImg > 0){

        allRightBox[actualImg].classList.remove('gray-scale');  //add gray-scale
         // remove classe active per vedere foto
        allItem[actualImg].classList.remove('active');
        allRightBox[actualImg].classList.add('gray-scale');  //remove gray-scale
        actualImg--;
         // aggiungi classe active per vedere foto
        allItem[actualImg].classList.add('active');
        allRightBox[actualImg].classList.remove('gray-scale');  //add gray-scale

    }else if(actualImg <= 0){
        allRightBox[actualImg].classList.add('gray-scale');  //remove gray-scale
         // remove classe active per vedere foto
        allItem[actualImg].classList.remove('active');
        // riporo a 0 la variabile da incrementare 
        actualImg = 4;
         // riporo a 0 l'array
        imgArray.length = 0;
        // aggiungi classe active per vedere foto
        allItem[actualImg].classList.add('active');
        allRightBox[actualImg].classList.remove('gray-scale');  //add gray-scale
    }

});