
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import logo from "../../assets/img/newimg/celestalogo.png";
import '../../assets/fonts/Gotham-Black.otf';

class Footer extends React.Component {
  render() {
    return (
      <div>
      <section className="contact-area" id="contact">
			<div className="container">
				<div className="row asd">
					<div className="col-lg-6 offset-lg-3">
						<div className="contact-content text-center">

                         
                            <img src={logo} alt="Logo" />
						

						
							<p>Celesta is the annual Techno-Management Fest of IIT Patna. To promote technical and managerial enthusiasm amongst young and bright minds of our nation and to provide a platform to transform their innovative ideas into a meaningful reality.</p>
							<div className="hr">
							<h6>Indian Institute of Technology Patna ,<br/>Bihta Patna-801103 (Bihar)</h6>
							<h6><a href="tel:+918708945855">+91 8708 945 855</a><span>|</span><a href="tel:+917352862047">+91 7352 862 047</a></h6>
							<div className="contact-social">
								<ul>
									<li><a className="hover-target" href="https://www.facebook.com/CelestaIITP" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
									<li><a className="hover-target" href="https://www.instagram.com/celestaiitp_official/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a className="hover-target" href="https://twitter.com/celesta_iitp?lang=en" target="_blank"><i className="fab fa-twitter"></i></a></li>
   
								</ul>
							</div>
							</div>
						

						</div>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<p>Copyright &copy; 2022 All Rights Reserved.</p>
		</footer>
    </div>
    );
  }
}

export default Footer;
