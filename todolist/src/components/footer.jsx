import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import GithubIcon from '@mui/icons-material/Github';
import LanguageIcon from '@mui/icons-material/Language';


function Footer() {
    const styles = {
        foot: {
            backgroundColor: "#87ACA3",
            position: "auto",
            bottom: "-5%",
            left : "0%",
            borderRadius : "10px",
            border : "2px solid black",

            width: "100%",
            textAlign: "center",
            // color: "white",
            gap: "20px"
        },
        ul: {
            margin: " 0 40px",
            color :"red"
        }
    }
    const year = new Date().getFullYear();

    return (
        <div style={styles.foot}>
            <div style={styles.ul}>
                <span>  <a href="https://linkedin.com/in/arishsaifi" target="_blank" style={{color:"black"}}>
                    <LinkedinIcon /> </a>
                </span>
                <span>
                <a href="https://github.com/arishsaifi" target="_blank" style={{color:"black"}}>
                    <GithubIcon color="black" /> </a>
                </span>
                
                <span>
                <a href="https://arishsaifi.netlify.app" target="_blank" style={{color:"black"}}>
                    <LanguageIcon color="black" /> </a>
                </span>
                <span>
                <a href="https://fb.com/harishsaifi01" target="_blank" style={{color:"black"}}>
                    <FacebookIcon color="black" /> </a>
                </span>
                <span>
                <a href="https://instagram.com/harissaifi__" target="_blank" style={{color:"black"}}>
                    <InstagramIcon color="black" /> </a>
                </span>
            </div>
            <br />
            <div style={{ color: "black" }}>
                <i > <b>CopyRight {year}</b></i>
            </div>
        </div >
    )
}

export default Footer