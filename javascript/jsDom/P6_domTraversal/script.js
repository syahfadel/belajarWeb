/**
 * dom Traversal atau penelusuran dom
 */

// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click',function(){
//     // card.remove();
//     card.style.display = 'none';
// });

// DOM Traversal

const close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(e){
        // telusuri parentnya lalu hapus parentnya
        // close[i].parentElement.style.display = 'none'; cara 1
        // kasih parameter pada function, e merupakan event yang sedang terjadi
        e.target.parentElement.style.display = 'none';
        // e.target lebih berguna karena kita tau apa saja  nilai yang terdapat didalamnya
    });
}

// cara alternatif
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// })

/**
 * Apa saja Dom Traversal Method
 *      method                          Hasil
 * • ParentNode                 =>      node
 * • ParentHTML                 =>     Element
 * • nextSibling                =>      node
 * • nextElementSibling         =>     Element
 * • previousSibling            =>      node
 * • previousElementSibling     =>     Element
 */

const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling); //mengembalikan text karena antar span ada enter jika ingin mengambil element berikutnya pakai element
console.log(nama.nextElementSibling);