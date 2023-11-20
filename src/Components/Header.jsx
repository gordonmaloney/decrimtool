import React from 'react'
import decrim from '../decrim.png'
import swu from '../swu.png'

export const Header = () => {
  return (
    <div className="header" style={{paddingTop: '2.5px'}}>
        
        <span style={{margin: '0 10px'}}>
        <a href="https://www.swunion.co.uk/" target="_blank">
        <img src={swu} height='55px' /></a>
</span>
<span style={{margin: '0 10px'}}>

<a href="https://decrimnow.org.uk" target="_blank">

        <img src={decrim} height='55px' />
        </a>
</span>    </div>
  )
}
