import React from 'react';

class Lyric extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {};
	}
	
	
	createSongLyric(){
		let LyricArr = this.props.lyric.map(function(v){
			return '<p>'+v.content+'</p>';
		});
		return LyricArr.join('');
	}
	
	
	render(){
		return (
			<div className='song-lyric-cover' dangerouslySetInnerHTML={{ __html: this.createSongLyric() }}>
			</div>
		);
	}
	
}

export default Lyric;