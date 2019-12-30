import React, { Component } from 'react';
import { connect } from 'react-redux';
import  createProject  from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })  
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
        // console.log(this.state);  
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3 className="white-text text-darken-3">Create Project</h3>
                    <div className="input-field">
                        <label htmlFor="email">Title</label>
                        <input type="email" id="email" onChange={ this.handleChange} className="white-text"></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <input type="text" id="content" onChange={this.handleChange} className="white-text"></input>
                    </div>
                    <div className="input-field">
                        <button className="btn white black-text lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
