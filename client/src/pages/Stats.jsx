import Wrapper from '../assets/wrappers/StatItem';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
// import { useContext, createContext } from 'react';

export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};
// const StatsContext = createContext();
const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {/* {monthlyApplications?.length > 1 && ( */}
      <ChartsContainer data={monthlyApplications} />
      {/* )} */}
    </>
  );
};

export default Stats;
