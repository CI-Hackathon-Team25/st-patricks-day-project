function sendMail(contactForm){
    emailjs.send("service_yune47h","template_7ez1ucn",{
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
"message_request": contactForm.message.value,
})
.then(
    function(response){
        console.log("SENT!", response);
    },
    function(error){
        console.log("ERROR", error);
    });
     return false;
}