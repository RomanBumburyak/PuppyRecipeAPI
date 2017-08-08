let button = document.querySelector("button")
let mainContent = document.querySelector(".mainContent")



function searchRecipes(){
  fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3")
    .then(function(response) {
      response.json().then(function(data){
        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
          mainContent.innerHTML += `<img src= ${data.results[i].thumbnail}>`


        }

        for (var i = 0; i < 10; i++) {
          data[i]
        }




      })

    })

}
button.addEventListener("click", searchRecipes)

let content = document.querySelector(".content")
// console.log(content);



// fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3")
//   .then(function(response) {
//     response.json().then(function(data){
//       console.log(data);
//     })
//   })
