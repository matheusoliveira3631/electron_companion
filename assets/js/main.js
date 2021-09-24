const banner=document.getElementById('loading')
const cb=document.getElementById('connect_button')
const main_ctn=document.getElementById('main_container')
const content=document.getElementById('main_content')

function swap(e1,e2){
    banner.classList.toggle('slideout')
    setTimeout(() => {
        e1.classList.toggle('invisible')
        e2.classList.toggle('invisible')
        banner.classList.toggle('slideout')
    }, 3000);
}


cb.addEventListener('click', ()=>{swap(main_ctn, content)})