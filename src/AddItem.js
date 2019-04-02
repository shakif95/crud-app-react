import React, {Component} from 'react';


class AddItem extends Component{

    state = {
        task: null
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task" id="task" onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>        
        )
    }
}

export default AddItem;
