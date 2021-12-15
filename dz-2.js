const parent = document.querySelector('#cart-items')
const items = document.querySelectorAll('.item')

const cola = items[1]
cola.remove()

const chocolate = items[items.length - 1]
const div = document.createElement('div')
div.classList.add('item')

div.innerHTML = 'Canned Fish <span class="qty">x 4</span>'

parent.replaceChild(div, chocolate)