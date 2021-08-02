console.log('Hello World!');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // This stops the browser from trying to send the from data
    const formData = new FormData(form); //formData is built into the web browser
    const name = formData.get('name'); // we get the name from the form
    const content = formData.get('content'); // we get the content from the form

    const hoot = {
        name,
        content
    };
});

console.log();