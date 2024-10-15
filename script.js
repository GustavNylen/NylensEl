function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        // If the sidebar is open, close it
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        sidebar.classList.remove("open");
    } else {
        // If the sidebar is closed, open it
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        sidebar.classList.add("open");
    }
}
