//Add the contents of the methods array in the content.js file as bullet items inside the bullets div of methods.html. Use vanilla JavaScript.

let ul = "<ul>",
    bullets = document.getElementById("bullets");

for (let method of methods) {
    ul += "<li>" + method + "</li>";
};

ul += "</ul>";
bullets.innerHTML = ul;