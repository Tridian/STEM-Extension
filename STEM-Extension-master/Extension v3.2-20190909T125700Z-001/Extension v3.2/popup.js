// List of teachers, with their corresponding links and images.
/*
	Each button is a single object:
	{
		"name": <NAME>,
		"links": [List of {"link": <URL>, "name": <LINK_NAME>}] 
				 or just <URL> if single link,
		"image": <LINK_TO_IMAGE>
	}
*/
const buttons = [
	{
		"name": "Portal",
		"links": "https://portal.apslearns.org",
		"image": "portalFIN.png"
	},
	{
		"name": "Stem Site",
		"links": "http://www.nihfstem.org",
		"image": "siteFIN.png"
	},	
	{
		"name": "Classroom",
		"links": "https://classroom.google.com",
		"image": "classroomFIN.png"
	},
	{
		"name": "Impact",
		"links": "https://docs.google.com/spreadsheets/d/1gUlVOiRAwTWJOIP8n_hUGvnFMKB_WF86PmUk1MKi-x8/edit?usp=sharing",
		"image": "impactFIN.png"
	},
	{
		"name": "Coach Appleby",
		"links": [
					{ "link": "https://sites.google.com/a/apslearns.org/coach-appleby-s-stem-site/", "name": "Appleby's Website" },
					{ "link": "http://appinventor.mit.edu/explore/", "name": "App Inventor" },
					{ "link": "https://code.org/", "name": "Code.org" },
					{ "link": "https://www.codecademy.com/learn", "name": "Codecademy" },
					{ "link": "https://lightbot.com/flash.html", "name": "Lightbot" },
					{ "link": "https://edu.sphero.com/", "name": "Sphero" },
		],
		"image": "applebyFIN.PNG"
	},
	{
		"name": "chen",
		"links": [
			{ "link": "https://quizlet.com/", "name": "Quizlet" },
			{ "link": "https://www.chinesecio.com/", "name": "Confucius Institute Online" },
			{ "link": "https://classroom.google.com", "name": "Google Classroom" },
		],
		"image": "chenFIN.PNG"
	},
	{
		"name": "Coach Cohen",
		"links": "https://sites.google.com/site/cohenstemela/",
		"image": "cohenFIN.PNG"
	},
	{
		"name": "Coach Graber",
		"links": [
			{ "link": "https://www.aleks.com/", "name": "ALEKS" },
			{ "link": "https://www.desmos.com/calculator", "name": "Calculator" },
			{ "link": "https://www.geogebra.org/", "name": "GeoGebra" },
			{ "link": "https://sites.google.com/site/coachgraberstem/", "name": "Main Website" },
		],
		"image": "graberFIN.PNG"
	},
	{
		"name": "Coach griffith",
		"links": "https://sites.google.com/site/coachgriffithnifhstem/",
		"image": "griffithFIN.PNG"
	},
	{
		"name": "Coach hughes",
		"links": "https://sites.google.com/site/stemcoachhughes/",
		"image": "hughesFIN.png"
	},
	{
		"name": "Coach Hecalf",
		"links": [
			{ "link": "https://www.assistments.org/", "name": "Assisments" },
			{ "link": "https://phet.colorado.edu/en/simulations/category/new", "name": "PhET Sims" },
		],
		"image": "hecalfFIN.PNG"
	},
	{
		"name": "Coach Shecalf",
		"links": [
			{ "link": "http://www.cnn.com/cnn10", "name": "CNN" },
			{ "link": "http://kmetcal3.wixsite.com/courses", "name": "Courses" },
			{ "link": "https://www.goodreads.com/", "name": "Goodreads" },
			{ "link": "https://peergrade.io/", "name": "Peergrade" },
			{ "link": "https://piktochart.com/", "name": "Piktochart" },
			{ "link": "https://www.symbaloo.com/", "name": "Symbaloo" },
			{ "link": "http://textadventures.co.uk/account/login", "name": "Text Adventures" },
			{ "link": "http://voicethread.com/", "name": "Voice Thread" },
			{ "link": "http://www.wordle.net/", "name": "Wordle" },
		],
		"image": "shecalfFIn.png"
	},
	{
		"name": "Coach Palumbo",
		"links": [
			{ "link": "https://www.aleks.com/", "name": "ALEKS" },
			{ "link": "http://www.desmos.com", "name": "Desmos" },
			{ "link": "https://classroom.google.com", "name": "Google Classroom" },
		],
		"image": "palumboFIN.png"
	},
	{
		"name": "Coach M Popa",
		"links": [
			{ "link": "http://galesites.com/menu/akro716#", "name": "STEM HS Electronic Resources" },
			{ "link": "http://goo.gl/5fcUaD", "name": "Science Fair" },
		],
		"image": "popaFIN.png"
	},
	{
		"name": "Coach Rauschenberger",
		"links": [
			{ "link": "https://www.icivics.org/", "name": "iCivics" },
			{ "link": "http://everfi.com/", "name": "EVERFI" },
			{ "link": "http://www.citethisforme.com/", "name": "CIteThisForMe" },
		],
		"image": "rauschFIN.png"
	},
	{
		"name": "Coach Treen",
		"links": "https://sites.google.com/site/coachtreenstem/",
		"image": "treenFIN.png"
	},
	{
		"name": "Coach york",
		"links": [
			{ "link": "http://www.videonot.es/", "name": "Video Notes" },
			{ "link": "http://ic.galegroup.com/ic/scic/?p=SCIC&u=akr35460", "name": "APS Gale Resources" },
			{ "link": "https://www.sciencenews.org/", "name": "Science News" },
			{ "link": "http://www.noaa.gov/", "name": "The NOAA" },
			{ "link": "https://www.usgs.gov/", "name": "The USGS" },
			{ "link": "http://www.footprintnetwork.org/our-work/climate-change/", "name": "GFN Climate Change" },
		],
		"image": "yorkFIN.png"
	},
	{
		"name": "Coach Binkley",
		"links": [
			{ "link": "http://www.bozemanscience.com/", "name": "BozemanScience" },
			{ "link": "https://www.khanacademy.org/", "name": "Khan Academy" },
			{ "link": "https://www.youtube.com/user/crashcourse", "name": "Crash Course" },
			{ "link": "https://login9.cloud1.tds.airast.org/student/V365/Pages/LoginShell.aspx?c=Ohio_PT", "name": "OST Practise Site" },
		],
		"image": "PlaceHolder.png"
	},
	{
		"name": "Coach Bennett",
		"links": "http://artofbennett.weebly.com/",
		"image": "PlaceHolder.png"
	},
	{
		"name": "Coach D Popa",
		"links": [
			{ "link": "https://stemhigh.akronschools.com", "name": "New School Website" },
			{ "link": "http://goo.gl/5fcUaD", "name": "PTA (WIP)" },
		],
		"image": "PlaceHolder.png"
	},
]

// Generate the buttons from the list described above
document.addEventListener("DOMContentLoaded", function () {
	let buttonDiv = document.getElementById("buttonsContainer");
	buttons.forEach(button => {
		// Create our button
		let buttonObj = document.createElement("button");
		buttonObj.setAttribute("class", "linkButton");
		buttonObj.id = button.name;

		// Create the Image and attach it to the button
		let imgObj = document.createElement("img");
		imgObj.setAttribute("src", button.image);
		imgObj.setAttribute("alt", button.name);
		imgObj.setAttribute("width", 90);
		buttonObj.appendChild(imgObj);

		if (typeof button.links == "string") { // For single links
			let aObj = document.createElement("a");
			aObj.setAttribute("href", button.links);
			aObj.setAttribute("target", "_blank");
			aObj.appendChild(buttonObj);
			buttonDiv.appendChild(aObj);
		} else { // For multiple links
			let subObj = document.createElement("div");
			subObj.setAttribute("class", "sub");
			button.links.forEach(link => {
				let aObj = document.createElement("a");
				aObj.setAttribute("href", link.link);
				aObj.setAttribute("class", "subLink");
				aObj.setAttribute("target", "_blank");
				aObj.innerText = link.name;
				subObj.appendChild(aObj);
				subObj.appendChild(document.createElement("br"));
			});
			buttonObj.appendChild(subObj);
			buttonObj.addEventListener("click", toggle);
			buttonDiv.appendChild(buttonObj);
		}
	});
});

/**
 * Show/Hide the link drawer of a button
 */
function toggle() {
	let name = this.id;
	let buttonsDiv = document.getElementById("buttonsContainer");
	buttonsDiv.childNodes.forEach(button => {
		if (button.id != name) {
			if (button.style.display == "none") {
				button.style.display = "inline-block";
			} else {
				button.style.display = "none";
			}
		} else {
			if (button.lastChild.style.display == "none" || button.lastChild.style.display == ""){
				button.lastChild.style.display = "block";
			} else {
				button.lastChild.style.display = "none";
			}
		}
	});
}
