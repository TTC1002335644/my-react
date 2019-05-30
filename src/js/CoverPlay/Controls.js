import React from 'react';

class Controls extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	
	render(){
		let playClass = (this.props.isPlay === true) ? 'audio-btn-cover audio-stop-cover':' audio-btn-cover audio-play-cover';
		return(
			<div className='audio-control-cover'>
				<div className='audio-fun-cover'>
					<div className='fun-bg play-order'></div>
				</div>
				<div className='btn-group-cover'>
					<div className='audio-btn-cover audio-prev-cover' onClick={this.props.onPrev}></div>
					<div className={playClass} onClick={this.props.onPlay}></div>
					<div className='audio-btn-cover audio-next-cover' onClick={this.props.onNext}></div>
				</div>
				<div className='audio-fun-cover'>
					<div className='fun-bg song-menu-cover'></div>
				</div>
			</div>
		);
	}
	
}

export default Controls;