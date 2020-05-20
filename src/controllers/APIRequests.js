const axios = require('axios');

module.exports = {
    async getAcessToken(){
        axios({
            method: 'post',
            url: '#TODO',
            headers: {
                'Authorization': 'Basic dGVzdGVpZDp0ZXN0ZXNlbmhh',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "grant_type": "client_credentials"
            })
        }).then(function (response) {
            return response;
        });
    },

    async getPublicKey(){
        axios({
            method: 'post',
            url: '#TODO',
            headers: {
                'Authorization': 'Basic dGVzdGVpZDp0ZXN0ZXNlbmhh'
            },
            data: {
                grant_type: "client_credentials"
            }
        }).then(function (response) {
            return response;
        });
    }
}