import React, { Component } from 'react'
import Wrapper from './styling/Wrapper'
import Header from './styling/Header'
import Button from './styling/Button'
import './styling/AddItem.css'
import { Link } from 'react-router-dom'

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
                    <br />
                    <Link to="/items"><Button type="button">Back to Items</Button></Link>
                </div>
            </Wrapper>
        )
    }
}

export default AddItem