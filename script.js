const convertLink = link => `http://ezproxy.puc.cl/login?url=${link}`;

// Extracted from: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;  
    }
};

const appendLink = () => {
    const existingElem = document.getElementById("converted-link");
    if (existingElem != null) {
        existingElem.parentElement.removeChild(existingElem);
    }
    const link = document.getElementById("paper-link").value;
    if (!isValidUrl(link)) {
        alert("Link inválido.");
        return;
    }
    const convertedLink = convertLink(link);
    const anchor = document.createElement("a");
    anchor.setAttribute("href", convertedLink);
    anchor.setAttribute("id", "converted-link");
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");
    anchor.innerHTML = convertedLink;
    document.getElementById("converted-link-container").appendChild(anchor);
};