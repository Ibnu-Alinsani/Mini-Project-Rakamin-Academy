import React from 'react'

function TextField(props) {
  return (
    <div className='mb-5'>
        <label htmlFor="title" className='label'>Title</label>
        <input type='text' id="title" className='input w-[383px] h-10' placeholder="placeholder" onChange={props.change}/>
    </div>
  )
}

export default TextField