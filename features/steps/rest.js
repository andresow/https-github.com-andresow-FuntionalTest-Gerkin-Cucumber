var request = require('request');
const { When, Then } = require('cucumber');
const assert = require('assert');
var country;

    When('user wants to get information of Colombian',function(callback){
            request('https://restcountries.eu/rest/v2/name/colombia', (err,response, body) => {
                if (err) {
                    callback(err);
                } else {
                    country=JSON.parse(body);
                    callback();
                    }
                });
            });
            
    Then('the data is returned to the user in JSON format',function(callback){
        console.log(country);
        callback();
        return country;
    })