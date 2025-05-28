const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.response)
});
xhr.open('GET', 'https://supersimplebackend.dev/products');
xhr.send();

// URL - uniform Resource Locator  {https://supersimple.dev} backend URL -- this is how we send request to the backend
// 404...404...
// xhr.response -Asynchronise
