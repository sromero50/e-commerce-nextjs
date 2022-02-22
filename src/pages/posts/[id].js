import React from "react"
import axios from 'axios';
export default function Post({product}) {
  return <div>
       <ul className="mt-4 place-items-center grid" >
         
            <li className="border-2 border-cyan-800 p-2 w-1/3" >
              {product.name}
              <br />
              {product.description}
              <br />
              {product.price}
            </li>
         
        </ul>
  </div>
}


export async function getStaticPaths() {
    try{
        const response = await axios.get('http://localhost:3001/products')
        const products = await response.data
        const paths = products.map(({id})=>{
            return {
                params: {id}
            }
        })
        return {
          paths, 
          fallback: false
        }
     }catch (e){
         console.log(e)
     }
  }

export async function getStaticProps(context) {
    try{
        const id = context.params.id
        const response = await axios.get('http://localhost:3001/products/product/'+id)
        const product = await response.data
        return {
          props: {
            product: product
          }}
     }catch (e){
         console.log(e)
     }
  }  