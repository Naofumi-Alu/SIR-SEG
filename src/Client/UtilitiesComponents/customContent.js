import React , {useEffect,useState}from 'react';
import {gsap} from 'gsap';
import ImagenCapacitacion from '../imagenes/CapacitacionInfraestructuraCisco.jpg';
// IMportar logo  fondo blanco ilusttracion negra
import LogoSirSegNegro from '../logoSIRSegNegro.svg';

// Estilos del componente

const stylePadding={
    padding:'5%',
    color:'#fff',
}

const containerBodyContent={    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

 const sizeBodyContent={
    height:'30vh',
    border:'1px solid black',
    fontSize:'1.5rem',
    }

    const sizeTitleContent={
        fontSize:'2rem',
    }


    // estilos de el banner

    const bannerContentHome={
        backgroundColor:'#000',
        height:'100vh',
        width:'100vw',
        display:'flex',
    }

    const bannerContentHomeBannerLeft={
        backgroundImage:`url(${ImagenCapacitacion})`,
        width:'50vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        color:'#fff'
    }

const bannerContentHomeBannerRight={
    backgroundColor:'#101216',
    width:'50vw',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'#fff'
}

const bannerContentHomeBannerLeftTitle={
        color:'#fff',
        fontSize:'2rem',
        fontWeight:'bold',
        marginTop:'10%',
        marginBottom:'10%',
}

const bannerContentHomeBannerLeftFigure={
    width:'100%',
    height:'100%',
    margin:'0 auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'#fff'
}
const bannerContentHomeBannerLeftImg={
    width:'100wh',
    height:'100vh',
    objectFit:'cover',
    backgroundrepeat:'no-repeat',
    
}
// estilos del contenido traido de la base de datos

const styleColorContet={
    color:'#333',
}
const styleBackgroundContent={
    backgroundColor:'#ffffff',
}


const imageSection = {
    width:'100%',
    height:'100%',
    objectFit:'cover',
    backgroundrepeat:'no-repeat',
}

const mainContainerFlex={
    padding:'8%',
}

const containerFlexElements ={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

const containerFlexElementsContent ={
    width:'60%',
    height:'100%',
    padding:'5%',
}

const containerFlexElementsFigure ={
    width:'40%',
    height:'30%',
}

const containerFlexElementsFigure2 ={
    width:'40%',
    height:'30%',
}

//crea  componente CustomContent que usara un componente padre

//Make a Ajax Request to get the data from the server and then render the data in the component

export  function CustomContentHome(props){
    //aca entra el estado del componente padre App
    const [error, setError] = useState(null);
    const [data ,setData]=useState([]);
     
    
        useEffect(()=>{
           
            fetch("http://localhost:3000/Api",
            {
                method:'GET',
                headers:
                    {
                    'Content-Type':'application/json'
                    },
                mode:'cors',
                cache:'default'
            })
            .then(response => response.json())
            .catch(error => {setError(error) ,console.error('Error:', error)})
            .then(response => { setData(response),console.log('Result:', response)});

          
        
        },[])
        return (
            
        <>
            <section style={bannerContentHome}>
                <div style={bannerContentHomeBannerLeft}>
                    <figure style={bannerContentHomeBannerLeftFigure}>
                        <img src={ImagenCapacitacion} style={bannerContentHomeBannerLeftImg}/>
                    </figure>
                </div>

                <div style={bannerContentHomeBannerRight}>
                    <div>
                        <h1 style={bannerContentHomeBannerLeftTitle}>Quienes somos</h1>
                        <p>{props.content}</p>
                    </div>
                </div>
            </section>
            
            <section style={styleBackgroundContent}>
                <div className="row">
                    <div className="col-md-12">
                        <div style={mainContainerFlex} className="card col-md-12 mt-4 text-center">
                            <article style={containerFlexElements}>
                               <div>
                                    <h1  style={styleColorContet}>Quienes Somos</h1>
                                    <p  style={styleColorContet}>El semillero SIRSEG es un grupo enfocado a fotalecer cada una de las lineas de investigacion como infraestructura de redes y seguridad informatica con el fin de construir e inovar proyectos tecnologicos con las nuevas tendencias TICS, fomentando buenas practicas academicas y empresariales.</p>
                               </div>
                               <figure>

                               </figure>
                           </article>  
                        {data.map(item =>
                           
                           item.ID == "1" ?
                           <article style={containerFlexElements}>
                                <div style={containerFlexElementsContent} key={item.ID}>
                                    <h1  style={styleColorContet}>{item.ID} </h1>
                                    <h1  style={styleColorContet}>{item.title}</h1>
                                    <p  style={styleColorContet}>{item.body}</p>
                                </div>
                                <figure style={containerFlexElementsFigure2}>
                                    <LogoSirSegNegro/>
                                </figure>
                            </article>
                          :
                        item.ID == "2"&&
                            <article style={containerFlexElements}>
                                <figure style={containerFlexElementsFigure}>
                                    <img style={imageSection} src={item.IMAGES} alt="" />
                                </figure>
                                <div style={containerFlexElementsContent} key={item.ID}>
                                    <h1  style={styleColorContet}>{item.ID} </h1>
                                    <h1  style={styleColorContet}>{item.title}</h1>
                                    <p  style={styleColorContet}>{item.body}</p>
                                </div>
                            </article>
                        )
                        }
                            <article style={containerFlexElements}>
                               <div style={containerFlexElementsContent}>
                                    <h1  style={styleColorContet}>Proyectos</h1>
                                    <p  style={styleColorContet}>Contamos con proyectos de nivel empresarial desarrollado en conjujnto con socios empresariales</p>
                               </div>
                               <figure style={containerFlexElementsFigure}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUWBcI-jAlpsOHWUGwo9wsXJ6K_1BPlzN_g&usqp=CAU" alt="" />
                               </figure>
                           </article>  
                           <article style={containerFlexElements}>
                               <figure style={containerFlexElementsFigure}>
                                    <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-seguridad-computacion-nube_335657-2105.jpg' />
                               </figure>
                               <div style={containerFlexElementsContent}>
                                    <h1  style={styleColorContet}>Analisis  y auditorias</h1>
                                    <p  style={styleColorContet}>Realizamos analisis y auditorias enfocados a la seguridad informatica y la infraestructura, que requieran los proyectos gestionados</p>
                               </div>
                           </article>  
                        </div>
                            
                    </div>
                </div>
            </section>
            <footer>
                
            </footer>
        </>
    )
}

export function CustomContentProyect(props){
    const [data,setData]=useState([]);
    
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((json)=>{setData(json);})
        
        },[data])
        return (
        <>
            
                
        
            <div className='container-fluid ' style={stylePadding}>
                {data.map(item=>(
                    <div style={containerBodyContent} className='row col-md-12 ' key={item.id}>
                        <h3 className='col-md-4'>{item.title}</h3>
                        <p style={sizeBodyContent} className='col-md-8'>{item.body}</p>
                    </div>
                ))}
            </div>       
        </>
        )
}

export function CustomContentPTools(props){
    const [data,setData]=useState([]);
    
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((json)=>{setData(json);})
        
        },[data])
        return (
            
        <>
            
                
        
            <div className='container-fluid ' style={stylePadding}>
                {data.map(item=>(
                    <div style={containerBodyContent} className='row col-md-12 ' key={item.id}>
                        <h3 className='col-md-4'>{item.title}</h3>
                        <p style={sizeBodyContent} className='col-md-8'>{item.body}</p>
                    </div>
                ))}
            </div>       
        </>
        )
    }
export function CustomContentTopics(props){
    const [data,setData]=useState([]);
    
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((json)=>{setData(json);})
        
        },[data])
        return (
            
        <>
            
                
        
            <div className='container-fluid ' style={stylePadding}>
                {data.map(item=>(
                    <div style={containerBodyContent} className='row col-md-12 ' key={item.id}>
                        <h3 className='col-md-4'>{item.title}</h3>
                        <p style={sizeBodyContent} className='col-md-8'>{item.body}</p>
                    </div>
                ))}
            </div>       
        </>
        )
    }
export function CustomContentPartner(props){
    const [data,setData]=useState([]);
    
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((json)=>{setData(json);})
        
        },[data])
        return (
            
        <>
            
                
        
            <div className='container-fluid ' style={stylePadding}>
                {data.map(item=>(
                    <div style={containerBodyContent} className='row col-md-12 ' key={item.id}>
                        <h3 className='col-md-4'>{item.title}</h3>
                        <p style={sizeBodyContent} className='col-md-8'>{item.body}</p>
                    </div>
                ))}
            </div>       
        </>
        )
    }
export function CustomContentContact(props){
    const [data,setData]=useState([]);
    
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then((json)=>{setData(json);})
        
        },[data])
        return (
            
        <>
            
                
        
            <div className='container-fluid ' style={stylePadding}>
                {data.map(item=>(
                    <div style={containerBodyContent} className='row col-md-12 ' key={item.id}>
                        <h3 className='col-md-4'>{item.title}</h3>
                        <p style={sizeBodyContent} className='col-md-8'>{item.body}</p>
                    </div>
                ))}
            </div>       
        </>
        )
    }

    
    




