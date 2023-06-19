

const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

function createSquare() {
    const div = document.createElement('div')
    div.classList.add('displayedsquare')
    document.getElementsByClassName('displayedsquare-wrapper').appendChild('div')
}

actionsquare.addEventListener('click', function(createSquare){
    console.log(createSquare)
}
) 
