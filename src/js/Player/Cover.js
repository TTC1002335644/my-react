import React from 'react';

class Cover extends React.Component{
    render() {
        let coverBack = {
            backgroundImage:`url('http://singerimg.kugou.com/uploadpic/softhead/200/20161209/20161209164303152140.jpg')`
        };
        return (
            <div className="audio-cover" style={coverBack}></div>
        );
    }
}

export default Cover;