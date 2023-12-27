import React from 'react'

const Reusable = (props) => {
  return (
    <div>
        <ul>
            {props.data?.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Reusable