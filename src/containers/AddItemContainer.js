import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddItem from '../components/AddItem'

class AddItemContainer extends Component {

    state = {
        name: '',
        quantity: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state)
        this.setState({
          name: '',
          quantity: ''
        })
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
        
    render() {
        return (
            <AddItem input={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        )}
    }
        
        
const mapDispatchToProps = dispatch => {
    return {
    addItem: (item) => dispatch(addItem(item))
    }
}
        
export default connect(null, mapDispatchToProps)(AddItemContainer)
