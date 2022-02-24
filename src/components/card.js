import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Card = ({id, image, name, description, price}) => {
  return (
    <div className='bg-white m-3 text-center shadow-xl rounded-md hover:shadow-2xl duration-700 hover:shadow-blue-300 cursor-pointer  hover:m-2 p-2'>
          <Link href={"/products/"+id} >
        <div>
            <div className='p-2'>
                <Image src={image} width={220} height={260} />
            </div>
            <h3 className='text-2xl font-semibold' >{name}</h3>
            <p className='text-lg my-3'>{description}</p>
            <p className='text-xl mb-2' >{price}</p>     
            
        </div>
    </Link>
    <button className='w-full h-10 bg-blue-400 rounded-md hover:bg-blue-600 duration-500 font-semibold' >Add to cart</button>  
    </div>

  )
}
