import React from 'react'
import Menu from '../components/menu/Menu'
import Banner from '../components/banner/Banner'
import Resume from '../components/resume/Resume'
import Sr from '../components/ser/Sr'
import Blog from '../components/blog/Blog'
import Ct from '../components/ct/Ct'
import Ftr from '../components/ftr/Ftr'
import Cpr from '../components/copyr/Cpr'

const Home = () => {
  return (
    <>
      <Menu/>
      <Banner/>
      <Resume/>
      <Sr/>
      <Blog/>
      <Ct/>
      <Ftr/>
      <Cpr/>
    </>
  )
}

export default Home
