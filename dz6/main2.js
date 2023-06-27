fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {'Content-type' : 'aplication/json'}
}).then(response => response.json()).then(data => console.log(data))