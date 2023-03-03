/*
manipulasi Node

• document.createElement()
• document.createTextNode()
• node.appendChild()
• node.insertBefore()
• parentNode.removeChild()
• parentNode.replaceChild()
...
*/

// bisa membuat mengubah dan menghapus elemen elemen
// untuk menambah element baru pertama buat elementnya, dua buat isinya, tiga gabungkan

const pBaru = document.createElement('p'); //buat tag p baru
const teksPBaru = document.createTextNode('paragraf baru') //buat text yang masih independent
// menggabungkan pbaru dan tekspbaru atau bisa juga disebut dirangkai 
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// appendChild simpan ke akhir element parent
// menyimpan tidak di akhir
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// remove
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru,p4)