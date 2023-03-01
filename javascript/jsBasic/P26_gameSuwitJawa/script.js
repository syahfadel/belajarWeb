var main = true;

while (main){
    var p = prompt("Masukkan pilihan anda (gajah,semut,orang)");
    var comp = Math.random();

    if (comp < 0.34){
        comp = 'gajah';
    } else if (0.34 <= comp && comp < 0.67){
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil;
    if (p == comp){
        hasil = 'seri';
    } else if(p == 'gajah'){
        hasil = comp == 'orang'? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang'){
        hasil = comp == 'semut'? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut'){
        hasil = comp == 'gajah'? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Input anda salah';
    }

    alert ('kamu memilih ' + p + ' komputer memilih ' + comp +'\nHASIL:\n'+hasil);
    main = confirm('main lagi ?');
}