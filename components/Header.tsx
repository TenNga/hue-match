import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="container m-auto pt-8">
        <div>
        <Image
          src="/assets/icons/logo_w_name.png"
          alt="Hue Match Logo"
          width={180}
          height={38}
          priority
        />
        </div>
      </header>
  )
}

export default Header