import React, { Component } from 'react';
import Progress from "./progress";
import iconuser from '../../../assets/img/iconuser.jpg';
import medal from '../../../assets/img/premium-ii-medal.png';
import './header.scss';

class Header extends Component {

	constructor(props){
		super(props);

		this.state = {
			info: '',
			featuredMedal: '',
			gamePosition: ''
		}
	}

	componentDidMount(){
		this.setState({
			info: this.props.userInfo, 
			featuredMedal: this.props.userInfo.featured_medal,
			gamePosition: this.props.userInfo.game_position
		});
	}

	levelDefined = (level) => {
        if(level){
			switch(level) {
				case 'casual': return 20;
				case 'competitive': return 40;
				case 'amateur': return 66;
				case 'pro': return 100;
				default: return 0;
			}
        }
	}
	
	shortName = (name) => {
		if(name){
			if(name.length > 20) {
				return name.slice(0, 20) 
			}
			else{
				return name
			}
		}
	}


	render() {
		return(
			<div className="header-content">
				<section>
				<div className="user-info">
					<div className="user-picture">
						{(this.state.info.picture !== '' && this.state.info.picture !== undefined) ? 
						<img src={this.state.info.picture} alt={this.state.info.name} /> : 
						<img src={iconuser} alt={this.state.info.name}/> }
					</div>
					<div className="user-name">
						<h3>{this.shortName(this.state.info.name)}</h3>
						<p>GC ID: {this.state.info.id}</p>
					</div>
				</div>
				<Progress level={this.levelDefined(this.state.info.expertise)}/>
				<div className="achievements">
					<ul>
						<li className="item">
							{this.state.featuredMedal.image && <img src={this.state.info.featured_medal.image} alt={this.state.info.featured_medal.title} />}
						</li>
						<li className="item">
							{this.state.gamePosition.image && <img src={this.state.info.game_position.image} alt={this.state.info.game_position.title} />}
						</li>
						<li className="item">
							<img src={this.state.info.patent} alt="patent" />
						</li>
						<li className="item level">
							<p>{this.state.info.level}</p>
						</li>
					</ul>
				</div>
				</section>
				<section className="medal-section">
					<div className="medal">
						<img src={medal} />
					</div>
				</section>
			</div>
		)
	}
}

export default Header;