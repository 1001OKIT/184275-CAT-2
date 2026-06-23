function websiteLoaded() {
    console.log("Welcome to 2GoRides");
}

websiteLoaded();
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});