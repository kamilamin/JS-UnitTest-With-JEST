var util = require('./util');

test("Add Two Number", function(){
    var result = util.sum(2,4);
    var expected = 6;
    expect(result).toBe(expected)
})