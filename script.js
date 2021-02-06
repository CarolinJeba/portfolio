let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
}
else {
    setTheme(theme);
}


let themeIcons = document.getElementsByClassName('theme-icon');

for (let i = 0; themeIcons.length > i; i++) {
    themeIcons[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('theme icon clicked', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'main.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    localStorage.setItem('theme', mode);

}