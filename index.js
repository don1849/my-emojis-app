const myEmojis = ["👨‍💻", "⛷", "🍲", "🤢", "💩", "", "👺"]
const emojiContainer = document.getElementById('emoji-container')
let emojiInput = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

renderEmojis()

function renderEmojis() {
    let emojisDOM = ""
    for (let i = 0; i < myEmojis.length; i ++) {
        emojisDOM += `<span>${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojisDOM
}

pushBtn.addEventListener("click", function() {
    if (emojiInput) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        console.log(myEmojis)
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        console.log(myEmojis)
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})