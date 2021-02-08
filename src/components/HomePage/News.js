import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './News.css'

function News() {
    return (
        <div>
          <h4 className="news-head">News</h4>
          <Carousel pause="false">
                <Carousel.Item interval={1000} className="news-item"> 
                <img className="d-block w-100"src="https://images.pexels.com/photos/4754093/pexels-photo-4754093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                  alt="First slide"/>
                    <Carousel.Caption>                     
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500} className="news-item"> 
               <img className="d-block w-100"src="https://images.pexels.com/photos/4754093/pexels-photo-4754093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>                  
                    <Carousel.Caption>                      
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500} className="news-item">    
               <img className="d-block w-100"src="https://images.pexels.com/photos/4754093/pexels-photo-4754093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>               
                    <Carousel.Caption>                      
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={1000} className="news-item"> 
               <img className="d-block w-100"src="https://images.pexels.com/photos/4754093/pexels-photo-4754093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"/>                  
                   <Carousel.Caption>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
                   </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
                       
        </div>
    )
}

export default News
