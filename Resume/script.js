// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for reaching out, " + name + "!");
    }
});
