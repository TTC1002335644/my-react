import React , {Component} from 'react';
import songJson from "../../json/song";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class CommonPlay extends Component{
    constructor(props){
        super(props);
        this.state = {
            tracks : songJson,
        };
        this.state = Object.assign(this.state , this.getInitSongIndex());
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
     * 更新歌曲的canPlay状态
     * @param status
     */
    updateCanPlay= (status)=>{
        this.setState({
            canPlay : status
        });
    };

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
    };

    /**
     * 上一首
     */
    prev = ()=>{
        this.setState({
            currentTrackIndex : (this.state.currentTrackIndex - 1 < 0 ) ? this.state.currentTrackLen - 1 : this.state.currentTrackIndex - 1
        },() => {
            // this.updatePlayStatus();
            this.focusPlay();
            this.updateCanPlay(false);
        });
    };

    /**
     * 下一首
     */
    next = ()=>{
        this.setState({
            currentTrackIndex : (this.state.currentTrackIndex + 1 >= this.state.currentTrackLen ) ? 0 : this.state.currentTrackIndex + 1
        },() => {
            // this.updatePlayStatus();
            this.focusPlay();
            this.updateCanPlay(false);
        });
    };
}




const mapStateToProps = (state , CommonPlay) =>{
    return {
        canPlay : false, //歌曲是否可以播放
        hasLoadLyric : false , //是否加载歌词
        currentTrackLen: CommonPlay.state.tracks.length, //歌单歌曲数
        currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
        currentTime: 0, //当前歌曲播放的时间
        currentTotalTime: 0, //当前歌曲的总时间
        playStatus: false, //true为播放状态，false为暂停状态
        progress: '0%', //播放进度
        mode : 1 , //播放模式:1=顺序播放,2=随机播放,3=单曲循环
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        songPlayCurUpdateDispatch : bindActionCreators(songPlayCurUpdateAction , dispatch),
        songPlayTimeUpdateDispatch : bindActionCreators(songPlayTimeUpdateAction , dispatch),
        songPlayStatusUpdateDispatch : bindActionCreators(songPlayStatusUpdateAction , dispatch),
    }
}

console.log(mapStateToProps);

export default CommonPlay;
