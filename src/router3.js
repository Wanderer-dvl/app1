import React from 'react';
import { BrowserRouter, NavLink,Route,Routes } from 'react-router-dom';
import './navlink.css';
import './App.css';
import Home from './home';
import Products from './product';
import Member from './member';

export default function Router3() {
    return (
        <BrowserRouter>
            <nav class="nav">
                <NavLink to ='/' className={({isActive})=>isActive?
                "active_menu":"menu"} style={({isActive})=>{
                    return{
                        fontWeight: isActive?"bold":""
                    };
                
                }}>Home</NavLink> -&nbsp;
                <NavLink to ='/products' className={({isActive})=>isActive?
                "active_menu":"menu"} style={({isActive})=>{
                    return{
                        fontWeight: isActive?"bold":""
                    }
                }
                }>Products</NavLink> -&nbsp;
                <NavLink to ='/member' className={({isActive})=>isActive?
                "active_menu":"menu"} style={({isActive})=>{
                    return{
                        fontWeight: isActive?"bold":""
                    }
                }
                }>Member</NavLink> -&nbsp;
                <NavLink to='/contact' className={({isActive})=>isActive?
                "active_menu":"menu"} style={({isActive})=>{
                    return{
                        fontWeight: isActive?"bold":""
                    }
                }
                }>Contact</NavLink> -&nbsp;
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/member' element={<Member/>}/>
                <Route path='/contact' element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
                <Route path='/*' element={<div style={{textAlign:'center'}}>404 Not Found</div>}/>
            </Routes>
            
             
        </BrowserRouter>
    )
}
    