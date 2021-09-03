import React from 'react';
import logo from '../images/logo.png';
import './footerp.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer=() => {
    return(
<div className="main-footerp">
<div className="containter">
    <div className="row">
        <div className="col" style={{ top:'5vh'}}>
        <img  src={logo} alt="logo" style={{  height: '25vh',width:'15vw',top:'2vh'}} />
        </div>
        <div className="col" style={{  left:'-25vw',top:'-4vh'}}>
        <h4 style={{  top:'-6vh'}}>CONTACT</h4>
        <ul className="list-unstyled" >
            <PhoneInTalkIcon style={{position:'absolute',left:'0',top:'9vh'}}></PhoneInTalkIcon><li>+94 76 630 5099</li>
            
            <EmailIcon style={{position:'absolute',left:'0',top:'12vh'}}></EmailIcon><li>automate@gmail.com</li>
        </ul>
        </div>
        <div className="col" style={{  left:'-10vw'}}>
        <h4 style={{  position:'absolute', bottom:'12vh',left:'-2vw'}}>LINKS</h4>
        <ul className="list-unstyled1" style={{ position:'absolute', left:'-4vw',bottom:'-1vh'}} >
            <li>Contact</li>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
        </ul>
        </div>
        <div className="col" style={{  left:'15vw'}}>
            <h4 style={{  position:'absolute', bottom:'10vh',left:'-2vw',textAlign:'center'}}>DOWNLOAD OUR APP</h4>
            <AppleIcon style={{position:'absolute',left:'-2vw',top:'-8vh'}}></AppleIcon>
            <AndroidIcon style={{position:'absolute',left:'2vw',top:'-8vh'}}></AndroidIcon>

        </div>
    </div>
    <div className="row" style={{ textAlign:'center'}}>
    <FacebookIcon></FacebookIcon>
    <InstagramIcon style={{position:'relative',left:'2vw'}}></InstagramIcon>

        <p className="col-sm">© 2010 — 2020 Privacy — Terms</p>
    </div>
</div>

</div>

    );
}
export default Footer;