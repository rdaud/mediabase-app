import React, { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from '../components/NavBar';
import ContentContainer from '../components/ContentContainer';
import CampaignsTable from '../components/CampaignsTable';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getCampaigns } from '../redux/actions/campaignsActions';



const Hero = styled.div`
    background: #161616;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
`


const HomePage = ({ isAuthenticated, token, campaigns, ...props }) => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCampaigns(token))
  },[])

  console.log(token)
  console.log(campaigns)



  return (
    
    <Hero>
      <NavBar />
      <ContentContainer>
          <CampaignsTable></CampaignsTable>
      </ContentContainer>
    </Hero>
    
  );
}

const mapStateToProps = state => {
  const { token, isAuthenticated } = state.authentication
  const { campaigns } = state

  return { token, isAuthenticated, campaigns }
}

export default connect(mapStateToProps)(HomePage)