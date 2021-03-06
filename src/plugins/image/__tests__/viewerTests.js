'use strict';

jest.dontMock('../viewer.js');

var React = require('react/addons'),
	TestUtils = React.addons.TestUtils,
	Viewer = require('../viewer.js');

describe('Image Viewer', function() {

	it('should render an "img" element', function() {
		var elem = TestUtils.renderIntoDocument(
			<Viewer src='foo.bar' />
		);
		var img = TestUtils.findRenderedDOMComponentWithTag(
			elem,
			'img'
		);
		expect(img).toBeDefined();
	});

	it('should render with expected class name', function() {
		var elem = TestUtils.renderIntoDocument(
			<Viewer src='foo.bar' />
		);
		var img = TestUtils.findRenderedDOMComponentWithClass(
			elem,
			'vui-fileviewer-image'
		);
		expect(img).toBeDefined();
	});

	it('should point at "src"', function() {
		var elem = TestUtils.renderIntoDocument(
			<Viewer src='foo.bar' />
		);
		var img = TestUtils.findRenderedDOMComponentWithTag(
			elem,
			'img'
		);
		expect(React.findDOMNode(img).src).toBe('foo.bar');
	});

	it('Calls the progressCallback and passes 100 in as the value', function() {

		var progressFunc = jest.genMockFunction();

		TestUtils.renderIntoDocument(
			<Viewer
				src='test.jpg'
				progressCallback={progressFunc} />
		);

		expect(progressFunc.mock.calls.length).toBe(1);
		expect(progressFunc.mock.calls[0][0]).toBe(100);
	});
});
