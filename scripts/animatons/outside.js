export default function clickOutSide(event, callback, element){
        const html = document.documentElement;
        if(!element.hasAttribute('data-outside')){
            html.addEventListener('click', OutSide)
        }
        element.setAttribute('data-outside','')
        function OutSide(event){
            if(!element.contains(event.target)){
                callback();
                html.removeEventListener('click', OutSide)
            }
        }
    }