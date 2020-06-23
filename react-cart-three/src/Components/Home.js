import React from "react"
import { AppContext } from "./AppProvider";


class Home extends React.Component {
    render() {
        const { getData } = this.context;
        let myData = getData();
        console.log(myData)
        return (
            <div>
                {
                    myData.map(item => {
                        return (
                            <div>
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
Home.contextType = AppContext
export default Home 