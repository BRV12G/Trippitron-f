import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-md flex justify-between px-5'>
      <img src="/logo.png" height={200} width={150}/>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
