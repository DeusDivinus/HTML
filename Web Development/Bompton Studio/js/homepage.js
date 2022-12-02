galleryIMG = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '7.jpg', '8.jpg']

var header = document.querySelector("header")
var oldScroll = window.scrollY
var state = false;

// Header
window.onscroll = function() {
    // Change the opacity of the header if scrolled down
    window.pageYOffset <= 0 ? styleManipulator(header, "opacity", 1): styleManipulator(header, "opacity", 0.6);
    this.oldScroll > this.scrollY 
    ? styleManipulator(header, "top", `${0}px`) & styleManipulator(header, "box-shadow", getStyleElement(header, "--box-shadow"))
    : styleManipulator(header, "top", `${-150}px`) & styleManipulator(header, "box-shadow", `none`)
    this.oldScroll = this.scrollY;
    
};

// Overlay

function toggleOverlay()
{
    styleManipulator(document.querySelector(".overlay"), "display", "flex")
}

function previewIMG(img)
{
    pattern = /\d.jpg/g;
    toggleOverlay()
    try { 
    console.log(pattern.exec(img)[0])
    } catch (error) {
    }
}

// Gallery
function addImages()
{
    galleryIMG.forEach(element => {
        document.querySelector('.galery-content').innerHTML +=
        ` <div class="g-imageholder"><img 
            src="../img/tattoos/gallery/thumbnail/${element}" onclick="previewIMG(this.src)"></div>
        `
    });
}

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