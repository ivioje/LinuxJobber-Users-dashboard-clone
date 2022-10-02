import React, { useState } from 'react';
import './styles.css';
import { Check, Clear } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CreateProfile = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  const updateVal1 = e => {
    setValue1(e.target.innerText);
    if (e.target.innerText === 'Yes') {
      setIsOpen1(true)
    } else {
      setIsOpen1(false)
    }
  }

  const updateVal2 = e => {
    setValue2(e.target.innerText);
    if (e.target.innerText === 'No') {
      setIsOpen2(true)
    } else {
      setIsOpen2(false)
    }
  }

  const updateVal3 = e => {
    setValue3(e.target.innerText)
    if (e.target.innerText === 'Yes') {
      setIsOpen3(true)
    } else {
      setIsOpen3(false)
    }
  }

  const updateVal4 = e => {
    setValue4(e.target.innerText)
    setIsOpen4(true)
  }


  return (
    <div className='container_1'>
      <div className='form'>
        <div className='items'>
          <p> <span>1.</span> Course of study in school: </p>
          <input type='text' name='course' placeholder='Course of study' className='course' />
        </div>

        <div className='items'>
          <p> <span>2.</span> Are you a student?
            {value1 === 'Yes' ? <div className='yesVal'><i> <Check /></i> {value1}</div> : (value1 === 'No' ? <div className='noVal'><Clear /> {value1}</div> : '')}
          </p>
          <div className={isOpen1 ? 'hide' : ''}>
            <button onClick={updateVal1}>Yes</button>
            <button onClick={updateVal1}>No</button>
          </div>
          <div className={isOpen1 ? 'show m0' : 'hide'}>
            <input type='text' name='course ' placeholder='Course of study' className='course' />
            <input type='text' name='course' placeholder='Expected Graduation date' className='course' />
          </div>
        </div>

        <div className='items'>
          <p><span>3.</span>Did you graduate?
            {value2 === 'Yes' ? <div className='yesVal'><i> <Check /></i> {value2}</div> : (value2 === 'No' ? <div className='noVal'><Clear /> {value2}</div> : '')}
          </p>
          <div className={isOpen2 ? 'hide' : ''}>
            <button onClick={updateVal2}>Yes</button>
            <button onClick={updateVal2}>No</button>
          </div>
          <div className={isOpen2 ? 'show m1' : 'hide'}>
            <input type='text' name='course ' placeholder='Current Occupation' className='course' />
          </div>
        </div>

        <div className='items'>
          <p><span>4.</span>Does your country require post-graduation service?
            {value3 === 'Yes' ? <div className='yesVal'><i> <Check /></i> {value3}</div> : (value3 === 'No' ? <div className='noVal'><Clear /> {value3}</div> : '')}
          </p>
          <div className={isOpen3 ? 'hide' : ''}>
            <button onClick={updateVal3}>Yes</button>
            <button onClick={updateVal3}>No</button>
          </div>
          <div className={isOpen3 ? 'show m3' : 'hide '}>
            <p>Have you completed?
              {value4 === 'Yes' ? <div className='yesVal'><i> <Check /></i> {value4}</div> : (value4 === 'No' ? <div className='noVal'><Clear /> {value4}</div> : '')}
            </p>
            <section className='m0'>
              <button className={isOpen4 ? 'show_btn' : 'show_btn'} onClick={updateVal4}>Yes</button>
              <button className={isOpen4 ? 'show_btn' : 'show_btn'} onClick={updateVal4}>No</button>
            </section>
          </div>
          <section className={isOpen4 ? 'next_btn' : 'hide'} >
          <Link to='/level-of-interest'><button className='btn'>Next step</button></Link>
          </section>
        </div>

      </div>

    </div>
  )
}

export default CreateProfile