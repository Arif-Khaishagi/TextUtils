import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import { TbBackground } from 'react-icons/tb';

function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // })\

    let myStyle = {
      color: props.mode === 'dark' ? 'white' : '#042743',
      backgroundColor : props.mode === 'dark' ? 'grey' : 'white'
    }

  return (
    <Accordion defaultActiveKey="0" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
      <Accordion.Item eventKey="0" style={myStyle}>
        <Accordion.Header style={myStyle}>About me </Accordion.Header >
        <Accordion.Body style={myStyle}>
          I recently completed my graduation as B.Tech in Information and technology and this is
           one of my project you can see few more in my github. Currently I am open to work.
           this is my mail -- arifk847038@gmail.com.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle}>
        <Accordion.Header style={myStyle}>About website</Accordion.Header>
        <Accordion.Body style={myStyle}>
          This is one of the my basic project which I used for learning which has some of functionalities.
          Like - upperCase, LowerCase, Clear and copy text.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;