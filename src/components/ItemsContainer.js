import React, { Component } from 'react'


export default class ItemsContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/items")
        .then(resp => {
            return resp.json()
        })
        .then(items => this.setState({ items }))
    }

    render() {
        if (this.state.items.length === 0) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
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

