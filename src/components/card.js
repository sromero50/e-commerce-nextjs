import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Card = ({id, image, name, description, price}) => {
  return (
    <Link href={"/products/"+id} >
        <div className='bg-white m-3 shadow-xl rounded-md hover:shadow-2xl duration-700 hover:shadow-orange-300 cursor-pointer' >
            <div clLinkssName='p-4'>
                <Image src={image} width={220} height={260} />
            </div>
            <h3 className='text-2xl text-center font-semibold' >{name}</h3>
            <p className='text-center text-lg my-3'>{description}</p>
            <p className='text-xl text-center mb-2' >{price}</p>     
            <button className='w-full h-10 bg-orange-400 rounded-bl-md rounded-br-md hover:bg-orange-500 duration-500' >Add to cart</button>   
            
        </div>
    </Link>
  )
}
