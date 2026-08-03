const params = new URLSearchParams(location.search);
const payload = params.get("q");

const result = document.getElementById("result");
const textarea = document.getElementById("payload");

if (payload !== null) {
    result.innerHTML = payload;
    textarea.value = payload;
}
