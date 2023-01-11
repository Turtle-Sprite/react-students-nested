import React, { Component } from 'react'

export default class Score extends Component {
    render() {

        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}