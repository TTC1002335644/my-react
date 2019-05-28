import React from 'react';

class Cover extends React.Component{
	constructor(props) {
	    super(props);
	}
	
    render() {
        let coverBack = {
            backgroundImage:`url(` + this.props.cover.album.picUrl + `)`
        };
        return (
            <div className="audio-cover" style={coverBack}></div>
        );
    }
}

export default Cover;