import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Card from './components/Card/Card';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <KanbanBoard />
    </div>
  ) : <Loading />
}
export default App