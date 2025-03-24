const MONTH_THAI_NAMES = require("../configs/monthThaiName.config");

function numberToThaiMonth (number) {
    try {
        if (isNaN(number)) throw new Error("Should be number type");

        if (number < 1 || number > 12) throw new Error("Number of month shuld between 1 and 12");

        switch (number) {
            case 1: return MONTH_THAI_NAMES.JAN;
            case 2: return MONTH_THAI_NAMES.FEB;
            case 3: return MONTH_THAI_NAMES.MAR;
            case 4: return MONTH_THAI_NAMES.APR;
            case 5: return MONTH_THAI_NAMES.MAY;
            case 6: return MONTH_THAI_NAMES.JUN;
            case 7: return MONTH_THAI_NAMES.JUL;
            case 8: return MONTH_THAI_NAMES.AUG;
            case 9: return MONTH_THAI_NAMES.SEP;
            case 10: return MONTH_THAI_NAMES.OCT;
            case 11: return MONTH_THAI_NAMES.NOV;
            case 12: return MONTH_THAI_NAMES.DEC;
        }
    } catch(err) {
        throw err;
    }
}

module.exports = numberToThaiMonth;