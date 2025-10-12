const alphabet_lower = "abcdefghijklmnopqrstuvwxyz";
const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function caesarCipher(str, factor) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
        result += shiftChar(str[i], factor);
    }
    return result;
}   

function shiftChar(c, f) {
    if (alphabet_lower.includes(c)) {
        
        return alphabet_lower[(alphabet_lower.indexOf(c) + f) % alphabet_lower.length];
    }

    if (alphabet_upper.includes(c)) {
        
        return alphabet_upper[(alphabet_upper.indexOf(c) + f) % alphabet_upper.length];
    }

    return c;
}
