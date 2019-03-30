//this file is to read info from my Database
import { API_URL } from '../config'
import React, { Component } from 'react'
import Present from './Presenter'
import Create from './Create'
// import Update from './Update'

class ReadUpdateDelete extends Component {
    state = {
        read: []
    }

    getRead = async () => {
        await fetch(`${API_URL}/read`)
        .then(response => response.json())
        .then(data => data.map(element => <Present read={element} refresh={this.getRead}/>))
        .then(components => this.setState({read : components}))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getRead()
    }

    render() {
        return (
            <div>
                {this.state.read}
            </div>
        )
    }
}

export default ReadUpdateDelete