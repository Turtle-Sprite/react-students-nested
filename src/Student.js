import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
    render() {
        for(let i = 0; i < this.props.students.length; i ++){
            const scores[i] = this.props.students.scores.map( (student, idx) => {
                <Score 
                scores = {student.scores}
                key = {`student-${idx}`}
                />
            })
        }
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.bio}</p>
                
            </div>
        )
    }
}