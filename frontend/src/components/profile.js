
import React, { useState,useEffect } from 'react'

function useProfile(getprofile) {
    const [profile,setProfile]=useState({})
    useEffect(()=>{
    fetch('https://api.github.com/users/mapur2')
    .then(res=>res.json())
    .then((data)=>setProfile(data))
    },[getprofile])
    console.log(profile.name)
    return profile
}
export default useProfile
