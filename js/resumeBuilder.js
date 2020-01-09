var education = {
	"schools" : [
	{
		"name" : "Ramapo College of New Jersey",
		"location" : "Mahwah, New Jersey",
		"degree" : "Bachelors of Arts",
		"majors": [
		"Economics"
		],
		"dates" : "Spring 2014",
		"url": "http://www.ramapo.edu",
	}],
	"onlineCourses": [
		{
		"title" : "Intro to programming Nanodegree",
		"date" : "December 2015 to May 2016",
		"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
		"school": "Udacity"
	},
	{
		"title" : "Front end programming Nanodegree",
		"date" : "June 2016 to January 2017",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1",
		"school" : "Udacity"
	}
	]
};

var bio = {
	"name": "Michael Speranza",
	"contacts": {
		"mobile": "2018207354",
		"github": "https://github.com/mikespe",
		"email": "mikesperanza34@gmail.com",
		"location": "Glen Rock, NJ"
	},
	"skills": [
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"Bootstrap",
		"Reactjs",
		"MVC concepts",
		"Using API to create a frontend UI",
		"Wireframing",
		"Regular Expressions",
		"Python",
		"JSON and XML",
		"AJAX and JS Promises",
		"Wordpress",
		"Rendering Debugging and Optimization",
		"Responsive Design",
		"Mobile-Friendly Design",
		"Git, but need more xp in team setting",
		"CSS frameworks",
		"Problem Solving"
	],
	"biopic": "images/me.PNG",
	"welcomeMessage": "Welcome to Michael Speranza's Resume",
	"githublink": "https://github.com/mikespe",
	"resumelink": "https://drive.google.com/file/d/1dxn_EVttTBPjUmVyRo8ySBIg-9ZwGvJ3/view?usp=sharing"
};

var work = {
	"jobs" : [
	{
		"employer" : "Wyndham Destination Network - RCI.com",
		"link" : "rci.com",
		"title" : "Web Content Specialist",
		"location" : "Parsippany, NJ",
		"dates" : "August 2017 to Present",
		"description" : "Create landing pages, manage urls and analytics, manage content scheduling, debug and fix all user facing issues, implemented redesign for entire help and special offer sections, python scripting to edit xml and generate pages"
	},
	{
		"employer" : "Hayward Industries",
		"link" : "https://www.hayward-pool.com",
		"title" : "Web Development Intern",
		"location" : "Elizabeth, NJ",
		"dates" : "Feb 2017 to July 2017",
		"description" : "Created wireframes and full landing pages, debug and optimize department .js pages, create counter functionality using js, utilize photoshop to edit front page banners and edit designs"
	},

	{
		"employer" : "H Grant Designs LLC",
		"link" : "http://hgrantdesigns.com/",
		"title" : "Frontend Programming Consultant",
		"location" : "Glen Rock, NJ",
		"dates" : "October 2016 to February 2017",
		"description" : "Solve and consult on a variety of HTML, CSS, design, and content issues"
	}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "My Reads",
			"link" : "https://github.com/mikespe/myreads",
			"dates" : "August 2017",
			"description" : "implemented the shelf functionality by adding state and binding the function that handles shelf changing of specific books to the state",
			"images" : ["images/myreads.png"]
		},

		{
			"title" : "Neighborhood Map",
			"link" : "https://github.com/mikespe/neighborhood-map",
			"dates" : "December 2016",
			"description" : "Interactive Map Created Entirely by me using Google Maps API, Foursquare API, Javascript, jQuery and Knockout.JS",
			"images" : ["images/neighborhoodmap.PNG"]
		},
	]
    };

projects.display = function() {
	for(x = 0; x < projects.projects.length; x++) {
		$("#projects").append(HTMLprojectStart);

		var formattedtitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title).replace("#", projects.projects[x].link);
		$(".project-entry:last").append(formattedtitle);

		var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
		$(".project-entry:last").append(formattedHTMLprojectDates);


		var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
		$(".project-entry:last").append(formattedHTMLprojectDescription);

		var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[x].images);
		$(".project-entry:last").append(formattedHTMLprojectImage);
	}
};

work.display = function(){
	for(items = 0; items < work.jobs.length; items++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[items].employer).replace("#", work.jobs[items].link);
		var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[items].title);
		var together = formattedemployer +
			formattedtitle;
		var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[items].location);
		var formatteddates = HTMLworkDates.replace("%data%", work.jobs[items].dates);
		var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[items].description);
		$(".work-entry:last").append(together);
		$(".work-entry:last").append(formattedlocation);
		$(".work-entry:last").append(formatteddates);
		$(".work-entry:last").append(formatteddescription);
		}
		};

education.display = function(){
	for(items = 0; items < education.schools.length; items++) {
		$("#education").append(HTMLschoolStart);
		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[items].name).replace("#", education.schools[items].url);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[items].degree);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[items].location);
		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[items].dates);
		$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
		$(".education-entry:last").append(formattedHTMLschoolLocation);
		$(".education-entry:last").append(formattedHTMLschoolDates);
		var formattedHTMLschoolMajor2 = HTMLschoolMajor.replace("%data%", education.schools[items].majors);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.schools[items].url);
		$(".education-entry:last").append(formattedHTMLschoolMajor2);
	}
		for(i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);
		$("#education-entry:last").append(HTMLonlineClasses);
		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
		$(".education-entry:last").append(formattedHTMLonlineDates);
	}
};

bio.display = function(){
	$("#header").append(HTMLskillsStart);
	var topc = $('#topContacts');
	var footc = $("#footerContacts");
	for(x=0; x<bio.skills.length; x++) {
		var formattedskills = HTMLskills.replace("%data%", bio.skills[x]);
		$("#skills").append(formattedskills);
		}
	var formattedname = HTMLheaderName.replace("%data%", name);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	topc.append(formattedHTMLemail);
	footc.append(formattedHTMLemail);
	$("#header").prepend(formattedname);
	var formattedcell = HTMLmobile.replace("%data%", bio.contacts.mobile);
	topc.prepend(formattedcell);
	footc.prepend(formattedcell);
	var pic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#main").prepend(pic);
	var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedwelcome);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githublink);
	topc.append(formattedHTMLgithub);
	footc.append(formattedHTMLgithub);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	topc.append(formattedHTMLlocation);
	footc.append(formattedHTMLlocation);
	var formattedHTMLresume = HTMLresume.replace("%data%", bio.resumelink);
	topc.prepend(formattedHTMLresume);
	};

//$("#main").append(internationalizeButton);
function inName() {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

projects.display();
work.display();
education.display();
bio.display();

// DOESNT WORK WHEN HOSTING ON GITHUB$("#mapDiv").append(googleMap);
