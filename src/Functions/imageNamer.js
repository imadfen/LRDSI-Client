function imageNamer(str) {
    const words = str.split(' ');
    var combinedWords

    if (words.length <= 1) {
        combinedWords = words[0] ? words[0].toLowerCase() : '';
    } else {
        const firstWord = words[0];
        const secondWord = words[1];
    
        combinedWords = (firstWord + secondWord).toLowerCase().replace(/\s/g, '');
    }

    const suffix = '-' + Math.round(Math.random() * 1e9)
    return combinedWords + suffix;
}

export default imageNamer