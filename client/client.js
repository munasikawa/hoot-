console.log('Hello World!');

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading'); // a reference to the loading class (icon)

loadingElement.style.display = 'none';


form.addEventListener('submit', (event) => {
    event.preventDefault(); // This stops the browser from trying to send the formm data
    const formData = new FormData(form); //formData is built into the web browser, it works by passing in a reference to the forms
    const name = formData.get('name'); // we get the name from the form
    const content = formData.get('content'); // we get the content from the form

    const hoot = {
        name,
        content
    };
    console.log(hoot);
    form.style.display = 'none'; //form is hidden, once 
    loadingElement.style.display = '';

});

