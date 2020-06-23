import React, { createContext } from "react";
import data from "../data.json";
export const AppContext = createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            cartArr:[]
        }
    }

    getData = () => {
        return this.state.data
    }

    getCart = () => {
        return this.state.cartArr
    }

    addToCart=(payload)=>{
        let item =this.state.data.find(ele=>ele.id==payload)
        this.setState({
            cartArr:[...this.state.cartArr, item]
        })
    }

    render() {
        const method = {
            getData:this.getData,
            addToCart:this.addToCart,
            getCart:this.getCart
        }
        return (
            < AppContext.Provider value={method} >
                {this.props.children}
            </ AppContext.Provider>
        )
    }
};
export default AppProvider;