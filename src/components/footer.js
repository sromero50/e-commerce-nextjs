import React from 'react'

const Footer = () => {
  return (
    <footer className="bottom-0 border-b-2 bg-orange-400 border-orange-700 ">
    <div className="container mx-auto ">
        <div className="border-t-2 border-orange-800 flex flex-col items-center  w-auto">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-black-700 font-bold mb-2">
                    © 2022 Copyright
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer