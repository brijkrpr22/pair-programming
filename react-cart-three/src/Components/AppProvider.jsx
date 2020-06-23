import React, { createContext } from "react";
import data from "../data.json";
export const AppContext = createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data
        }
    }

    getData = () => {
        return this.state.data
    }
    render() {
        const method = {
            getData:this.getData,
        }
        return (
            < AppContext.Provider value={method} >
                {this.props.children}
            </ AppContext.Provider>
        )
    }
};
export default AppProvider;