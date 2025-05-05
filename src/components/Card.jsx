import React from 'react'

const Card = ({data}) => {
    console.log("data", data)
  return (
    <div>{data.jobs}</div>
  )
}

export default Card