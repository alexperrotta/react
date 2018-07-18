import React, { Component } from 'react';

import Header from './Header.js';


class Ex4 extends Component {

	render() {
		return (
			<div>
				<Header h1Text="this is the first header"/>
				<Header h1Text="2" />
				<Header h1Text="3" />
			</div>
			)
	}
}


export default Ex4;