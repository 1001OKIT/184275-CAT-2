document.addEventListener("DOMContentLoaded", function () {
// DARK 
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    if (darkModeBtn) {
        darkModeBtn.innerHTML = "Light Mode";
    }
}

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            darkModeBtn.innerHTML = "Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            darkModeBtn.innerHTML = "Dark Mode";

        }

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
// CONTACT FORM
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

            document.getElementById("successMessage").classList.remove("d-none");

            form.reset();

        });

    }

});