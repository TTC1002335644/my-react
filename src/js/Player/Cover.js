import React from 'react';

class Cover extends React.Component{
    constructor(props) {
	    super(props);
	    this.state = {};
	}
	
    render() {
        let coverBack = {
            backgroundImage:`url(` + this.props.cover.album.picUrl + `)`
        };
        return (
            <div className="audio-cover" style={coverBack} onClick={this.props.onClick}></div>
        );
    }
}

export default Cover;