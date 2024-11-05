function getPaymentTokenFromAPI(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({data: 'Successful response from API'});
        });
    }
}

module.exports = getPaymentTokenFromAPI;