import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions';
// import { Container } from './styles';

class MiniDashboard extends Component {

    constructor(props){
        super(props);
        
        this.props.dispatch(Actions.getAllInformation());

        this.state = {
            items: ''
        }
    }

    render() {
        const { data } = this.props;

        return (
            <>
                {data.loading && <em>Loading</em>}
                {data.error && <span className="text-danger">ERROR: {data.error}</span>}
                {data.items && data.items.user.name}
            </>
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