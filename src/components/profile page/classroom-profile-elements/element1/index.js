import React from 'react';
import './styles.css'

const Questions1 = () => {
  return (
    <div className='container_1'>
      <form>
        <div className='items'>
          <p> <span>1.</span> Course of study in school: </p>
          <input type='text' name='course' placeholder='Course of study' className='course' />
        </div>
        <div className='items'>
          <p> <span>2.</span> Are you a student? <small></small></p>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className='items'>
          <p><span>3.</span>Did you graduate? <small></small></p>
          <div className='sub_item'>
            <input type='text' name='course course-1' placeholder='Course of study' className='course' />
            <input type='text' name='course course-2' placeholder='Expected Graduation date' className='course' />
          </div>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className='items'>
          <p><span>4.</span>Does your country require post-graduation service? <small></small></p>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Questions1