// Hook an event listener up with the button, and log out the input field's value when it's clicked

const myEmojis = ["👨‍💻", "⛷", "🍲"]

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})
// Make the unshift button work just as the push button (but with unshifting instead of pushing)
const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})
// Make the pop and shift buttons work as well
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click",function(){
        myEmojis.pop()
        renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click",function(){
    myEmojis.shift()
    renderEmojis()
})

$(document).ready(function() {
    $(".emoji_act").emojioneArea({
      emojiPlaceholder: ":smile_cat:",
      searchPlaceholder: "Search",
      buttonTitle: "Use your TAB key to insert emoji faster",
      searchPosition: "bottom",
    });
  });

  $(document).ready(function() {
    $(".emoji_act").emojioneArea({
      emojiPlaceholder: ":smile_cat:",
      searchPlaceholder: "Search",
      buttonTitle: "Use your TAB key to insert emoji faster",
      searchPosition: "bottom",
      pickerPosition: "bottom"
    });
  });