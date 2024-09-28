import React from 'react'

const page = async({params : {id}}) => {
  const data = await fetch('ht')
  return (
    <div>this is dynamic page {id} </div>
  )
}

export default page