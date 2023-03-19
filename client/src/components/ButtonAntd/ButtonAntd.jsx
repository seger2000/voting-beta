import React from 'react';
import { Button } from 'antd';

const ButtonAntd = (props) => {
  return (
    <Button
      className={props.className}
      id={props.id}
      type={props.type}
      icon={props.icons}
      style={props.style}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default ButtonAntd