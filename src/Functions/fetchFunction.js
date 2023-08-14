export default async function fetchFunction(path){
    if (typeof path == "string") {
        const apiUrl = process.env.REACT_APP_API_URL
        return await fetch(apiUrl + path)
    }
    return Promise.reject("invalid type of path")
}