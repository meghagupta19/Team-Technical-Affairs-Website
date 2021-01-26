import React from 'react'
import './AboutUs.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function AboutUs() {
    return (
        <div>
            <CardGroup>
                    <Card className="about">
                    <Card.Header>About Us</Card.Header>
                       <Card.Body>
                           <Card.Text>
                           Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                           </Card.Text>
                       </Card.Body>
                       
                    </Card>
                    <Card>
                       <Card.Img variant="top" src="https://images.pexels.com/photos/1837412/pexels-photo-1837412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />                       
                    </Card>
            </CardGroup>
        </div>
    )
}

export default AboutUs
