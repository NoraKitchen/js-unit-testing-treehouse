//to run a single js/text file,  'mocha mainText.js'
//but usually will just run 'npm test' or 'mocha' ...think 'mocha test' also works
//this will run all your test files in the test folder
    //make sure the folder is in the same directory as package.json
    //make sure your 'scritpts' 'test' key value is set to 'mocha'

var expect = require("chai").expect;
//introduce a test suite/test group with mocha using describe method
//takes 2 args - string and anon function
//string describes what the suite will cover
//the function is just a wrapper for each unit test/spec

describe("Mocha", function(){
    //each individual unit test is sometimes called a spec
    //each unit test is wrapped in an 'it' function similar to 'describe', with args for descriptor and anon function
    //the function should include all your expectations
    it("should run our tests using npm", function(){
        expect(true).to.be.ok; //ok test if truthy
    })

})