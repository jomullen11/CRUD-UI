import React, { Component } from 'react'
import '../index.css'
import { API_URL } from '../config'

class Create extends Component{
    state = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${API_URL}/info`, {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(res => console.log(res.json()))
        .then(() => window.location.replace("http://localhost:3001"))
        .then(this.setState({
            name: '',
            phone: '',
            email: '',
            password: ''
        }))
        .catch(err => console.log(err))
    }

    render(){
    return(
        <form onSubmit={this.handleSubmit} className="createForm">
            <fieldset>
                <legend>Create</legend>
                <input type="text" placeholder="Full Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                <input type="phone" placeholder="Phone" value={this.state.phone} name="phone" onChange={this.handleChange}/>
                <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    )}
}

export default Create