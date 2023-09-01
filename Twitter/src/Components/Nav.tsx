import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='flex justify-between pt-8'>
        <img className='w-12 ml-12' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553' />
            <ul className='flex mr-12 gap-8 text-xl'>
                <a href='/'><li className='hover:text-sky-500 cursor-pointer'>Log in</li></a>
                <a href='/SignUp'><li className='hover:text-sky-500 cursor-pointer' >Sign up</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Nav