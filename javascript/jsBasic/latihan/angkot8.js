// membuat objek angkot

// var angkot = {
//     sopir : "fadel",
//     trayek : "kutabumi-kalideres",
//     kas : 0,
//     penumpang : [],
//     penumpangNaik : function(namaPenumpang, penumpang){
//         var kosong;
    
//         var ada = penumpang.find(function(x){
//              return x == namaPenumpang;
//         });
    
//         if (ada === namaPenumpang){
//             return console.log(namaPenumpang + " sudah ada di dalam angkot.\n" +penumpang);
//         }
    
//         penumpang.forEach(function(e,i){
//             if (e == undefined){
//                 penumpang[i] = namaPenumpang;
//                 console.log(penumpang);
//                 kosong = true;
//             }
//         });
    
//         if(kosong){
//             return;
//         }
    
//         penumpang.push(namaPenumpang);
//         console.log(penumpang);
//     },

//     penumpangTurun: function(namaPenumpang, penumpang){
//         if (penumpang.length == 0){
//             return console.log("Angkot Kosong"); 
//         }
    
//         var ada = penumpang.find(function(e){
//             return e == namaPenumpang;
//         });
    
//         if (ada === undefined){
//             return console.log("Tidak Ada Penumpang dengan Nama "+namaPenumpang);
//         }
    
//         penumpang.forEach(function(e,i){
//            if (namaPenumpang === e){
//             penumpang[i] = undefined;
//             angkot.kas += 2000;
//            }
//         });
//         console.log(penumpang);
//     }

// }

function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        var kosong;
    
        var ada = this.penumpang.find(function(x){
             return x == namaPenumpang;
        });
    
        if (ada === namaPenumpang){
            return console.log(namaPenumpang + " sudah ada di dalam angkot.\n" +this.penumpang);
        }
    
        this.penumpang.forEach(function(e,i){
            if (e == undefined){
                penumpang[i] = namaPenumpang;
                console.log(penumpang);
                kosong = true;
            }
        });
    
        if(kosong){
            return;
        }
    
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    },

    this.penumpangTurun = function(namaPenumpang, bayar){
         if (this.penumpang.length == 0){
            return console.log("Angkot Kosong"); 
        }
            
        var ada = this.penumpang.find(function(e){
            return e == namaPenumpang;
        });
            
        if (ada === undefined){
            return console.log("Tidak Ada Penumpang dengan Nama "+namaPenumpang);
        }
            
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            } 
        }
        
        return this.penumpang;
        }
}
 
var angkot1 = new Angkot("Syah Fadel Putra Dwingga",["Kutabumi","Kalideres"], [], 0); //memberikan nilai awal
var angkot2 = new Angkot("Adhan Nazief",["Kutabumi","Poris"], [], 0); 