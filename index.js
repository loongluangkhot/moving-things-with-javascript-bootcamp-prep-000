const app = "I don't do much."

const keyWhichDict = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var dodger = document.querySelector("#dodger")

function moveLeft() {
  var leftNum = parseInt(dodger.style.left.replace('px',''))
  dodger.style.left = `${leftNum-1}px`
}

function moveUp() {
  var topNum = parseInt(dodger.style.top.replace('px',''))
  dodger.style.top = `${leftNum-1}px`
}

function moveLeft() {
  var leftNum = parseInt(dodger.style.left.replace('px',''))
  dodger.style.left = `${leftNum-1}px`
}

function moveLeft() {
  var leftNum = parseInt(dodger.style.left.replace('px',''))
  dodger.style.left = `${leftNum-1}px`
}


document.addEventListener('keydown', function(e) {
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