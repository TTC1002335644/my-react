import React from 'react';

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            now : '00:00',
        };
    }

    tick(){
        if(this.props.playStatus === true){
            this.setState((prevState) => ({
                now: this.timeCover()
            }));
        }
    }

    /**
     * 设置定时器
     */
    componentDidMount(){
        this.interval = setInterval(
            () => this.tick() , 300
        );
    }

    /**
     * 清除定时器
     */
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    /**
     * 获取时间
     * @returns {string}
     */
    timeCover(){
        let now = document.getElementById('audio').currentTime;
        /**
         * 到时间了，就下一首时间
         */
        if(now * 1000 > this.props.duration){
            this.props.onNext();
        }

        let minutes = Math.floor(now / 60);
        let seconds = Math.floor(now - (minutes * 60));
        if(minutes === 0){
            minutes = '00';
        }
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        this.props.updateProgress(
            ( (now / this.props.duration) *100000).toFixed(2) + '%'
        );

        return minutes + ':' + seconds;
    }

    render() {
        return (
            <div className="audio-count-time">{this.state.now}</div>
        );

    }
}

export default Time;