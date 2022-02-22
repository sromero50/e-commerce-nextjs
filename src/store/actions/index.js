import axios from "axios";

export function getProducts() {
	return async dispatch => {
        try{
            const response = await axios.get('http://localhost:3001/products')
            const products = response.data
            dispatch({ type: "GET_PRODUCTS", payload: { products } });
         }catch (e){
             console.log(e)
         }
	};
}