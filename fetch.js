//basically it is a function that fetches data from a url and returns a promise
// it is also called as a fetch api, priority queue,  microtask queue

const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) //this will return a promise and we will get the data in the json format which will also take some time to resolve the promise aur reject the promise we again use then method to resolve the promise
    .then(data => console.log(data)) // this will return the data in the json format and we can use this data to display on the screen
    .catch(error => console.log(error));

console.log(response);

