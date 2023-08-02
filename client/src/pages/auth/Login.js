import React from 'react'
import BgImage from '../website/BgImage'

const Login = () => {
  return (
    <>
    <div className='row mt-80'>
      <div className='col-8'>
        <BgImage />
        {/* <BgImage />
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: '14px',
            },
          }}
        /> */}
      </div>
      <div className='col-4'>
        <div className='account'>
          <div className='account__section'>
            <form >
              <div className='group'>
                <h3 className='form-heading'>Login</h3>
              </div>
              <div className='group'>
                <input
                  type='email'
                  name='email'
                  className='group__control'
                  placeholder='Enter Email'
                  // value={state.email}
                  // onChange={handleInputs}
                />
              </div>
              <div className='group'>
                <input
                  type='password'
                  name='password'
                  className='group__control'
                  placeholder='Create Password'
                  // value={state.password}
                  // onChange={handleInputs}
                />
              </div>
              <div className='group'>
                <input
                  type='submit'
                  className='btn btn-default btn-block'
                  value='Login'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login