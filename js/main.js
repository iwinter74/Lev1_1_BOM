
// Schreibe eine Funktion die nach X Sekunden einen Text anzeigt.
// Nutze
// setTimeout

// Start warten für 3 Sekunden.
// Erledigt. Du hast 3 Sekunden verschwendet.

const output = document.getElementById("output")

let para = document.createElement("p")
let para1 = document.createElement("p")

let text = document.createTextNode("Start warten für 3 Sekunden.")
let text1 = document.createTextNode("Erledigt. Du hast 3 Sekunden verschwendet.")

para.appendChild(text)
para1.appendChild(text1)
output.appendChild(para)

const myFunction = () => {
    output.appendChild(para1)
}

setTimeout(myFunction, 3000)

// Nutze
// setInterval
// new Date()

let date

const myTime = () => {
    date = new Date()
    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
}

let showTime = setInterval(myTime, 1000)

// Nutze
// setInterval
// clearInterval
// if, else

let num = 10

const countDown = () => {
    if (num>0) {
        console.log(num)
    } else {
        console.log("Endlich Feierabend!")
        clearInterval(showCount)
    }
    num --
}

let showCount = setInterval(countDown, 1000)
