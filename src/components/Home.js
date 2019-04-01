import React from 'react'
import Header from './styling/Header'
import Button from './styling/Button'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <Header>Welcome to Grocery List</Header>
            <Link to="/items"><Button type="button">See List Items</Button></Link>
        </div>
    )
}
