// You can add JavaScript functionalities here if needed
// Function to filter projects based on search input
function searchProjects() {
    // Get input value and convert to lowercase
    var input = document.getElementById("searchInput").value.toLowerCase();
    // Get all project titles
    var projects = document.getElementsByClassName("project");

    // Loop through all projects
    for (var i = 0; i < projects.length; i++) {
        // Get the project title and convert to lowercase
        var title = projects[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        // Check if the input value matches the project title
        if (title.indexOf(input) > -1) {
            projects[i].style.display = "";
        } else {
            projects[i].style.display = "none";
        }
    }
}

// Event listener for search button click
document.getElementById("searchButton").addEventListener("click", function() {
    searchProjects();
});

// Event listener for keyup event in search input
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    // Check if the enter key is pressed
    if (event.key === "Enter") {
        searchProjects();
    }
});
