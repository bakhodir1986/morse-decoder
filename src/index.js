const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    var byStar = expr.split("**********");
    for (k = 0; k < byStar.length; k++) {


        var byTen = splitNChars(byStar[k], 10);
        for (i = 0; i < byTen.length; i++) {
            var characterInArray = "";
            var byTwo = splitNChars(byTen[i], 2);
            for (j = 0; j < byTwo.length; j++) {
                var el = byTwo[j];
                if (el === "10") {
                    characterInArray += '.';
                } else if (el === "11") {
                    characterInArray += '-';
                }

            }
            result += MORSE_TABLE[characterInArray];
        }

        result += ' ';

    }
    return result.trim();

}


function splitNChars(txt, num) {
    var result = [];
    for (var i = 0; i < txt.length; i += num) {
        var data = '';
        data = txt.substr(i, num);
        if (data != '')
            result.push(data);
    }
    return result;
}

module.exports = {
    decode
}