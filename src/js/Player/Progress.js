import React from 'react';

class Progress extends React.Component{
    constructor(props){
        super(props);
        this.state = {
		};
    }
	
	/**
	 * 移动开始事件
	 */
	touchStart =(e)=>{
	    // e.target.className += ' audio-backs-btn-big';
		let pageFirstX = e.touches[0].pageX;
		let parentNode = e.target.parentNode.parentNode;
		let parentWidth = parentNode.offsetWidth;
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
    touchMove = (e) =>{
		let hasDoneWidth = this.state.hasDoneWidth + e.touches[0].pageX - this.state.pageFirstX;
		if(hasDoneWidth <= this.state.parentWidth){
			let percentDone = ((hasDoneWidth / this.state.parentWidth) * 100).toFixed(2) + '%';
			this.props.updateProgress(percentDone);

		}
    }
	
	/**
	 * 移动事件完毕
	 */
	touchEnd = (e) => {
	    // e.target.setAttribute('class' , e.target.getAttribute('class').replace(' audio-backs-btn-big' ,''));
		let hasDoneWidth = e.target.parentNode.offsetWidth; //已听的进度
		let secondDone = ((hasDoneWidth / this.state.parentWidth) * (this.props.duration / 1000) );
		let audio = document.getElementById('audio');
		audio.currentTime = secondDone;
		this.props.onTouchEnd();
	}

    render() {
        let progressStyle = {
            width : this.props.progress
        };
        return (
            <div className="audio-setbacks">
                <i className="audio-this-setbacks" style={progressStyle}>
                    <span className="audio-backs-btn"
					 onTouchStart={this.touchStart}
					 onTouchMove={this.touchMove}
					 onTouchEnd={this.touchEnd}
					 >
					 </span>
                </i>
                <span className="audio-cache-setbacks"></span>
            </div>
        );

    }
}

export default Progress;