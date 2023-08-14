import searchStringInObject from "./searchStringInObject";

function filterArray (array, string) {
    if (Array.isArray(array)) {
        var newArray = []
        array.forEach(element => {
            if (searchStringInObject(element, string)) {
                newArray.push(element)
            }
        });
        return newArray
    }

    return false
}

export default filterArray