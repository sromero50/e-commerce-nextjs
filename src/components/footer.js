import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="px-4 py-2 bg-blue-800 text-white">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a href="#">Terms of Use</a>
				</li>
				<li>
					<a href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-2xl">
			<li>
				<a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
			</li>
			<li>
				<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
			</li>
			<li>
				<a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
			</li>
		</ul>
	</div>
</footer>
  )
}

export default Footer