// Tab Switching JS code
document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links and panes
            tabLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            // Add active class to clicked link
            this.classList.add('active');

            // Add active class to corresponding pane
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
        });
    });
});


// Date & Time Picker JS code
document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#start-date", {
        dateFormat: "m/d/Y", // Customize the date format here
    });

    flatpickr("#end-date", {
        dateFormat: "m/d/Y", // Customize the date format here
    });

    document.getElementById('dateForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const startDateInput = document.getElementById('start-date').value;
        const startDateParts = startDateInput.split('/');
        
        console.log("Start Date - Month:", startDateParts[0]);
        console.log("Start Date - Day:", startDateParts[1]);
        console.log("Start Date - Year:", startDateParts[2]);
        
        const endDateInput = document.getElementById('end-date').value;
        const endDateParts = endDateInput.split('/');
        
        console.log("End Date - Month:", endDateParts[0]);
        console.log("End Date - Day:", endDateParts[1]);
        console.log("End Date - Year:", endDateParts[2]);
        
        // Additional code to handle the split date parts as needed
    });
});