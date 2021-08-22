document.getElementById("clickBtn").addEventListener('click', function() {
    changeTitle();
})

function changeTitle() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        } else if (this.readyState === 4) {
            console.log("could not find data");

        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    xhttp.send();
}


/* tried with "information.json" , because of safety issues local files are not allowed this way, only when requesting
 from a server */