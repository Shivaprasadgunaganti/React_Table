import { Component } from "react";
import CustomSpinner from "../CustomSpinner/customSpinner";

class ProductListing extends Component {
    state={
        products:[],
        loading:false
    }
    componentDidMount(){
        console.log('componentDidmount')
        this.fetchData()
    }
  fetchData = () => {
    this.setState({
        loading:true
    })
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json(response))
      .then((response) => {
         this.setState({
            products:response,
            loading:false
         })
      }
    );
  };
  render() {
    // console.log('render')
    return (
      <>
        <h2>ProductListing</h2>
        {
            this.state.loading?
            <><CustomSpinner/>
            <h3>please wait</h3></>:
            <div>
                {
                    this.state.products.map((eachProduct,index)=>{
                        return ( 
                            
                            <h3 key={index}>{eachProduct.id}</h3>
                        )
                    })
                }
            </div>
        }
      </>
    );
  }
}
export default ProductListing;
