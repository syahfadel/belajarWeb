var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
    var kosong;

    var ada = penumpang.find(function(x){
         return x == namaPenumpang;
    });

    if (ada === namaPenumpang){
        return console.log(namaPenumpang + " sudah ada di dalam angkot.\n" +penumpang);
    }

    penumpang.forEach(function(e,i){
        if (e == undefined){
            penumpang[i] = namaPenumpang;
            console.log(penumpang);
            kosong = true;
        }
    });

    if(kosong){
        return;
    }

    penumpang.push(namaPenumpang);
    console.log(penumpang);
}

var penumpangTurun = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        return console.log("Angkot Kosong"); 
    }

    var ada = penumpang.find(function(e){
        return e == namaPenumpang;
    });

    if (ada === undefined){
        return console.log("Tidak Ada Penumpang dengan Nama "+namaPenumpang);
    }

    penumpang.forEach(function(e,i){
       if (namaPenumpang === e){
        penumpang[i] = undefined;
       }
    });
    console.log(penumpang);
}