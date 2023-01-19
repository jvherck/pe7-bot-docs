/* function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var query = document.getElementsByClassName("menu__list-item");
console.log(query.length);
for (let i = 0; i < query.length; i++){
    console.log(query[i]);
    if (query[i].classList.contains('unav_sbitem')){
        console.log(query[i]);
        query[i].getElementByTagName("a").href = "#";
    }
}
console.log(query); */

// TODO: fix this
document.addEventListener("click", function(event){
    event.clipboardData.setData("text/plain", event.target.innerHTML);
});