import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import NavBar from '../NavBar';
import ContentContainer from '../ContentContainer';
import Table from '../Table';
import { useSelector } from 'react-redux';


import styled from 'styled-components'


const Hero = styled.div`
    background: #161616;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
`


export default function HomePage() {

  const user = useSelector( state => state.authentication )

  console.log( user )
    
  return (
    
        <Hero>
          <NavBar />
          <ContentContainer>
              <Table />
          </ContentContainer>
        </Hero>
    
  );
}


