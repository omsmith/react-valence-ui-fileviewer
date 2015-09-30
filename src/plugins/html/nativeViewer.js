'use strict';

var React = require('react'),
	GenericViewer = require('../generic/viewer.js');

var NativeViewer = React.createClass({
	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},
	getInitialState: function() {
		return { height: null };
	},
	handleResize: function() {
		var rect = React.findDOMNode(this.refs.wrapper).getBoundingClientRect();
		var height = (window.innerHeight - rect.top);
		this.setState({height: height});
	},
	render: function() {
		var style = this.state.height ? { height: this.state.height } : null;
		return <iframe
			src={this.props.src}
			type="application/html"
			className="vui-fileviewer-html-native"
			ref="wrapper"
			style={style}>
			<GenericViewer {...this.props} />;
		</iframe>;
	}
});

module.exports = NativeViewer;