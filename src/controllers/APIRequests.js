const api = require('../services/api');

module.exports = {
    async getAccessToken(req,res){
        const data = {
            "grant_type": "client_credentials"
        }
        try {
            await api.get('confirm_dates', data, {
                headers: {
                    'Authorization': 'Basic dGVzdGVpZDp0ZXN0ZXNlbmhh',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                res.status(200).json(response.data);
            });
        } catch (error) {
            console.log("IMPRIMINDO ERRO");
            console.log(error);
        }
        
    },
/*
    async getPublicKey(){
        axios({
            method: 'post',
            url: 'https://testing-fake-server.herokuapp.com/confirm_dates',
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
*/
}