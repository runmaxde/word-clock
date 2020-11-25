

//const text = "ESKISTAFÜNFZEHNZWANZIGDREIVIERTELVORFUNKNACHHALBAELFÜNFEINSXÄMZWEIDREIAUJVIERSECHSNLACHTSIEBENZWÖLFZEHNEUNKUHR";

// >> es ist xxxxx <<
const MinuteDict = {
    0:   ["uhr"],
    5:   ["fünf", "nach"],
    10:  ["zehn", "nach"],
    15:  ["viertel", "nach"],
    20:  ["zwanzig", "nach"],
    25:  ["fünf", "vor", "halb"],
    30:  ["halb"],
    35:  ["fünf", "nach", "halb"],
    40:  ["zwanzig", "vor"],
    45:  ["viertel", "vor"],
    50:  ["zehn", "vor"],
    55:  ["fünf", "vor"]
}

const WordDict = {
    "es" : [0, 1],
    "ist": [3, 5],
    "fünf": [7, 10],
    "zehn": [11, 14],
    "zwanzig": [15, 21],
    "dreiviertel": [22, 32],
    "viertel": [26, 32],
    "vor": [33, 35],
    "nach": [40, 43],
    "halb": [44, 47],
    "uhr": [107, 109]
}

const HourDict = {
    1: [55, 58],
    2: [62, 65],
    3: [66, 69],
    4: [73, 76],
    5: [51, 54],
    6: [77, 81],
    7: [88, 93],
    8: [84, 87],
    9: [102, 105],
    10: [99, 102],
    11: [49, 51],
    12: [94, 98]
}