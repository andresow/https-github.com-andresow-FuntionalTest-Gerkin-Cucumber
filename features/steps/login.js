var request = require('request');
const { When, Then } = require('cucumber');
var user;

    When('the user with identification {int} presses the facebook login button',function(intput,callback){
        var url='http://backend-fas-uv.herokuapp.com/api/users/'+intput;
            request(url, (err,response, body) => {
                if (err) {
                } else {
                    user=JSON.parse(body);
                    callback();
                    }
                });
            });
            
    Then('the user information will be returned',function(callback){
        console.log(user);
        callback();
        return user;
    })