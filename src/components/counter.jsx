import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count:0,
        tags:['tag1', 'tag2', 'tag3']
       
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
        {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
        
        </ul>
        
                }

    render() { 
        // let classes = this.getBadgeClasses();

         {/* <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button> */}

//     getBadgeClasses() {
//         let classes = "badge m-2  badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

// formatCount() {
//     const{ count } = this.state;
//     return count === 0? "Zero" :count;

    
//     }
        
        return (
        <div>
            {this.renderTags() }
        </div>
            );
    }




}
 
export default Counter;