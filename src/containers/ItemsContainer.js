import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/actions/itemsActions'
import { Link } from 'react-router-dom'
import Button from '../components/styling/Button'
import Header from '../components/styling/Header'

class ItemsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        if (this.props.items.length === 0) {
            return <h1>Loading...</h1>
        }
                
            return (
            <div>
                <Header>Grocery List</Header>
                <Link to="/items/new/item"><Button type="button">Add Item</Button></Link>
                    {this.props.items.map(item => (
                        <div key={item.id}>
                            <ul>
                                <li><Link to={`/items/${item.id}`}>{item.name} - {item.quantity}</Link></li>
                            </ul>
                        </div>
                    ))} 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemsContainer)