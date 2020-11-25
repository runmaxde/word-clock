
function writeBit(arrayWithId) {
    var startPoint = arrayWithId[0];
    var endPoint = arrayWithId[1];

    for(let i=startPoint; i<=endPoint; i++){
        let thisLetter = document.getElementById(i);
        thisLetter.className = "active"
    }
    
}

function writeTimeWords(h, m) {
    writeBit(HourDict[h]);

    MinuteDict[m].forEach( elem => {
        writeBit(WordDict[elem]);
    })
}

function disableAll() {
    for(let i=6; i< 110; i++) {
        let thisLetter = document.getElementById(i);
        thisLetter.className = ""
    }
    for(let y=501; y < 505; y++){
        let thisLetter = document.getElementById(y);
        thisLetter.className = ""
    }
}

function cleanMinutesFromDots(m , minuteDots){
    return m - minuteDots;
}

function writeDots(dotCount){
    for(let i=0; i<dotCount; i++){
        let thisDot = document.getElementById(501+i);
        thisDot.className = "active"
    }
}

function kickClock(h, m) {
    disableAll();

    let minuteDots = m%5; // zb => 7%5 = 2 => 2 dots an
    if(minuteDots !=0){
        writeDots(minuteDots);
    }

    if(m < 25) {
        writeTimeWords(h, cleanMinutesFromDots(m, minuteDots));
    } else {
        writeTimeWords(h+1, cleanMinutesFromDots(m, minuteDots));
    }
}



// ------------------------------
var h = 12;
var m = 59 ;
function next() {
    m++;

    if(m == 60){
        h ++;
        m = 0;
    }

    if(h == 13) {
        h = 1;
    }
    console.log(h + " : " + m);

    kickClock(h, m);
}
