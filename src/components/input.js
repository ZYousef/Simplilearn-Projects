import React from 'react'
class input extends React.Component{
    state= {
        todo:'',
    };
    handleChange  = 0 => this.setState({todo:e.target.value});
    render(){
        return(
            <form>
                <input type='text' name = 'todo' placholder="What's on your mind?"onChange= {this.handelChange}> </input>
            </form>
        )
    }
}
export default input    