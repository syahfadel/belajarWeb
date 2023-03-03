/*
 Manipulasi element
 terdapat beberapa method yang biasa digunakan
 
 • element.innerHTML untuk mengubah isi tag yang sudah diseleksi
 • element.style.<property> mengubah style
 • element.setAttribute() memanipulasi atribut pada sebuah elemen
 • element.classList memanipulasi class
 ...
*/

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Syah Fadel</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'fadel');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// // mengambil nilai atribute
// console.log(a.getAttribute('href'));

// menghapus atribute
// a.removeAttribute('href');

//  const p2 = document.querySelector('.p2');
//  p2.setAttribute('class', 'label'); //kalau begini class lama hilang atau tergantikan u/ menanganinya menggunakan element.classList
 

// ada beberapa method untuk classList yaitu
/*
element.classList.add() menambah
element.classList.remove() menghilangkan
element.classList.toggle() jika sebuah elemen tidak memiliki class tertentu maka akan ditambahkan, jika punya akan dihilangkan. dapat dimanfaatkan untuk tombol
element.classList.item() misal elemen memiliki 3 class ini digunakan untuk mengetahui class ketiga
element.classList.contains() cek dalam sebuah element ada ga kelastertentu
element.classList.replace() mengganti class
*/

const p2 = document.querySelector('.p2');