const axiosRequest = require('axios');

axiosRequest.get('https://httpstat.us/404')
            .then(response => {
                console.log(`Total pages ${response.data.totalPages}`);
            })
            .catch(error => {
                console.log(`Error occurred: ${error}`);
            });


