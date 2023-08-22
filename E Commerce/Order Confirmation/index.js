function sendMail(){
    var params = {
        addres1: document.getElementById("addres1").value,
        addres2: document.getElementById("addres2").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
    }


const serviceID = "service_5xgspki";
const templateID = "template_2luc4rp";

    
    emailjs 
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("addres1").value = "";
        document.getElementById("addres2").value = "";
        document.getElementById("country").value = "";
        document.getElementById("state").value = "";
        document.getElementById("zip").value = "";
        console.log(res);
        alert("Your Order is Succssfully");
    })
    .catch ((err) => console.log(err));
}
