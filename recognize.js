class card {
    constructor(number, cvc, exp) {
        let numberArray = number.replaceAll(" ","").split(/(?:)/u);
        
        




        //16 DIGIT LOGIC
        if (numberArray.length == 16 && cvc.length == 3) { 
            
        if (numberArray[0] == "5") {
            this.bank = "Mastercard®"
        } else if (numberArray[0] == "4") {
            this.bank = "Visa®"
        } else if (numberArray[0] == "6") {
            this.bank = "Discover®"
        } else {
            this.invalid = true;
            return;
        };
        
        this.cvc = cvc;
        this.exp = exp;

        this.section1 = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3];
        this.section2 = numberArray[4] + numberArray[5] + numberArray[6] + numberArray[7];
        this.section3 = numberArray[8] + numberArray[9] + numberArray[10] + numberArray[11];
        this.section4 = numberArray[12] + numberArray[13] + numberArray[14] + numberArray[15];
        this.displayNumber = this.section1 + " " + this.section2 + " " + this.section3 + " " + this.section4;

        this.invalid = false;
        };







        //15 DIGIT LOGIC
        if (numberArray.length == 15 && cvc.length == 4) { 
        
        if (numberArray[0] + numberArray[1] == "34" || numberArray[0] + numberArray[1] == "37" && cvc.length == 4) {
            this.bank = "American Express®"
        } else {
            this.invalid = true;
            return;
        };
        
        this.cvc = cvc || null;
        this.exp = exp || null;

        this.section1 = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3];
        this.section2 = numberArray[4] + numberArray[5] + numberArray[6] + numberArray[7] + numberArray[8] + numberArray[9];
        this.section3 = numberArray[10] + numberArray[11] + numberArray[12] + numberArray[13] + numberArray[14];
        this.displayNumber = this.section1 + " " + this.section2 + " " + this.section3;

        this.invalid = false;
        };



    };
};
