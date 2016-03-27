var bio = {
    "name": "Homer Simpson",
    "role": "web developer",
    "contacts": {
        "mobile": "123-456-789",
        "email": "abcdef@hsimpson.com",
        "github": "GitHub",
        "location": "Springfield, IL"
    },
    "welcomeMessage": "'To Start Press Any Key'. Where's the ANY key?",
    "skills": ["donuts lover", "master of nap", "beer enthusiast", "button presser"],
    "biopic": "images/homer-simpson.jpg",
    "picDescription": "homer simpson eating donuts"
};

/**
* @description display personal information in navbar, header and footer
*/
bio.display = function (){
    displayNavbar();
    displayHeader();
    displayFooter();
};

/**
* @description display person's name, short name on small devices and role
*/
function displayNavbar() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name).replace('%id%', 'name');
    $('.navbar-header').prepend(formattedName);

    var formattedShortedName = HTMLheaderName.replace('%data%', makeShortName(bio.name)).replace('%id%', 'name-short');
    $('.navbar-header').prepend(formattedShortedName);

    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('.navbar-header').append(formattedRole);
}

/**
* @description display personal contacts, picture, welcome meassage and skills in header section
*/
function displayHeader() {
    $('#header').prepend('<div id="name-work" class="col-md-12"><hr class="customize-hr"></div>');

    $('#top-contacts').wrap('<div class="col-md-12"></div>');
    displayContacts ('#top-contacts');

    $('#header').append('<div id="header-skills" class="col-md-12 header-textbox clear-fix"></div>');
    $('#header').addClass('row');
    var formattedPicture = HTMLbioPic.replace('%data%', bio.biopic).replace('%alt%', bio.picDescription);
    $("#header-skills").append(formattedPicture);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header-skills').append(formattedWelcomeMessage);

    displaySkills();
}

/**
* @description display personal contacts in footer and ending message
*/
function displayFooter(){
    $('#ending-message').wrap('<div class="light-green col-md-12"></div>');
    $('#footer-contacts').wrap('<div class="col-md-12 footer-contacts"></div>');
    $('#footer').addClass('row');
    displayContacts ('#footer-contacts');
}

/**
* @description creates short form of passed in name
* @param {string} name
* @returns {string} shortened name
*/
function makeShortName (name) {
  return name.charAt(0) + "." + name.slice(name.indexOf(" ")+1);
}

/**
* @description displays personal contacts when they are not empty
* @param {string} id of element where contacts are appended
*/
function displayContacts (elementId) {
    for(var i in bio.contacts){
        if(bio.contacts.hasOwnProperty(i) && bio.contacts[i].length>0){
          var formattedContact = HTMLcontactGeneric.replace('%contact%', i).replace('%data%', bio.contacts[i]);
          $(elementId).append(formattedContact);
        }
    }
}

/**
* @description displays skills and adds skills title when they are not empty
*/
function displaySkills() {
    if(bio.skills.length > 0){
        var formattedSkills = [];
        $('#header-skills').append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++){
            formattedSkills.push( HTMLskills.replace('%data%', bio.skills[i]));
        }
        $('#skills').append(formattedSkills);
    }
}

var education = {
    "schools": [{
        "name": "Springfield University",
        "location": "New York",
        "degree": "Bachelor",
        "majors": ["Nuclear Physics", "Physics", "Wormholes"],
        "dates": "1993-1995",
        "url": "https://www.udacity.com/"
    }, {
        "name": "Springfield High School",
        "location": "Springfield, IL",
        "degree": "Graduate",
        "majors": ["General", "Biology"],
        "dates": "1969-1973",
        "url": "https://www.udacity.com/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 - now",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Nanodegree",
        "school": "Udacity",
        "dates": "2014-2015",
        "url": "https://www.udacity.com/"
    }]
};

//function for displayin all information from education object
education.display = function() {
    $('#education-text').wrap('<div class="col-md-12"></div>');
    $('#education').addClass('row');

    displaySchools();
    displayOnlineCourses();
};

/**
* @description displays schools
*/
function displaySchools() {
    for(var i=0; i < education.schools.length; i++) {
        $('#education').append(HTMLschoolStart);
        var school = education.schools[i];
        displaySchoolNameAndDegree(school);
        displayShoolDatesAndLocation(school);
        displayMajor(school);
    }
}

/**
* @description displays school name and degree
* @param {object} school
*/
function displaySchoolNameAndDegree(school) {
    var formattedName =  HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
    var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $('.education-entry:last').append(formattedNameDegree);
}

/**
* @description displays school dates and location
* @param {object} school
*/
function displayShoolDatesAndLocation(school) {
    $('.education-entry:last').append('<div class="row education-entry-date-location"></div>');
    var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
    $('.education-entry-date-location:last').append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
    $('.education-entry-date-location:last').append(formattedLocation);
}

/**
* @description displays list of majors
* @param {object} school
*/
function displayMajor(school) {
    if(school.majors.length > 0){
        var majorsString = school.majors.join(', ');
        var formattedMajors = HTMLschoolMajor.replace('%data%', majorsString);
        $('.education-entry:last').append(formattedMajors);
    }
}

/**
* @description displays online courses
*/
function displayOnlineCourses() {
    if(education.onlineCourses.length > 0) {
        $('#education').append(HTMLonlineClasses);
        $('#online-course-text').wrap('<div class="col-md-12"></div>');

        for(var j=0; j<education.onlineCourses.length; j++){
            var course =  education.onlineCourses[j];

            displayOnlineCourseTitleAndSchool(course);
            displayOnlineCourseDate(course);
            displayOnlineCourseUrl(course);
        }
    }
}

/**
* @description displays online course title and school
* @param {object} course
*/
function displayOnlineCourseTitleAndSchool(course) {
    $('#education').append(HTMLonlineStart);
    var formattedTitle = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
    var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $('.online-entry:last').append(formattedTitleSchool);
}

/**
* @description displays online course date
* @param {object} course
*/
function displayOnlineCourseDate(course) {
    var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
    $('.online-entry:last').append(formattedDates);
}

/**
* @description displays online course url
* @param {object} course
*/
function displayOnlineCourseUrl(course) {
    var formattedUrl = HTMLonlineURL.replace('%data%', course.url).replace('#', course.url);
    $('.online-entry:last').append(formattedUrl);
}

var work = {
    "jobs": [{
        "employer": "Springfield Nuclear Power Plant",
        "title": "Safety Inspector",
        "location": "Springfield, IL ",
        "dates": "1989 - 2016",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "url": "https://www.udacity.com/"
    }, {
        "employer": "SPD City of Springfield",
        "title": "Chief of Police",
        "location": "Springfield, IL",
        "dates": "2002 - 2003",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "url": "https://www.udacity.com/"
    }, {
        "employer": "Moe's Tavern and Homer's Hunting Club",
        "title": "Junior accountant",
        "location": "Springfield, IL",
        "dates": "2001 - 2002",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "url": "https://www.udacity.com/"
    }, {
        "employer": "National Aeronautics and Space Administration (NASA)",
        "title": "Astronaut",
        "location": "Cape Canaveral, FL",
        "dates": "1994 - 1995",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "url": "https://www.udacity.com/"
    }]
};

/**
* @description displays jobs
*/
work.display = function() {
    $('#work-text').wrap('<div class="col-md-12"></div>');
    $('#work-experience').addClass('row');

    for(var i=0; i< work.jobs.length; i++){
        var job = work.jobs[i];
        displayJobTitleAndEmployer(job);
        displayJobDatesAndLocation(job);
        displayJobDescription(job);
    }
};

/**
* @description displays job title and employer
* @param {object} job
*/
function displayJobTitleAndEmployer(job) {
    $('#work-experience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url);
    var formattedTitle =  HTMLworkTitle.replace('%data%', job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);
}

/**
* @description displays job dates and location
* @param {object} job
*/
function displayJobDatesAndLocation(job) {
    $('.work-entry:last').append('<div class="row work-entry-date-location"></div>');
    var formattedDates = HTMLworkDates.replace('%data%', job.dates);
    $('.work-entry-date-location:last').append(formattedDates);
    var formattedLocation =  HTMLworkLocation.replace('%data%', job.location);
    $('.work-entry-date-location:last').append(formattedLocation);
}

/**
* @description displays job description
* @param {object} job
*/
function displayJobDescription(job) {
     var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
    $('.work-entry:last').append(formattedDescription);
}

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "images": ["images/p11.jpg", "images/p12.jpg", "images/p13.jpg"],
        "picDescription": ["homer simpson", "simpson", "simpson"],
        "url": "https://www.udacity.com/"
    }, {
        "title": "Project 2",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.",
        "images": ["images/p21.jpg", "images/p22.jpg", "images/p23.jpg"],
        "picDescription": ["homer simpson", "simpson", "simpson"],
        "url": "https://www.udacity.com/"
    }]
};

/**
* @description displays projects
*/
projects.display = function() {
    $('#project-text').wrap('<div class="col-md-12"></div>');
    $('#projects').addClass('row');

    for(var i=0; i< projects.projects.length; i++){
        var project = projects.projects[i];
        displayProjectTitle(project);
        displayProjectDate(project);
        displayProjectDescription(project);
        displayProjectImages(project);
    }
};

/**
* @description displays project name and adds url
* @param {object} project
*/
function displayProjectTitle(project) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
    $('.project-entry:last').append(formattedTitle);
}

/**
* @description displays project date
* @param {object} project
*/
function displayProjectDate(project) {
    var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    $('.project-entry:last').append(formattedDates);
}

/**
* @description displays project description
* @param {object} project
*/
function displayProjectDescription(project) {
    var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
    $('.project-entry:last').append(formattedDescription);
}

/**
* @description displays project picture
* @param {object} project
*/
function displayProjectImages(project) {
    for(var j=0; j<project.images.length; j++){
        var formattedImage = HTMLprojectImage.replace('%data%', project.images[j]).replace('%alt%', project.picDescription[j]);
        $('.project-entry:last').append(formattedImage);
    }
}

/**
* @description displays map
*/
function displayMap() {
    $('#map-text').wrap('<div id="text-and-map" class="col-md-12"></div>');
    $('#map-div').addClass('row');
    $('#text-and-map').append(googleMap);
}

/**
* @description adds behaviour to navbar to hide when user selects menu item
*/
function hideNavbarOnItemSelection(){
    $('.nav a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
}

bio.display();
work.display();
projects.display();
education.display();
displayMap();
hideNavbarOnItemSelection();