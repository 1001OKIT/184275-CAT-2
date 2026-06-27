// 2GoRides JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {

        darkModeBtn.addEventListener("click", function () {

            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-white");

            // Cards

            document.querySelectorAll(".card").forEach(function(card){

                card.classList.toggle("bg-dark");
                card.classList.toggle("text-white");

            });

            // Tables

            document.querySelectorAll(".table").forEach(function(table){

                table.classList.toggle("table-dark");

            });

            // Sections

            document.querySelectorAll("section").forEach(function(section){

                section.classList.toggle("bg-dark");
                section.classList.toggle("text-white");

            });

        });

    }

     // LIVE SEARCH
       const searchInput = document.getElementById("searchInput");

    if(searchInput){

        searchInput.addEventListener("keyup", function(){

            let value =
                searchInput.value.toLowerCase();

            let cars =
                document.querySelectorAll(".car-item");

            cars.forEach(function(car){

                let text =
                    car.textContent.toLowerCase();

                if(text.includes(value)){

                    car.style.display="block";

                }

                else{

                    car.style.display="none";

                }

            });

        });

    }

    // CONTACT FORM VALIDATION
  
    const form =
        document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            let name =
                document.getElementById("name").value;

            let email =
                document.getElementById("email").value;

            let message =
                document.getElementById("message").value;

            if(name==="" || email==="" || message===""){

                alert("Please fill in every field.");

                return;

            }

            alert("Message sent successfully!");

            form.reset();

        });

    }

});