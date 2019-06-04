import React from 'react';
import CommonTime from '../Common/CommonTime';

class Time extends CommonTime{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="audio-count-time">{this.state.now}</div>
        );

    }
}

export default Time;