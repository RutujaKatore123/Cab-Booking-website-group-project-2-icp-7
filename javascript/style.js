function carChange(car){
    const carImg=document.getElementById('car-img');
    carImg.src=`./Images/${car}.png`
}
document.addEventListener("DOMContentLoaded", function() {
    // Initially hide return date and time fields
    var head = document.getElementById("head");
    var date1 = document.getElementById("date1");
    var time1 = document.getElementById("time1");

    head.style.display = "none";
    date1.style.display = "none";
    time1.style.display = "none";

    // Function to handle trip type change
    var select = document.getElementById("select");
    select.addEventListener("change", function() {
        var tripType = select.value;
        if (tripType === "One Way") {
            // Hide return date and time fields if One Way trip is selected
            head.style.display = "none";
            date1.style.display = "none";
            time1.style.display = "none";
        } else {
            // Show return date and time fields for other trip types
            head.style.display = "block";
            date1.style.display = "block";
            time1.style.display = "block";
        }
    });

    // Restrict phone number input to 10 digits
    var phone = document.getElementById("phone");
    phone.addEventListener("keypress", function(e) {
        var length = phone.value.length;
        if (length > 9 || (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) || (length === 0 && e.which === 48)) {
            e.preventDefault();
        }
    });
});
 document.addEventListener("DOMContentLoaded", function() {
    // Initially hide return date and time fields
    var head = document.getElementById("head");
    var date1 = document.getElementById("date1");
    var time1 = document.getElementById("time1");

    head.style.display = "none";
    date1.style.display = "none";
    time1.style.display = "none";

    // Function to handle trip type change
    var select = document.getElementById("select");
    select.addEventListener("change", function() {
        var tripType = select.value;
        if (tripType === "One Way") {
            // Hide return date and time fields if One Way trip is selected
            head.style.display = "none";
            date1.style.display = "none";
            time1.style.display = "none";
        } else if (tripType === "Rental") {
            // Show choose package dropdown for Rental trip
            document.querySelector(".rental").style.display = "block";
            // Hide return date and time fields for Rental trip
            head.style.display = "none";
            date1.style.display = "none";
            time1.style.display = "none";
        } else {
            // Show return date and time fields for other trip types
            head.style.display = "block";
            date1.style.display = "block";
            time1.style.display = "block";
            // Hide choose package dropdown for other trip types
            document.querySelector(".rental").style.display = "none";
        }
    });

    // Restrict phone number input to 10 digits
    var phone = document.getElementById("phone");
    phone.addEventListener("keypress", function(e) {
        var length = phone.value.length;
        if (length > 9 || (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) || (length === 0 && e.which === 48)) {
            e.preventDefault();
        }
    });
});