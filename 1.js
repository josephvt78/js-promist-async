const axiosRequest = require('axios');

axiosRequest.get('http://localhost:8080/api/pokemon?pageNo=0&pageSize=1')
            .then(response => {
                console.log(`Total pages ${response.data.totalPages}`);
            })
            .catch(error => {
                console.log(`Error occurred: ${error}`);
            });


