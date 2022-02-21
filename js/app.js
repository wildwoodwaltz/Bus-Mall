// Global Variables

let imgOne = document.getElementById(img-one);
let imgTwo = document.getElementById(img-two);
let imgThree = document.getElementById(img-three);
//data storage
let allItems = []
let itemList = ['bag','banana','bathroom','boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', '' ]
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
function renderNewItems();
new Item =('bag');
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =
new Item =


function randomItemNumber(min, max){
  Math.round(Math.random())
}

function renderImgs(){
  let imgOneIndex = randomItemNumber();
  let imgTwoIndex = randomItemNumber();
  let imgThreeIndex = randomItemNumber();

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
  imgOne.alt = allitems[imgTwoIndex].name;
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