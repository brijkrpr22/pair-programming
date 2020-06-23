import React from "react"
import { AppContext } from "./AppProvider";


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            category:''
        }
    }

        handleChange=(e)=>{
            this.setState({
                category:e.target.value
            })
        }
    render() {
        const { getData,addToCart,getCart,myOrders } = this.context;
        let myData = getData();
        console.log(getCart())
        return (
            <div className="container mt-5">
                <select className="dropdown mb-2" onChange={this.handleChange}>
                    <option value='all'>ALL</option>
                    {
                        myData.map((ele,item)=>{
                            return(
                                <option key={item} value={ele.category}>{ele.category}</option>
                            )
                        })
                    }
                </select>
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
                            myData && myData.filter(ele=>{
                                if(this.state.category=="all" || this.state.category==""){
                                    return true
                                }
                                if(ele.category==this.state.category){
                                    return true
                                }
                            }).map((ele,index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{ele.id}</th>
                                        <td>{ele.item}</td>
                                        <td><img src={ele.image} width='100' height='100' alt={ele.item}/></td>
                                        <td>{ele.price}</td>
                                        <td>{ele.category}</td>
                                        <td><button onClick={()=>addToCart(ele.id)} className="btn btn-outline-warning">Add to cart</button></td>
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

Home.contextType = AppContext
export default Home 