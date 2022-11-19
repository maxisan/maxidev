/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useEffect, useState} from 'react'
import { Eye, EyePosition, EyeWrapper, Glasses, MainWrapper, Side, Sticker } from './styles'

const MainPhoto:React.FC = () => {

  const [eyeInitialPosition, setEyeInitialPosition] = useState<{left: {x:number, y:number}, right:{x:number, y:number}}>({left: {x: 0, y: 0}, right: {x:0, y:0}})
  
  const [eyePosition, setEyePosition] = useState<{left: EyePosition, right: EyePosition}>({
    left: {
      top:'30%',
      left:'30%'
    },
    right: {
      top:'30%',
      left:'30%'
    }
  })


  const calcEyesPosition = () => {
    const sides: Side[] = ['left', 'right']
    const EyeInitialPosition: {left: {x:number, y:number}, right:{x:number, y:number}} = {} as {left: {x:number, y:number}, right:{x:number, y:number}}
    sides.forEach((side) => {
      const eye = document.querySelector(`#${side}Eye`)
      if (!eye) return
      const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      EyeInitialPosition[side] = {x, y}
    })
    
    setEyeInitialPosition(EyeInitialPosition)
  }

  useEffect(() => {
    calcEyesPosition()
    window.addEventListener('resize', calcEyesPosition)
    return () => {
      window.removeEventListener('resize', calcEyesPosition)
    }
    }, [])
    
    useEffect(() => {
      const onMouseMove = (e:MouseEvent) => {
        const mousePosition = {x: e.x, y: e.y}
        const eyesPosition: {left: EyePosition, right: EyePosition} = {} as {left: EyePosition, right: EyePosition}
        const sides: Side[] = ['left', 'right']
        sides.forEach((side) => {
          const deltaX = mousePosition.x - eyeInitialPosition[side].x
          const deltaY = mousePosition.y - eyeInitialPosition[side].y
          eyesPosition[side] = {
            left: deltaX < 0 ? '0%' : deltaX === 0 ? '30%' : '60%',
            top: deltaY < 0 ? '0%' : deltaY === 0 ? '30%' : '60%'
          }
        })    
        setEyePosition(eyesPosition)
      }
      document.addEventListener('mousemove', onMouseMove)
      return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  },[eyeInitialPosition])
  
  

  const onLoadPhoto = () => {    
    document.getElementById('glasses')?.setAttribute('style', 'opacity: 1')
  }

  return (
    <MainWrapper tabIndex={0}>
      <Image 
        alt=''
        src={'/assets/landingPhoto/landing-ok.webp'}
        height={400}
        width={400}
        onLoadingComplete={() => onLoadPhoto()}
        style={{
          borderRadius: '50%'
        }}
      />
      <Glasses id='glasses'>
        <EyeWrapper side='left'>
          <Eye
            src={'/assets/landingPhoto/eye.svg'}
            id='leftEye'
            eyePosition={eyePosition.left}
          />
        </EyeWrapper>
        <EyeWrapper side='right'>
          <Eye
            src={'/assets/landingPhoto/eye.svg'}
            id='rightEye'
            eyePosition={eyePosition.right}
            className='eyes'
          />
        </EyeWrapper>
        <img
          className='glassesImg'
          src='/assets/landingPhoto/glasses.svg'
          alt=''
        />
      </Glasses>
      <Sticker
        className='sticker cat'
        src='/assets/landingPhoto/cat-sticker.webp'
        alt=''
        targetPosition={{
          top: -40,
          left: 0
        }}
      />
      <Sticker
        className='sticker game'
        src='/assets/landingPhoto/game-sticker.webp'
        alt=''
        targetPosition={{
          top: 10,
          left: -40
        }}
      />
      <Sticker
        className='sticker pc'
        src='/assets/landingPhoto/pc-sticker.webp'
        alt=''
        targetPosition={{
          top: 10,
          left: 40
        }}
      />
    </MainWrapper>
  )
}

export default MainPhoto