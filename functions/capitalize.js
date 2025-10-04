export function capitalize(str){
    let capitalized = toString(str);
    capitalized = str.slice(0, 1).toUpperCase() + str.slice(1);

    return capitalized;
}