function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone no").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_qk25k2e";
    const templateID = "template_id5zqd7"

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("phone no").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message has sent successfully")

            })
        .catch((error) => console.log(error));
}
