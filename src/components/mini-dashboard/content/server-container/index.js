import React, { Component } from 'react';
import './style.scss';

export default class ServerContainer extends Component {

    copyButton = (text) => {
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    joinButton = (url) => {
        window.open(url)
    }

    shortName = (name) => {
		if(name){
			if(name.length > 13) {
				return name.slice(0, 13) + '...'
			}
			else{
				return name
			}
		}
    }
    serverCapacity = (current, max) => {
		let capacity = (current/max) * 100
		return `${capacity}%`
	}

    render() {
        return(
            <div className="server-container">
                <div className="start-game">
                    <div className="copy">
                        <button onClick={() => this.copyButton(this.props.data.copy)}>
                            <i className="fa fa-copy"></i>
                        </button>
                    </div>
                    <div className="join">
                        <button onClick={() => this.joinButton(this.props.data.join)}>
                            <i className="fa fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
                <div className="serve-name">
                    <h5 className="name">#{this.props.data.id} - {this.shortName(this.props.data.title)}</h5>
                    <p className="mode">{this.props.data.mode}</p>
                </div>
                <div className="server-info">
                    <div className="info">
                        <p>{this.shortName(this.props.data.map)}</p>
                        <p>{this.props.data.current}/{this.props.data.max}</p>
                    </div>
                    <div className="line">
                        <div style={{ width: this.serverCapacity(this.props.data.current, this.props.data.max) }}></div>
                    </div>
                </div>
            </div>
        )
    }
}
