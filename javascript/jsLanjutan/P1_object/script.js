// cara membuat object pada javascript
// 1. Object Literal
// cocok jika objek hanya 1 
// tidak efektif untuk objek banyak

// let mahasiswa = {
//     nama : "Syah Fadel1",
//     energi : 10,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//         // kutip yang digunakan yaitu kutip literal yang berada disamping angka 1, ini 
//         // memungkinkan memasukkan variabel dengan ${} tanpa harus keluar dari string
//     }
// }

// let mahasiswa2 = {
//     nama : "Sandika",
//     energi : 20,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//         // kutip yang digunakan yaitu kutip literal yang berada disamping angka 1, ini 
//         // memungkinkan memasukkan variabel dengan ${} tanpa harus keluar dari string
//     }
// }

// 2. Function Declaration
// tidak efektif karena pembuatan method berulang dan disimpan berulang sehingga tidak efektif menejemen memory

// function Mahasiswa(nama,energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan!`);
//     }

//     mahasiswa.main =function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     }

//     return mahasiswa;
// }

// let fadel = Mahasiswa("Syah Fadel", 10);
// let sandika = Mahasiswa("Sandhika", 20);

// 3. Cunstructor Function
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan!`);
//     }
 
//     this.main =function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     }
// }

// let fadel = new Mahasiswa("Syah Fadel", 10);

// 4. Object.create() 
// supaya tidak ada penyimpanan function berulang pada memory maka perlu method perlu dipisah

// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, Selamat Makan!`);
//     },
    
//     main : function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     },

//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }


// };

// function Mahasiswa(nama,energi){
//     let mahasiswa = Object.create(methodMahasiswa); //parameter pada object.create memungkinkan objek untuk memiliki method pada function yang diinject sehingga seolah seolah methodMahasiswa menjadi parentnya
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// // tidak pakau Object.create sebenarnya bisa namun menjadi
// // function Mahasiswa(nama,energi){
// //     let mahasiswa = {}; 
// //     mahasiswa.nama = nama;
// //     mahasiswa.energi = energi;
// //     mahasiswa.makan = methodMahasiswa.makan;
// //     mahasiswa.main = methodMahasiswa.main;
// //     mahasiswa.tidur = methodMahasiswa.tidur;

// //     return mahasiswa;
// // }
// //  yang berarti setiap menambah method harus menambahkan juga pada objek yang dibuat sehingga kita harus mengelola dua objek saat ada perubahan

// let fadel = Mahasiswa("Syah Fadel", 10);
// let sandika = Mahasiswa("Sandhika", 20);

// prototype

// function Mahasiswa(nama, energi) {
//     // pada dasarkan pada constructor terdapat let mahasiswa = Object.create(prototype); sehingga jika ingin menambahkan method cukup menambahkan
//     // function pada prototype
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.name}, selamat makan!`;
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.name}, selamat main!`;
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Halo ${this.name}, selamat tidur!`;
// }

// let fadel = new Mahasiswa("Syah Fadel", 10);

// versi class
class Mahasiswa {
    constructor (nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi){
        this.energi += porsi;
        return `Halo ${this.name}, selamat makan!`;
    }
    main (jam){
        this.energi -= jam;
        return `Halo ${this.name}, selamat main!`;
    }
    tidur (jam){
        this.energi += jam*2;
        return `Halo ${this.name}, selamat tidur!`;
    }
}


let fadel = new Mahasiswa("Syah Fadel", 10);