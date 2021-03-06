import * as React from "react";
import * as pageStyle from "./index.module.scss";
import Section from "../components/Section";
import Logo from "../assets/logo.inline.svg";
import LogoFull from "../assets/logoFull.inline.svg";
import { useState, useEffect, useRef } from "react";
// import { particlesJS } from "../extras/particles";
import Particles from "react-tsparticles";
import Helmet from "react-helmet";
const particlesConfig = require("../extras/particles.json");

const IndexPage = () => {
	// const particlesElemRef = useRef();
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(_ => {
		// particlesJS(particlesElemRef.current, particlesConfig);
		window.onscroll = _ => {
			console.log(window.scrollY);
			setIsScrolled(window.scrollY > 32);
		};
	}, []);
	const Organizer = ({ fullName, role, image }) => {
		return (
			<div className={pageStyle.organizer}>
				<img src={"/organizers/" + image} alt={fullName} />
				<div className={pageStyle.organizerInfo}>
					<h3>{fullName}</h3>
					<p>{role}</p>
				</div>
			</div>
		);
	};
	const FaqElement = ({ summary, children }) => {
		return (
			<>
				<strong>{summary}</strong>
				{children}
			</>
		);
	};
	return (
		<main
			className={
				pageStyle.container + (isScrolled ? " " + pageStyle.scrolled : "")
			}
		>
			<Helmet>
				<meta charset="utf-8" />
				<title>RidgeHacks 2022</title>
			</Helmet>
			<p className="😡">
				Why are you looking at inspect element the code is literally on GitHub:
				https://github.com/ridgehacks/ridgehacks.us
			</p>
			{/* <div ref={particlesElemRef} className={pageStyle.particles} /> */}
			{/* <Particles className={pageStyle.particles} params={particlesConfig} /> */}
			{/* <div className={pageStyle.header}> */}
			<a
				className={pageStyle.logo}
				tabIndex={0}
				onClick={_ => {
					// window.location.hash = "";
					setTimeout(() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}, 10);
				}}
				href="#"
			>
				<Logo />
				<span className="material-icons">expand_less</span>
			</a>
			<div className={pageStyle.links}>
				{/* home, schedule, event details, what is a hackathon? faq sponsors */}
				{/* <a href="#home">Home</a> */}
				<a href="#schedule">Schedule</a>
				<a href="#event-details">Event Details</a>
				<a href="#what-is-a-hackathon">What is a Hackathon?</a>
				<a href="#faq">FAQ</a>
				<a href="#sponsors">Sponsors</a>
			</div>
			<div className={pageStyle.sections}>
				<Section bg="#EEE5E9" id={"home"}>
					<h1>
						RidgeHacks 2022{" "}
						<span style={{ fontWeight: "400" }}> - April 9th, 2022</span>{" "}
					</h1>
					<h3>
						<p>
							Sign-ups are now closed. See you on Saturday!
						</p>
					</h3>
					<h3>
						<a target="_" href="https://discord.gg/zMjdnDjcfA">
							Join the Discord
						</a>
					</h3>
					<h3>
						<a target="_" href="https://docs.google.com/document/d/1LD-tjCdM66slnRXtEXL7zmERoTjRsonuajGBMj7sdLE/edit?usp=sharing">
							SCORING RUBRIC
						</a>
					</h3>
					<h3>
						<a target="_" href="https://tally.so/r/nr7O5m">
							SUMBISSION FORM
						</a>
					</h3>
					<p>
						After the pandemic forced us to cancel RidgeHacks 2020 and 2021,{" "}
						<b>we're back!</b> <br />
						<br />
						RidgeHacks 2022 is Ridge High School's premier (and only) Hackathon
						led by the Ridge Computer Science Club. This year, we are following
						a single day schedule and keeping the Hackathon open. From all of us
						at RCSC, happy hacking and we hope to see you there!
					</p>
				</Section>
				<Section bg="#49808A" id={"schedule"}>
					<h1>Schedule</h1>
					<p>
						We know tables are hard to read (hell, they're hard to make), but
						every little workshop or event can be found here!
					</p>
					<table className={pageStyle.scheduleTable}>
						<tr>
							<th>Time</th>
							<th>Hacking/Main Areas</th>
							<th>Lecture Hall A</th>
							<th>Room 701</th>
							<th>Atrium</th>
							<th>Cafeteria</th>
						</tr>
						<tr>
							<td>8:00 AM</td>
							<td>Opening Ceremony</td>
						</tr>
						<tr>
							<td>8:30 AM</td>
							<td>Start Hacking/Breakfast</td>
							<td>echo3D Workshop</td>
							<td>Python Workshop</td>
						</tr>
						<tr>
							<td>10:00 AM</td>
							<td>Continue Hacking!</td>
							<td>Git Workshop</td>
							<td>Web Development Workshop</td>
						</tr>
						<tr>
							<td>12:00 PM</td>
							<td>Lunch</td>
							<td></td>
							<td></td>
							<td></td>
							<td>Smash Tournament (Join After Eating)</td>
						</tr>
						<tr>
							<td>2:00 PM</td>
							<td>Continue Hacking!</td>
							<td>Cyber Security Workshop</td>
						</tr>
						<tr>
							<td>4:00 PM</td>
							<td>Continue Hacking!</td>
							<td></td>
							<td>Consumer Electronics/Device Repair Workshop</td>
							<td></td>
						</tr>
						<tr>
							<td>5:30 PM</td>
							<td>Continue Hacking!</td>
							<td></td>
							<td></td>
							<td>Cup Stacking</td>
						</tr>
						<tr>
							<td>6:00 PM</td>
							<td>Dinner</td>
						</tr>
						<tr>
							<td>8:30 PM</td>
							<td>Hacking Ends/Judging Starts</td>
						</tr>
						<tr>
							<td>10:00 PM</td>
							<td>Closing Ceremony</td>
						</tr>
						<tr>
							<td>10:30 PM</td>
							<td>Event Ends</td>
						</tr>
					</table>
				</Section>
				<Section bg="#EEE5E9" id={"event-details"}>
					<h1>Details</h1>
					<p>
						<strong>Date:</strong> April 9th, 2022
						<br />
						<strong>Who can attend:</strong> Any middle school or high school
						student who's down to make something awesome. Or anything tech, or
						programming related really. The name's a misnomer…
						<br />
						<strong>Cost to attend:</strong> Free! Unless you count the cost of
						the soul-crushing act of typing on laptop keyboards all day.
						<br />
						<strong>Location:</strong> Ridge High School (268 South Finley
						Avenue, Basking Ridge, NJ). <strong>See the FAQ for details on where to enter (and park if you 
						plan on driving yourself).</strong>
					</p>
				</Section>
				<Section bg="#547360" id={"what-is-a-hackathon"}>
					<h1>What is a Hackathon?</h1>
					<p>
						A hackathon is an event where students individually or
						collaboratively create innovative solutions with technology, often
						using hardware, software, or both! Students present and share their
						ideas with other participants and can be awarded with prizes for
						their work. In addition, due to many workshops and experienced
						mentors, a hackathon is a great learning opportunity and experience.
						Overall, hackathons are an excellent event for any student with an
						interest in computer science and programming to attend, no matter
						the skill level.
					</p>
				</Section>
				<Section bg="#49808A" id={"faq"}>
					<h1>FAQ</h1>

					<FaqElement
						summary={"Where can I park/where do I enter the building?"}
					>
						<p> Please consult this image for more information (you can put this into perspective by looking at Google Maps or similar). 
						</p>
						<img className={pageStyle.ridgeMap} src={"/ridgemap.jpg"} /> <br/><br/>
					</FaqElement>

					<FaqElement
						summary={"Where do we get updates/communicate with y'all?"}
					>
						<p>
							Discord! Make sure to join our server{" "}
							<a href="https://discord.gg/zMjdnDjcfA">here</a>.{" "}
						</p>
					</FaqElement>

					<FaqElement summary={"How will teams work?"}>
						<p>
							You can work in teams of 2 to 4. If you don't have a team, don't
							worry! You'll be able to form a team at RidgeHacks with other
							people looking for teams or teams that want more members before
							hacking begins.
						</p>
					</FaqElement>

					<FaqElement
						summary={"How long is the event? When is it? Where is it?"}
					>
						<p>
							It's on April 9th, 2022 from 8:00AM-10:30PM. It's at Ridge High
							School. You can find the address for our hackathon{" "}
							<a href="#event-details">here</a>.
						</p>
					</FaqElement>

					<FaqElement summary={"What can I make?"}>
						<p>
							Anything. Software, hardware, middleware, malware, anything that
							ends with “ware” and starts with you typing lines of code. And
							even more than that.
						</p>
					</FaqElement>

					<FaqElement summary={"What's in it for me?"}>
						<p>
							Well, the clout and prestige of winning RidgeHacks. And of course,
							we do have prizes. You'll have to show up to find out what they
							are though.
						</p>
					</FaqElement>

					<FaqElement summary={"Anything else?"}>
						<p>
							Send us a message on Discord in the #FAQ channel. You can also
							send us an email at{" "}
							<a href="mailto:team@ridgehacks.us">team@ridgehacks.us</a>.
						</p>
					</FaqElement>
				</Section>
				<Section bg="#EEE5E9" id={"sponsors"}>
					<h1>Sponsors</h1>
					<p>Looking to sponsor? Contact us at team@ridgehacks.us.</p>
					<h2>Emerald Sponsors</h2>
					<div id={"emerald-sponsors"} class={pageStyle.sponsorLogoList}>
						<a href="https://www.digitalocean.com/" target="_">
							<img src={`sponsors/digitalocean_2022.svg`} />
						</a>
					</div>

					<h2>Gold Sponsors</h2>
					<div id={"gold-sponsors"} class={pageStyle.sponsorLogoList}>
						<a href="https://www.hokecapital.com/" target="_">
							<img src={`sponsors/hcmlogo-bg.png`} />
						</a>
					</div>
					<h2>Silver Sponsors</h2>
					<div id={"silver-sponsors"} class={pageStyle.sponsorLogoList}>
						<a href="https://www.njspba.com/" target="_">
							<img src={`sponsors/PBA.png`} />
						</a>
						<a href="https://www.perrottis.com" target="_">
							<img src={`sponsors/perrottis.png`} />
						</a>
						<a href="https://www.ridgemarketing.com/" target="_">
							<img src={`sponsors/ridge_marketing.png`} />
						</a>
						<a href="https://www.leading-learners.com/" target="_">
							<img src={`sponsors/leading-learners.png`} />
						</a>
						<a href="https://www.echo3d.co/" target="_">
							<img src={`sponsors/echo3D.png`} />
						</a>
						<a href="https://www.wegmans.com/" target="_">
							<img src={`sponsors/WegmansLogo.min.svg`} />
						</a>
						<a href="https://www.artofproblemsolving.com/" target="_">
							<img src={`sponsors/aops.png`} />
						</a>
					</div>
					<h2>Past Sponsors</h2>
					<p>
						RidgeHacks 2019 would not have been possible without these sponsors.
					</p>
					<div class={pageStyle.pastSponsorLogoList}>
						<img src={`/sponsors/brba.png`} />
						<img src={`/sponsors/computersharp.png`} />
						<img src={`/sponsors/LGS.gif`} />
						<img src={`/sponsors/linode.svg`} />
						<img src={`/sponsors/intellect.png`} />
						<img src={`/sponsors/balsamiq.png`} />
						<img src={`/sponsors/aops.png`} />
						<img src={`/sponsors/gitkraken.png`} />
						<img src={`/sponsors/wolfram.png`} />
						<img src={`/sponsors/starbucks.png`} />
						<img src={`/sponsors/temboo.png`} />
						<img src={`/sponsors/bernardsvilleprint.png`} />
						<img src={`/sponsors/digitalocean.png`} />
						<img src={`/sponsors/sketch.png`} />
					</div>
					<p>
						While RidgeHacks 2020 had to be cancelled due to COVID-19, we're
						very thankful for our sponsors that would have sponsored us that
						year.
					</p>
					<div class={pageStyle.pastSponsorLogoList}>
						<img src={`/sponsors/GAR_LOGO.svg`} />
						<img src={`/sponsors/balsamiq.png`} />
						<img src={`/sponsors/blueskykids.png`} />
						<img src={`/sponsors/eliteadvantageprep.png`} />
						<img src={`/sponsors/aops.png`} />
					</div>
				</Section>
				<Section bg="#69CCB4">
					<h1>The Organizers</h1>
					<div className={pageStyle.organizersList}>
						<Organizer
							fullName="Ramesh Balaji"
							role="President of RidgeHacks"
							image="ramesh.jpg"
						/>
						<Organizer
							fullName="Kevin Li"
							role="Vice President of RidgeHacks"
							image="kevin.png"
						/>
						<Organizer
							fullName="Benjamin Chee"
							role="RidgeHacks Event Organizer"
							image="Benjamin Chee.png"
						/>
						<Organizer
							fullName="Akhil Vanka"
							role="RidgeHacks Technical Manager"
							image="akhil.jpg"
						/>
						<Organizer
							fullName="Jessica Liu"
							role="RidgeHacks Graphic Designer"
							image="jessica.jpg"
						/>
						<Organizer
							fullName="Leilani Johnson"
							role="RidgeHacks Outreach"
							image="leilani.jpg"
						/>
						<Organizer
							fullName="Michael Moschello"
							role="RidgeHacks Outreach"
							image="michael.jpg"
						/>
						<Organizer
							fullName="Cy Westbrook"
							role="RidgeHacks Web Developer"
							image="cy.jpg"
						/>
						<Organizer
							fullName="Jimmy Bao"
							role="RidgeHacks Treasurer"
							image="placeholder.jpg"
						/>
					</div>
				</Section>
			</div>
			<div className={pageStyle.logoBottom}>
				<LogoFull />
				<p>
					<small>Ridge High School Hackathon, April 9th</small> <br />
					<small>268 S Finley Ave, Basking Ridge, NJ 07920</small>
					<br />
					<small>
						<a href="mailto:team@ridgehacks.us">team@ridgehacks.us</a>
					</small>
				</p>
			</div>
		</main>
	);
};

export default IndexPage;
