const redSlider = document.getElementById('red-slider')
const greenSlider = document.getElementById('green-slider')
const blueSlider = document.getElementById('blue-slider')
const background = document.getElementById('background')
let redNumber = greenNumber = blueNumber = 0

redSlider.addEventListener('change', event => {
  let number = event.target.value
  const numberField = event.target.parentElement.parentElement.nextElementSibling
  numberField.textContent = number
  redNumber = Number(number)
  displayHex()
})

greenSlider.addEventListener('change', event => {
  let number = event.target.value
  const numberField = event.target.parentElement.parentElement.nextElementSibling
  numberField.textContent = number
  greenNumber = Number(number)
  displayHex()
})

blueSlider.addEventListener('change', event => {
  let number = event.target.value
  const numberField = event.target.parentElement.parentElement.nextElementSibling
  numberField.textContent = number
  blueNumber = Number(number)
  displayHex()
})

const hexField = document.getElementById('color-hex')
function displayHex() {
  // 將三個部分各自轉成16進位
  let redPart = toHexNumber(redNumber)
  let greenPart = toHexNumber(greenNumber)
  let bluePart = toHexNumber(blueNumber)
  let hexNumber = '#' + redPart + greenPart + bluePart

  // 將#color-hex的textContent替換
  hexField.firstElementChild.textContent = hexNumber
  // 將background的背景顏色替換
  background.style.backgroundColor = hexNumber
}

function toHexNumber(rgbNumber) {
  // 如果是0~f前面就要補0，不是就直接轉成16進位回傳
  return (rgbNumber < 16) ? ('0' + rgbNumber.toString(16)) : (rgbNumber.toString(16))
}