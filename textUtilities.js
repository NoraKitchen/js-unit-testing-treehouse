
//doesn't want to use everything in chai, just takes the expect method
//save as var chai = require('chai'); var expect = chai.expect;
var expect = require('chai').expect;

//pass in value you want to use for comparison, and chain special chai methods to tell chai what you expect the value to be
// expect(true).to.be.false;
//running this code (node textUtilities.js) will throw error 
//AssertionError: expected true to be false
//make it true, and it will not give any feedback at all

//making a function to title case movies, this will test it with 'the great mouse detective'?

function titleCase (title) {
    return title;
};



//want it to be a string
expect(titleCase('the great mouse detective')).to.be.a('string');
