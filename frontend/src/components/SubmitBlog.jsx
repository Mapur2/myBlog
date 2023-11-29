import React, { useState } from 'react'

function SubmitBlog() {

  const [Head, setHead] = useState("")
  const [Image, setImage] = useState("")
  const [Cap, setCap] = useState("")
  const [Text, setText] = useState("")
  console.log(Head, Image, Cap, Text)
  const handleSubmit = () => {
    if(Head=="" && Image=="" && Text=="")
      alert("Please fill all the details")
    else{
    fetch("http://localhost:5000/blogs/posts",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ head: Head, pic: Image, cap:Cap, text:Text })
      })
      .then(function (res) { 
        setCap("")
        setHead("")
        setImage("")
        setText("")
        alert("Your blog is submited")
        console.log(res) })
      .catch(function (res) {
        alert("Something went wrong. Please try again")
         console.log(res) })
      }
      
  }
  return (
    <div className='inputbox'>
      <h1>Create New Blog</h1>
      <div className="mb-3 ">
        <label htmlFor="formGroupExampleInput" className="form-label">Heading</label>
        <input
          type="Text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Your heading"
          onChange={e => setHead(e.target.value)}
          value={Head}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Caption(Optional)</label>
        <input
          type="Text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Your caption"
          onChange={(e) => setCap(e.target.value)}
          value={Cap}
        />

        <label htmlFor="formGroupExampleInput2" className="form-label">Image URL</label>
        <input
          type="text" className="form-control"
          id="formGroupExampleInput2"
          placeholder="Your Image url"
          onChange={e => setImage(e.target.value)}
          value={Image}
        />

        <label htmlFor="formGroupExampleInput2" className="form-label">Text</label>
        <textarea
          type="Text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Your Text"
          onChange={e => setText(e.target.value)}
          value={Text}
        />

      </div>
      <div className="btn-primary btn" onClick={handleSubmit}>Submit</div>
    </div>
  )
}

export default SubmitBlog
