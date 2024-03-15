import React from 'react'

const DropDown = ({title, options}) => {
  return (
    <div className='select'>
        <select defaultValue="0" name="format" id="format">
           <option value="0" disabled>
                {title}
           </option>
           {options.map((o,i)=>(
              <option value={o} disabled>
                  {o.toUpperCase()}
             </option>
           ))}
        </select>
   </div>
  )
}

export default DropDown;