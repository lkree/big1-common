import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import CommonDataProvider from "./context/CommonData";

const App = () => (
  <CommonDataProvider>
    <Header/>
  </CommonDataProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));