window.addEventListener("DOMContentLoaded", function() {
    let url = "https://jsonplaceholder.typicode.com/users";
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        
        for (let i=0; i<result.length; i++)
        {
            let ul = document.querySelector("body ul");
            let li = document.createElement("li");
            li.innerHTML = result[i].name;
            ul.appendChild(li);
        }
    });
})