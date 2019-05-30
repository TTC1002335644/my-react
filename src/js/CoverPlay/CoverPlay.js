import React from 'react';
import Lyric from './Lyric';
import SongInfo from './SongInfo';
import Time from './Time';
import Controls from './Controls';

import '../../css/CoverPlay/CoverPlay.css';
import '../../css/Common/Common.css';

import songJson from '../../json/song.json';

class CoverPlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
			lyric : this.getSongLyric(),
			tracks : songJson,
		};
		this.state = Object.assign(this.state , this.getInitSongIndex());
    }
	
	getInitSongIndex(){
		return {
			currentTrackLen: this.state.tracks.length, //歌单歌曲数
			currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
			currentTime: 0, //当前歌曲播放的时间
			currentTotalTime: 0, //当前歌曲的总时间
			playStatus: false, //true为播放状态，false为暂停状态
			progress: '0%', //播放进度
			mode : 1 , //播放模式:1=顺序播放,2=随机播放,3=单曲循环
		};
	}
	
	/**
	 * 更新更新进度
	 *
	 * */
	updateProgress = (progress)=>{
	    this.setState({
	       progress :  progress
	    });
	};
	
	/**
	 * 更改播放状态
	 */
	updatePlayStatus(){
		let audio = document.getElementById('audio');
		if(this.state.playStatus === true){
			audio.play();
		}else{
			audio.pause();
		}
		
	}
	
	/**
	 * 暂停/播放
	 */
	play = ()=>{
		this.setState({
			playStatus : !this.state.playStatus
		}, () =>{
			this.updatePlayStatus();
		});
	};
	
	/**
	 * 播放
	 */
	pause = ()=>{
	    this.setState({
	        playStatus : false
	    }, () =>{
	        this.updatePlayStatus();
	    });
	};
	
	/**
	 * 强行播放
	 */
	focusPlay =()=>{
		this.setState({
		    playStatus : true
		}, () =>{
		    this.updatePlayStatus();
		});
	}
	
	/**
	 * 上一首
	 */
	prev = ()=>{
	    this.setState({
	        currentTrackIndex : (this.state.currentTrackIndex - 1 < 0 ) ? this.state.currentTrackLen - 1 : this.state.currentTrackIndex - 1
	    },() => {
	        this.updatePlayStatus();
	    });
	}
	
	/**
	 * 下一首
	 */
	next = ()=>{
	    this.setState({
	        currentTrackIndex : (this.state.currentTrackIndex + 1 >= this.state.currentTrackLen ) ? 0 : this.state.currentTrackIndex + 1
	    },() => {
	        this.updatePlayStatus();
	    });
	};
	
	
	
	getSongLyric(){
		return [
			{
				content : '夜里做了美丽的恶梦',
				time : 2000,
				total : 1500,
			},
			{
				content : '想清醒我却抵不过心动想清醒我却抵不过心动想清醒我却抵不过心动想清醒我却抵不过心动想清醒我却抵不过心动年后',
				time : 4000,
				total : 3000,
			},
			{
				content : '梦里你是无底的黑洞',
				time : 8000,
				total : 3000,
			},
			{
				content : '我无力抗拒失重',
				time : 11000,
				total : 5000,
			},
			{
				content : '我的意识自控脉搏流动',
				time : 16000,
				total : 5000,
			},
			{
				content : '全被你神秘引力操控',
				time : 21000,
				total : 2000,
			},
			{
				content : '亲爱的你是危险的迷宫',
				time : 23000,
				total : 1500,
			},
			{
				content : '我找不到出口',
				time : 27000,
				total : 1500,
			},
		];
	}


    render(){
        return (
            <div className='info-body'>
                <div className='info-background'>
					{/*歌曲信息*/}
					<SongInfo songInfo={this.state.tracks[this.state.currentTrackIndex]}/>
					
					{/*歌词*/}
					<Lyric lyric={this.state.lyric} />
					
					
					
					
					<div className='audio-box-cover'>
						
						{/*时间进度条组件*/}
						<Time
						 songInfo={this.state.tracks[this.state.currentTrackIndex]}
						 playStatus={this.state.playStatus}
						 updateProgress={this.updateProgress}
						 onNext={this.next}
						 progress={this.state.progress} 
						 onTouchStrat={this.pause} 
						 onTouchEnd={this.focusPlay} 
						/>
						
						<Controls  isPlay={this.state.playStatus} onPlay={this.play}  onPrev={this.prev} onNext={this.next} />
						
						
						<audio id="audio" preload="auto" src={this.state.tracks[this.state.currentTrackIndex].mp3Url}></audio>
						
					</div>
				
				</div>
				
            </div>
        );
    }

}

export default CoverPlay;