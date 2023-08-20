import logo from './logo.svg';
import DataFetcher from './UseEffectExample';
import FunctionalComponent from './typeofcomponent/FunctionalComponent';
import ClassComponent from './typeofcomponent/ClassComponent';
import ComponentLifeCycleInClass from './typeofcomponent/ComponentLifeCycleInClass';
import ContolledComponent from './typeofcomponent/ContolledComponent';
import UnControlledComponent from './typeofcomponent/UnControlledComponent';
import ListExample from './typeofcomponent/ListExample';
import EmployeeList from './typeofcomponent/EmployeeList';
import RouterExample from './phasetwo/RouterExample';
import StdDetails from './phasetwo/StudentContext';
import StudentDetails from './phasetwo/StudentDetails';
import React from 'react';
import HooksExample from './phasetwo/HooksExample';
import './typeofcomponent/sample.css'
import { Provider } from 'react-redux';
import updateStore from './redux/Store';
import ReduxExample from './redux/ReduxExample';

function App() {
  return (
    <>
      {/* <FunctionalComponent description="Props Example" name="Dinagaran" salary="50000" /> */}
      {/* <ClassComponent description="Props Example" channel="Data passing" /> */}
      {/* <ComponentLifeCycleInClass /> */}
      {/* <RouterExample /> */}
      {/* <React.Fragment>
        <StdDetails.Provider value={{name : 'Ramesh',age : 24, marks: '459', 
          address: 'Chennai', contactNo: '9876543210'}}>
            <HooksExample />
        </StdDetails.Provider>
      </React.Fragment> */}
      <Provider store={updateStore}>
          <ReduxExample />
      </Provider>
    </>
  );
}

export default App;
