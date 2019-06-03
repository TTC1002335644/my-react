import React from 'react';

class Lyric extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			lyric : this.props.lyric
		};
	}
	
	
	createSongLyric (){
		if(this.props.hasLoadLyric === false){
			// console.log(this.props.lyric);
			console.log(this.props.updateLoadLyric);
			this.props.updateLoadLyric(true);
			this.kugouLyric();
			return '<p>'+this.props.lyric+'</p>';
		}else{
			return '<p>'+this.state.lyric+'</p>';
		}
	};

	/**
	 * kg处理歌词
	 */
	kugouLyric(){
		try{
			let lyric = this.props.lyric;
			console.log(lyric.split('\n'));
		}catch (e) {
			console.log(e);
		}
	};
	
	
	render(){
		return (
			<div className='song-lyric-cover' dangerouslySetInnerHTML={{ __html: this.createSongLyric()}}>

			</div>
		);
	}
	
}

export default Lyric;