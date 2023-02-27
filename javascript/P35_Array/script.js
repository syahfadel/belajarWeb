/* 
js tidak memiliki tipe array, array disebut object
js boleh memiliki array dengan tipe data berbeda bahkan bisa berisi function expression 
array kosong 
var variabel = [];
*/ 

// menambah isi array
var arr = ["a", 1, true];
arr[3] = "fadel";
console.log(arr);

// menghapus isi array
arr [0] = undefined;
console.log(arr);

// menampilkan isi array
for (var i = 0; i < arr.length; i++){
    console.log('data ke-' + (i+1) + " : " +arr[i]);
}

/*
method pada array
• length
menghitung panjang array
• join
menggabungkan isi array menjadi string
• push, pop, shift, unshift

*/

console.log(arr.join('-'));
// minus mengganti koma jadi minus

arr.push("Syah");
console.log(arr);

arr.pop();
console.log(arr);

// unshift dan shift bekerja pada elemen pertama
// unshift menambahkan elemen baru diawal array
// shift menghapus elemen diawal array
arr.unshift("padang");
console.log(arr);

arr.shift();
console.log(arr);

// slice mengambil beberapa bagian pada array menjadi array baru
// splice menyisipkan element ditengah tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, ...)

arr.splice(3, 0, 'Syah');
console.log(arr);

// slice(awalIndex, indexAkhir) awal dibawa ke arr baru akhir tidak
var arr2 = arr.slice(1,3);
console.log(arr2);

// foreach, map
var angka = [1,2,3,4,5,6,7,8];

angka.forEach(function(e){
    console.log(e); 
})

var mhs = ["Syah", "Fadel", "Putra"];
mhs.forEach(function(e,i){
    console.log("mahasiswa ke-" + (i+1) + " : " + e);
})

/*
map seperti foreach namun lebih baik karena mengemnbalikan array
*/

var angka2 = angka.map(function(e){
    return e*2;
});

console.log(angka2);

// sort mengurutkan isi array
var angka3 = [2,4,1,6,7,3,10,1]; //yang diurutkan karakter pertama
angka3.sort();
console.log(angka3);
// jika ingin urutan benar
angka3.sort(function(a,b){
    return a-b;
});
console.log(angka3);

// filter dan find untuk mencari element pada array. find hanya satu nilai sedangkan filter bisa lebih dari satu

var angka4 = [2,4,1,6,7,3,10,1];
var angka5= angka4.filter(function(x){
    return x > 5;
}); //jika terdapat angka 5 maka var akan berisi angka 5 dalam bentuk array
console.log(angka5);

var angka6= angka4.find(function(x){
    return x > 5;
}); //find hanya mengembalikan 1 angka yang pertama kali ditemukan

console.log(angka6);
