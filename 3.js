const axiosRequest = require('axios');
async function callApi() {
    let response = await axiosRequest.get('http://localhost:8080/api/pokemon?pageNo=0&pageSize=1');
    console.log(`Total pages ${response.data.totalPages}`);
}

callApi()
console.log('Where am I here?');

