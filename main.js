import './style.css';
import { WordDict, MinuteDict, HourDict } from './config.js';


// --------------------------------------------------------------------------------------------------
// ----------------- FUNCTIONS
// --------------------------------------------------------------------------------------------------
function writeBit(arrayWithId) {
  var startPoint = arrayWithId[0];
  var endPoint = arrayWithId[1];

  for (let i = startPoint; i <= endPoint; i++) {
    let thisLetter = document.getElementById(i);
    thisLetter.className = "active"
  }

}

function writeTimeWords(h, m) {
  writeBit(HourDict[h]);

  MinuteDict[m].forEach(elem => {
    writeBit(WordDict[elem]);
  })
}

function disableAll() {
  for (let i = 6; i < 110; i++) {
    let thisLetter = document.getElementById(i);
    thisLetter.className = ""
  }
  // for (let y = 501; y < 505; y++) {
  //   let thisLetter = document.getElementById(y);
  //   thisLetter.className = ""
  // }
}

function cleanMinutesFromDots(m, minuteDots) {
  return m - minuteDots;
}

function writeDots(dotCount) {
  for (let i = 0; i < dotCount; i++) {
    let thisDot = document.getElementById(501 + i);
    thisDot.className = "active"
  }
}

function flipClock() {
  let now = new Date();
  let m = now.getMinutes();
  let h = now.getHours() % 12
  console.log("flipClock", h, ":", m);

  disableAll();

  let minuteDots = m % 5; // zb => 7%5 = 2 => 2 dots an
  if (minuteDots != 0) {
    //writeDots(minuteDots);
  }

  if (m < 25) {
    writeTimeWords(h, cleanMinutesFromDots(m, minuteDots));
  } else {
    writeTimeWords(h + 1, cleanMinutesFromDots(m, minuteDots));
  }
}

function startQlockInterval() {
  flipClock();

  // get the current time
  let now = new Date();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();

  // calculate the time to the next update at full minute
  let nextUpdate = 60000 - (s * 1000) - ms;

  // update the clock
  console.log(new Date().toLocaleTimeString());

  // schedule the next update
  return setTimeout(startQlockInterval, nextUpdate);
}

function adjustFontSize() {
  const elements = document.querySelectorAll('span');

  const elementWrapper = document.getElementsByClassName("grid-container")[0].children
  const elementItem = elementWrapper[0]

  const elementItemHeight = window.getComputedStyle(elementItem).getPropertyValue('height');
  const elementItemWidth = window.getComputedStyle(elementItem).getPropertyValue('width');

  const boxDimension = Math.max(parseInt(elementItemHeight), parseInt(elementItemWidth))
  const fontSize = boxDimension / 100 * 50


  // Iterate and modify a style property
  elements.forEach(function (element) {
    element.style.fontSize = fontSize + 'px';
  });
}


// --------------------------------------------------------------------------------------------------
// ----------------- LISTENERS
// --------------------------------------------------------------------------------------------------
window.addEventListener('resize', () => {
  adjustFontSize()
});


// --------------------------------------------------------------------------------------------------
// ----------------- MAIN
// --------------------------------------------------------------------------------------------------
adjustFontSize()
startQlockInterval()




