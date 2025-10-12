function analyzeArray(arr) {
    return {
        average: average(arr),
        length: arr.length,
        max: max(arr),
        min: min(arr)
    }
}

function average(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result / arr.length;
}

function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return arr[max];
}

function min(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[min] > arr[i]) {
            min = i;
        }
    }
    return arr[min];
}
