async function analyseSEO() {
    const url = document.getElementById('urlInput').value;
    const response = await fetch(`/analyse?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
}