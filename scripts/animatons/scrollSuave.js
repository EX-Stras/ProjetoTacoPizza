export default function initScrollSuave(){
    const internos = document.querySelectorAll('div.topicos li')
    let scroll;

    internos.forEach(item => {
        item.addEventListener('click', rolar)
    })

    function rolar(event){
        event.preventDefault()
        scroll = document.querySelector(`${this.children[0].getAttribute('href')}`)
        window.scrollTo({
            top: scroll.offsetTop - 90,
            behavior: 'smooth',
        })
    }
}