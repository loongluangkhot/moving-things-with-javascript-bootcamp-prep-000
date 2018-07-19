const app = "I don't do much."

const keyWhichDict = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var dodger = document.querySelector("#dodger")
var dodgerStyle = window.getComputedStyle(dodger)
var game = document.querySelector("#game")
var gameStyle = window.getComputedStyle(game)

function offSetNum(offsetStr) {
  return parseInt(offsetStr.replace('px',''))
}

function computeStyle() {
  dodgerStyle = window.getComputedStyle(dodger)
  gameStyle = window.getComputedStyle(game)
}

function moveLeft() {
  var leftNum = offSetNum(dodger.style.left)
  if (leftNum > 0) {
    dodger.style.left = `${leftNum - 1}px`
  }
  console.log(dodger.style.left)
}

function moveUp() {
  var bottomNum = offsetNum(dodger.style.bottom)
  if (bottomNum + dodgerStyle.height < gameStyle.height) {
    dodger.style.bottom = `${bottomNum + 1}px`
  }
}

function moveRight() {
  var leftNum = offSetNum(dodger.style.left)
  if (leftNum + dodgerStyle.width < gameStyle.width) {
    dodger.style.left = `${leftNum + 1}px`
  }
  console.log(dodger.style.left)
}

function moveDown() {
  var bottomNum = parseInt(dodger.style.bottom.replace('px',''))
  console.log(bottomNum)
  if (bottomNum > 0) {
    dodger.style.bottom = `${bottomNum - 1}px`
  }
  
}


document.addEventListener('keydown', function(e) {
  console.log('keydown')
  computeStyle()
  switch(e.which) {
    case keyWhichDict['left']:
      moveLeft()
      break;
    case keyWhichDict['up']:
      moveUp()
      break;
    case keyWhichDict['right']:
      moveRight()
      break;
    case keyWhichDict['down']:
      moveDown()
      break;
  }
})