window.addEventListener('scroll', function(){
    
    let scroll = this.document.querySelector('.topo')
    scroll.classList.toggle('active', this.window.scrollY > 150)

})

function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
