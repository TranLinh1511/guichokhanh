import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
    render() {
        const course = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];
        return (
            <div>
                <div className="container">
                    {/* Bai 1 */}
                    <div className="box">
                        <h1>DANH SÁCH KHÓA HỌC</h1>
                        <ul>
                            {course.map((element, index) => {
                                return <li key={index}>{element}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercise;
