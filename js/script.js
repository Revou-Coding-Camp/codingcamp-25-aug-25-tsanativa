console.log("Script loaded successfully.");



function greet() {
    let userName = prompt("Enter your name:");
    if (userName) {
        document.getElementById("username").textContent = userName;
        alert(`Welcome ${userName} to our website.`);
    } else {
        document.getElementById("username").textContent = "";
        alert("Welcome to our website.");
    }
}

document.querySelectorAll('.circle img').forEach(function(img) {
    img.addEventListener('click', function() {
        document.getElementById('').src = img.src;
        document.getElementById('img-modal').style.display = 'flex';
    });
});
document.getElementById('img-modal').addEventListener('click', function() {
    this.style.display = 'none';
});