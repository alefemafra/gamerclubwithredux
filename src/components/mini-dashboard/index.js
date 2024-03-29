import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../Actions';
import Header from './Header';
import Content from './content';
import Footer from './footer';
import './miniDashboard.scss';

class MiniDashboard extends Component {

    constructor(props){
        super(props);
        
        this.props.dispatch(Actions.getAllInformation());
    }

    render() {
        const { data } = this.props;

        return (
            <div className="mini-dashboard">
                {(!data.loading) ? data.items && 
                <>
                    <Header userInfo={data.items.user} />
                    <Content games={data.items.games} server={data.items['4fun']}/>
                    <Footer online={data.items.online} banned={data.items.latest_banned} />
                </>
                : ''}
                {data.error && <span className="text-danger">ERROR: {data.error}</span>}

                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert, data } = state;
    return {
        data,
        alert
    };
}

export default connect(mapStateToProps)(MiniDashboard);