face.addEventListener('mouseover', function(){
    face.style.width = '200px';
    face.style.height = '200px';});

pup.addEventListener('mouseover', function(){
    pup.style.width = '200px';
    pup.style.height = '200px';});

face.addEventListener('mouseleave', function(){
    face.style.width = '50px';
    face.style.height = '50px';});
    
pup.addEventListener('mouseleave', function(){
    pup.style.width = '50px';
    pup.style.height = '50px';});

document.getElementById("html1").addEventListener("click", function() {
    alert(`Hypertext Markup Language, or "HTML", is a coding language used for the structure of webpages. It is one of the main building blocks for the World Wide Web, along with CSS and JavaScript.`);});

document.getElementById("css1").addEventListener("click", function() {
    alert(`Cascading Style Sheets, or "CSS" is a styling language used for the presentation of webpages. CSS, alongside HTML and JavaScript, is a fundamental technology for the World Wide Web.`);});

document.getElementById("js1").addEventListener("click", function() {
    alert(`JavaScript is the language of the web! It is a programming language used to make webpages more interactive and dynamic, allowing web designers to do things like, say, give you a definition when you click on a link! 😉 JavaScript, combined with HTML and CSS, makes the World Wide Web what it is today.`);});
