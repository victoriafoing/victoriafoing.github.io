function show(id) {
  document.getElementById(id).style.visibility = "visible";
}

function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
  document.getElementById(id).style.height = "0%";
}

// Put all the images in a JavaScript array
var $edu_imgs = $(".edu .section-link");
var $work_imgs = $(".work .section-link");
var $proj_imgs = $(".proj .section-link");
var $skills = $("#skills_title")
var $pub = $("#pub_title")

var
// If you store your content in an array of objects, you can do this without creating
// more than one display div. You'll just get the content from the object in the
// array that has the same index as the image (within a different array)
var edu_data = [
  {
    title: "<p style=\"font-size: 35px;\">2018-2020<br>UNIVERSITY OF AMSTERDAM<br>MSc in Artificial Intelligence</p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Completed</p><span style=\"margin-top: 15px; font-size:18px; font-weight: lighter;\">Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Multi-Agent Systems, Information Retrieval, Evolutionary Computing, Knowledge Representation, Project AI</span><p style=\"margin: 20px 0 10px 0; font-size: 25px;\">To be completed in 2019</p><span style=\"margin-top: 15px; font-size:18px;\">Reinforcement Learning, Machine Learning 2</span></div>",
    media: "url('./new_images/sp5.jpg')"
  },
  {
    title: "<p style=\"font-size: 35px\">2012-2016<br>MCGILL UNIVERSITY, Montreal<br>BA in Computer Science & Urban Systems</p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Course highlights</p><span style=\"margin-top: 15px; font-size:18px;\">CS -- Data Structures & Algorithms, Programming Languages, Theory of Computation<br>Math -- Calculus, Probability, Statistics, Linear Algebra, Logic, Discrete Mathematics<br>Systems -- Software Systems, Computer Systems, Geographic Information Systems</span>",
    media: "url('./new_images/mcgill7.jpg')"
  },
  {
    title: "<p style=\"font-size: 35px\">2010-2012<br>AMERICAN SCHOOL OF THE HAGUE<br>IB Diploma</p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Subjects</p><span style=\"margin-top: 15px; font-size:18px;\">Higher Level -- English, Biology, Psychology, German<br>Standard Level -- Math, Art</span><p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Awards</p><span style=\"margin-top: 15px; font-size:18px;\">Cumulative High School GPA of 4.050<br>Highest Honours in 2010, 2011, and 2012<br>National Honour Society</span>",
    media: "url('./new_images/ash.jpg')"
  },
];

var work_data = [
  {
    title: "<p style=\"font-size: 35px\">2018<br>MONTREAL NEUROLOGICAL INSTITUTE<br>Sofware Developer</p>",
    text: "<img src=\"./new_images/loris2.png\" width=\"auto\" height=\"375\">",
    media: ""
  },
  {
    title: "<p style=\"font-size: 35px\">2017<br>NUANCE COMMUNICATIONS<br>Sofware Tool Developer Intern</p>",
    text: "<iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/yncLVt61rgs?controls=0\"></iframe>",
    media: ""
  },
  {
    title: "<p style=\"font-size: 35px\">2015<br>EUROPEAN SPACE AGENCY<br>Data Analytics Intern</p>",
    text: "<p style=\"font-size:18px;\">At the European Space Agency, I conducted research on which space missions and countries produced the highest number of scientific papers and why. I was given data on the number of annual publications for various space missions and countries over the last 15 years. I then used analytics software Microstrategy to create two interactive dashboards with data visualizations.<br><br>1) “Publications for ESA missions”: visualizing ten missions (Gaia, Herschel, INTEGRAL, ISO, Mars Express, Planck, Rosetta, SOHO, Venus Express, and XMM-Newton).<br>2) “Publications by Country for ESA Missions“: visualizing seven countries (Austria, Belgium, France, Germany, Italy, the Netherlands, Spain, and the United Kingdom) and three missions (Herschel, INTEGRAL, and XMM-Newton).</p><br><img style=\"border-radius: 0px; border: 5px solid black;\" src=\"./new_images/document2.png\" width=\"400\" height=\"auto\">",
    media: ""
  },
];

var proj_data = [
  {
    title: "<p style=\"font-size: 35px\">EVOLUTIONARY ROBOTICS<br>Studying the effect of the environment on evolvable robot morphologies and behavior.</p>",
    text: "13 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "<p style=\"font-size: 35px\">FRESHEST<br>Application to reduce food waste</p>",
    text: "<p><a href=\"https://devpost.com/software/freshest-ai\"><u>Second Place</u></a> at the AI for Social Good Hackathon at Desjardins Lab.<br><br>An augmented reality application that uses computer vision to detect food products. Users can use this application to scan food items in their fridge and receive product-specific information about shelf life, storage, food preparation, and expiration warnings.</p><video width=\"600\" height=\"500\" controls><source src=\"./resources/css/images/portfolio/freshest/demo.mov\">Your browser does not support the video tag.</video>",
    media: "none",
    background: "url(./resources/css/images/portfolio/freshest/freshest.png)"
  },
  {
    title: "<p style=\"font-size: 35px\">SMART TRAFFIC<br>Application that predicts congestion based on live traffic footage.</p>",
    text: "8 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "<p style=\"font-size: 35px\">RECYCLING ROBOT<br>Robot prototype developed at Mini Projects, a two-week robot-building competition.</p>",
    text: "<p style=\"font-size: 18px\">Our team built a Recycling Robot that could sort bottles (glass, paper, plastic, and aluminum) using weight sensors. The robot included the following mechanical, electrical, and software components:<br>1) A sturdy board with three sorting ledges and four containers for collecting.<br>2) Three Servo motors, one attached to each ledge, powered by an Arduino.<br>3) Code controlling the movement of the Servo motors based on feedback from the weight sensors in each ledge.</p><br><img src=\"resources/css/images/portfolio/robotics/design3.jpg\" width=\"375\" height=\"375\"><video muted width=\"375\" height=\"375\" controls><source src=\"./resources/css/images/portfolio/robotics/sortleft.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video>"
  },
  {
    title: "<p style=\"font-size: 35px\">GIS<br>Socio-economic applications of mapping software.</p>",
    text: "<object width=\"600\" height=\"500\" style=\"border: 2px solid black;\" data=\"resources/css/images/portfolio/gis/gis-ua-presentation.pdf\"></object>"
  },
  {
    title: "<p style=\"font-size: 35px\">CULTURAL LANDSCAPE STUDY<br>Architecture project on a concrete garage turned cultural space in Mile-Ex, Montreal.</p>",
    text: "<object width=\"480\" height=\"600\" style=\"border: 2px solid black;\" data=\"./resources/css/images/portfolio/plaza/820plaza.pdf\"></object>"
  },
  {
    title: "<p style=\"font-size: 35px\">GRAPHIC DESIGN</p>",
    text: "12 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

var skills_data = [
  {
    title: "<p style=\"font-size: 35px\">SKILLS</p>",
    text: "",
    media: ""
  },
];

var pub_data = [
  {
    title: "<br>",
    text: "<p style=\"font-size:25px;\">FRONTIERS IN NEUROINFORMATICS:<br>Integration of \"omics\" Data and Phenotypic Data Within a Unified Extensible Multimodal Framework</p>Das, S., Lecours Boucher, X., Rogers, C., Makowski, C., Chouinard-Decorte, F., Oros Klein, K., Beck, N., Rioux, P., Brown, S. T., Mohaddes, Z., Zweber, C., Foing, V., Forest, M., O'Donnell, K. J., Clark, J., Meaney, M. J., Greenwood, C., … Evans, A. C. (2018). Integration of \"omics\" Data and Phenotypic Data Within a Unified Extensible Multimodal Framework. Frontiers in neuroinformatics, 12, 91. doi:<a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315165/\"><u>10.3389/fninf.2018.00091</u></a>",
    media: ""
  },
];

// Get reference to the output area
var $outputDiv = $(".section-display");

// Set a click event handler for each of the images
$edu_imgs.on("mouseover", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  const list = document.getElementsByClassName("title");
  for (var i = 0; i < list.length; i++) {
    list[i].style.textShadow = "none";
    list[i].style.opacity = "0.7";
  }
  document.getElementById("edu_title").style.textShadow = "0 0 32px black";
  document.getElementById("edu_title").style.opacity = "1";
  document.getElementById("clicked_title").innerHTML = edu_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = edu_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = edu_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
  //$(".title", $outputDiv).text(edu_data[$(this).index()].title);
  //$(".text", $outputDiv).text(edu_data[$(this).index()].text);
});

// Set a click event handler for each of the images
$work_imgs.on("mouseover", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  const list = document.getElementsByClassName("title");
  for (var i = 0; i < list.length; i++) {
    list[i].style.textShadow = "none";
    list[i].style.opacity = "0.7";
  }
  document.getElementById("work_title").style.textShadow = "0 0 32px black";
  document.getElementById("work_title").style.opacity = "1";
  document.getElementById("clicked_title").innerHTML = work_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = work_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = work_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$proj_imgs.on("mouseover", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  const list = document.getElementsByClassName("title");
  for (var i = 0; i < list.length; i++) {
    list[i].style.textShadow = "none";
    list[i].style.opacity = "0.7";
  }
  document.getElementById("proj_title").style.textShadow = "0 0 32px black";
  document.getElementById("proj_title").style.opacity = "1";
  document.getElementById("clicked_title").innerHTML = proj_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = proj_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = proj_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$skills.on("mouseover", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  const list = document.getElementsByClassName("title");
  for (var i = 0; i < list.length; i++) {
    list[i].style.textShadow = "none";
    list[i].style.opacity = "0.7";
  }
  document.getElementById("skills_title").style.textShadow = "0 0 32px black";
  document.getElementById("skills_title").style.opacity = "1";
  document.getElementById("clicked_title").innerHTML = skills_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = skills_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = pub_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$pub.on("mouseover", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  const list = document.getElementsByClassName("title");
  for (var i = 0; i < list.length; i++) {
    list[i].style.textShadow = "none";
    list[i].style.opacity = "0.7";
  }
  document.getElementById("pub_title").style.textShadow = "0 0 32px black";
  document.getElementById("pub_title").style.opacity = "1";
  document.getElementById("clicked_title").innerHTML = pub_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = pub_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = pub_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});
