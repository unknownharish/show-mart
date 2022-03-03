import React from 'react'
import './About.css'

import person from '../images/person-circle.svg';
import insta from '../images/instagram.svg';
import git from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import mail from '../images/envelope-check.svg';


export default function About() {
    return (

        <div className='about'>
            <div className="about_heading">
                <h3 className='about_text'></h3>
            </div>

            <div className="profile">
                <div className="profile_education grid_item">
                    <h2 > Education</h2>
                    <div className="education">
                        <h3 className='education_h3'>Starting eduaction(2005)-(2018):</h3>
                        <p> -kendriya vidyalaya NTPC badarpur New Delhi 110044 </p><br />
                        <h3 className="education_h3">Graduation (2018)-(2021)</h3>
                        <p> -(BCA) : Kalka Institute for research and advanced studies </p><br />
                        <h3 className="education_h3">Post Graduation (2021)-(2023)</h3>
                        <p> -(MCA) : BCIIT </p><br />
                    </div>
                </div>
                <div className="profile_info grid_item">
                    <h2 > Personal Info.<img className='info_image' src={person} alt="" />
                    </h2>

                    <p>Hello I'm Harish till now i have completed my bachler degree in BCA.My interest and hobbies are playing cricket,finding unique solution of problems, interacting with new peoples.</p>


                </div>
                <div className="profile_contact grid_item">
                    <h2 >Contact</h2>
                    <div className="contact_details">
                        <p><img src={mail} alt="" /><a target='_blank'
                         href="mailto:samentrope@gmail.com">samentrope@gmail.com</a></p><br />
                        <p><img src={git} alt="" /><a  target='_blank' href="https://github.com/unknownharish">/unknownharish</a></p> <br />
                        <p><img src={insta} alt="" /><a target='_blank' href="https://instagram.com/who_is_harish_">who_is_harish_</a> </p> <br />
                        <p><img src={linkedin} alt="" /><a target='_blank' href="https://www.linkedin.com/in/harish-chand-262484208">click here</a></p> <br />
                    </div>

                </div>

                <div className="profile_tech grid_item">
                    <h2>Hands dirty in</h2>
                    <ul>
                        <li><p>Node js (medium) </p></li>
                        <li><p>Bootstrap(medium)</p></li>
                        <li><p>Mongo DB (medium)</p></li>
                        <li><p>Express.js (medium)</p></li>
                        <li><p>React.js (medium)</p></li>
                        <li><p>html css js (medium)</p></li>
                    </ul>
                </div>
            </div>
        </div>



    )
}
