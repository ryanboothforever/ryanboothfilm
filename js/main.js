window.addEventListener('resize', addDropMenu)

function addDropMenu(){
    if(window.innerWidth < 735){
        document.querySelector('.head-list').classList.add("test")
    }
    
}