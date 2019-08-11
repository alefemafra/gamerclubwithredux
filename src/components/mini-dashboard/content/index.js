import React, { Component } from 'react';
import GamesPanel from './games-panel';
import './style.scss';

export default class Content extends Component {
  render() {
    return (
        <div className="content">
            <div className="serve-list">
                <h1>Lista</h1>
            </div>
            <div className="games-list">
                {this.props.games.map((data, index) => (
                    <GamesPanel key={index} data={data}/>
                ))}
            </div>
        </div>
    )
  }
}
