let expect = require('chai').expect;
let request = require('request');

describe('repo and response', function() {
    describe ('Repo fetch', function() {
        it('status', function(done){
            // timeout for api call
            this.timeout(10000);
            request('http://localhost:3001/user/github/repo/thundrod', function(error, response, body) {
                expect(response.statusCode).to.equal(200)
                done();
            });
        });
        it('response', function(done) {
            // timeout for api call
            this.timeout(10000);
            request('http://localhost:3001/user/github/repo/thundrod', function(error, response, body) {
                expect(response).to.be.a("object");
                done();
            });
        });
    });
});