const app = "I don't do much."

const keyWhichDict = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var dodger = document.querySelector("#dodger")
var game = document.querySelector("#game")
var dodgerStyle
var gameStyle

function offSetNum(offsetStr) {
  return parseInt(offsetStr.replace('px',''))
}


function moveLeft() {
  var leftNum = offSetNum(dodgerStyle.left)
  console.log(leftNum)
  if (leftNum > 0) {
    dodger.style.left = `${leftNum - 1}px`
  }
  console.log(dodger.style.left)
}

function moveUp() {
  var topNum = parseInt(dodger.style.bottom.replace('px',''))
  console.log(topNum)
  if (topNum > 0) {
    dodger.style.top = `${topNum - 1}px`
  }
}

function moveRight() {
  var leftNum = offSetNum(dodgerStyle.left)
  var rightNum = offSetNum(gameStyle.width) - (offSetNum(dodgerStyle.width) + offSetNum(dodgerStyle.left))
  console.log(rightNum)
  if (rightNum > 0) {
    dodger.style.right = `${rightNum - 1}px`
  }
  console.log(dodger.style.right)
}

function moveDown() {
  var bottomNum = parseInt(dodger.style.bottom.replace('px',''))
  console.log(bottomNum)
  if (bottomNum > 0) {
    dodger.style.bottom = `${bottomNum - 1}px`
  }
  
}


document.addEventListener('keydown', function(e) {
  console.log('im in')
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