window.addEventListener("DOMContentLoaded", function() {
    let user = "https://jsonplaceholder.typicode.com/users/1";
    let usersAlbums = "https://jsonplaceholder.typicode.com/users/1/albums";
    let photos = "https://jsonplaceholder.typicode.com/albums/";
    
    fetch(usersAlbums)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        for(let i=0; i<result.length; i++)
        {
            let albumId = result[i].id;
            let albumPhoto = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
            
            fetch(albumPhoto)
            .then(function(response) {
                return response.json();
            })
            .then(function(albumPhoto) {
                console.log(albumPhoto);
                
                let main = document.querySelector("body main");
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                li.innerHTML = result[i].title;
                ul.appendChild(li);
                main.appendChild(ul);
                
                let secondUl = document.createElement("ul");
                let secondLi = document.createElement("li");
                let img = document.createElement("img");
                img.setAttribute("src", albumPhoto[i].thumbnailUrl);
                secondLi.appendChild(img);
                secondUl.appendChild(secondLi);
                li.appendChild(secondUl);
            });
        }
    });
    
    fetch(user)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        // console.log(result);
        let username = document.querySelector("body header");
        let h1 = document.createElement("h1");
        h1.innerHTML = "Albums de ";
        let span = document.createElement("span");
        span.innerHTML = result.name;
        h1.appendChild(span);
        username.appendChild(h1);
    });
})