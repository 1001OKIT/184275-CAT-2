function websiteLoaded() {
    console.log("Welcome to 2GoRides");
}

websiteLoaded();
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        if (name === "" ||
            email === "" ||
            message === "") {

            alert("Please fill in all fields.");

            event.preventDefault();
        }

    });

}