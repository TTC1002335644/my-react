import React from 'react';

class Controls extends React.Component{
	
	constructor(props) {
	    super(props);
		console.log(this.props)
	}
	
	
    render() {
		let playStatusClassName = ( this.props.isPlay == true ) ? 'audio-stop' : 'audio-play'
		
        return (
            <div className="audio-btn">
                <div className="audio-select">
                    <div className="audio-prev" onClick={this.props.onPrev}></div>
                    <div className={playStatusClassName} onClick={this.props.onPlay}></div>
                    <div className="audio-next" onClick={this.props.onNext}></div>
                    {/*<div className="audio-menu"></div>*/}
                    {/*<div className="audio-volume"></div>*/}
                </div>
                <div className="audio-set-volume">
                    <div className="volume-box">
                        <i><span></span></i>
                    </div>
                </div>
                <div className="audio-list">
                    <div className="audio-list-head">
                        <p>☺随心听</p>
                        <span className="menu-close">关闭</span>
                    </div>
                    <ul className="audio-inline">
                    </ul>
                </div>
            </div>
        );

    }
}

export default Controls;