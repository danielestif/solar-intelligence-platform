document.getElementById("consultForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("cname").value;
    const date = document.getElementById("cdate").value;
    const time = document.getElementById("ctime").value;

    document.getElementById("consultMessage").innerHTML =
        "Thank you " + name + 
        "! Your consultation is confirmed for " + date + 
        " at " + time + 
        ". Our advisory team will contact you shortly.";
});
