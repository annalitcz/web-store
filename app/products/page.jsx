"use client"
import React, { useEffect } from 'react';
import "../globals.css"
import Link from 'next/link';
import Navbar from '../components/navbar';

const Produk = () => {
    useEffect(()=>{
        document.title = "Web Store - Products"
    },[])
    return (
        <div>
            <Navbar/>
            <h1>ini halaman produk</h1>
            <Link href='products/undangan'>view</Link>
        </div>
    );
}

export default Produk;
