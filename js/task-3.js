function getElementWidth(content, padding, border) {
    const widthElement = Number.parseInt(content) + Number.parseInt(padding) * 2 + Number.parseFloat(border) * 2;
    return widthElement;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
