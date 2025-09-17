function greet(){
    alert("Greetings !");
    alert("Welcome to DreamWheels");
}

greet();

document.getElementById("year").innerText = new Date().getFullYear();

function checkStock(buttonId){
    if(buttonId == instock)
    {
        alert("In Stock !");
    }
    else if(buttonId == outofstock)
    {
        alert("Out of Stock !");
    }
}

function validForm() {
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() === "") {
        alert("Please enter your name!");
        return false;
    } 
    else if (phone.value.trim() === "") {
        alert("Please enter your phone!");
        return false;
    } 
    else if (email.value.trim() === "") {
        alert("Please enter your email!");
        return false;
    } 
    else if (!emailPattern.test(email.value.trim())) {
        alert("Invalid email format!");
        return false;
    } 
    else {
        alert("All fields are valid!");
        return true; // allow form to submit
    }
}

function sendMessage(){
    const input = document.getElementById("user-input");
    const msgSection = document.getElementById("msgSection");
    const message = input.value.trim();

    if(message !== ""){

        let reply = "";
            const userMsg = document.createElement("div");
            userMsg.className = "user-message"; 
            userMsg.textContent = message;
            msgSection.appendChild(userMsg);

            input.value = "";

            if (message === "hi" || message === "hello") {
                reply = "Hello! Welcome to DreamWheels. How can I help you ?";
            } else if (message.includes("price")) {
                reply = "Our cars start from $1.5 Million and go up.";
            } else if (message.includes("contact")) {
                reply = "You can contact us at: DreamWheels@gmail.com or visit our contact page for complete details";
            }else if (message.includes("location") || message.includes("where")) {
                reply = " We are located in Lahore, Pakistan.";
            }else if (message.includes("cars") || message.includes("products")) {
                reply = "We offer Bugatti, Lamborghini, Rolls-Royce, Mercedes, and Porsche.";
            }else if (message.includes("thanks") || message.includes("thank you")) {
                reply = "😊 You're welcome! Happy to help.";
            } else if (message.includes("bye")) {
                reply = "Goodbye! Have a great day 🚗";
            } else {
                reply = "Sorry, I dont understand that yet. Try asking about price, cars, or contact only.";
            }

            const botMsg = document.createElement("div");
            botMsg.className = "bot-msg"; 
            botMsg.textContent = reply;
            msgSection.appendChild(botMsg);

            msgSection.scrollTop = msgSection.scrollHeight;
    }
}
