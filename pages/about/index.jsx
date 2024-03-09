import { AboutSecond } from '@/shared/components/AboutSecond'
import { AboutTitle } from '@/shared/components/AboutTitle'
import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import Head from 'next/head'
import React from 'react'

function About(){
  return (
    <>
      <Head>
        <title>TATTOSHOP | About</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
      
      <Header/>
      <AboutTitle/>
      <AboutSecond/>
      <Footer/>
      </>
  )
}

export default About
