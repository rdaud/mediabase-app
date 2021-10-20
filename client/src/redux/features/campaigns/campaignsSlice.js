import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {  
    status: "idle",
    loading: false,
    error: "",
    campaigns: []
}


const campaignSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {
        getCampaigns(state,action) {},
        createCampaign(state,action) {}
    }
})

export const { getCampaigns, createCampaign } = campaignSlice.actions

export default campaignSlice.reducer