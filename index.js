const colorPanel = document.getElementById('color-panel')
const background = document.getElementById('background')
let redNumber = greenNumber = blueNumber = 0

colorPanel.addEventListener('change', event => {
  if (event.target.matches('.form-control-range')) {
    let number = event.target.value
    const numberField = event.target.parentElement.parentElement.nextElementSibling
    numberField.textContent = number
    // 看是紅,綠,藍 哪一種顏色，並算出hex色碼
    if (event.target.matches('#red-slider')) {
      redNumber = Number(number)
      displayHex()
    } else if (event.target.matches('#green-slider')) {
      greenNumber = Number(number)
      displayHex()
    } else {
      blueNumber = Number(number)
      displayHex()
    }
  }
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