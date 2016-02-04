var React     = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect    = require('expect');
var World     = require('./world');

describe('World', function () {
  var testValue = 'test';
  it('has prop "data" equal with '+testValue, function () {
    var worldComponent = TestUtils.renderIntoDocument(<World data={testValue}/>);
    expect(worldComponent.props.data).toBe(testValue);
  });
});
