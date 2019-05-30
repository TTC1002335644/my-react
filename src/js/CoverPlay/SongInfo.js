import React from 'react';

class SongInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return(
			<div className='song-info'>
				<div className='back'></div>
				<div className='song-message-cover'>
					<div id='song-name-cover'>{this.props.songInfo.name}</div>
					<div id='songer-name-cover'>{this.props.songInfo.artists.name}</div>
				</div>
			</div>
		);
	}
	
}

export default SongInfo;