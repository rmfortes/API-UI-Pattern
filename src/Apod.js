import React, { Component } from 'react';

class Apod extends Component {
    render() {
        
        return (
            <div className="contents">
            <div className="image">
                <img src={this.props.apod.url} alt={this.props.apod.title}/>
            </div>    
                <div className="text"><h1>{this.props.apod.date}</h1>
                <h3>{this.props.apod.title}</h3>
                <p>{this.props.apod.explanation}</p>
                </div>
            </div>
        );
    }
}

export default Apod;