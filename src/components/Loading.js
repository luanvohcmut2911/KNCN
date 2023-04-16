import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import styled, {css} from 'styled-components'
// import { PacmanLoader } from 'react-spinners';

LoadingOverlay.propTypes = undefined;

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  ${props =>
    props.disappear &&
    css`
      display:  flex; /* show */
    `}
`;



export default function Loading({props}) {
  const {disappear} = props;
  return (
    <DarkBackground disappear={disappear}> 
      <LoadingOverlay
        active={true}
        spinner={true}
        text="Loading..."
      >

      </LoadingOverlay>
    </DarkBackground>
  )
}
