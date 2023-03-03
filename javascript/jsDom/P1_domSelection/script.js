/*
akan memilih elemen element pada dom dengan js

ada beberapa method untuk memilih element
• getElementById() => element
memilih elemen berdasarkan id
• getElementsByTagName() => HTMLLCollection
mencari elemen elemen dengan tag tertentu
• getElementsByClassName() => HTMLCollection
mencari elemen element berdasarkan nama class
• querySelector() => element
• querySelectorAll =>  NodeLi st
mencari elemen berdasarkan selector, seperti menccari selector pada css

HTMLCollection hanya berisi tag html sedangkan nodeList bisa selain tag html contoh seperti isi dari tag <p>hallo</p> 
p dan halo akan disebut nodelisst karena terdapat halo yang bukan tag html
jika hanya p maka disebut HTMLCollection
*/

// DOMSELECTION
// noderoot.getElementById()
// document.getElementById() mengembalikan element
// buat variabel yang akan menampung output, nama variabel dan id tidak perlu sama
const judul = document.getElementById('judul');
judul.style.color='red'; //dalam string
judul.style.backgroundColor='#ccc';
judul.innerHTML = 'Syah Fadel Putra Dwingga';

// document.getElementsByTagName() mengembalikan HTMLCollections dalam bentuk array
const p = document.getElementsByTagName('p');

 for(let i = 0; i<p.length; i++)
{
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() mengembalikan HTMLCollection dalam bentuk array
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';

