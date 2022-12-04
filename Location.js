const formElement = document.querySelector('form');

if (formElement) {
    formElement.addEventListener('submit', (event) => {
        const formData = new FormData();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        event.preventDefault();
    })
}

