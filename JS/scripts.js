const code = document.querySelector('.code')
const topLeft = document.querySelector('.top-left')
const topRight = document.querySelector('.top-right')
const bottomRight = document.querySelector('.bottom-right')
const bottomLeft = document.querySelector('.bottom-left')
const message = document.querySelector('#message')

function changePreview(text) {
  const prev = document.getElementById('preview')

  prev.style.cssText = text
}

function changeCodeText(tlVal, trVal, brVal, blVal) {
  let text = 'border-radius: '

  if (tlVal > 0) {
    tlVal += 'px '
  } else {
    tlVal += ' '
  }

  if (trVal > 0) {
    trVal += 'px '
  } else {
    trVal += ' '
  }

  if (brVal > 0) {
    brVal += 'px '
  } else {
    brVal += ' '
  }

  if (blVal > 0) {
    blVal += 'px'
  } else {
    blVal += ' '
  }

  text += tlVal + trVal + brVal + blVal + ';'

  code.value = text

  changePreview(text)
}

function getText() {
  let tlVal = topLeft.value
  let trVal = topRight.value
  let brVal = bottomRight.value
  let blVal = bottomLeft.value

  changeCodeText(tlVal, trVal, brVal, blVal)
}

function textCopy() {
  let copyText = document.querySelector('.code')

  copyText.select()

  navigator.clipboard.writeText(copyText.value)

  setTimeout(function () {
    hideOrShowMessage()
  }, 2000)

  hideOrShowMessage()
}

function hideOrShowMessage() {
  message.classList.toggle('hide')
}

getText()
