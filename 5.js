const axiosRequest = require('axios');
async function callApi() {
    try{
        let response = await axiosRequest.get('https://httpstat.us/404');
        console.log(`Total pages ${response.data.totalPages}`);
    } catch(error) {
        console.log(`Error occurred: ${error}`);
    }
}

callApi()
console.log('Where am I here?');

