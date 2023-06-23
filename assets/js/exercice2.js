window.addEventListener("DOMContentLoaded", function() {
    let url = "https://jsonplaceholder.typicode.com/users/1";
    let urlTwo = "https://jsonplaceholder.typicode.com/posts?userId=1";
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        
        // Display the name, email and website of the user
        let dl = document.querySelector("body dl:first-of-type");
        let dt = document.createElement("dt");
        dt.innerHTML = "Nom";
        let dd = document.createElement("dd");
        dd.innerHTML = result.name;
        // dt.appendChild(dd);
        dl.appendChild(dt);
        dl.appendChild(dd);
        
        let dtEmail = document.createElement("dt");
        dtEmail.innerHTML = "Email";
        let ddEmail = document.createElement("dd");
        ddEmail.innerHTML = result.email;
        // dt.appendChild(dd);
        dl.appendChild(dtEmail);
        dl.appendChild(ddEmail);
        
        let dtWebsite = document.createElement("dt");
        dtWebsite.innerHTML = "Site internet";
        let ddWebsite = document.createElement("dd");
        ddWebsite.innerHTML = result.website;
        // dt.appendChild(dd);
        dl.appendChild(dtWebsite);
        dl.appendChild(ddWebsite);
    });
    
    fetch(urlTwo)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        
        // Display list of articles from her posts
        for(let i=0; i<result.length; i++)
        {
            let posts = document.querySelector("body dl:nth-of-type(2)");
            let dt = document.createElement("dt");
            dt.innerHTML = result[i].title;
            dt.style.fontWeight = "bold";
            posts.appendChild(dt);
            
            let dd = document.createElement("dd");
            dd.innerHTML = result[i].body;
            posts.appendChild(dd);
        }
    });
})