const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){

    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        // set time out untuk menghilangkan class fade karena animation hanya dikerjakan saat pertama kali dipanggiol
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});




// cara fadel
// const thumbs = document.querySelectorAll('.thumb');
// thumbs.forEach(function(thumb) {
//     thumb.addEventListener('click', function(e){
//         jumbo.src = e.target.src;
//     });
// });