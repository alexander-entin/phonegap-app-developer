function go() {
    let url = document.getElementById('url').value
    if (url.toLowerCase().indexOf('http') !== 0) {
        url = 'http://' + url
    }
    location.href = url
    // document.getElementById('app').src = url
}