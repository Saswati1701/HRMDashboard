import React from 'react'
import './switch.css'
import Switch, { switchClasses } from '@mui/base/Switch';
import { alpha, styled } from '@mui/material/styles';


const Switch_component = ({switchText, trackColor}) => {
  const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };
  const blue = {
    500: '#007FFF',
  };
  
  const grey = {
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
  };

  // const trackColor ={
  //   400: "#38CB89",
  //   500: "#FFF8EE",
  //   600: "#FF5630",
    
  // }
  
  const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 16px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchClasses.thumb} {
      display: block;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    }
  
    &.${switchClasses.focusVisible} .${switchClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchClasses.checked} {
      .${switchClasses.thumb} {
        left: 20px;
        top: 4px;
        background-color: #fff;
      }
  
      .${switchClasses.track} {
        background: ${trackColor};
      }
    }
  
    & .${switchClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
  );
  return (
    <p className='switch'>
        <span>
            <Switch
            
            slots={{
                root: Root,
            }}
            {...label}
            defaultChecked
            />
        </span>{switchText}
    </p>
  )
}

export default Switch_component