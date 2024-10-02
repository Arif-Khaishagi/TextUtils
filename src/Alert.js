import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
// import Button from 'react-bootstrap/Button';

function AlertDis(props) {
  const [show, setShow] = useState(true);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px", marginBottom: "50px" }}>
      {props.alert && (
        <>
          <Alert
            show={show}
            onClose={() => {
              setShow(false);
            }}
            variant={`${props.alert.type}`}
          >
            <Alert.Heading>Alert</Alert.Heading>
            <span>{capitalize(props.alert.type)}</span> :{props.alert.msg}
          </Alert>
        </>
      )}
    </div>
  );
}

export default AlertDis;
