import React from 'react'
import GPTinput from './GPTinput'
import GPTsuggestion from './GPTsuggestion'
import {LOGIN_BG_IMG} from '../../utils/constants'

const GPTsearch = () => {
  return (
    <div>
      <div className='absolute bottom-0 -z-10'>
        <img className='max-[1096px]:h-screen'
        src={LOGIN_BG_IMG} alt='bg'/>         
      </div>
        <GPTinput />
        <GPTsuggestion />
    </div>
  )
}

export default GPTsearch