import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.State = {
             name:"puji"
        }
    }
    render() {
        setTimeout()>{
            this:setState({name:"puji"})

        },3000
    
          return (
            <div>
               {this.State.name}   
            </div>
        )
    }
    
}
