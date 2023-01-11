import React, { Component } from 'react'
import Student from './Student'

export default class Roster extends Component {
    render() {
        const rosterComponents = this.props.students.map( (student, idx) => {
            return (
                <Student 
                name = {student.name}
                bio = {student.bio}
                scores = {student.scores}
                key = {`student-${idx}`}
                />
            )
        })

        return (
            <div>
                <h2>Students Roster</h2>
                {rosterComponents} 
            </div>
        )
    }
}