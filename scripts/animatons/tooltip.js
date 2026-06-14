export default function initTooltip(){
    const imgs = document.querySelectorAll('img')
    let div, tooltip;
    imgs.forEach(item => {
        item.addEventListener('mouseover', Tooltip)
    })

    function Tooltip(event){
        this.removeEventListener('mouseover', Tooltip)
        tooltip = criarTooltip(event)
        this.addEventListener('mousemove', move.Handlemove)
        this.addEventListener('mouseleave', leave.Handleleave)
    }

    const leave = {
        Handleleave(event){
            tooltip.remove()
            event.target.addEventListener('mouseover', Tooltip)
        },
    }

    const move = {
        Handlemove(event){
            tooltip.style.top = `${event.pageY + 20}px`
            tooltip.style.left = `${event.pageX + 20}px`
        }
    }

    function criarTooltip(event){
        div = document.createElement('div')
        div.textContent = "Imagem feita com IA"
        div.classList.add('tooltip')
        div.style.top = `${event.pageY + 20}px`
        div.style.left = `${event.pageX + 20}px`
        document.body.appendChild(div)
        return div;
    }
}