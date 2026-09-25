const button = document.getElementById("myButton");
var r = document.querySelector(':root');
var darkMode = false 

button.addEventListener("click", () => {
    if(!darkMode) {
        r.style.setProperty('--header1', '#bbb');
        r.style.setProperty('--fancy-text', '#000');
        r.style.setProperty('--offer-border', '#333');
        r.style.setProperty('--offer-bg', '#060606');
        r.style.setProperty('--table-border', '#0e0e0e');
        r.style.setProperty('--th-color', '#999');
        r.style.setProperty('--button-gradient-end', '#444');
        r.style.setProperty('--button-hover-border', '#555');
        darkMode = true;
    }else {
        r.style.setProperty('--header1', '#444');
        r.style.setProperty('--fancy-text', '#fff');
        r.style.setProperty('--offer-border', '#ccc');
        r.style.setProperty('--offer-bg', '#fafafa');
        r.style.setProperty('--table-border', '#f1f1f1');
        r.style.setProperty('--th-color', '#777');
        r.style.setProperty('--button-gradient-end', '#bbb');
        r.style.setProperty('--button-hover-border', '#aaa');
        darkMode = false;
    }
})