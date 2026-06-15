export default function initAccordionList(){
    const a = document.querySelectorAll('.footer-links a')
    a.forEach(item => {
        item.addEventListener('click', HandleMostrar)
    })

    function HandleMostrar(event){
        event.preventDefault()
        this.removeEventListener('click', HandleMostrar)
        this.setAttribute('data-mostrar','')
        this.nextElementSibling.setAttribute('data-mostrar','')
        this.addEventListener('click', HandleDesaparecer)
    }

    function HandleDesaparecer(event){
        event.preventDefault()
        this.removeEventListener('click', HandleDesaparecer)
        this.removeAttribute('data-mostrar','')
        this.nextElementSibling.removeAttribute('data-mostrar')
        this.addEventListener('click', HandleMostrar)
    }
}