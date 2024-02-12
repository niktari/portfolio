// COLORS
let colors = ['rgb(95, 100, 231)', 'rgb(72, 182, 142)', 'rgb(227, 88, 58)', 'rgb(229, 177, 42)', 'rgb(118, 101, 105)']

// HIGHLIGHT
window.onmousedown = () => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color);
  };