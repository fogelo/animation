const body = document.querySelector('body')


const div = document.createElement('div')

div.innerHTML = 'hello world'
div.className = 'firstclass'
setTimeout(() => {
    div.className = 'firstclass ourclass'
}, 3000)
body.appendChild(div)

// const obj = [
//     'Привет', "я", "Антон"
// ] 

// obj.forEach((e, i) => {
//     const div = document.createElement('div')
//     div.className = `ourclass-${i}`
//     body.appendChild(div)
//     div.innerHTML = e
// })
