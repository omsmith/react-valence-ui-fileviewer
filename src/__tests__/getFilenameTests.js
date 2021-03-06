'use strict';

jest.dontMock('../getFilename.js');

var getFilename = require('../getFilename.js');

describe('GetFilename', function() {

	[undefined, null, ''].forEach(function(contentDisposition) {
		it('should return full path if content-disposition missing ' + contentDisposition, function() {
			var filename = getFilename('full.path', contentDisposition);
			expect(filename).toEqual('full.path');
		});
	});

	it('should return path after last slash if content-disposition missing', function() {
		var filename = getFilename('full/path.foo');
		expect(filename).toEqual('path.foo');
	});

	it('should return path if content-disposition invalid', function() {
		var filename = getFilename('path.foo', 'invalid');
		expect(filename).toEqual('path.foo');
	});

	[
		'filename="foo.bar"',
		'filename*=utf8\'\'foo.bar; filename="foo.bar"',
		'filename*=utf8\'\'foo.bar;',
		'filename*=iso-8859-1\'\'foo.bar;',
		'filename*=utf8\'\'foo.bar',
		'inline; filename="foo.bar"',
		'inline; filename*=utf8\'\'foo.bar; filename="foo.bar"',
		'inline; filename*=utf8\'\'foo.bar;',
		'inline; filename*=utf8\'\'foo.bar'
	].forEach(function(contentDisposition) {
		it('should return filename "' + contentDisposition + '"', function() {
			var filename = getFilename(undefined, contentDisposition);
			expect(filename).toEqual('foo.bar');
		});
	});

	it('should URL-decode the filename', function() {
		var filename = getFilename(undefined, 'filename*=utf8\'\'foo%20space%2Fslash%2B.bar;');
		expect(filename).toEqual('foo space/slash+.bar');
	});

});
