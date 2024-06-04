function load_divs() {
    let side_left = document.getElementById("side_left");

    let child = document.createElement('div');

    child.innerHTML = 
        `<div class="window_hide">
            <h2> <u class="text_shadow">Left Side</u> </h2>
        </div>`
    
    side_left.appendChild(child);
}

function show_relative_coursework() {
    var rc = document.getElementById("relevant_coursework");
    rc.classList.toggle("show");
}