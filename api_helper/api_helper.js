import fetch from 'node-fetch';


async function getRequest (url) {
    try {
        const getResponse = await fetch(url);
        const getdata = await getResponse.json();
        return getdata;
    }
    catch (error) {
        console.error('Error during GET request:', error);
        throw error;
    }
    
}

// console.log(getRequest(baseUrl))


async function postRequest (url, body, headers = {}) {
    try {
        const postResponse = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        const postData = await postResponse.json();
        return postData;
    }
    catch (error) {
        console.error('Error during POST request:', error);
        throw error;
    }
}
    

export {getRequest, postRequest};
