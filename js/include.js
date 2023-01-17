function loadInclude(elem) {
    const body = (elem.contentDocument.body || elem.contentWindow).innerHTML;
    elem.insertAdjacentHTML("afterend", body);
    elem.remove();
}

function setSelectedPageOnNavBar() {
    if (document.querySelector("nav ol li.selected")) {
        return;
    }
    const endpoint = window.location.pathname;
    const entry = endpoint.substring(1, endpoint.length);
    const path = entry == "" ? "home" : entry.split(".")[0];
    const elem = document.querySelector(`nav ol li[data-path="${path}"]`);
    elem && elem.classList.add("selected");
}

function navTooltip() {
    const items = document.querySelectorAll("nav ol li[data-path]");
    items.forEach((item) => {
        const capitalizedDataPath = item.dataset.path.charAt(0).toUpperCase() + item.dataset.path.slice(1);
        item.insertAdjacentHTML("afterbegin", `<span class="tooltip">${capitalizedDataPath}</span>`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const iframes = document.querySelectorAll('iframe[src$=".html"]');
    iframes.forEach((iframe) => {
        iframe.onload = () => loadInclude(iframe);
    });
    const last = iframes[iframes.length - 1];
    last.onload = () => {
        loadInclude(last);
        setSelectedPageOnNavBar();
        navTooltip();
    };
});
