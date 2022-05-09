import React,{useEffect,Component} from 'react';
import gsap from 'gsap';
import LoadApp from './LoadApp';
import logoReact from '../logoReact.svg';

//import image logoReact.svg and then  the Contact component render this image

const bannerRef = React.createRef();
const contactRef = React.createRef();
var tl= gsap.timeline({repeatDelay:0});

export default function Contact(props){
    
    props.state!=0?useEffect(() => {
        tl.fromTo(bannerRef.current, 
            {
                
                duration:0,
                scale:0.7,
                opacity:0
            },
            {
                
                duration:0,
                scale:1,
                opacity:1,
                ease:"back.out(1.2)",
                delay:0
            
            });
        tl.from(contactRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    }):
    useEffect(() => {
        tl.fromTo(bannerRef.current, 
            {
                
                duration:0,
                scale:0.7,
                opacity:0
            },
            {
                
                duration:1,
                scale:1,
                opacity:1,
                ease:"back.out(1.2)",
                delay:1.3
            
            });
        tl.from(contactRef.current,{opacity:0 , duration:1, ease:"back.out(1.2)",x:100});
    });
   
    
    
    return props.state==0?(
    <>
        <div className="Home" >
            <div className="Content1"ref={contactRef} >
                <div className="MainTitle">Contact</div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <LoadApp className="App-logo" style={CLstyleContact} img={logoReact} />
            </div>
        </div>
        <a style={styleBannerlink} href="#Contact/Content" onClick={props.onHandleComponentUtility}  ></a>
    </>  
    ):
    <>    
        <div className="Home" >
            <div className="Content1" ref={contactRef}>
                <div className="MainTitle">Contact </div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner"  ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <LoadApp  className="App-logo"  img={logoReact} />
            </div>
        </div>
        <a style={styleBannerlink} href="#Contact/Content" onClick={props.onHandleComponentUtility} ></a>
    </>
  }

  const styleBannerlink ={
    position:"absolute",
    top:"35%",
    right:"20%",
    zIndex:300,
    background:"#95B6DE",
    width:"30%",
    height:"35%",
    opacity:"0",

  }

  const CLstyleContact = {
      
  }