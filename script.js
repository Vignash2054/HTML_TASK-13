function generate() { 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const Comments = document.getElementById("Comments").value.trim();
    
    
    if(!name||!email ||!number||!Comments) {
        alert("Please fill out all fields");
        return;
    }
    
    const qrdata = `Name:${name}\n Email:${email}\n Number:${number}\n Comments:${Comments}`;
    
    new QRious({
        element:
        document.getElementById("qr"),
        value:qrdata,
        size:300,
    });
    }