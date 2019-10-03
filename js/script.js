// Set a click event handler for each of the images
$(document).ready(function() {

var $profile = $("#profile_title")
var $edu = $("#edu")
var $ai = $("#ai")
var $cs = $("#cs")
var $work = $('#work')
var $loris = $("#loris")
var $nuance = $("#nuance")
var $esa = $("#esa")
var $proj = $('#proj')
var $scoli = $('#scoli')
var $food = $('#food')
var $robot = $('#robot')
var $gis = $('#gis')
var $arch = $('#arch')
var $pub = $('#pub_title')

var $edu_buttons = $(".edu .section-link");
var $work_buttons = $(".work .section-link");
var $proj_buttons = $(".proj .section-link");

var dropdown_list = [$edu,$work,$proj]
var button_list = [$profile,$ai,$cs,$loris,$nuance,$esa,$scoli,$food,$robot,$gis,$arch,$pub]

var profile_data = [
  {
    title: "<span style=\"font-size:40px;\">A BIT OF BACKGROUND...</span><br><br>",
    text: "<span>I am a French/Austrian, who grew up in the Netherlands, and has studied in Canada. I'm currently a Masters student in AI in Amsterdam. My background is in Computer Science and Geography and I have completed software internships at a neurological hospital, a speech recogniton company, and the european space agency. I am looking for opportunities where I can develop skills in AI and Data Science and contribute to meaningful projects in the field of Sustainability.<br><br><b>Languages:</b> English, German, French, Dutch<br><b>Programming:</b> Python, Java, BASH, MATLAB, SQL<br><b>Web Dev.:</b> JavaScript, PHP, HTML/CSS, React<br><b>Software:</b> Git, Linux, Jupyter, PyTorch, SURFsara<br><b>Data Science:</b> ArcGIS, R, Kaggle, Pandas, MicroStrategy<br></span><br>",
    media: "url('./new_images/cv1bw.jpg')"
  },
];

var edu_data = [
  {
    title: "<p style=\"font-size: 35px;\">2018-2020: UNIVERSITY OF AMSTERDAM<br><i>MSc in Artificial Intelligence</i></p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Completed</p><span style=\"margin-top: 15px; font-size:18px; font-weight: lighter;\">Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Multi-Agent Systems, Information Retrieval, Evolutionary Computing, Knowledge Representation, Project AI</span><p style=\"margin: 20px 0 10px 0; font-size: 25px;\">To be completed in 2019</p><span style=\"margin-top: 15px; font-size:18px;\">Reinforcement Learning, Information Retrieval 2</span></div>",
    media: "url('./new_images/sp5.jpg')"
  },
  {
    title: "<p style=\"font-size: 35px\">2012-2016: MCGILL UNIVERSITY, Montreal<br><i>Double Major in CS & Urban Systems,<br>Minor in Environment</i></p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Course highlights</p><span style=\"margin-top: 15px; font-size:18px;\">CS -- Data Structures & Algorithms, Programming Languages, Computation, Software Systems<br>Math -- Calculus, Probability, Statistics, Linear Algebra, Logic, Discrete Mathematics<br>Geo. -- Socio-economic applications of GIS, Master-Planned Cities, Urban Field Studies<br>Env. -- Global Environment, World Environmental Problems, Evolving Earth, Society & Sustainability</span>",
    media: "url('./new_images/mcgill7.jpg')"
  },
  {
    title: "<p style=\"font-size: 35px\">2010-2012: AMERICAN SCHOOL OF THE HAGUE<br>IB Diploma</p>",
    text: "<p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Subjects</p><span style=\"margin-top: 15px; font-size:18px;\">Higher Level -- English, Biology, Psychology, German<br>Standard Level -- Math, Art</span><p style=\"margin: 20px 0 10px 0; font-size: 25px;\">Awards</p><span style=\"margin-top: 15px; font-size:18px;\">Cumulative High School GPA of 4.050<br>Highest Honours in 2010, 2011, and 2012<br>National Honour Society</span>",
    media: "url('./new_images/ash.jpg')"
  },
];

var work_data = [
  {
    title: "<p style=\"font-size: 30px\">2018: MONTREAL NEUROLOGICAL INSTITUTE.</p>",
    text: "I was a software developer at the Montreal Neurological Institute where I worked on a project called LORIS (Longitudinal Online Research and Imaging System). LORIS is a web-based data platform for neuroimaging research studies, which makes it easy to manage large datasets acquired over long periods of time or from different locations. The data we worked with was very heterogeneous, ranging from behavioral, clinical, neuroimaging, to genetic. Throughout my role, I contributed to the maintenance and testing of the software and coded features to help store and process these datasets.<br><br><img src=\"./new_images/loris2.png\" width=\"auto\" height=\"375\">",
    media: ""
  },
  {
    title: "<p style=\"font-size: 30px\">2017: NUANCE COMMUNICATIONS</p>",
    text: "I did two software internships at Nuance Communications, a speech recogniton and AI company. I was part of the Quality Assurance team in the Automobile division, where I had to test speech dialog systems in cars. My first role was Software Testing Intern, where I ran regressions to analyze the performance of the speech software and reported defects. I also developed test cases (queries to ask the speech dialog systems) in English, German, and Dutch. Following this role, I became a Software Tool Developer intern, where I coded tools to facilitate the testing process for my team. The tools I developed included an automated script for detecting erroneous files in our version control system, and a database for managing test cases.<br><br><iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/yncLVt61rgs?controls=0\"></iframe>",
    media: ""
  },
  {
    title: "<p style=\"font-size: 30px\">2015: EUROPEAN SPACE AGENCY</p>",
    text: "<p style=\"font-size:18px;\">At the European Space Agency, I conducted research on which space missions and countries produced the most scientific papers and why. Using data on the number of annual publications for various space missions and countries, I created two dashboards with interactive data visualizations on analytics software MicroStrategy.<br><br>1) “Publications for ESA missions”: visualizing ten missions (Gaia, Herschel, INTEGRAL, ISO, Mars Express, Planck, Rosetta, SOHO, Venus Express, and XMM-Newton).<br>2) “Publications by Country for ESA Missions“: visualizing seven countries (Austria, Belgium, France, Germany, Italy, the Netherlands, Spain, and the United Kingdom) and three missions (Herschel, INTEGRAL, and XMM-Newton).</p><br><img src=\"./new_images/document2.png\" width=\"600\" height=\"auto\">",
    media: ""
  },
];

var proj_data = [
  {
    title: "<span style=\"font-size:30px\">SCOLIOSIS DETECTION.</span><br><br>This was a month-long project I worked on with fellow AI students. Our task was to detect scoliosis in ordinary images. Our final project consisted of four steps: (1) Segmenting the image to get the silhouette of the body (for privary reasons), (2) Using Computer Vision and hand crafted features to detect asymmetries, (3) Passing the features as input to a Machine Learning model, (4) Predicting the presence of scoliosis and explaining which features led to that prediction. Throughout the project, we had guidance from AI specialists and doctors so that we could develop a solution that was state-of-the-art but still explainable.",
    text: "<img style=\"margin:25px auto 0 auto; width:100%;\" src=\"./new_images/projectai.png\">"
  },
  {
    title: "<span style=\"font-size:30px\">FRESHEST.</span><br><br>",
    text: "An augmented reality application that seeks to reduce food waste. Users can use this application to scan food items in their fridge and receive product-specific information about shelf life, storage, food preparation, and expiration warnings.<br><a href=\"https://devpost.com/software/freshest-ai\"><u>Second Place</u></a> at the AI for Social Good Hackathon at Desjardins Lab.<br><br><video width=\"75%\" height=\"auto\" controls><source src=\"./resources/css/images/portfolio/freshest/demo.mov\">Your browser does not support the video tag.</video>",
    media: "none",
    background: "url(./resources/css/images/portfolio/freshest/freshest.png)"
  },
  {
    title: "<span style=\"font-size:30px\">RECYCLING ROBOT.</span>",
    text: "<p style=\"font-size: 18px\">Our team built a Recycling Robot that could sort bottles (glass, paper, plastic, and aluminum) using weight sensors. The robot included the following mechanical, electrical, and software components:<br>1) A sturdy board with three sorting ledges and four containers for collecting.<br>2) Three Servo motors, one attached to each ledge, powered by an Arduino.<br>3) Code controlling the Servo motors based on feedback from weight sensors.</p><br><video muted width=\"275\" height=\"auto\" controls><source src=\"./resources/css/images/portfolio/robotics/sortleft.mp4\" type=\"video/mp4\">Your browser does not support the video tag.</video>"
  },
  {
    title: "<span style=\"font-size:30px\">GIS FOR SOCIAL GOOD.</span>",
    text: "<br>Throughout my Geography degree, I explored several socio-economic applications of GIS. This research project used various datasets in Montreal to find a suitable plot of land for an urban garden. Geographical data was collected and processed to find land that was available land, pollution-free, accessible by the community, and close to the target demographic.<br><br><object width=\"600px\" height=\"450px\" style=\"border: 2px solid black; margin:25px auto 25px auto;\" data=\"resources/css/images/portfolio/gis/gis-ua-presentation.pdf\"></object>"
  },
  {
    title: "<span style=\"font-size:30px\">CULTURAL LANDSCAPE STUDY.</span><br><br>An architecture project on a concrete garage turned cultural space in Mile-Ex, Montreal.<br><br>",
    text: "<embed src=\"./resources/css/images/portfolio/plaza/820plaza.pdf\" type=\"application/pdf\" width=\"75%\" height=\"600px\" margin=\"0 auto 0 auto;\" />"
  },
];

var pub_data = [
  {
    title: "<br>",
    text: "<p style=\"font-size:25px;\">FRONTIERS IN NEUROINFORMATICS:<br>Integration of \"omics\" Data and Phenotypic Data Within a Unified Extensible Multimodal Framework</p>Das, S., Lecours Boucher, X., Rogers, C., Makowski, C., Chouinard-Decorte, F., Oros Klein, K., Beck, N., Rioux, P., Brown, S. T., Mohaddes, Z., Zweber, C., Foing, V., Forest, M., O'Donnell, K. J., Clark, J., Meaney, M. J., Greenwood, C., … Evans, A. C. (2018). Integration of \"omics\" Data and Phenotypic Data Within a Unified Extensible Multimodal Framework. Frontiers in neuroinformatics, 12, 91. doi:<a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315165/\"><u>10.3389/fninf.2018.00091</u></a>",
    media: ""
  },
];

$(document).on('click', function (e) {

  for (var i = 0; i < dropdown_list.length; i++) {
    var $item = dropdown_list[i]
    if ($item.hasClass('edu')) {
      var $extra = $('#edu_extra');
      var $title = $('#edu_title')
    } else if ($item.hasClass('work')) {
      var $extra = $('#work_extra');
      var $title = $('#work_title')
    } else if ($item.hasClass('proj')) {
      var $extra = $('#proj_extra');
      var $title = $('#proj_title')
    }
    // if clicked outside
    if (!$item.is(e.target) // if the target of the click isn't the container...
    && $item.has(e.target).length === 0) // ... nor a descendant of the container
    {
      if ($extra.hasClass('visible')) {
        $extra.removeClass('visible').addClass('hidden');
      }
      if ($title.hasClass('clicked')) {
        $title.removeClass('clicked').addClass('unclicked');
      }
    // if clicked inside
    } else {
      if ($title.hasClass('unclicked')) {
        $title.removeClass('unclicked').addClass('clicked');
      }
      if ($extra.hasClass('hidden')) {
        $extra.removeClass('hidden').addClass('visible');
      }
    }
  }

  for (var i = 0; i < button_list.length; i++) {
    var $item = button_list[i]
    // if clicked outside
    if (!$item.is(e.target) // if the target of the click isn't the container...
    && $item.has(e.target).length === 0) // ... nor a descendant of the container
    {
      if ($item.hasClass('clicked')) {
        $item.removeClass('clicked').addClass('unclicked');
      }
    // if clicked inside
    } else {
      if ($item.hasClass('unclicked')) {
        $item.removeClass('unclicked').addClass('clicked');
      }
    }
  }

});

// Set a click event handler for each of the images
$profile.on("click", function(){
  document.getElementById("clicked_title").innerHTML = profile_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = profile_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = profile_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$edu_buttons.on("click", function(){
  document.getElementById("clicked_title").innerHTML = edu_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = edu_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = edu_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$work_buttons.on("click", function(){
  document.getElementById("clicked_title").innerHTML = work_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = work_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = work_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$proj_buttons.on("click", function(){
  document.getElementById("clicked_title").innerHTML = proj_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = proj_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = proj_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

// Set a click event handler for each of the images
$pub.on("click", function(){
  document.getElementById("clicked_title").innerHTML = pub_data[$(this).index()].title;
  document.getElementById("clicked_text").innerHTML = pub_data[$(this).index()].text;
  document.getElementById("clicked_media").style.backgroundImage = pub_data[$(this).index()].media;
  document.getElementById("bgimage").style.backgroundImage = "none";
});

});
