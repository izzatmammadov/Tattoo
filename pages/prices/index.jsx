import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import Head from 'next/head'
import React from 'react'

function Prices(){
  return (
    <>
    <Head>
        <title>TATTOSHOP | Prices</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
    
    <Header/>
    <Footer/>
    </>
  )
}

export default Prices
