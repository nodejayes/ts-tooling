/**
 * trim a string
 *
 * @param string
 * @param charToRemove
 * @param mode remove from start => 0 remove at end => 1 remove both => 2
 */
export function trimChar(string, charToRemove, mode = 0) {
    const l = charToRemove.length;
    if (mode === 0 || mode === 2) {
        while(string.substr(0, l) === charToRemove) {
            string = string.substr(l);
        }
    }

    if (mode === 1 || mode === 2) {
        while(string.substr(string.length-l, l) === charToRemove) {
            string = string.substr(0, string.length-l);
        }
    }

    return string;
}
