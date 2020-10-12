import React from 'react'
import {Spring} from 'react-spring/renderprops'
export default function component1() {
    return (
        <Spring from={{opacity:0 , marginTop:-500}} to={{opacity:1, marginTop:0}}>
            {props=>(
                <div style={props}>
                    <div style={c1style}>
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
                
            )
            }
        </Spring>
        
    )
}


const c1style={
    background:'steelblue',
    color:'white',
    padding:'0.01rem'
}
