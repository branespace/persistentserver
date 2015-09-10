"use strict";

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var server = require(__dirname + '/../lib/server');

describe('server tests', function () {
    it('should add notes on post', function (done) {
        chai.request('localhost:3000')
            .post('/notes')
            .send(JSON.stringify({"body": "toast"}))
            .end(function (err, res) {
                expect(err).to.be.equal(null);
                expect(res.status).to.be.equal(201);
                expect(res.text).to.be.eql('http://localhost:3000/notes/1');
                done();
            });
    });
    it('should return notes on get', function (done) {
        chai.request('localhost:3000')
            .get('/notes/1')
            .end(function (err, res) {
                expect(err).to.be.equal(null);
                expect(res.status).to.be.equal(200);
                expect(res.text).to.be.eql(JSON.stringify({"body": "toast"}));
                done();
            });
    });
    it('should replace notes on patch', function (done) {
        chai.request('localhost:3000')
            .patch('/notes/1')
            .send(JSON.stringify({"body": "toast2"}))
            .end(function (err, res) {
                chai.request('localhost:3000')
                    .get('/notes/1')
                    .end(function (err2, res2) {
                        expect(err).to.be.equal(null);
                        expect(res.status).to.be.equal(204);
                        expect(res.text).to.be.not.eql(res2.text);
                        done();
                    });
            });
    });
    it('should replace notes on put', function (done) {
        chai.request('localhost:3000')
            .put('/notes/1')
            .send(JSON.stringify({"body": "toast2"}))
            .end(function (err, res) {
                chai.request('localhost:3000')
                    .get('/notes/1')
                    .end(function (err2, res2) {
                        expect(err).to.be.equal(null);
                        expect(res.status).to.be.equal(204);
                        expect(res.text).to.be.not.eql(res2.text);
                        done();
                    });
            });
    });
    it('should remove notes on delete', function (done) {
        chai.request('localhost:3000')
            .delete('/notes/1')
            .end(function (err, res) {
                chai.request('localhost:3000')
                    .get('/notes/1')
                    .end(function (err2, res2) {
                        expect(err).to.be.equal(null);
                        expect(res.status).to.be.equal(204);
                        expect(res.text).to.be.not.eql(res2.text);
                        done();
                    });
            });
    });
    after(function(){
       server.close();
    });
});