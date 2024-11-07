const axiosRequest = require('axios');
async function callApi() {
    try{
        let response = await axiosRequest.get('http://localhost:8080/api/pokemon?pageNo=0&pageSize=1');
        console.log(`Total pages ${response.data.totalPages}`);
    } catch(error) {
        console.log(`Error occurred: ${error}`);
    }
}

callApi()
console.log('Where am I here?');

