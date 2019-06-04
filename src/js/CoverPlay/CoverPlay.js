import React from 'react';
import Lyric from './Lyric';
import SongInfo from './SongInfo';
import Time from './Time';
import Controls from './Controls';
import Audio from '../Common/Audio';
import CommonPlay from '../Common/CommonPlay';

import '../../css/CoverPlay/CoverPlay.css';
import '../../css/Common/Common.css';

class CoverPlay extends CommonPlay{
    constructor(props){
        super(props);
        // this.state = {
		// 	tracks : songJson,
		// };
		// this.state = Object.assign(this.state , this.getInitSongIndex());
    }
	
	getInitSongIndex(){
		return {
			canPlay : false, //歌曲是否可以播放
			hasLoadLyric : false , //是否加载歌词
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
	 * 更新歌曲的hasLoadLyric状态
	 * @param status
	 */
	updateHasLoadLyric = (status)=>{
		console.log('diaoyongle');
		this.setState({
			hasLoadLyric : status
		});
	};


	


    render(){
        return (
            <div className='info-body'>
                <div className='info-background'>
					{/*歌曲信息*/}
					<SongInfo songInfo={this.state.tracks[this.state.currentTrackIndex]}/>
					
					{/*歌词*/}
					<Lyric lyric={this.state.tracks[this.state.currentTrackIndex]['lyric']} hasLoadLyric={this.state.hasLoadLyric} updateLoadLyric={this.updateHasLoadLyric} />

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
						 canPlay={this.updateCanPlay}
						/>
						<Controls  isPlay={this.state.playStatus} onPlay={this.play}  onPrev={this.prev} onNext={this.next} canPlay={this.state.canPlay} />
						<Audio url={this.state.tracks[this.state.currentTrackIndex].mp3Url} />

						{/*<audio id="audio" preload="auto" src={this.state.tracks[this.state.currentTrackIndex].mp3Url}></audio>*/}
						
					</div>
				
				</div>
				
            </div>
        );
    }

}

export default CoverPlay;