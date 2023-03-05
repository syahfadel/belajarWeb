const close = document.querySelectorAll('.close');

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        // default untuk menghentikan aksi default dari element
        e.preventDefault(); //untuk mencegah aksi default disin contohnya jika pakai tag a akan me refresh laman sehingga gambar kembali muncul
        // e.preventDefault(); dapat dimanfaatkan untuk menghindari kembali keatas halaman saat mengeklik tombol untuk berpindah kehalaman yang sama
        e.stopPropagation(); //menghentikan bubbling
    });
})



// Bubbline
// secara default saat memberi event pada elemen maka event itu juga berlaku untuk pembungkusnya

const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('ok');
    });
});

// karena card parent dari close jika kita klik close maka card juga akan diclick sehingga eventlistener card juga akan dieksekusi
// cara supaya parent tidak disekusi dengan stopPropagation();