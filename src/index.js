import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Auth Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(request => {
    console.log(request);
    //You can edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log(response);
    //You can edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
