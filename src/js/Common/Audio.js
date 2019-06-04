import React from 'react';

class Audio extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <audio id="audio" preload="auto" src={this.props.url}></audio>
        );
    }
}


export default Audio;