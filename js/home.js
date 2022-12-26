function applyColorScheme() {
    const local = localStorage.getItem("theme");
    const media = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = local || (media ? "dark" : "light");
    if (!local) {
        localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
}

function colorSchemeChanger() {
    const element = document.getElementById("theme-selector");
    element.addEventListener("click", () => {
        const theme = localStorage.getItem("theme");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        applyColorScheme();
    });
}

applyColorScheme();
colorSchemeChanger();
