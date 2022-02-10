import React, { Component } from 'react';

class Highlighter extends Component {
    render() { 
        const {name,celement} = this.props
        const re = new RegExp(celement, "g");
        let k = !celement ? name: name.replace(re,`<span ><strong class='text-success'>${celement}</strong></span>`)
        
        return (
            
            
                <div dangerouslySetInnerHTML={{__html:k}} />
        );
    }
}


export default Highlighter;
