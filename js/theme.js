function applyColorScheme() {
    const local = localStorage.getItem("theme");
    const theme = local || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (!local) {
        localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
}

function colorSchemeChanger() {
    const elements = document.getElementsByClassName("theme-selector");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", () => {
            const theme = localStorage.getItem("theme");
            localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
            applyColorScheme();
        });
    }
}

applyColorScheme();
setTimeout(colorSchemeChanger, 500);
