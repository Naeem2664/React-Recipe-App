import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import {BiLogoFacebook,BiLogoTwitter,BiLogoLinkedin,BiLogoGithub, BiLogoInstagram,BiLogoYoutube} from "react-icons/bi";

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998',fontSize:'10px' }}
            role='button'
          >
            <BiLogoFacebook style={{fontSize:'1rem'}}/>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            role='button'
          >
            <BiLogoTwitter style={{fontSize:'1rem'}}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            role='button'
          >
            <BiLogoYoutube style={{fontSize:'1rem'}}/>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
        
            role='button'
          >
            <BiLogoLinkedin style={{fontSize:'1rem'}}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            role='button'
          >
            <BiLogoGithub style={{fontSize:'1rem'}}/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: ' rgb(30, 30, 30)' }}>
        © 2023 Copyright:
          Muhammad Naeem
      </div>
    </MDBFooter>
  );
}