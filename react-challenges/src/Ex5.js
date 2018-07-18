import React, { Component } from 'react';

import CallbackButton from './CallbackButton.js';


class Ex5 extends Component {

	render() {
		return (
			<div>
				<CallbackButton buttonCallback={ ()=>{console.log('one')} } />
				<CallbackButton buttonCallback={ ()=>{console.log('two')} } />
			</div>
			)
	}
}


export default Ex5;