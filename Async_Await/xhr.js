let loading = 1;
async function imageDisplay() {
    let response = await new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://images3.alphacoders.com/823/82317.jpg', true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            resolve(undefined);
            alert("Error " + e.target.status + " occurred while receiving the document.");
        };
        xhr.send();
    }).then((response) => {
        var blob = response;
        console.log(response);
        document.getElementById("image").src = window.URL.createObjectURL(blob);
    })
}
//setTimeout(imageDisplay, 2000);
imageDisplay();
