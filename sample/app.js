'use strict';

var React = require('react'),
	FileViewer = require('../src/fileViewer.js');

var files = [
	{src: 'image1.jpg', name: 'Toronto (JPG large)'},
	{src: 'image2.png', name: 'Winnipeg (PNG medium)'},
	{src: 'image3.gif', name: 'Kitchener (GIF medium)'},
	{src: 'image4.svg', name: 'Canada Map (SVG)'},
	{src: 'audio.mp3', name: 'Audio (MP3)'},
	{src: 'pdf1.pdf', name: 'PDF (Cooking)'},
	{src: 'pdf2.pdf', name: 'PDF (Sample)'},
	{src: 'generic1.abc', name: 'Generic (ABC)'},
	{src: 'largeGeneric.txt', name: 'Generic (TXT)'},
	{src: 'html1.html', name: 'HTML1 (HTML)'},
	{src: 'scrollingHtml.html', name: 'ScrollingHtml (HTML)'}
];

var Main = React.createClass({
	getInitialState: function() {
		return {
			file: null,
			locale: 'en-CA'
		};
	},
	fileSelected: function(event) {
		this.setState({file: files[event.target.selectedIndex - 1]});
	},
	localeSelected: function(event) {
		this.setState({locale: event.target.value});
	},
	logProgress: function(progress) {
		console.log(this.state.file.src + ' - ' + progress + '/100');
	},
	render: function() {
		var viewer = this.state.file ?
			<FileViewer
				progressCallback={this.logProgress}
				src={'files/' + this.state.file.src}
				srcdownload={'files/' + this.state.file.src}
				locale={this.state.locale} /> : null;
		return <div>
			<div className="file-selector">
				<h1>File Viewer Sample Application</h1>
				<label>
					File:
					<select onChange={this.fileSelected}>
						<option value="">-- Select a File --</option>
						{this.props.files.map(function(file) {
							return <option key={file.src}>{file.name}</option>;
						})}
					</select>
				</label>
				<label>
					Locale:
					<select onChange={this.localeSelected}>
						<option value="en-CA">en-CA</option>
						<option value="fr-CA">fr-CA</option>
						<option value="ko-KR">ko-KR</option>
						<option value="ar-SA">ar-SA</option>
					</select>
				</label>
			</div>
			<hr />
			{viewer}
		</div>;
	}
});

React.render(
	<Main files={files} />,
	document.getElementById('placeholder')
);
