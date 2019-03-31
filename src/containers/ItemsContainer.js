import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/actions/itemsActions'
import { Link } from 'react-router-dom'

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
                <h1>Grocery List</h1>
                <Link to="/items/new/item"><button type="button">Add Item</button></Link>
                {this.props.bills.map((b) =>
                        <ListGroup.Item key={b.id}><Link to={`/bills/${b.id}`} ><Bills name={b.name}/></Link></ListGroup.Item> )}
                    {this.props.items.map(item => (
                        <div key={item.id}>
                            <ul>
                                <li>{item.name} - {item.quantity} - ID #{item.id}</li>
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