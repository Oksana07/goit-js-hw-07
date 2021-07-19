// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет 
// меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// const imputRangerEl = document.querySelector('#font-size-color')
// const textEl = document.querySelector('#text')

// const changeFontSizeText = inputRangeEl.addEventListener("input", onChangeSizeText)

// function onChangeSizeText(event) {
//     const fontSize = Number(event.currentTarget.value)
//     textEl.setAttribute("style", `font-size: ${fontSize}`)
// }