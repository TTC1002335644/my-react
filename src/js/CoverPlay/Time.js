import React from 'react';
import CommonTime from '../Common/CommonTime';

class Time extends CommonTime{
	constructor(props){
		super(props);
	}

	
	
	render(){
		return(
			<div className="audio-view-cover">
				<div className="audio-body-cover">
					<div className="audio-backs-cover">
						<div className="audio-this-time-cover">{this.state.now}</div>
						<div className="audio-count-time-cover">{this.dealWithTime(this.state.duration , false)}</div>
						<div className="audio-setbacks-cover" onClick={this.progressClick}>
							<i className="audio-this-setbacks-cover" style={{width : this.props.progress}}>
								<span 
									className="audio-backs-btn-cover"
									onTouchStart={this.touchStart}
									onTouchMove={this.touchMove}
									onTouchEnd={this.touchEnd}
								>
								</span>
							</i>
							<span className="audio-cache-setbacks"></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Time;