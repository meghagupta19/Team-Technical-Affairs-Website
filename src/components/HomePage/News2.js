import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './News.css'

function News2() {
    return (
        <div className="news2">
            <Carousel>
                <Carousel.Item interval={1000} > 
                <img className="d-block w-100"src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                  alt="First slide"/>
                    <Carousel.Caption>
                     <h5>First slide label</h5>
                     
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500} > 
               <img className="d-block w-100"src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>                  
                    <Carousel.Caption>
                      <h5>Second slide label</h5>
                      
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500} >    
               <img className="d-block w-100"src="https://images.pexels.com/photos/1238966/pexels-photo-1238966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>               
                    <Carousel.Caption>
                      <h5>Third slide label</h5>
                      
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={1000}> 
               <img className="d-block w-100"src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>                  
                   <Carousel.Caption>
                     <h5>Fourth slide label</h5>
                     
                   </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default News2
