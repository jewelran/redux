
import './App.css';
import PatientManagemet from './component/PatientManagement/PatientManagemet';
import ReducerCount from './component/ReducerCount/ReducerCount';
import TestReducer from './component/TestReducer/TestReducer';
// import ExploreRef from './component/ExploreRef';
// import Home from './component/Home';

function App() {
  return (
    <div className="App">
      {/* <ExploreRef></ExploreRef>
      <Home></Home> */}
      <ReducerCount></ReducerCount>
      <PatientManagemet></PatientManagemet>
      <TestReducer></TestReducer>
      
    </div>
  );
}

export default App;
