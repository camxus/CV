import React from 'react'

function Intro({title}: {title: string}) {
  return (
    <div className="load-page">
        <div className="name-container">
            <div className="loadingname">
                <h1>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Intro