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
                        <div>
                            <p>Name: {item.name}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

