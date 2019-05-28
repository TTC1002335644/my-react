import React from 'react';

class Controls extends React.Component{
    render() {
        return (
            <div className="audio-btn">
                <div className="audio-select">
                    <div className="audio-prev"></div>
                    <div className="audio-play"></div>
                    <div className="audio-next"></div>
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