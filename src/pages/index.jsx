import * as React from "react";
import * as pageStyle from "./index.module.scss";
import Section from "../components/Section";
import Logo from "../assets/logo.inline.svg";
import { useState, useEffect, useRef } from "react";
// import { particlesJS } from "../extras/particles";
import Particles from "react-tsparticles";
const particlesConfig = require("../extras/particles.json");

const IndexPage = () => {
	// const particlesElemRef = useRef();
	// useEffect(_ => {
	// 	particlesJS(particlesElemRef.current, particlesConfig);
	// }, []);
	return (
		<main className={pageStyle.container}>
			{/* <div ref={particlesElemRef} className={pageStyle.particles} /> */}
			<Particles className={pageStyle.particles} params={particlesConfig} />
			{/* <div className={pageStyle.header}> */}
			<Logo className={pageStyle.logo} />
			<div className={pageStyle.links}>
				{/* home, schedule, event details, what is a hackathon? faq sponsors */}
				<a href="#home">Home</a>
				<a href="#schedule">Schedule</a>
				<a href="#event-details">Event Details</a>
				<a href="#what-is-a-hackathon">What is a Hackathon?</a>
				<a href="#faq">FAQ</a>
				<a href="#sponsors">Sponsors</a>
			</div>
			{/* </div> */}
			<div className={pageStyle.sections}>
				{/* <Section bg="#383D36">
					<h1>this is a section</h1>
				</Section> */}
				{/* <Section bg="#EEE5E9">
					<h1>this is a section</h1>
				</Section> */}
				{/* <Section bg="#8CEBA5">
					<h1>this is a section</h1>
				</Section> */}
				<Section bg="#EEE5E9">
					<h1>
						RidgeHacks 2022{" "}
						<span style={{ fontWeight: "400" }}> - April 9th</span>{" "}
					</h1>
					<p>We're back!</p>
				</Section>
				<Section bg="#49808A">
					<h1>Schedule</h1>
					<p>To be determined! Stay tuned for updates.</p>
				</Section>
				<Section bg="#EEE5E9">
					<h1>Details</h1>
					<p>
						<strong>Date:</strong> April 9th, 2022
						<br />
						<strong>Who can attend:</strong> Any middle school or high school
						student with an interest in computer science and programming can
						sign up. No previous experience is required.
						<br />
						<strong>Cost to attend:</strong> This event, including prizes,
						workshops, and more is entirely free for all participants!
						<br />
						<strong>Location:</strong> Ridge High School
					</p>
				</Section>
				<Section bg="#547360">
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
				<Section bg="#EEE5E9">
					<h1>FAQ</h1>
				</Section>
				<Section bg="#49808A">
					<h1>Sponsors</h1>
				</Section>
				<Section bg="#EEE5E9">
					<h1>this is a section</h1>
				</Section>
				<Section bg="#49808A">
					<h1>this is a section</h1>
				</Section>
				<Section bg="#EEE5E9">
					<h1>this is a section</h1>
				</Section>
				<Section bg="#49808A">
					<h1>this is a section</h1>
				</Section>
				<Section bg="#EEE5E9">
					<h1>this is a section</h1>
				</Section>
			</div>
		</main>
	);
};

export default IndexPage;
