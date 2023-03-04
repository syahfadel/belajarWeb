const body = document.body;

const biru = document.querySelector('.biru');
biru.addEventListener('click',function(){
    body.classList.toggle('bBiru');
});

const hijau = document.querySelector('.hijau');
hijau.addEventListener('click',function(){
    body.classList.toggle('bHijau');
});

const salmon = document.querySelector('.salmon');
salmon.addEventListener('click',function(){
    body.classList.toggle('bSalmon');
});
 

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

const lastA = document.getElementsByTagName('a');
lastA[lastA.length-1].after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input',function(){
    r= sMerah.value;
    g= sHijau.value;
    b= sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sHijau.addEventListener('input',function(){
    r= sMerah.value;
    g= sHijau.value;
    b= sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('input',function(){
    r= sMerah.value;
    g= sHijau.value;
    b= sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// mengubah warna dari arah kursor

document.body.addEventListener('mousemove', function(){
    // clientX untuk mengetahui pposisi berdasarkan posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth); //mengetahui lebar window
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
})