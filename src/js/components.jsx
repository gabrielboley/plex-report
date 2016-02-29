var React = require('react');
// var ReactDOM = require('react-dom');

var tile = React createClass ({
	render: function(){
		var data = this.props.data;
		return (
			<p>{data[0]['title']}</p>
		)	
	}
})

ReactDOM.render(
  <tile />,
  document.getElementById('movie-list')
);