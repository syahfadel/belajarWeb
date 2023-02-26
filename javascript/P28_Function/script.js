function jumlahVolumeDuaKubus(a,b){
    var volumeA = Math.pow(a,3);
    var volumeB = Math.pow(b,3);
    return volumeA + volumeB;
}
// jika parameter lebih sedikit dari argumen maka kelebihan akan diabaikan
// jika argumen yang lebih maka parameter akan bernilai default yaitu undefined
console.log(jumlahVolumeDuaKubus(8,3,2)); //selain dikirim ke parameter nilai dimasukan ke variabel arguments
//arguments = [8,3,2]
// 2 diabaikan

//pada js terdapat variabel bernama arguments yang merupakan array yang berisikan nilai yang dikirimkan saat fungsi dipanggil
//   pemanfaatan variabel arguments

function tambah(){
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah (1,2,3); //bisa memasukan argument berapa saja 
console.log(coba);

/*
refactoring memiliki manfaat
• Readibility
• DRY (Dont Repeat Yourself)
• Testability
• Performance
• maintainability
*/

/*
refactoring sederhana
*/ 

function jumlahVolumeDuaKubus(a,b){
    return Math.pow(a,3) + Math.pow(b,3);
}