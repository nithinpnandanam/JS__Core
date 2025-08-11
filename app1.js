const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")

input.addEventListener("input",e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
})

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text
})

// const updateDebounceText = (text,delay) => {
//     let timeout
//     clearTimeout(timeout)
//     timeout = setTimeout(() => {
//         debounceText.textContent = text
//     }, delay)  
// }

function debounce(cb, delay = 1000) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      console.log(...args);
      cb(...args)
    }, delay)
  }
}

