function shortenPres(currentPres){
    if (currentPres.length > 200) {
        var splitIndex = currentPres.indexOf(".", 200);
        if (splitIndex == -1 || splitIndex >= 360) {
            splitIndex = currentPres.indexOf(" ", 200);
            if (splitIndex == -1 || splitIndex >= 360) {
                splitIndex = 200;
            }
        }
        return currentPres.substring(0, splitIndex + 1);
    }else{
        return currentPres;
    }
    
}


export default shortenPres