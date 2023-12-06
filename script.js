// your code here
function generateURL() {
            // Get values from the input fields
            var name = document.getElementById("name").value;
            var year = document.getElementById("year").value;

	var quaryString="?name="+encodeURIComponent(name)+"&year="+encodeURIComponent(year)

	document.getElementById("url").textContent="https://localhost:8080/"+ quaryString
}