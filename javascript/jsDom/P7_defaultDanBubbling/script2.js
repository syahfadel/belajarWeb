/**
 * membuat js dapat menghapus isi html yang dibuat realtime sesudah halaman diload
 */

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});