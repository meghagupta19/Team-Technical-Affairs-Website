import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
function Team() {
  return (
    <div className="team">
      <div className="team1">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Avishkar</Card.Title>
              <Card.Text>
                Team Avishkar is a student run competition team housed within
                National Institute Technology Jalandhar. Every year we design
                and fabricate an entirely new vehicle from scratch. We work as
                team of 25 members in a collage workshop to fabricate and
                assemble and all new All terrain Vehicle.
              </Card.Text>
              <Button
                variant="info"
                href="https://www.nitj.ac.in/mechanical/teams/avishkar.html"
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Daksh</Card.Title>
              <Card.Text>
                Team Daksh was originated 8 years ago by a clique of students
                who had the notion to form the team which would give the team
                members a pragmatic approach towards the automotive field. Apart
                from studying the curriculum taught in the college, the team has
                put in a lot of endeavors to fabricate the vehicle
                distinguishing our vehicle from other vehicles at national as
                well as international level. The team has been successful in
                promoting greener mobility as well as the need to shift to
                renewable sources of energy. The team has brought many laurels
                to the institute and is determined to continue it’s legacy.
              </Card.Text>
              <Button
                variant="info"
                href="https://www.nitj.ac.in/mechanical/teams/daksh.html"
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Perihant</Card.Title>
              <Card.Text>
                It was in the year 2010 that a spur rose among some students to
                step beyond the usual bookish knowledge and generating something
                on their own which resulted in the foundation of Team Perianth.
                They defined themselves as a culmination of different people
                coming together to make things work. Participating in various
                competitions like BAJA-SAE India, SUPRA-SAE India, we regularly
                conduct workshops sharing our experience with fellow students.
              </Card.Text>
              <Button
                variant="info"
                href="https://www.nitj.ac.in/mechanical/teams/perihant.html"
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div className="team2">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Rtist</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="info" href="https://www.nitj.ac.in/rtist/">
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Spark X</Card.Title>
              <Card.Text>
                Team SPARKX of NIT Jalandhar includes students from department
                of, Instrumentation and control, Industrial and Production and
                Mechanical engineering. The team was formed in early 2018, with
                a vision of fabricating an electric go-kart, which would be the
                very first of its kind in the Institute. The team recently
                participated in the “National E-Kart Racing Championship”. The
                segment of championship is focussed on green tech, an important
                and exciting step taken to protect the dexterity of mother –
                nature. It is a place where automotive enthusiasts from all over
                the country sweat it out with their amazing designs.
              </Card.Text>
              <Button
                variant="info"
                href="https://www.nitj.ac.in/mechanical/teams/sparkx.html"
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Team;
