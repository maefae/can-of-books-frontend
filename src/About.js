import { Component } from "react";
import Container from "react-bootstrap/Container";
import image from "./assets/profile.jpg";
import image2 from "./assets/100x100.jpg";

class Profile extends Component {
  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Container>
          <h2>About the Developers</h2>
          <div>
            <div>
              <div>
                <img src={image} alt="Jose" class="aboutImg" />
                <h3>Jose Gonzalez</h3>
              </div>
              <p class="aboutInfo">
                I am a bilingual California native transitioning from the Army
                actively looking to pivot careers from healthcare to software
                development. I have about 10 years of healthcare experience in
                both the Army and Civilian sector ranging from managing military
                and civilian staff in a clinic setting to maintaining competency
                in medical documentation programs. License in Vocational Nursing
                obtained through an accelerated and multidisciplined 52 week U.S
                Army Program. I am a team leader that emphasis on clear, open
                minded communication, respect and constructive feedback on any
                subject. Skills and accomplishments that set me apart are my
                interpersonal and critical thinking skills that have lead to
                opportunities in leading individuals in projects and attending
                military schools to advance my skills in nursing and leadership.
                My exposure to software development is minimal but my interest
                has highly grown through the pandemic with the emphasis on
                computer communication and interaction and currently enrolled
                with Code Fellows, completing the basic coding/Java boot camp
                with and expected graduation in the fall of 2022.. I know my
                resiliency, open mindedness and teamwork experience in the
                military and health care field make me an exceptional candidate
                in contributing in any software development opportunity.
              </p>
            </div>
            <div>
              <div>
                <img src={image2} alt="Megan" class="aboutImg" />
                <h3>Megan Seibert-Hughes</h3>
              </div>
              <p class="aboutInfo">
                Full-stack JavaScript Software Developer with a background in
                graphic/UX-design, and audio production. Prior military
                experience as a Pschological Operations Specialist where I
                learned how to be a disciplined leader.
              </p>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Profile;
