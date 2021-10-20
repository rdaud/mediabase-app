import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from '../components/NavBar';
import ContentContainer from '../components/ContentContainer';
import CampaignsTable from '../components/CampaignsTable';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCampaigns, openAddCampaignModalRequest } from '../redux/actions/campaignsActions';
import AddCampaignPage from './AddCampaignPage'



const Hero = styled.div`
    background: #161616;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
`


const HomePage = ({ isAuthenticated, token, campaigns, status, addCampaignModal, loading, ...rest }) => {


  const dispatch = useDispatch()
  // const [ addCampaignIsClicked, setaddCampaignIsClicked ] = useState({
  //   status: false
  // })

  useEffect(() => {
    if (status === 'readyToUpdate') {
      dispatch(getCampaigns(token))
    }
  },[])

  const allowed = ['id','nome','cliente','status','produto','dataDeVeiculacaoInicio', 'dataDeVeiculacaoFim']

  const filteredData = [...campaigns].map((item,index) => {
   
    const filtered = Object.keys(item)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});

    return filtered
  })

  // const handleClick = () => {
  //   setaddCampaignIsClicked({
  //     status: !addCampaignIsClicked.status
  //   })
  // }
 

  console.log(campaigns)


  return (
    
    <Hero>
      { addCampaignModal && <AddCampaignPage loading={loading}/> }
      <NavBar />
      <ContentContainer>
          <CampaignsTable data={filteredData}></CampaignsTable>
      </ContentContainer>
    </Hero>
    
  );
}

const mapStateToProps = state => {
  const { token, isAuthenticated } = state.authentication
  const { campaigns, status, addCampaignModal, loading } = state.campaigns
  return { token, isAuthenticated, status, loading, campaigns, addCampaignModal }
}

export default connect(mapStateToProps)(HomePage)