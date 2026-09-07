import React from 'react';
import RefsFunc from './ref-func';
import RefsArray from './refs-array';
import MessageBox from './state-class';
import Effect from './effect';
import Header2 from './context-header2'
import {userContext} from './context'
import Content2 from './context-content2';
import Router2 from './router2';
import Router3 from './router3';

export default function App() {
  const [user,setUser] = React.useState("")
  
  return (
    <Router3/>
  )
}

