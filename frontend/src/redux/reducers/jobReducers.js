import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobs: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsRequest: (state, action) => {
      state.loading = true;
    },

    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    },

    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    filterJobs: (state, action) => {
      state.jobs = state.jobs.filter((job) =>
        job.job_types.includes(action.payload.toLowerCase())
      );
    },


    findJobUsingSlug: (state, action) => {
      state.eachJob = state.jobs.find((job) => job.slug === action.payload);
    }
  },
});
export const {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  filterJobs,
  findJobUsingSlug
} = jobsSlice.actions;

export default jobsSlice.reducer;


export const jobFetch = () => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());
    try {
        const options = {
            method: 'GET',
            url: 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': 'd293de1820mshfc8264eb5112923p17bffajsn5b2f2d0f2991',
              'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
            }
          };
          
          const response = await axios.request(options)
          console.log(response.data)
          const jobs = response.data.data
            dispatch(fetchJobsSuccess(jobs)); //dispatch the action to the reducer
    } catch (error) {
        dispatch(fetchJobsFailure(error.message));
    }
  }
};
