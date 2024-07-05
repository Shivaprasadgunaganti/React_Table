import { Component } from "react";
import CustomSpinner from "../CustomSpinner/customSpinner";
import axios from "axios";

class ProductListing extends Component {
    state={
        products:[],
        loading:false
    }
    componentDidMount(){
        console.log('componentDidmount')
        this.fetchData()
    }
  fetchData = async () => {
    this.setState({
        loading:true
    })
  
    try{

    const response = await axios.get('https://fakestoreapi.com/products')
    if(response.status===200){
       this.setState ({
        products:response.data,
        loading:false
       })
    }

  } catch(err){
    console.log(err)
    this.setState({
      error:'server is busy'
    })
  }
}
   render() {
    console.log('render')
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
export default ProductListing
