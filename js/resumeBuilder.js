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
		"date" : "June 2016 to present",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1",
		"school" : "Udacity"
	}
	]
};

var bio = {
	"name": "Michael Speranza",
	"role": "Michael Speranza - Looking for Entry-level Front-end Oppurtunity",
	"contacts": {
		"mobile": "2012751982",
		"github": "mikespe",
		"email": "mikesperanza34@gmail.com",
		"location": "Glen Rock, NJ"
	},
	"skills": [
		"Responsive Design",
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"Bootstrap",
		"Grunt",
		"CRP Optimization",
		"Image Optimization",
		"Mobile-Friendly Design"
	],
	"biopic": "images/me.PNG",
	"welcomeMessage": "Hey, Welcome to Michael Speranza's Resume",
	"githublink": "https://github.com/mikespe"
};

var work = {
	"jobs" : [
	{
		"employer" : "Konica Minolta",
		"link" : "http://konicaminolta.us/",
		"title" : "Purchasing Administrator",
		"location" : "Ramsey, NJ",
		"dates" : "Dec 2014 to Nov 2015",
		"description" : "Reconciled any and all problems involving the process of receiving and sending Purchase orders to vendors"
	},
	{
		"employer" : "General Exports Network",
		"link" : "http://www.globalexportnetwork.com/en/about-us/",
		"title" : "Research Analyst",
		"location" : "Mahwah, NJ",
		"dates" : "Feb 2014 to Dec 2014",
		"description" : "Provided detailed reports and research rundowns on several marketplaces and products"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Frogger game",
		"link" : "https://mikespe.github.io/FroggerJS/",
		"dates" : "September 2016",
		"description" : "Browser frogger using Object oriented JS",
		"images" : ["images/frogger.PNG"]
	},
	{
		"title" : "Responsive Blog",
		"link" : "https://mikespe.github.io/responsive-portfolio-example/",
		"dates" : "July 2016",
		"description" : "Simple picture and link layout, Responsive design",
		"images" : ["images/bootstrap.PNG"]
	}
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
	for(x=0; x<bio.skills.length; x++) {
		var formattedskills = HTMLskills.replace("%data%", bio.skills[x]);
		$("#skills").append(formattedskills);
		}
	var formattedname = HTMLheaderName.replace("%data%", name);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLemail);
	var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedrole);
	$("#header").prepend(formattedname);
	var formattedcell = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedcell);
	$("#footerContacts").prepend(formattedcell);
	var pic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#main").prepend(pic);
	var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedwelcome);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githublink);
	$("#topContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#topContacts").append(formattedHTMLlocation);
	$("#footerContacts").append(formattedHTMLlocation);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
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
