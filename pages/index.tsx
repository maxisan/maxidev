import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({theme}) => theme.colors.font};
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Hola mundo
    </div>
  )
}

export default Home
