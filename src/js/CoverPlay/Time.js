import React from 'react';

class Time extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			now : '00:00',
			duration : 0,
			audio : null,
			hasCanPlay : false
		};
		
	}
	
	componentDidMount(){
	    this.interval = setInterval(
	        () => this.getDuration() , 800
	    );
		
		this.updateTime = setInterval(
	        () => this.tick() , 500
	    );
	}
	
	/**
	 * 清除定时器
	 */
	componentWillUnmount(){
	    clearInterval(this.interval);
	    clearInterval(this.updateTime);
	}
	
	
	/**
	 * 获取音频当前时间
	 */
	tick(){
	    if(this.state.hasCanPlay === true && this.props.playStatus === true){
	        this.setState((prevState) =>({
	            // now : this.timeCover(this.state.audio.currentTime)
	            now : this.timeCover(this.audio.currentTime)
	        }));
	    }
	}
	
	 /**
	 * 获取时间
	 * @returns {string}
	 */
	timeCover(now){
	    /**
	     * 到时间了，就下一首时间
	     */
	    // if(now > this.state.duration && this.state.audio.ended === true){
	    if(now >= this.state.duration){
	        this.props.onNext();
	    }
	    return this.dealWithTime(now , true);
	}
	
	/**
	 * 处理时间
	 */
	dealWithTime(time , isUpdateProgress){
		let minutes = Math.floor(time / 60);
		let seconds = Math.floor(time - (minutes * 60));
		if(minutes === 0){
			 minutes = '00';
		}else if(minutes < 10){
			minutes = '0' + minutes;
		}
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		
		if(isUpdateProgress === true){
			this.props.updateProgress(
				( (time / this.state.duration) * 100).toFixed(2) + '%'
			);
		}
		return minutes + ':' + seconds;
	}
	
	/**
	 * 获取音频总时长
	 */
	getDuration(){
		let audio = document.getElementById('audio');
		if(audio){
			audio.load();
			audio.oncanplay = ()=>{
				let duration = (audio.duration === 0) ? this.props.songInfo.duration : audio.duration;
				this.setState({
					duration : duration,
					audio : audio,
					hasCanPlay : true,
				});
				this.audio = audio;
				clearInterval(this.interval);
			}
		}
	}
	
	
	/**
	 * 移动开始事件
	 */
	touchStart =(e)=>{
		if(this.state.hasCanPlay === false){
			return;
		}
		let pageFirstX = e.touches[0].pageX;
		let parentNode = e.target.parentNode.parentNode;
		let parentWidth = parentNode.offsetWidth;//总进度宽度
		let hasDoneWidth = e.target.parentNode.offsetWidth; //已听的进度
		this.setState({
			parentWidth : parentWidth,//总进度条的宽度
			pageFirstX : pageFirstX,//一开始滑块的pageX
			hasDoneWidth : hasDoneWidth, //未移动前的已听宽度
			moveDoneWidth : hasDoneWidth, //移动过程中更新的已听进度
		} , ()=>{
			this.props.onTouchStrat()
		});
	}
	
	/**
	 * 移动过程事件
	 */
	touchMove =(e)=>{
		let hasDoneWidth = this.state.hasDoneWidth + e.touches[0].pageX - this.state.pageFirstX;
		if(hasDoneWidth <= this.state.parentWidth){
			let percentDone = ((hasDoneWidth / this.state.parentWidth) * 100).toFixed(2) + '%';
			this.props.updateProgress(percentDone);
		}
	}
	
	/**
	 * 移动事件完毕
	 */
	touchEnd = (e) =>{
		let hasDoneWidth = e.target.parentNode.offsetWidth; //已听的进度
		let secondDone = ( ( hasDoneWidth / this.state.parentWidth) * this.state.duration );
		this.updateAudioCurrentTime(secondDone);
	}
	
	/**
	 * 进度条点击
	 */
	progressClick =(e) =>{
		if(this.state.hasCanPlay === false){
			return;
		}
		let targetPosition = e.target.getBoundingClientRect();
		let eWidth = targetPosition.width;
		let ePageX = targetPosition.x;
		let currentPosition = e.pageX;
		let secondDone = ( ( currentPosition - ePageX ) / eWidth ) * this.state.duration ;
		this.updateAudioCurrentTime(secondDone);
	}
	
	/**
	 * 更新播放状态和播放开始时间
	 */
	updateAudioCurrentTime(secondDone){
		if(secondDone){
			try{
				// this.state.audio.currentTime = secondDone.toFixed(3);
				this.audio.currentTime = secondDone.toFixed(3);
			}catch(error){
				this.props.onTouchEnd();
			}
		}
		this.props.onTouchEnd();
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