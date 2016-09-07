//first example. this has code and chai tests in same file, usually don't do this way


//doesn't want to use everything in chai, just takes the expect method
//short version of: var chai = require('chai'); var expect = chai.expect;
var expect = require('chai').expect;

//pass in value you want to use for comparison, and chain special chai methods to tell chai what you expect the value to be
// expect(true).to.be.false;
//running this code (node textUtilities.js) will throw error 
//AssertionError: expected true to be false
//make it true, and it will not give any feedback at all

//making a function to title case movies, this will test it with 'the great mouse detective'?

function titleCase(title) {
    var words = title.split(" ");

    var titleCasedWords = words.map(function(word){
        return word[0].toUpperCase() + word.substring(1);
    })


    return titleCasedWords.join(" ");
};



//order your tests smaller expectation 
expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");
expect(titleCase('the great mouse detective')).to.equal("The Great Mouse Detective");


