function load_divs() {
    let side_left = document.getElementById("side_left");

    side_left.innerHTML = 
        `<div class="window_hide">
            <h2> <u class="text_shadow">Left Side</u> </h2>
        </div>`
    
    let side_right = document.getElementById("side_right");

    side_right.innerHTML =
        `<div class="window_hide">
        <h2><u class="text_shadow">Fun Facts:</u></h2> 
      </div>

      <div class="window_hide side_content">
        <p>Favorite Color: </p>
        <p> Red </p>
        <img class="img-fluid" src="img/red.jpg" alt="Red">
      </div>

      <div class="window_hide side_content">
        <p>Favorite Food: </p>
        <p>Mac N Cheese </p>
        <img class="img-fluid" src="img/mac_n_cheese.jpg" alt="Mac N Chesse">
      </div>

      <div class="window_hide side_content">
        <p>Favorite Candy: </p>
        <p>Mac N Cheese </p>
        <img class="img-fluid" src="img/green_rings.jpg" alt="Green Apple Rings">
      </div>

      <div class="window_hide side_content">
        <p>Favorite Drink: </p>
        <p>Boba </p>
        <img class="img-fluid" src="img/boba.jpg" alt="Boba">
      </div>

      <div class="window_hide side_content">
        <p>Favorite Cartoon: </p>
        <p>Adventure Time </p>
        <img class="img-fluid" src="img/cartoon.jpg" alt="Adventure Time">
      </div>

      <div class="window_hide side_content">
        <p>Favorite Anime: </p>
        <p> Nana </p>
        <img class="img-fluid" src="img/nana.jpg" alt="Nana">
      </div>`

    let page_bottom = document.getElementById("page_bottom");

    page_bottom.innerHTML = 
        `<h1>
            Find Me!
        </h1>
        <p>
            LinkedIn: https://www.linkedin.com/in/isis-dumas/
        </p>
        <p>
            GitHub: https://github.com/isis52300
        </p>
        <p>
            Email: isis.dumas000@gmail.com
        </p>`

    

}

function show_relative_coursework() {
    var rc = document.getElementById("relevant_coursework");
    rc.classList.toggle("show");
}