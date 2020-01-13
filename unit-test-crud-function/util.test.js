var addNewItem = require('./util');

test("Add New Item to a list", function(){
    var jsLib = ['React', 'Mobx'];
    var result = addNewItem.addToList(jsLib, 'Jest');
    var expected = ['React', 'Mobx', 'Jest'];
    expect(result).toEqual(expected)
})