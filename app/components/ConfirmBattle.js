var React = require('react');

function puke (object) {
	console.log(object);
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> Loading! </p>
		: <div> Confirm Battle!: {puke(props)}</div>
}

module.exports = ConfirmBattle;