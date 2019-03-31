import React, { Component } from 'react'
import Wrapper from './styling/Wrapper'
import Header from './styling/Header'
import './styling/AddItem.css'

class AddItem extends Component {
    
    render() {
        const { handleChange, name, quantity, handleSubmit } = this.props
        return (
            <Wrapper>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Header>Add an Item</Header>
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" value={name} onChange={handleChange} />
                            <label htmlFor="quantity">Quantity</label>
                            <input id="quantity" name="quantity" value={quantity} onChange={handleChange} />
                            <input id="submit" type="submit" />
                    </form>
                </div>
            </Wrapper>
        )
    }
}

export default AddItem