import React from 'react'
import {midPageText} from './text'

export default function MidPage(props) {

  let textStyle={
    'textShadow':props.textBorder,
  }

  return (
    <div className='midPage'>
    <div>
      <p className='title' style={textStyle}>{midPageText.title}</p>
      <p className='text1' style={textStyle}>{midPageText.text1}</p>
      <p className='text2' style={textStyle}>{midPageText.text2}</p>
    </div>
    <img src={require( './img/imgMid.png')}></img>
  </div>
  )
}
