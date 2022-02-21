// Global Variables

let imgOne = document.getElementById(img-one);
let imgTwo = document.getElementById(img-two);
let imgThree = document.getElementById(img-three);
let randNumberOne =[];
let randNumberTwo=[];
let randNumArrayOne=true;

//data storage
let allItems = []
let itemList = ['bag','banana','bathroom','boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','shark','tauntaun','unicorn', 'water-can','wine-glass']
// Constructor

function Items(itemName, fileExtension = 'jpg'){
  this.itemName = itemName;
  this.src = `img/${itemName}.${fileExtension}`;
  this.alt = `${itemName}`;
  this.shown = 0;
  this.clicks = 0;
  allItems.push(this);
}

//img list
function renderNewItems(newItem);
for (let i = 0; i < itemList.length; i++){
  new Item = (itemList[i])
}
new Item = (sweep, .png)


function getNumbers();
  if (randNumArrayOne === true){
    for (i = 0; i < 3; i++){
   randNumberOne[i] = Math.floor(Math.random() * itemList.length -1);
  }
  console.log(randNumberOne);
  numberChecker();
  randNumArrayOne = false;
  }
  else {
    for (i = 0; i < 3; i++){
    randNumberTwo[i] = Math.floor(Math.random() * itemList.length -1);
  }
  console.log(randNumberTwo);
  numberChecker();
  randNumArrayOne = true;
}
//Check arrays vs. themselves and the other
function numberChecker(){
  if (randNumberOne[0] === randNumberOne [1] || randNumberOne[0] === randNumberOne[2] || randNumberOne[1] === randNumberOne[2]){
  getNumbers();
  }
  else if (randNumberTwo[0] === randNumberTwo [1] || randNumberTwo[0] === randNumberTwo[2] || randNumberTwo[1] === randNumberTwo[2]){
    getNumbers();
  }
  else if (randNumberOne[0] === randNumberTwo [0] || randNumberOne[0] === randNumberTwo[1] || randNumberOne[0] === randNumberTwo[2]){
  getNumbers();
}
  else if (randNumberOne[1] === randNumberTwo [0] || randNumberOne[1] === randNumberTwo[1] || randNumberOne[1] === randNumberTwo[2]){
    getNumbers();
  }
  else if (randNumberOne[2] === randNumberTwo [0] || randNumberOne[2] === randNumberTwo[1] || randNumberOne[2] === randNumberTwo[2]){
  getNumbers();
  }
  else{
    console.log(`Passed Check`)
  }
function renderImgs(){
  let imgOneIndex = randomItemNumber();
  let imgTwoIndex = randomItemNumber();
  let imgThreeIndex = randomItemNumber();


  // Log imgs into array 1 for checking against each other

  // check numbers against array 2 and display

  // swap to array one



while (imgOneIndex === imgTwoIndex){
  imgTwoIndex = randomItemNumber();
}
while (imgTwoIndex === imgThreeIndex){
  imgThreeIndex = randomItemNumber();
}

  imgOne.src = allItems[imgOneIndex].src;
  imgOne.alt = allitems[imgOneIndex].name;
  allItems[imgOneIndex].shown++

  imgTwo.src = allItems[imgTwoIndex].src;
  imgTwo.alt = allitems[imgTwoIndex].name;
  allItems[imgTwoIndex].shown++

  imgThree.src = allItems[imgThreeIndex].src;
  imgThree.alt = allitems[imgThreeIndex].name;
  allItems[imgThreeIndex].shown++

}

renderImgs();

//Event listener
function handleClick(event){
  let imgClicked = event.target.alt;
  for (i = 0; i < allItems.length; i++)
  if (imgClicked === allItems[i].name){
    allitems[i].votes++;
  }
  renderImgs();
}

voteBox.addEventListener('click', handleClick);

//Event button 2 rendering list items
function handleShowResults(){
  if(votes === 0){
    for ( i = 0; 1 < allItems; i++){
      let list = document.createElement('li');
      list.textContent = `${allItems[i].name} was seen ${allItems[i].views} and chosen ${allItems[i]} times.`;
      /*location of ul*/.appendChild(list);
    }
  }
}

showButton.addEventListener(click, handleShowResults)