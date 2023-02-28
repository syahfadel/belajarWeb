/*
Object merupakan kumpulan nilai yang tidak memiliki index melainkan nama 

car mhs = {};
adalah objek kosong
*/

/*
nama, lulus, IPSemester  adalah variabel
IPKumulatif disebut method
alamat merupakan objek dalam objeck
nilainya berupa properti 

variabel dan properti dapat dibuat dengan
namaobjek.variabel = properti
*/

var mahasiswa = {
    nama : 'Syah Fadel Putra Dwingga',
    umur : 23, 
    lulus : true,
    IPSemester  : [3.8, 3.7, 3.5, 3.48, 3.5, 3.56, 3.53, 4.0],
    IPKumulatif : function() {
        var total = 0;
        var ips = this.IPSemester;
        for (var i = 0; i< ips.length; i++){
            total += ips[i];
        }
        return total/ips.length;
    },
    alamat : {
        jalan : "Jl. Jawa No.11",
        kota : "Tangerang",
        provinsi : "Banten" 
    }

}

console.log(mahasiswa);

/*
ada 4 cara untuk membuat objek
• Object Literal
var mhs = {menyimpan pasangan key dan value} seperti pada objek diatas

• Function Declaration
• Constructor Function (keyword new)
• Object.create()
*/

// function declaration (parameter berisi poreperti propertinya )
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs
}

var mhs = buatObjectMahasiswa("Syah Fadel Putra Dwingga", "1810953019", "syahfadel.p.d@gmail.com", "Teknik Elektro");



// Constructor Function, adalah function khusus yang membuat objek. nama function harus diawali huruf besar untuk membedakan declaration dan constructor
function Mahasiswa(nama, nim, email, jurusan) {
    // pada constructor tidak perlu var mhs = {}; dan return mhs
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

// kalau constructor harus pakai new
var mhs2 = new Mahasiswa("Syah Fadel Putra Dwingga", "1810953019", "syahfadel.p.d@gmail.com", "Teknik Elektro"); 

/*
this adalah keyword yang otomatis didefinisikan disetiap function  
 */