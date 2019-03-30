        fetch("http://localhost:3001/items")
        .then(resp => {
            return resp.json()
        })
        .then(items => this.setState({ items }))