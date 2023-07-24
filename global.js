const colors = ["rgb(95, 100, 231)", "rgb(72, 182, 142)", "rgb(227, 88, 58)", "rgb(229, 177, 42)"];

window.addEventListener("mousedown", (e) => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color);
  });

let i_link = document.getElementById('info-link');

let i = document.getElementById('info-container');

let c = document.getElementById('close');

// i_link.onclick = function show_info(event){
//     i.style.display = 'block'
//     event.preventDefault();
// }

// c.onclick = function hide_info(){
//     i.style.display = 'none';
// }

// let h_c = document.getElementById('header-container')
// let m_n = document.getElementById('my-name')

// document.onscroll = function() {

//     if(scrollY === 0){
//         h_c.style.backgroundColor = 'transparent';
//         m_n.style.opacity = 0;
//     } else {
//         h_c.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
//         m_n.style.opacity = 1;
//     }
    
// }

