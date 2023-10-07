import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { greetingDataFetch } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetingItem } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(greetingDataFetch());
  }, [dispatch]);

  if (!greetingItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Random Greeting</h1>
      <h2>{greetingItem.greeting}</h2>
      <p>Thanks for using my App !!!</p>
    </>
  );
};

export default Greeting;
