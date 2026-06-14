export default function initBarras(){
    const as = document.querySelectorAll("section.hero ul a")
    let barraAtual;

    as.forEach(item => {
        item.addEventListener("mouseover", HandleOver)
    })

    function HandleOver(event){
        barraAtual = this.parentElement.nextElementSibling
        barraAtual.setAttribute('width',`${this.offsetWidth + 20}px`)
        barraAtual.classList.add('ativo')
        this.addEventListener('mouseleave', HandleLeave)
    }

    function HandleLeave(event){
        barraAtual.classList.remove('ativo')
    }
}