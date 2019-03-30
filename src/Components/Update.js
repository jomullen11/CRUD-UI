import React, { Component } from 'react'
import { API_URL } from '../config'

export default class extends Component{
    state = {
        name: this.props.read.name,
        phone: this.props.read.phone,
        email: this.props.read.email,
        password: this.props.read.password
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault ()
        await fetch(`${ API_URL }/info/${this.props.read._id}`, {
            method: "PUT",
            body: JSON.stringify(this.state)
        }).then( res => console.log(res.json()))
        .then( () => this.setState({
            name: "",
            phone: "",
            email: "",
            password: ""
        }))
        .then(() => this.props.closeUpdate())
        .then( () => this.props.refresh())
        .catch( err => console.log(err))
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <h1>Update Ship</h1>
                <input type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Update Name" 
                    onChange={ this.handleChange } 
                />
                <br/>
                <input type="phone"
                    value={this.state.phone}
                    name="phone"
                    placeholder="Update Phone"
                    onChange={ this.handleChange }
                />
                <br/>
                <input type="email"
                    value={this.state.email}
                    name="email"
                    placeholder="Update Email"
                    onChange={ this.handleChange } 
                />
                <br/>
                <input type="password"
                    value={this.state.password}
                    name="password"
                    placeholder="Update Password"
                    onChange={ this.handleChange }
                />
                <br/>
                <input type="submit" value="Submit" readOnly/>
            </form>
        )
    }
}