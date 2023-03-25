const numberNotify = document.querySelector('.number-notify')
const readNotify = document.querySelector('.read-notify')
// console.log(numberNotify, readNotify)
const unReadNotify = document.querySelectorAll('.unread')
// console.log(unReadNotify)

// function click notify
unReadNotify.forEach(mess => {
    mess.addEventListener('click', () => {
        mess.classList.remove('unread')
        mess.classList.remove('active')
        const newUnReadNotify = document.querySelectorAll('.unread')
        numberNotify.innerText = newUnReadNotify.length
    })
})

// xử lí đã đọc hết tất cả
readNotify.addEventListener("click", () => {
    unReadNotify.forEach(mess => {
        mess.classList.remove('unread')
        mess.classList.remove('active')
        const newUnReadNotify = document.querySelectorAll('.unread')
        numberNotify.innerText = newUnReadNotify.length
    })
})