import React, { Component } from 'react'
export default class Button extends Component {
    render(props) {
        let { title, task } = this.props
        return(<button style={{width:200, height:200, fontSize:50, }} onClick = { task } > <p style = {{fontSize: 50, fontStyle: "oblique"}}>{title}</p> </button>)
    }

}