var USER_DATA = {
	name: "Wangdu Duntak",
	username: "wduntak",
	image: "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/10392293_10100871791296266_2315349069248703783_n.jpg?oh=65f11351dce1666a56487dbd5a2dfbc1&oe=57526A59"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function(){
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
})

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
})

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function () {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
})

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);