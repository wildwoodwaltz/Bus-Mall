// Global Variables

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let results = document.getElementById('tally');
let voteBox = document.getElementById('votebox');
let randNumberOne = [NaN, NaN, NaN];
let randNumberTwo = [NaN, NaN, NaN];
let randNumArrayOne = true;
let totalVotes = 25;

//data storage
let allItems = []
let itemList = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass']
// Constructor

function Items(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.alt = `${name}`;
  this.shown = 0;
  this.votes = 0;
  allItems.push(this);
}

//img list
function renderNewItems() {
  for (let i = 0; i < itemList.length; i++) {
    new Items(itemList[i])
  }
}
renderNewItems();
new Items('sweep', fileExtension = 'png')
console.log(allItems)

function getNumbers() {
  if (randNumArrayOne === true) {
    for (i = 0; i < 3; i++) {
      randNumberOne[i] = Math.floor(Math.random() * allItems.length);
    }
    numberChecker();
    console.log(randNumberOne);
    randNumArrayOne = false;
  }
  else {
    for (i = 0; i < 3; i++) {
      randNumberTwo[i] = Math.floor(Math.random() * allItems.length);
    }
    numberChecker();
    console.log(randNumberTwo);
    randNumArrayOne = true;
  }
}
//Check arrays vs. themselves and the other
function numberChecker() {
  if (randNumberOne[0] === randNumberOne[1] || randNumberOne[0] === randNumberOne[2] || randNumberOne[1] === randNumberOne[2] || randNumberTwo[0] === randNumberTwo[1] || randNumberTwo[0] === randNumberTwo[2] || randNumberTwo[1] === randNumberTwo[2] || randNumberOne[0] === randNumberTwo[0] || randNumberOne[0] === randNumberTwo[1] || randNumberOne[0] === randNumberTwo[2] || randNumberOne[1] === randNumberTwo[0] || randNumberOne[1] === randNumberTwo[1] || randNumberOne[1] === randNumberTwo[2] || randNumberOne[2] === randNumberTwo[0] || randNumberOne[2] === randNumberTwo[1] || randNumberOne[2] === randNumberTwo[2]) {
    getNumbers();
  }
  else {
    console.log(`Passed Check`)
  }
}
function renderImgs() {
  getNumbers();
  if (randNumArrayOne = true) {
    let imgOneIndex = randNumberOne[0];
    let imgTwoIndex = randNumberOne[1];
    let imgThreeIndex = randNumberOne[2];

    imgOne.src = allItems[imgOneIndex].src;
    imgOne.alt = allItems[imgOneIndex].name;
    allItems[imgOneIndex].shown++

    imgTwo.src = allItems[imgTwoIndex].src;
    imgTwo.alt = allItems[imgTwoIndex].name;
    allItems[imgTwoIndex].shown++

    imgThree.src = allItems[imgThreeIndex].src;
    imgThree.alt = allItems[imgThreeIndex].name;
    allItems[imgThreeIndex].shown++
  }
  else if (randNumArrayOne = false) {
    let imgOneIndex = allItems[randNumberTwo[0]];
    let imgTwoIndex = allItems[randNumberTwo[1]];
    let imgThreeIndex = allItems[randNumberTwo[2]];

    imgOne.src = allItems[imgOneIndex].src;
    imgOne.alt = allItems[imgOneIndex].name;
    allItems[imgOneIndex].shown++

    imgTwo.src = allItems[imgTwoIndex].src;
    imgTwo.alt = allItems[imgTwoIndex].name;
    allItems[imgTwoIndex].shown++

    imgThree.src = allItems[imgThreeIndex].src;
    imgThree.alt = allItems[imgThreeIndex].name;
    allItems[imgThreeIndex].shown++
  }
}

renderImgs();
function handleClick(event) {
  totalVotes--;

  let imgClicked = event.target.alt;

  for (let i = 0; i < allItems.length; i++) {
    if (imgClicked === allItems[i].name) {
      allItems[i].votes++;
    }
  }
  renderImgs();
  if (totalVotes === 0) {
    voteBox.removeEventListener('click', handleClick);
  }
}
voteBox.addEventListener('click', handleClick);
//Event listener


//Event button 2 rendering list items
function handleShowResults() {
  if (totalVotes === 0) {
    for (i = 0; 1 < allItems.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${allItems[i].itemName} was seen ${allItems[i].shown} times and chosen ${allItems[i].votes} times.`;
      results.appendChild(list);
      resultButton.removeEventListener('click', handleShowResults)
    }
  }
  else if (totalVotes > 0) {
    alert(`Please finish the survey you have $ totalVotes} selections left.`)
  }
}

let resultButton = document.getElementById('resultsbutton')
resultButton.addEventListener('click', handleShowResults)
