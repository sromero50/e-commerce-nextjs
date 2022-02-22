import React from "react";
import { Card } from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";
import { useEffect } from "react";
import Carousel from "../components/carousel";

export default function Home() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.main.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  

  return (
    <div className="grid place-items-center">
        <Carousel  />
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 mb-8">
                  {products.map(({id, name, price, description, image}) => {
            return (
              <Card key={id} id={id} name={name} price={price} image={image} description={description} /> 
            )
          })}
        </div>
    </div>
  )
}


