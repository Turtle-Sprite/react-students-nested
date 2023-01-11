import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        const scores = this.props.scores.map((score, idx) => {
            return (
                <div key={idx}>
                    <p>{score.date}</p>
                    <p>{score.score}</p>
                </div>
            )
        })
        return (
            <div>
                {scores}
            </div>
        )
    }
}