import React from 'react';
import TrackInfo from "./TrackInfo";
import Cover from "./Cover";
import Time from "./Time";
import Progress from "./Progress";
import Controls from "./Controls";

/**
 * 播放器组件
 */
class Player extends React.Component{

    constructor(props){
        super(props);
        this.setState({
            tracks : this.getDefaultProps(),
            data : this.getInitialState()
        });
    }

    getDefaultProps(){
        //歌单列表
        return {
            "tracks": [
                {
                    "name": "元日",
                    "artists": [
                        {
                            "name": "于文华",
                        }
                    ],
                    "album": {
                        "name": "国学唱歌集",
                        "picUrl": "http://p3.music.126.net/SR9eFEjRB0NsscxN7-fHMw==/3344714372906000.jpg",
                    },
                    "duration": 136829,
                    "mp3Url": "http://m2.music.126.net/rUcfqqZbq7TIfJeAHfTrkw==/3376600210116829.mp3"
                },
                {
                    "name": "元日 ",
                    "artists": [
                        {
                            "name": "清弄",
                        }
                    ],
                    "album": {
                        "name": "热门华语261",
                        "picUrl": "http://p4.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg",
                    },
                    "duration": 109000,
                    "mp3Url": "http://m2.music.126.net/jwwZVlWJ78HEarft42uKUQ==/7906588115920636.mp3"
                },
                {
                    "name": "青龙·花木苍苍",
                    "artists": [
                        {
                            "name": "五色石南叶",
                        }
                    ],
                    "album": {
                        "name": "热门华语234",
                        "picUrl": "http://p4.music.126.net/tHAfnugCElS93EDp5cHLIw==/8909342719897560.jpg",
                    },
                    "duration": 295575,
                    "mp3Url": "http://m2.music.126.net/rnq_W32zFX_utQbBhE0xkg==/8934631487358481.mp3"
                }]
        };
    }


    getInitialState(){
        return {
            currentTrackLen: this.props.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: true, //true为播放状态，false为暂停状态
        };
    }


    render (){
        return (
            <div className="audio-box">
                <div className="audio-container">
                    {/*封面*/}
                    <Cover />
                    <div className="audio-view">
                        {/*音乐信息*/}
                        <TrackInfo track={this.props.tracks[this.state.currentTrackIndex]}/>
                        <div className="audio-body">
                            <div className="audio-backs">
                                {/*时间显示*/}
                                <Time />
                                {/*进度条*/}
                                <Progress />
                            </div>
                        </div>
                        {/*控制按钮*/}
                        <Controls />
                        <audio id="audio"></audio>
                    </div>
                </div>
            </div>
        );
    }

}

export default Player;