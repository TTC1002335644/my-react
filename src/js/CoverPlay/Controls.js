import React from 'react';

class Controls extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}


	play = ()=>{
		if(this.props.canPlay === true){
			this.props.onPlay();
		}
	};

	render(){
		let playClass = (this.props.isPlay === true && this.props.canPlay === true) ? 'audio-btn-cover audio-stop-cover':' audio-btn-cover audio-play-cover';
		return(
			<div className='audio-control-cover'>
				<div className='audio-fun-cover'>
					<div className='fun-bg play-order'></div>
				</div>
				<div className='btn-group-cover'>
					<div className='audio-btn-cover audio-prev-cover' onClick={this.props.onPrev}></div>
					<div className={playClass} onClick={this.play}></div>
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