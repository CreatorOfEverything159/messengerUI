const user = (name) => {
    return `<a class="user">
    <div class="user__avatar">
        <img src="https://ciuss.com/wp-content/uploads/2021/03/man.png" alt="">
    </div>
    <div class="user__content">
        <div class="user__name">
            <div class="user__firstName">${name}</div>
        </div>
    </div>
</a>`
}

const messageSendTo = (msg) => {
    return `<div class="msg my">
                    <div class="msg__text">${msg}</div>
                </div>`
}

const messageSendFrom = (msg) => {
    return `<div class="msg">
                    <div class="msg__text">${msg}</div>
                </div>`
}

let users = document.getElementById('users')

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", theUrl, false)
    xmlHttp.send(null)
    return xmlHttp.responseText
}

let usersList = JSON.parse(httpGet('https://api.randomdatatools.ru/?count=50&params=LastName,FirstName'))
usersList.map(u => users.innerHTML += user(`${u.FirstName} ${u.LastName}`))

let msgs = document.getElementById('msgs')
let send = document.getElementById('send')
send.addEventListener('click', () => {
    let text = document.getElementById('text')
    let message = text.value
    if (message !== '') {
        msgs.innerHTML += messageSendTo(message)
        setTimeout(() => {
            msgs.innerHTML += messageSendFrom(message)
        }, 1000)
        text.value = ''
    }
})
