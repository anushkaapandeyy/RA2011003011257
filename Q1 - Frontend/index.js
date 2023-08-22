const express = require("express");
const axios = require("axios");
const app = express();
const isValidUrl = url => {
    try {
        return Boolean(new URL(url))
    }
    catch (e) {
        console.log(url + ": URL is invalid");
    }
}

app.get("/numbers", function (req, res) {
    urls = req.query.url
    console.log(urls)
    Array.prototype.forEach.call(urls, url => {
        try {
            url = new URL(url)
            axios.get(url).then(res => console.log(res.data))
            console.log(data.numbers)
        }
        catch (e) {
            console.log(url + ": is invalid")
        }


    })
})
function mergeandsort() {
    let arr1 = [1, 2, 3, 4, 5, 6, 3, 4, 5, 7]
    let mergedArr = [...new Set(arr)]
    console.log(mergedArr);

}
app.listen(8080, function () {
    console.log("server is running on port 8080.");
})