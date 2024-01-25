function generateQlockObject(hh, mm) {
  const hours = [
    "ZWÖLF", "EINS", "ZWEI", "DREI", "VIER", "FÜNF", "SECHS",
    "SIEBEN", "ACHT", "NEUN", "ZEHN", "ELF", "ZWÖLF"
  ];
  const fiveMinuteIncrements = [
    "", "FÜNF NACH", "ZEHN NACH", "VIERTEL NACH", "ZWANZIG NACH",
    "FÜNF VOR HALB", "HALB", "FÜNF NACH HALB", "ZWANZIG VOR",
    "VIERTEL VOR", "ZEHN VOR", "FÜNF VOR"
  ];

  let hourIndex = hh % 12;
  let fiveMinuteIndex = Math.floor(mm / 5);
  let remainingMinutes = mm % 5;

  let hourText = hours[hourIndex];
  let minuteText = (fiveMinuteIncrements[fiveMinuteIndex].split(" ")).filter(e => e != "");

  // Adjust the hour if minutes are 25 past the hour or later
  if (fiveMinuteIndex >= 5) {
    hourText = hours[(hourIndex + 1) % 12];
  }

  // If it's a full hour, adjust the text accordingly
  if (mm >= 0 && mm < 5) {
    // Special case for one o'clock
    if (hourText === 'EINS') {
      hourText = 'EIN';
    }
  }


  const textArray = ["ES", "IST", ...minuteText, hourText];
  // Add 'UHR' at the end for full hour
  if (mm >= 0 && mm < 5) {
    textArray.push('UHR');
  }

  // Set the dots for the minutes 
  const dots = Array(4).fill(false);
  for (let i = 0; i < remainingMinutes; i++) {
    dots[i] = true;
  }

  return {
    input: { hh, mm },
    asString: dots.map(e => e ? "X" : "-").join("") + " " + textArray.join(' '),
    text: textArray,
    dots: dots,
  };
}

console.log("############################################################################################################");
console.log("############################################################################################################");
console.log("############################################################################################################");
for (let i = 0; i < 60; i++) {
  const o = generateQlockObject(1, i)
  //console.log(o);
  console.log(("0" + o.input.hh + "").slice(-2) + ":" + ("0" + o.input.mm + "").slice(-2), "=>", o.asString);
  // console.log();
}
