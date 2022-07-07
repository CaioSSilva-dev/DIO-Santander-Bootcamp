const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
function cats(){
    try {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat').src = data[0].url
        })
    }
    catch (error) {
        console.log(error)
    }
}
cats()