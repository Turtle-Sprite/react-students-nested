import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.bio}</p>

                <Score 
                scores={this.props.scores}
                />

            </div>
        )
    }
}