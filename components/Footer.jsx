import Link from 'next/link'
import React from 'react'

const Footer = () => {
 const footerlinks = [
    {name: 'About us', href: '/about'},
     {name: 'Contact', href: '/contact'},
      {name: 'Editoral policy', href: '/editoral-policy'},
       {name: 'News/Tip-off', href: '/news-tip-off'},
        {name: 'Adverise with us', href: '/advertise'},
         {name: 'Privacy Policy', href: '/privacy-policy'},
          {name: 'Cookie settings ', href: '/cookie-settings'}
 ]
  return (
    <footer className="bg-black text-white p-5 ">

      <div>
        <h2 className="text-2xl">SayIt</h2>

        <p className="mt-3">
          Stories, thoughts and ideas worth sharing.
        </p>
      </div>

           <nav className='flex gap-6 mt-4 '>
            {footerlinks.map(nav => (
                <Link 
                key={nav.name} 
                href={nav.href}
                >
                    {nav.name}
                    </Link>
            ))}
        </nav>

      <p className="mt-6 border-t pt-4">
        © 2026 SayIt. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
