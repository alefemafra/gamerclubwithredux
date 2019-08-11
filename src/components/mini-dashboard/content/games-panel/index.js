import React, { Component } from 'react';
import './style.scss';

export default class GamesPanel extends Component {
    render() {
        return (
            <div className="game-info-general">
                <div className="title">
                    <div className="icon"><img src={this.props.data.image} /></div>
                    <h4 className="title">{this.props.data.title}</h4>
                </div>
                <div className="content">
                    <div className="matches">
                        <p>{this.props.data.matches}</p>
                        <p>PARTIDAS</p>
                    </div>
                    <div className="win">
                        <p>{this.props.data.win}</p>
                        <p>VITÓRIAS</p>
                    </div>
                    <div className="lose">
                        <p>{this.props.data.lose}</p>
                        <p>DERROTAS</p>
                    </div>
                </div>
                <div className="button">
                    <a href={this.props.data.cta.link} target="_blank">
                        {(this.props.data.cta.line > 0) ? 
                            <p style={{backgroundColor: 'rgb(44, 151, 222)'}}>
                                <span className="icon">{this.props.data.cta.line}</span>
                                <span>{this.props.data.cta.title}</span>
                            </p>
                            : <p style={{backgroundColor: 'rgb(221, 188, 57)'}}> <span>{this.props.data.cta.title}</span> </p>}
                    </a>
                </div>
            </div>
        )
    }
}
