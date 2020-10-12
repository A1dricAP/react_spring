import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class component2 extends Component {
    render() {
        return (
            <Spring from={{opacity:0 }} to={{opacity:1}} config={{delay:1000, duration:1000}}>
            {props=>(
                <div style={props}>
                    <div style={c2style}>
            <h1>Component 1</h1>
            <p>
            publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document 
            or a typeface without relying on meaningful content. 
            Lorem ipsum may be used before final copy is available, but 
            it may also be used to temporarily replace copy in a process called greeking, 
            which allows designers to consider form without the meaning of the text influencing 
            the design.
            </p>
          
        </div>
                </div>
            )}
        </Spring>
        )
    }
}



const c2style={
    background:'slateblue',
    color:'white',
    padding:'0.1rem'
}

export default component2
