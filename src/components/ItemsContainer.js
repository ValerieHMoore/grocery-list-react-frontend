import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/actions/itemsActions'

class ItemsContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        if (this.props.items.length === 0) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <div key={item.id}>
                            <p>Name: {item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Variety: {item.variety}</p>
                            <br></br>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemsContainer)