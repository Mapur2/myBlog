import React, { useEffect, useState } from 'react'
import useProfile from './profile'

function About() {


    const profile=useProfile()

  return (
    <div id='about1'>
      <div id='about'>
      <img src={profile.avatar_url} alt="" />
      <div>{profile.name}</div>
      <p>{profile.bio}</p>
    </div>
    </div>
  )
}

export default About
