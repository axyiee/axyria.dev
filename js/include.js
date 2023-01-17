function loadInclude(elem) {
    const body = (elem.contentDocument.body || elem.contentWindow).innerHTML;
    elem.insertAdjacentHTML("afterend", body);
    elem.remove();
    setSelectedPageOnNavBar();
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

document.addEventListener("DOMContentLoaded", () => {
    const iframes = document.querySelectorAll('iframe[src$=".html"]');
    iframes.forEach((iframe) => {
        iframe.onload = () => loadInclude(iframe);
    });
});
