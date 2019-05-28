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
		let songList = this.getInitSongLists();
        this.state = {
            tracks : songList
        };
		let songIndex = this.getInitSongIndex();
		this.state = songIndex;
		this.state.tracks = songList
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
                    "duration": 136829,
                    "mp3Url": "http://win.web.rf01.sycdn.kuwo.cn/d703c0f2f7cec5efd41dc598b19b79d3/5ced66b3/resource/n3/60/43/3916978711.mp3"
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
                    "mp3Url": "http://www.ytmp3.cn/down/69466.mp3"
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
                    "duration": 295575,
                    "mp3Url": "http://www.ytmp3.cn/down/69922.mp3"
                }];
    }


    getInitSongIndex(){
        return {
            currentTrackLen: this.state.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: false, //true为播放状态，false为暂停状态
        };
    }
	
	
	updatePlayStatus(){
		let audio = document.getElementById('audio');
		if(this.state.playStatus){
			audio.play();
		}else{
			audio.pause();
		}
		
	}
	
	play = ()=>{
		this.setState({
			playStatus : !this.state.playStatus
		}, () =>{
			this.updatePlayStatus();
		});

	}
	
	prev =()=>{
		if(this.state.currentTrackIndex - 1 < 0 ){
			
		}else{
			this.setState({
				currentTrackIndex : this.state.currentTrackIndex - 1
			},() => {
				this.updatePlayStatus();
			});
		}
	}
	
	next =()=>{
		if(this.state.currentTrackIndex + 1 > this.state.currentTrackLen ){
			
		}else{
			this.setState({
				currentTrackIndex : this.state.currentTrackIndex + 1
			},() => {
				this.updatePlayStatus();
			});
		}
	}


    render (){
        return (
            <div className="audio-box">
                <div className="audio-container">
                    {/*封面*/}
                    <Cover cover={this.state.tracks[this.state.currentTrackIndex]} />
                    <div className="audio-view">
                        {/*音乐信息*/}
                        <TrackInfo track={this.state.tracks[this.state.currentTrackIndex]}/>
                        <div className="audio-body">
                            <div className="audio-backs">
                                {/*时间显示*/}
                                <Time />
                                {/*进度条*/}
                                <Progress />
                            </div>
                        </div>
                        {/*控制按钮*/}
                        <Controls isPlay={this.state.playStatus} onPlay={this.play} onPrev={this.prev} onNext={this.next} />
						
                        <audio id="audio" src={this.state.tracks[this.state.currentTrackIndex].mp3Url}></audio>
                    </div>
                </div>
            </div>
        );
    }

}

export default Player;