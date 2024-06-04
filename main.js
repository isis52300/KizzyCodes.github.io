function load_left_side() {
    let main_div = document.getElementById("side_left");
    let child = document.createElement('div');
    child.setAttribute('class', "window_hide side_content");
    
    child.appendChild(document.createTextNode("THIS IS A TEST PLEASE WORK"));
    main_div.appendChild(child);
}

function show_relative_coursework() {
    var rc = document.getElementById("relevant_coursework");
    rc.classList.toggle("show");
}