const cursor = document.querySelector("[data-cursor]");

// Function to change cursor color and size
function changeCursorAppearance(color, size) {
    cursor.style.backgroundColor = color;
    cursor.style.width = size;
    cursor.style.height = size;
}

// Mouse move event to move the cursor
window.addEventListener("mousemove", function(e) {
    const posX = e.pageX;
    const posY = e.pageY;

    cursor.animate({
        left: posX + "px",
        top: posY + "px"
    }, {duration: 50, fill: "forwards"});
});

// Add event listeners to all <a> tags
const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseenter", function() {
        changeCursorAppearance("rgba(183, 83, 3, 0.6)", "2.5rem"); // Change color and size
        changeCursorAppearance.animate({duration: 300})
    });

    link.addEventListener("mouseleave", function() {
        changeCursorAppearance("", "1rem"); // Reset color and size (or specify a default size)
    });

const specialDivs = document.querySelectorAll(".special-div");

specialDivs.forEach(div => {
    div.addEventListener("mouseenter", function(){
        changeCursorAppearance("rgba(161, 154, 139, 1")
    });
    div.addEventListener("mouseleave", function(){
        changeCursorAppearance("rgba(183, 83, 3, 1)");
    })
})
});