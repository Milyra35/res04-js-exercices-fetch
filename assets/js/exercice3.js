window.addEventListener("DOMContentLoaded", function() {
    let url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
    });
})