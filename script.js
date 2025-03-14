let accordion = document.querySelector('.accordion')
let accordionitem = document.querySelectorAll('.accordion_item')

accordion.addEventListener('click', (event) => {
    let elementTarget = event.target
    console.log(elementTarget)
    for (let item of accordionitem) {
        item.classList.remove('active')
    }
    elementTarget.closest('.accordion_item').classList.add('active')
})