import React from 'react'
import title from "./title.jpg"

export default function Body() {
  return (
    <>
        <h2 class="display-6">Creative Printed Mobile Covers</h2>
     <img src={title} class="img-fluid" alt="..."></img>
    <p>
      <h3>Select your Mobile Brand</h3>
      {/* <ul class="list-group" style={{width : "fit-content;"}}>
        <li  class="list-group-item">Apple</li>
        <li  class="list-group-item">Samsung</li>
        <li  class="list-group-item">Xiomi</li>
        <li  class="list-group-item">Vivo</li>
        <li  class="list-group-item">Oppo</li>
        <li  class="list-group-item">Asus</li>
      </ul> */}
    </p>


    <p>
       <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
       Apple
        </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
      <ul class="list-group" style={{width : "fit-content;"}}>
        <li  class="list-group-item"><a href='#'>iPhone 11</a></li>
        <li  class="list-group-item">iPhone 11 pro</li>
        <li  class="list-group-item">iPhone 12</li>
        <li  class="list-group-item">iPhone 13</li>
        <li  class="list-group-item">iPhone 13 pro</li>
        <li  class="list-group-item">iPhone 14</li>
      </ul>
       </div>
    </div>
    </>
  )
}
