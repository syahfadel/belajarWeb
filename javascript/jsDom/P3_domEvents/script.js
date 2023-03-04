// /**
//  * event pada javascript merepresentasikan sebuah kejadian yang terjadi didalam dom
//  * beberapa cara untuk menerapkan/'mendengarkan' event
//  * • Event Handler
//  *   - inline HTML attribute
//  *   - Element method
//  * • addEventListener()
//  */

// /**
//  * Event Handler
//  * dibuat dengan memanggil keyword 
//  * on<event>
//  */

// const p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
//     // inline HTML attribute onclick di file html
//     p3.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

//     // Element Method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// // addEventListener() merupakan cara baru

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     // alert('ok');
//     const liBaru = document.createElement('li');
//     const textliBaru = document.createTextNode('item baru');
//     liBaru.appendChild(textliBaru);
//     const ul = document.querySelector('section#b ul');
//     ul.appendChild(liBaru); 
// }); //parameter1 event, parameter 2 yang akan dilakukan


// perbedaan
const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightskyblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

// pada event handler jika terdapat dua kejadian seperti itu kejadian baru akan menimpa 
// yang lama sehingga hanya tulisan yang merah background tidak berubah

// p3.addEventListener('click',function(){
//         p3.style.backgroundColor = 'lightskyblue';
//     });

// p3.addEventListener('click',function(){
//         p3.style.color = 'red';
//     });
// addEventListener akan menjalankan keduanya tidak hanya yang terakhir

/**
 event apa saja di dom?
 • Mouse Event 
 • Keyboard Event
 • Resources Event ketika halaman diload
 • Focus Event 
 • View Event
 • Form Event
 • CSS animation & Transition Event
 • Drag & Drop Event
 • dll

 selengkapnya
 https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazBJMldmV0xzSFlvZmVMSTUzcTg5ei1XRFRhZ3xBQ3Jtc0tscF9VVTAtYkpUQ2ppVEd3ZEp5VzJGWUxWYjE1bkwydnpFeGNvVWhoZXJyVWo1TFJCVW1Ma0FjRDFHS1ZDeno5SWxsMVJoOEZlSFE5NkJ4OXA0U0stRDE2eVNkeVJBZW5sOEVqNnBPOFpoYnFhVlUxZw&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents&v=ndYweb0Yn6o
 */ 

 p3.addEventListener('mouseenter',function(){
    p3.style.backgroundColor = 'lightskyblue';
});

p3.addEventListener('mouseleave',function(){
    p3.style.backgroundColor = 'white';
});