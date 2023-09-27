"use client"
import Navbar from '@/app/components/navbar';
import React, {useEffect} from 'react';

const Undangan = () => {
    useEffect(()=>{
        document.title = "Web Store - Undangan"
    },[])
    return (
        <div>
            <Navbar/>
            <h1>undangan</h1>
        </div>
    );
}

export default Undangan;
