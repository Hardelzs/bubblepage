
// This simple function returns object reference for elements by ID
function _(x){return document.getElementById(x);}
// Variables for bubble array, bubble index, and the setInterval() variable
let bubble, number = 0, interval;
// storeData - Bubble Content Array. Put your content here.
var storeData = [
    '<h2>Heading Number 1</h2><p>Content for section 1</p>',
    '<h2>Heading Number 2</h2><p>Content for section 2</p>',
    '<h2>Heading Number 3</h2><p>Content for section 3</p>',
    '<h2>Heading Number 4</h2><p>Content for section 4</p>'
];
// This function is triggered by the bubbleSlide() function below
function bubbles(number){
    // Fade-out the content
    _("bubblecontent").style.opacity = 0;
    // Loop over the bubbles and change all of their background color
    for(let i=0; i < bubble.length; i++){   
        bubble[i].style.background = "rgba(0,0,0,.1)";
    }
    // Change the target bubble background to be darker than the rest
    bubble[number].style.background = "#999";
    // Stall the bubble and content changing for just 300ms
    setTimeout(() => {
        // Change the content
        _("bubblecontent").innerHTML = storeData[number];
        // Fade-in the content
        _("bubblecontent").style.opacity = 1;
    }, 300);
}
// This function is set to run every 5 seconds(5000ms)
function bubbleSlide(){
    number++; // Increment the bubble index number
    // If bubble index number is equal to the amount of total bubbles
    if(number == bubble.length){
        number = 0; // Reset the bubble index to 0 so it loops back at the beginning
    }
    // Make the bubbles() function above run
    bubbles(number);
}
// Start the application up when document is ready
window.addEventListener("load", () => {
    // Get the bubbles array
    bubble = _("bubbles").children;
    // Set the interval timing for the slideshow speed
    interval = setInterval(bubbleSlide, 5000);
});
