import styled from '@emotion/styled';
import React from 'react';

function Header() {
    // stylesssss=============================
    const styles = {
        header: {
            backgroundColor: "teal",
            margin: " 0",
            padding: "0",
            width :"100%",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
            borderRadius : "10px"
        },
        h1: {
            color: "#fff",
            fontFamily: "McLaren, sans-serif",
            fontWeight: "200",
            textAlign: "center"
        }
    }


return (
    <div className='header' style={styles.header}>
        <h1  style={styles.h1}>TO do list   <span style={{ fontFamily: "McLaren, cursive",color:"#94FFFF"}}>  by- HARIS</span></h1>
    </div >
)
}

export default Header


