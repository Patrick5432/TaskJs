
//Первое задание

function maxAndMin(arr) {
    let lastChar = arr.length - 1;
    return arr[0] + " " + arr[lastChar];
}
console.log("First task: " + maxAndMin([2, 3, 6, 8]));

//Второе задание

function isSquare(number) {
    let a = 0;
    let b = 0;

    if (number < 0) {
        return false;
    }

    for (let i = 0; i <= number; i++) {
        if (a * b == number) {
            return true;
        }
        else if (a == number || b == number) {
            return false;
        }
        else {
            a++;
            b++;
        }
        
    }
}
console.log("Second task: " + isSquare(-1));

//Третье задание

function filterStrings(arr) {
    const arrRes = [];
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].length == 4) {
            arrRes.push(arr[i]);
        }
    }
    return arrRes;
}
console.log("Third task: " + filterStrings(["Dima", "Nikita", "Alexandr", "Egor"]))