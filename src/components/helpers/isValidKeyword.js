export function isValidCharacter(input) {
    const charactersRgx = new RegExp("^[a-zA-Z0-9_ ]*$");
    return charactersRgx.test(input);
}

export function isValidInputLength(input) {
    let arr = input.split("");
    return arr.length < 41;
}
