import React, { useState } from 'react'
import Sidebar from '../sidebar/sidebar'
import './interest.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import interestList from '../interest/interest-list'


const Interest = () => {
  const [value, setValue] = useState(null)

  const OnSliderChange = (val) => {
    setValue(val)
  }

  return (
    <div className='interest_layout'>
      <Sidebar />
      <div className='interest_content'>
        <p>Score your level of interest in these job titles:</p>
        <div className='sliders'>
          {interestList.list.map(({ title, id }) => (
            <div key={id}>
              <p >{title} {value !== null ? `${value}/10` : '1/10'} </p>
              <Slider
                step={1}
                defaultValue={1}
                min={1}
                max={10}
                onChange={OnSliderChange}
                className='slider'
              />
            </div>
          ))}





          {/* {value !== null ? `${value}/10` : '1/10'}  */}
          {/* <Slider step={1} defaultValue={1} min={1} max={10} onChange={OnSliderChange} /> */}
          {/* <p>Basic Slider {value !== null ? `${value}/10` : '1/10'} </p>
      <Slider step={1} defaultValue={1} min={1} max={10} onChange={OnSliderChange} /> */}
        </div>

      </div>
    </div>
  )
}

export default Interest