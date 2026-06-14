import clickOutSide from "./outside.js"

export default function initMenuHamburguer(){
    const menuIcon = document.querySelector('div.header-buttons button.menu-btn')
    const menuDown = document.querySelector('nav.menu-lateral')

    menuIcon.addEventListener('click', HandleDrop)

    function HandleDrop(event){
        this.classList.add('descer')
        menuDown.classList.add('descer')
        clickOutSide(event, function(){
            menuIcon.classList.remove('descer')
            menuDown.classList.remove('descer')
            menuIcon.removeAttribute('data-outside')
        }, menuIcon)
    }
}