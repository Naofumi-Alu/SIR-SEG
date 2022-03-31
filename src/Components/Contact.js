import React,{useEffect,Component} from 'react';
import gsap from 'gsap';


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
                
                duration:1,
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
        
        <div className="Home" >
            <div className="Content1"ref={contactRef} >
                <div className="MainTitle">Contact</div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner" ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid"  alt="Images of banner" />
            </div>
        </div>
      
    ):
        
        <div className="Home" >
            <div className="Content1" ref={contactRef}>
                <div className="MainTitle">Contact </div>
                <div className="Content">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
            </div>
            <div className="c-l-Banner"  ref={bannerRef}>
                <div className="c-l-Banner--mask"></div>
                <img className="c-l-Banner--img container-fluid"  alt="Images of banner" />
            </div>
        </div>
  }