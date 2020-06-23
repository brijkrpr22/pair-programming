import React from "react"
import { AppContext } from "./AppProvider";


class Carts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    render() {
        const { getCart } = this.context
        let myData = getCart()
        return (
            <div className="container mt-5">
                <input onChange={this.handleChange} name="name" />
                <input onChange={this.handleChange} name="email" />
                <input onChange={this.handleChange} name="mobile" />
                <submit onClick={this.} />

                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">item</th>
                            <th scope="col">Image</th>
                            <th scope="col">price</th>
                            <th scope="col">category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData && myData.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{ele.id}</th>
                                        <td>{ele.item}</td>
                                        <td><img src={ele.image} width='100' height='100' alt={ele.item} /></td>
                                        <td>{ele.price}</td>
                                        <td>{ele.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

Carts.contextType = AppContext
export default Carts 