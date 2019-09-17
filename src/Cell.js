import React, { Component } from 'react';

export class Cell extends Component {
    state = {
        color: this.props.value
    }

    handleClick = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }


    render() {
        return (
            <div className='cell' onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
                
            </div>
        );
    }
}

export default Cell;
