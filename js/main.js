// COLORS
let colors = ['rgb(255, 73, 1)', 'rgb(2, 119, 199)', 'rgb(170, 203, 223)', 'rgb(220, 227, 250)', 'rgb(136, 185, 180)']

// HIGHLIGHT
window.onmousedown = () => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color);
  };
