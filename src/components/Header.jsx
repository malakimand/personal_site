import React from 'react'


	const style = {
		header: {
		  padding: '50px',
		  textAlign: 'center',
		  background: '#1abc9c',
		  color: 'white',
		  fontSize: '30px'
		}
	}

class Header extends React.Component {



	render() {
		return(
			<div style={style.header}>
				Daniel Malakiman
			</div>
			)
	}
}

export default Header