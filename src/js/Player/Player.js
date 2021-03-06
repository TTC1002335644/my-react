import React from 'react';
import '../../css/index/audio.css';
import TrackInfo from "./TrackInfo";
import Cover from "./Cover";
import Time from "./Time";
import Progress from "./Progress";
import Controls from "./Controls";
import Audio from '../Common/Audio';
import CommonPlay from '../Common/CommonPlay';

/**
 * 播放器组件
 */
class Player extends CommonPlay{
    constructor(props){
        super(props);
		// let songList = this.getInitSongLists();
        // this.state = {
        //     tracks : songList
        // };
		// this.state = this.getInitSongIndex();
		// this.state.tracks = songList;
    }

    getInitSongLists(){
        //歌单列表
        return [
                {
                    "name": "可惜没如果--林俊杰",
                    "artists": [
                        {
                            "name": "林俊杰",
                        }
                    ],
                    "album": {
                        "name": "流行歌曲",
                        "picUrl": "http://singerimg.kugou.com/uploadpic/softhead/200/20161209/20161209164303152140.jpg",
                    },
                    "duration": 294000,
                    "mp3Url": "http://www.ytmp3.cn/down/49138.mp3"
                },
                {
                    "name": "来自天堂的魔鬼  G.E.M.邓紫棋",
                    "artists": [
                        {
                            "name": "G.E.M.邓紫棋",
                        }
                    ],
                    "album": {
                        "name": "热门华语261",
                        "picUrl": "http://p4.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg",
                    },
                    "duration": 245000,
                    "mp3Url": "http://www.ytmp3.cn/down/33626.mp3"
                },
                {
                    "name": "白色风车-周杰伦",
                    "artists": [
                        {
                            "name": "流行歌曲",
                        }
                    ],
                    "album": {
                        "name": "热门华语234",
                        "picUrl": "http://singerimg.kugou.com/uploadpic/softhead/200/20161209/20161209164303152140.jpg",
                    },
                    "duration": 270000,
                    "mp3Url": "http://www.ytmp3.cn/down/69922.mp3"
                },
                {
                    "name": "七里香-周杰伦",
                    "artists": [
                        {
                            "name": "流行歌曲",
                        }
                    ],
                    "album": {
                        "name": "热门华语234",
                        "picUrl": "http://singerimg.kugou.com/uploadpic/softhead/200/20161209/20161209164303152140.jpg",
                    },
                    "duration": 296000,
                    "mp3Url": "http://www.ytmp3.cn/down/69827.mp3"
                }
                ];
    }


    getInitSongIndex(){
        return {
            currentTrackLen: this.state.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: false, //true为播放状态，false为暂停状态
            progress: '0%', //播放进度
        };
    }



	
	jumpInfo =()=>{
		console.log(123456);
		this.props.history.push('/info');
	}


    render (){
        return (
            <div className="audio-box">
                <div className="audio-container">
                    {/*封面*/}
                    <Cover cover={this.state.tracks[this.state.currentTrackIndex]} onClick={this.jumpInfo}/>
                    <div className="audio-view">
                        <div className="audio-body">
                            <div className="audio-backs">
                                {/*时间显示*/}
                                <Time
                                    playStatus={this.state.playStatus}
                                    updateProgress={this.updateProgress}
                                    onNext={this.next}
                                    canPlay={this.updateCanPlay}
                                    onTouchStrat={this.pause}
                                    onTouchEnd={this.focusPlay}
                                    songInfo={this.state.tracks[this.state.currentTrackIndex]}
                                />
                                {/*进度条*/}
                                <Progress 
								progress={this.state.progress} 
								onTouchStrat={this.pause} 
								onTouchEnd={this.play} 
								updateProgress={this.updateProgress} 
								duration={this.state.tracks[this.state.currentTrackIndex].duration}  />
                            </div>
                        </div>
						
						{/*音乐信息*/}
						<TrackInfo track={this.state.tracks[this.state.currentTrackIndex]}/>
						
						{/*控制按钮*/}
						<Controls isPlay={this.state.playStatus} onPlay={this.play} onPrev={this.prev} onNext={this.next} />
						<Audio url={this.state.tracks[this.state.currentTrackIndex].mp3Url} />
                        {/*<audio id="audio" preload="auto" src={this.state.tracks[this.state.currentTrackIndex].mp3Url}></audio>*/}
                    </div>
                </div>
            </div>
        );
    }

}

export default Player;