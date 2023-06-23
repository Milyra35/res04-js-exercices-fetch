window.addEventListener("DOMContentLoaded", function() {
    let url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    let post = "https://jsonplaceholder.typicode.com/posts/1";
    
    fetch(post)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        
        let title = document.querySelector("body article header h1");
        title.innerHTML = result.title;
        
        let article = document.querySelector("body article main p");
        article.innerHTML = result.body;
    });
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        
        for(let i=0; i<result.length; i++)
        {
            let ul = document.querySelector("body article footer ul");
            let li = document.createElement("li");
            let name = document.createElement("p");
            name.innerHTML = result[i].name;
            let comment = document.createElement("p");
            comment.innerHTML = result[i].body;
            
            li.appendChild(name);
            li.appendChild(comment);
            ul.appendChild(li);
        }
    });
})