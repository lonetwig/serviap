import React, { useState } from 'react'
import './style/topPage.css'


export default function Home(props){

//text array---------------------------------------------

  const [p,setP]=useState(props.text[0])
  const [selected,setselected]=useState(0)

    let selectors=[]
    for(let i=0;i<props.text.length;i++){
      selectors.push(<div className='selector' 
      id={selected==i?'selected':''} 
      key={props.text.indexOf(props.text[i])}></div>)
    }

  function changeHome(){
    for(let i=0;i<props.text.length;i++){
      if(props.text[i].title==p.title){
        if(i===props.text.length-1){
          setP(pre=>({...pre,opacity:0}))
          setTimeout(()=>{setP(props.text[0])},500)
        }else{
          setP(pre=>({...pre,opacity:0}))
          setTimeout(()=>{setP(props.text[i+1])},500)
        }
        setTimeout(()=>{setP(pre=>({...pre,opacity:1,imgPos:i%2==0?20:-20}));
        setselected(i===props.text.length-1?0:i+1)},600)
      }
    }
  }

//text border---------------------------------------------

  const comb=[0,1,-1,2,-2,3,-3,4,-4]
  let textBorder=''
  for(let i=0;i<comb.length;i++){
    comb.forEach(comb1=>{
      textBorder+=comb[i]+'px '+comb1+'px var(--color1),'
    })
  }
  textBorder=textBorder.substring(0,textBorder.length-1)
  
//styles-------------------------------------------------

    const titleStyle={
      'maxWidth':p.titleW,
      'textShadow':(textBorder),
      'fontSize':p.titleResize?'3rem':''
    }
    const text1Style={
      'maxWidth':p.text1W,
      'textShadow':(textBorder)
    }
    const text2Style={
      'maxWidth':p.text2W,
      'textShadow':(textBorder)
    }

    const opacity={
      'opacity':p.opacity
    }

    let right=p.iR
    const imageStyle={
      transform:'translateX('+p.imgPos+'px)',
      opacity:p.opacity,
      right:right
    }



//text2-------------------------------------------------

    const text2=p.text2.split('/n').map(text=>(
      <p className='text2' key={p.text2.indexOf(text)} style={text2Style}>{text}</p>)
    )

  return (
    <>
      <div className='full'>
        <div className='allSelectors'>{selectors}</div>
        <img src={require( './img/'+p.img+'.png')} style={imageStyle} />
        <div className='info' style={opacity}>
          <p className='title' style={titleStyle}>{p.title}</p>
          <p className='text1' style={text1Style}>{p.text1}</p>
          {text2}
        </div>

        <div className='container' onClick={changeHome} style={opacity}></div>

      </div>

      <div className='overlay'></div>

    </>
  )
}