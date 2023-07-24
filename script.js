let p_link = document.getElementById('nav-projects');
let p = document.getElementById('projects');

let s_link = document.getElementById('nav-sandbox');
let s = document.getElementById('sandbox');

let links = document.querySelectorAll('a:not(#information a)');

let h_links = document.querySelectorAll('header a');

let h = document.getElementById('header-container');

let spiral_elem = document.getElementById('spiral');

let s_h = document.getElementById('show-hide');

let circles_elem = document.querySelectorAll('.circle')


s_link.onclick = function show_sandbox(e){

    p.style.display = 'none';
    s.style.display = 'flex';
    s.style.opacity = '1';

    this.style.opacity = '1';
    this.style.borderBottom = '1px dashed var(--ecru)';

    p_link.style.opacity = '0.5';
    p_link.style.borderBottom = '0px dashed var(--ecru)';

    document.body.style.backgroundColor = 'var(--black)';
    document.body.style.color = 'var(--ecru)';

    h.style.backgroundColor = 'var(--black)';

    for(link of links){
        link.style.color = 'var(--ecru)';   
    }

    for(h_link of h_links){
        h_link.style.borderBottom = '1px dashed transparent';

        h_link.onmouseover = function() {
            this.style.borderBottom = '1px dashed var(--ecru)';
        }

        h_link.onmouseleave = function() {
            this.style.borderBottom = '1px dashed transparent';
        }
    }
    
    e.preventDefault();
}

p_link.onclick = function show_projects(e){

    p.style.display = 'flex';
    s.style.display = 'none';

    this.style.opacity = '1';
    this.style.borderBottom = '1px dashed var(--black)';

    s_link.style.opacity = '0.5';
    s_link.style.borderBottom = '0px dashed var(--black)';

    document.body.style.backgroundColor = 'var(--ecru)';
    document.body.style.color = 'var(--black)';

    h.style.backgroundColor = 'var(--ecru)';

    for(link of links){
        link.style.color = 'var(--black)';
    }
    
    for(h_link of h_links){
        h_link.style.borderBottom = '1px dashed transparent';

        h_link.onmouseover = function() {
            this.style.borderBottom = '1px dashed var(--black)';
        }

        h_link.onmouseleave = function() {
            this.style.borderBottom = '1px dashed var(--ecru)';
        }
    }

    e.preventDefault();
}

p_link.onmouseover = function p_onhover(){

    if(p.style.display === 'none'){
        p_link.style.opacity = '1'
        p_link.style.borderBottom = '1px dashed var(--ecru)';
    }
}

p_link.onmouseleave = function p_offhover(){

    if(p.style.display === 'none'){
        p_link.style.opacity = '0.5'
        p_link.style.borderBottom = '0px dashed var(--black)';
    }
}

s_link.onmouseover = function s_onhover(){

    if(s.style.display === 'none'){
        s_link.style.opacity = '1'
        s_link.style.borderBottom = '1px dashed var(--black)';
    }
}

s_link.onmouseleave = function s_offhover(){

    if(s.style.display === 'none'){
        this.style.opacity = '0.5'
        this.style.borderBottom = '0px dashed var(--black)';
    }
} 

function show_hide_spiral(){
    spiral_elem.classList.toggle("hide-spiral");

    if (spiral_elem.classList.contains("hide-spiral")) { 
        s_h.innerHTML = "Show Animation";

        for(circle_elem of circles_elem){
            circle_elem.style.display = 'none';
        }
    } 
    else if (spiral_elem.classList.contains("show-spiral")) { 
        s_h.innerHTML = "Hide Animation";

    for(circle_elem of circles_elem){
        circle_elem.style.display = 'flex';
        }

    }
}