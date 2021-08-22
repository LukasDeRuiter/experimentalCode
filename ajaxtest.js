document.getElementById("clickBtn").addEventListener('click', function() {
    changeTitle();
})

function changeTitle() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("box").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();
}