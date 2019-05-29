import React from 'react';

class TrackInfo extends React.Component{
	
	constructor(props) {
	    super(props);
        this.state = {};
	}
	
    render() {
        return (
            <h3 className="audio-title">{this.props.track.name}</h3>
        );
    }
}

export default TrackInfo;