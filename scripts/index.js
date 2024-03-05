
const mainList = document.querySelector('#main-list');

for(let textNode of document.body.childNodes) {
    //убрали первую ноду text
    if(textNode.nodeName == '#text') {
        continue;
    }

    //вывели textContent
        console.log(textNode.textContent);
}




