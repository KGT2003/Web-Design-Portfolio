window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");

    setTimeout(function () {
        document.getElementById("about").style.display = "block";
    }, 1000);
});
console.log("JavaScript loaded!");
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener("click", () => {
    console.log("Menu clicked!");
    navLinks.classList.toggle("active");
});
window.onload = function() {
    const contactBtn = document.getElementById("contact-btn");
    const contactSection = document.getElementById("contact");

contactBtn.addEventListener("click", function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({behavior: "smooth"});

});
};
window.addEventListener("DOMContentLoaded", function () {
    emailjs.init({
        publicKey: "_b-sfyio_9tn1UgFC"
    });
    const msg = document.querySelector(".form-message");
    let error_array = {};

    error_array["First-Name"] = false;
    error_array["Last-Name"] = false;
    error_array["Email"] = false;
    error_array["Subject"] = false;
    error_array["message"] = false;

    var elFirstName = document.getElementById("First-Name");
    var elLastName = document.getElementById("Last-Name");
    var elEmail = document.getElementById("Email");
    var elSubject = document.getElementById("Subject");
    var elMessage = document.getElementById("message");
    var elContact = document.getElementById("contact-form");

    function validateData(event) {

        var input = event.target;

        var FirstnamePattern = /^[A-Za-z]+$/;
        var LastnamePattern = /^[A-Za-z]+$/;
        var EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var SubjectPattern = /^[A-Za-z0-9\s]+$/;
        var MessagePattern = /^[A-Za-z0-9\s]+$/;

        // Remove existing hints
        ["First-Name", "Last-Name", "Email", "Subject", "message"].forEach(function(id) {

            var hint = document.getElementById(id + "_hint");

            if (hint) {
                hint.remove();
            }

        });

        // Show hint when input receives focus
        if (input.id == "First-Name") {

            if (!FirstnamePattern.test(input.value)) {

                var hint = document.getElementById("First-Name_hint");

                if (!hint) {
                    hint = document.createElement("div");
                    hint.id = "First-Name_hint";
                    hint.style.display = "block";
                    hint.style.color = "red";
                    input.parentNode.appendChild(hint);
                }

                hint.textContent = "Please enter your first name (Letters only).";
                error_array["First-Name"] = true;

            } else {

                var hint = document.getElementById("First-Name_hint");

                if (hint) {
                    hint.remove();
                }

                error_array["First-Name"] = false;
            }
        }
        if (input.id === "Last-Name") {
            if(!LastnamePattern.test(input.value)) {
                var hint = document.getElementById("Last-Name_hint");
                if(!hint) {
                    hint = document.createElement("div");
                    hint.id = "Last-Name_hint";
                    hint.style.display = "block";
                    hint.style.color = "red";
                    input.parentNode.appendChild(hint);
                }
                hint.textContent = "Please enter your last name (Letters only).";
                error_array["Last-Name"] = true;
            } else {
                 var hint = document.getElementById("Last-Name_hint");

                if (hint) {
                    hint.remove();
                }
                error_array["Last-Name"] = false;
            }
        }

        if (input.id === "Email") {
             if(!EmailPattern.test(input.value)) {
                var hint = document.getElementById("Email_hint");
                if(!hint) {
                    hint = document.createElement("div");
                    hint.id = "Email_hint";
                    hint.style.display = "block";
                    hint.style.color = "red";
                    input.parentNode.appendChild(hint);
                }
                hint.textContent = "Please enter a valid email";
                error_array["Email"] = true;
        } else {
             var hint = document.getElementById("Email_hint");

                if (hint) {
                    hint.remove();
                }
                error_array["Email"] = false;
            }
        }

        if (input.id === "Subject") {
            if(!SubjectPattern.test(input.value)) {
                 var hint = document.getElementById("Subject_hint");
                if(!hint) {
                    hint = document.createElement("div");
                    hint.id = "Subject_hint";
                    hint.style.display = "block";
                    hint.style.color = "red";
                    input.parentNode.appendChild(hint);
                    hint.textContent = "Please enter a valid Subject";
                    error_array["Subject"] = true;
                }
            } else {
                  var hint = document.getElementById("Subject_hint");

                if (hint) {
                    hint.remove();
                }
                error_array["Subject"] = false;
            }
        }

        if (input.id === "message") {
            if(!MessagePattern.test(input.value)) {
                 var hint = document.getElementById("message_hint");
                if(!hint) {
                    hint = document.createElement("div");
                    hint.id = "message_hint";
                    hint.style.display = "block";
                    hint.style.color = "red";
                    input.parentNode.appendChild(hint);
                    hint.textContent = "Please enter a valid message";
                    error_array["message"] = true;
                }
            } else {
                var hint = document.getElementById("message_hint");

                if (hint) {
                    hint.remove();
                }
                error_array["message"] = false;
            }
        }
    }
    document.getElementById("contact-form").addEventListener('submit', function(event) {
             event.preventDefault();
             document.querySelector(".loader").classList.add("show")
                // these IDs from the previous steps
                emailjs.sendForm( "service_pltd1hs", "template_ljplwkp", this)
                    .then( function () {
                        document.getElementById("contact-form").reset();
                        document.querySelector(".loader").classList.remove("show");
                        msg.innerHTML = "";
                        msg.innerHTML += "<span class='success-msg'>Email Sent</span>";
                        msg.classList.add("show");
                        setTimeout(()=> msg.classList.remove("show"),2000);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });

    // Attach listeners if elements exist
    [elFirstName, elLastName, elEmail, elSubject, elMessage].forEach(function(el) {

        if (el) {
            el.addEventListener("focus", validateData);
            el.addEventListener("blur", validateData);
        }

    });

 });
