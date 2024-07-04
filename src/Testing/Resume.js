import React from 'react'

const Resume = () => {
  return (
<div style={{width:'500px',height:'200px', backgroundColor:'#F6F6F6', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
    <div>
        
        <i style={{color:'gray'}} class="fa-solid fa-file-arrow-up"></i>
        <p>Drag and drop your files here</p>
        <p>or</p>
        </div>
    <div>
        <label for="browse"> browse</label>
<input type='file' id='browse' accept='.pdf' multiple style={{display:'none'}} />

    </div>

    </div>
  )
}

export default Resume