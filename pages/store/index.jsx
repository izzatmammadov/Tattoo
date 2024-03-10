import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import Head from 'next/head'
import React from 'react'

function Store(){
  return (
    <>
    <Head>
        <title>TATTOSHOP | Store</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

      <Header/>
      <section data-aos="fade-up" className='flex p-5 sm:p-10 flex-col justify-center gap-10 sm:gap-0 text-center'>
        <h1 className='text-[#ccc] font-amita text-[40px] sm:text-[80px]'>COMING SOON</h1>
        <p className='font-poppins text-[#ccc] leading-7'>We are thrilled to announce that our tattoo shop will soon be unveiling an array of exciting new products and offerings in our store section! From innovative tattoo equipment to a curated selection of high-quality aftercare products, we're dedicated to providing our clients with everything they need for a seamless and satisfying tattoo experience.</p>
      </section>
      <Footer/>
    </>
  )
}

export default Store
