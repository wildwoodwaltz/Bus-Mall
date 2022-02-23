'use strict';

let voteChances = 10;
let allItems = [];
let itemList = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
/// local storage///
let retrieveData = localStorage.getItem('itemData')
console.log(retrieveData);
// parse data
let parsedData = JSON.parse(retrieveData);


// Constructor function///////////////////////
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
  /// use data that has been parsed from LOCAL STOARGE ///
  if (retrieveData) {
    allItems = parsedData;
  }
  else {
    for (let i = 0; i < itemList.length; i++) {
      new Items(itemList[i]);
    }
    renderNewItems();
    new Items('sweep', 'png');
  }
  console.log(allItems);
}
///////End Constructor Function////////////////////

let randomPictureLeft = NaN;
let randomPictureMid = NaN;
let randomPictureRight = NaN;
let lastRound = [NaN, NaN, NaN];

/////// Start DOM elements/////////////

let header = document.getElementById('title');
let voteBox = document.getElementById('votebox');
let chart = document.getElementById('chart');
let leftHTMLImage = document.getElementById('img-one');
let midHTMLImage = document.getElementById('img-two');
let rightHTMLImage = document.getElementById('img-three');

///////End DOM Elements////////////////
/////// Random Grabber ///////

///////Start Image Generation from list///////////////
function generateNum() {
  randomPictureLeft = Math.floor(Math.random() * allItems.length);
  randomPictureMid = Math.floor(Math.random() * allItems.length);
  randomPictureRight = Math.floor(Math.random() * allItems.length);
  console.log(`${randomPictureLeft}, ${randomPictureMid}, ${randomPictureRight}`);
  checkDuplicate();
}
///////// Duplicate checker part of the function///////
function checkDuplicate() {
  while (randomPictureLeft === randomPictureMid ||
    randomPictureLeft === randomPictureRight || randomPictureMid === randomPictureRight ||
    lastRound.includes(randomPictureLeft) ||
    lastRound.includes(randomPictureMid) ||
    lastRound.includes(randomPictureRight)
  ) {
    randomPictureLeft = Math.floor(Math.random() * allItems.length);
    randomPictureMid = Math.floor(Math.random() * allItems.length);
    randomPictureRight = Math.floor(Math.random() * allItems.length);
  }
  lastRound = [randomPictureLeft, randomPictureMid, randomPictureRight];
}

function renderImgs() {
  generateNum();
  leftHTMLImage.src = allItems[randomPictureLeft].src;
  leftHTMLImage.alt = allItems[randomPictureLeft].name;
  allItems[randomPictureLeft].shown++;

  midHTMLImage.src = allItems[randomPictureMid].src;
  midHTMLImage.alt = allItems[randomPictureMid].name;
  allItems[randomPictureMid].shown++;

  rightHTMLImage.src = allItems[randomPictureRight].src;
  rightHTMLImage.alt = allItems[randomPictureRight].name;
  allItems[randomPictureRight].shown++;
}
////////End Duplicate Checker and generation function/////////
////////CALL FOR INITIAL RENDER////////
renderImgs();
////////End Render Call////////
////////Start Event Listener/Execution on click/////
function handleVote(e) {
  voteChances--;
  let imgClicked = e.target.alt;
  for (let i = 0; i < allItems.length; i++) {
    if (imgClicked === allItems[i].name) {
      allItems[i].votes++;
    }
  }
  renderImgs();

  if (voteChances === 0) {
    voteBox.removeEventListener('click', handleVote);
    let stringifiedData = JSON.stringify(allItems);
    console.log('stringifiedData', stringifiedData);

    localStorage.setItem('itemData', stringifiedData);

    renderChart();
  }
}
voteBox.addEventListener('click', handleVote);

function renderChart() {
  let names = [];
  let totalVotes = [];
  let timesShown = [];
  for (let i = 0; i < allItems.length; i++) {
    names.push(allItems[i].name);
    console.log(names);
    totalVotes.push(allItems[i].votes);
    console.log(totalVotes);
    timesShown.push(allItems[i].shown);
    console.log(timesShown);
  }
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: totalVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of times Shown',
        data: timesShown,
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      axis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
