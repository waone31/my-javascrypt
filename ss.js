< script >
    document.getElementById("btn").addEventListener("click", doStuff);

function doStuff() {
    var uname = document.getElementById("username").value;
    document.getElementById("username").value = "";
    google.script.run.userClicked("uname");
} <
/script>