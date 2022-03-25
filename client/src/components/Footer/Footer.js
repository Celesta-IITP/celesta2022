
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
<<<<<<< HEAD
import logo from "../../assets/img/newimg/celestalogo.png";
=======
import logo from "../../assets/img/logo_3.png";
>>>>>>> 7e8103cf7e79f9c675be064516ddf9ccf57ca049
class Footer extends React.Component {
  render() {
    return (
      <div>
      <section className="contact-area" id="contact">
			<div className="container">
<<<<<<< HEAD
				<div className="row asd">
					<div className="col-lg-6 offset-lg-3">
						<div className="contact-content text-center">

                         
                            <img src={logo} alt="Logo" />
						

						
							<p>Celesta is the annual Techno-Management Fest of IIT Patna. To promote technical and managerial enthusiasm amongst young and bright minds of our nation and to provide a platform to transform their innovative ideas into a meaningful reality.</p>
							<div className="hr">
=======
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="contact-content text-center">
                <img src={logo} alt="Logo" />
							<p>Celesta is the annual Techno-Management Fest of IIT Patna. To promote technical and managerial enthusiasm amongst young and bright minds of our nation and to provide a platform to transform their innovative ideas into a meaningful reality.</p>
							<div className="hr"></div>
>>>>>>> 7e8103cf7e79f9c675be064516ddf9ccf57ca049
							<h6>Indian Institute of Technology Patna ,<br/>Bihta Patna-801103 (Bihar)</h6>
							<h6>+91 77548 08781<span>|</span>+91 6387 828 505</h6>
							<div className="contact-social">
								<ul>
									<li><a className="hover-target" href="https://www.facebook.com/CelestaIITP"><i className="fab fa-facebook-square"></i></a></li>
									<li><a className="hover-target" href="https://www.instagram.com/celestaiitp_official/?hl=en"><i class="fab fa-instagram"></i></a></li>
                                    <li><a className="hover-target" href="https://play.google.com/store/apps/details?id=in.org.celesta.iitp"><i className="fab fa-google-play"></i></a></li>
   
								</ul>
							</div>
<<<<<<< HEAD
							</div>
						

=======
>>>>>>> 7e8103cf7e79f9c675be064516ddf9ccf57ca049
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer>
<<<<<<< HEAD
			<p>Copyright &copy; 2022 All Rights Reserved.</p>
=======
			<p>Copyright &copy; 2020 All Rights Reserved.</p>
>>>>>>> 7e8103cf7e79f9c675be064516ddf9ccf57ca049
		</footer>
    </div>
    );
  }
}

export default Footer;
