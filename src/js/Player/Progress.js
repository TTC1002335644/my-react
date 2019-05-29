import React from 'react';

class Progress extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    touchMove(e){
        console.log(e);
    }

    render() {
        let progressStyle = {
            // width : this.props.progress
            width : '50%'
        };
        return (
            <div className="audio-setbacks">
                <i className="audio-this-setbacks" style={progressStyle}>
                    <span className="audio-backs-btn" onTouchStart={this.props.onTouchStrat} onClick={this.touchMove} onTouchMove={this.touchMove}></span>
                </i>
                <span className="audio-cache-setbacks"></span>
            </div>
        );

    }
}

export default Progress;