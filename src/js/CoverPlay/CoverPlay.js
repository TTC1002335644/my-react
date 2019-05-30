import React from 'react';
import '../../css/CoverPlay/CoverPlay.css';
import '../../css/Common/Common.css';

class CoverPlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return (
            <div className='info-body'>
                <div className='info-background'></div>
                <div className='song-info'>
                    <div className='back'></div>
                    <div className='song-message-cover'>
                        <div id='song-name-cover'>来自天堂的魔鬼</div>
                        <div id='songer-name-cover'>邓紫棋</div>
                    </div>
                </div>
                <div className='audio-box-cover'>
                    <div className="audio-view-cover">
                        <div className="audio-body-cover">
                            <div className="audio-backs-cover">
                                <div className="audio-this-time-cover">00:00</div>
                                <div className="audio-count-time-cover">04:30</div>
                                <div className="audio-setbacks-cover">
                                    <i className="audio-this-setbacks-cover" style={{width:"50%"}}>
                                        <span className="audio-backs-btn-cover"></span>
                                    </i>
                                    <span className="audio-cache-setbacks"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='audio-control-cover'>
                        <div className='audio-fun-cover'>
                            <div className='fun-bg play-order'></div>
                        </div>
                        <div className='btn-group-cover'>
                            <div className='audio-btn-cover audio-prev-cover'></div>
                            <div className='audio-btn-cover audio-play-cover'></div>
                            <div className='audio-btn-cover audio-next-cover'></div>
                        </div>
                        <div className='audio-fun-cover'>
                            <div className='fun-bg song-menu-cover'></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default CoverPlay;