import React, { Component } from 'react';

export default class Progress extends Component {
    
    nivel = (number) => {
        if(this.props.level > number){
            return 'ativo';
        }
    }

    render() {
        let iconSvg = <svg width={15} height={18}><path d="M7.357 12.346a1.911 1.911 0 000-3.821 1.91 1.91 0 000 3.821zm0 5.462c4.056 0 7.356-3.307 7.356-7.373 0-1.671-.573-3.309-1.615-4.61-1.28-1.6-5.31-5.416-5.48-5.578L7.357 0l-.262.247c-.17.162-4.2 3.979-5.48 5.578A7.403 7.403 0 000 10.435c0 4.066 3.3 7.373 7.357 7.373zm0-10.046a2.674 2.674 0 010 5.347 2.674 2.674 0 010-5.347z" fill="#6EA1E7" fillRule="evenodd" /></svg>;  
        
        return (
            <div className="progress-bar">
                <div className="top">
                    <p className={this.nivel(19)}>Casual { iconSvg }</p>
                    <p className={this.nivel(65)}>Amador { iconSvg }</p>
                </div>
                <div className="progress"><div className="line"><div style={{ width: `${this.props.level}%`}}></div></div></div>
                <div className="bottom">
                    <p className={this.nivel(39)}>Competitivo { iconSvg }</p>
                    <p className={this.nivel(99)}>Pro { iconSvg }</p>
                </div>
            </div>
        );
    }
}
