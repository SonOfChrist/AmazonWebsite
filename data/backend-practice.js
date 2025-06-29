const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    xhr.response
});
xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();

// URL - uniform Resource Locator  {https://supersimple.dev} backend URL -- this is how we send request to the backend
// 404...404...
// xhr.response - asynchronous
// load/response and it means that the response has loaded
