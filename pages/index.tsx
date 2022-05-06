import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Landing from '../components/Landing'
import Loading from 'components/Loading'

const Title = styled.h1`
  color: ${({theme}) => theme.colors.font};
`

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Loading />
    </>
  )
}

export default Home
