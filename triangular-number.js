// What is the input to the program
    //a number
// What is the output of the program
    //sum of all number
// What is the input to each recursive calls
    // number you want the triangular sequence of
// What is the output of each recursive calls
    // total number of stars

function triangularNumber(num) {
    if (num === 0) {
        return 0;
    }

    return num + triangularNumber(num - 1);
}

console.log(triangularNumber(4));