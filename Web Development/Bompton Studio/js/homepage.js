var header = document.querySelector("header")
var oldScroll = window.scrollY
var state = false;


window.onscroll = function() {
    // Change the opacity of the header if scrolled down
    window.pageYOffset <= 0 ? styleManipulator(header, "opacity", 1): styleManipulator(header, "opacity", 0.6);
    this.oldScroll > this.scrollY 
    ? styleManipulator(header, "top", `${0}px`) & styleManipulator(header, "box-shadow", getStyleElement(header, "--box-shadow"))
    : styleManipulator(header, "top", `${-150}px`) & styleManipulator(header, "box-shadow", `none`)
    this.oldScroll = this.scrollY;
    
};


function styleManipulator(element, property, value)
{
    element.style.setProperty(property, value)
}
function getStyleElement(element, property, number)
{
    style = getComputedStyle(element).getPropertyValue(property);
    number ? style = style.match(/.\d*/)[0] : style;
    return style
}