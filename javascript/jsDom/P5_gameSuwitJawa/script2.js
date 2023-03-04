function getPilihanKomputer(){
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (0.34 <= comp && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar(){
    const imgKomputer = document.querySelector('.img-Komputer');
    // set interval untuk melakukan sesuatu berulang ulang selama interval
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktu = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktu > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/'+ gambar[i++]+'.png')
        if(i == gambar.length) i = 0;
    },100); //100 ms
}

let scoreKomputer = 0;
let scorePemain = 0
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
         
        putar();

        // setTimeout untuk menunggu dahulu
        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png');
    
            const sHasil = document.querySelector('.hasil');
            sHasil.innerHTML = hasil;
            if(hasil == 'MENANG!') console.log(scorePemain++);
            if(hasil == 'KALAH!') scoreKomputer++;
            const sKomputer = document.querySelector('.score-Komputer');
            sKomputer.innerHTML = scoreKomputer;
            const sPemain = document.querySelector('.score-Pemain');
            sPemain.innerHTML = scorePemain;
        },1000);
    }); //durasi menunggu
});








// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png');

//     const sHasil = document.querySelector('.hasil');
//     sHasil.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png');

//     const sHasil = document.querySelector('.hasil');
//     sHasil.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png');

//     const sHasil = document.querySelector('.hasil');
//     sHasil.innerHTML = hasil;
// });