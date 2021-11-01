import styled from "styled-components";
import { COLOR } from "../../../../tokens/colors";

export const CampaignsSectionWrapper = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const CampaignSectionHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding-left: 2rem;
`

export const CampaignSectionBody = styled.div`
    width: inherit;
    height: 100%;
    background: ${COLOR.gray100};
    padding: 2rem;
`