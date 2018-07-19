const app = "I don't do much."

const keyWhichDict = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var dodger = document.querySelector("#dodger")
var left = 
function moveLeft() {
  var leftNum = parseInt(dodger.style.left.replace('px',''))
  if (dodger.style.left > 0) {
    dodger.style.left = `${leftNum - 1}px`
  }
}

function moveUp() {
  var topNum = parseInt(dodger.style.top.replace('px',''))
  if (dodger.style.top > 0) {
    dodger.style.top = `${topNum - 1}px`
  }
}

function moveRight() {
  var rightNum = parseInt(dodger.style.right.replace('px',''))
  if (dodger.style.right > 0) {
    dodger.style.right = `${rightNum - 1}px`
  }
}

function moveDown() {
  var bottomNum = parseInt(dodger.style.bottom.replace('px',''))
  if (dodger.style.bottom > 0) {
    dodger.style.bottom = `${bottomNum - 1}px`
  }
  
}


document.addEventListener('keydown', function(e) {
  console.log('im in')
  switch(e.which) {
    case keyWhichDict[left]:
      moveLeft()
      break;
    case keyWhichDict[up]:
      moveUp()
      break;
    case keyWhichDict[right]:
      moveRight()
      break;
    case keyWhichDict[down]:
      moveDown()
      break;
  }
})