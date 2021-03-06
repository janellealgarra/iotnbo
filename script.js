function scrollWin() {
  window.scrollTo(0, 750);
}

function scrollWinTwo() {
  window.scrollTo(0, 1000);
}

window.addEventListener('load', function(){
      var myAudio = document.getElementById("myAudio");

      myAudio.onplaying = function() {
        isPlaying = true;
      };
      myAudio.onpause = function() {
        isPlaying = false;
      };
  });

  var isPlaying = false;

  function togglePlay() {
      if (isPlaying) {
          myAudio.pause()
      } else {
          myAudio.play();
      }
  }

let locGrid = document.getElementById('locationGrid');
let proGrid = document.getElementById('professionalGrid');

let resourceHelp = [
  {
    "category" : "loc",
    "title" : "National Center For Mental Health",
    "location" : "Mandaluyong, Metro Manila",
    "hours": "open 24/7",
    "number": "(02) 8531 9001",
    "link": "http://www.ncmh.gov.ph/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Excellent Community care center",
    "location" : "Quezon City, Metro Manila",
    "hours": "Monday-Sunday, 9am-10pm",
    "number": "0917 511 7582",
    "link": "https://www.facebook.com/ExcellentCommunityCareCenter/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Life Change Recovery Center",
    "location" : "Quezon City, Metro Manila",
    "hours": "open 24/7",
    "number": "0917 520 3509",
    "link": "https://www.lifechangerecoverycenter.com/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Philippine Mental Health Association",
    "location" : "Quezon City, Metro Manila",
    "hours": "Monday-Sunday, 7–11:30am // 12:30–4pm",
    "number": "(02) 8921 4958",
    "link": "https://pmha.org.ph/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "St. Joseph Psychiatric and Custodial Homecare",
    "location" : "Lungsod Quezon, Kalakhang Maynila",
    "hours": "*please call for hours*",
    "number": "(02) 3434 4321",
    "link": "https://www.webbline.com/mental-health/st-joseph-psychiatric-and-custodial-homecare-rev8312019303/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "In Touch Community Services",
    "location" : "Makati, Metro Manila",
    "hours": "Monday-Sunday, 9am-5pm",
    "number": "(02) 8893 1893",
    "link": "https://www.in-touch.org/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Prescription Psychiatrists and Psychologists",
    "location" : "Makati, Metro Manila",
    "hours": "Monday-Sunday, 8am-9pm",
    "number": "(02) 7966 7110",
    "link": "https://prescriptionpsychiatrists.com.ph/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Divine Mercy The Home That Cares Inc.",
    "location" : "Mandaluyong, Metro Manila",
    "hours": "open 24/7",
    "number": "(02) 8401 2645",
    "link": "http://www.divinemercyhomecare.com/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Philippine General Hospital",
    "location" : "Manila, Metro Manila",
    "hours": "open 24/7",
    "number": "(02) 8554 8400",
    "link": "https://www.pgh.gov.ph/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Asian Hospital and Medical Center",
    "location" : "Muntinlupa, Metro Manila",
    "hours": "open 24/7",
    "number": "(02) 8771 9000",
    "link": "https://www.asianhospital.com/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "St. Luke's Medical Center - Global City",
    "location" : "Taguig, Metro Manila",
    "hours": "open 24/7",
    "number": "(02) 8789 7700",
    "link": "https://www.stlukes.com.ph/",
    "web": "website"
  },

  {
    "category" : "loc",
    "title" : "Tokyo Healthlink 東京ヘルスリンク - Alabang",
    "location" : "Muntinlupa, Metro Manila",
    "hours": "Monday-Sunday, 8am-5pm",
    "number": "(02) 8772 2678",
    "link": "https://www.tokyohealthlink.net/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Rose Pugeda",
    "location" : "Healthway Medical Clinic, 2nd Floor, Alabang Town Center, Alabang-Zapote Road, Muntinlupa, Metro Manila",
    "hours": "Monday-Wednesday, 2pm-4pm",
    "number" : "(02) 7772 3527",
    "link": "https://www.healthway.com.ph/healthway-multi-specialty-center/doctors",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Jay Madelon Castillo Carcereny, M.D.",
    "location" : "Healthway Medical Clinic, 2nd Floor, Alabang Town Center, Muntinlupa, Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 7751 4929",
    "link": "https://www.healthway.com.ph/healthway-multi-specialty-center/doctors",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Maria Madeline B. Mallillin, MD",
    "location" : "Room 705, Asian Hospital And Medical Center, Alabang, Muntinlupa",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "none",
    "link": "https://www.asianhospital.com/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Salvador Benjamin D. Vista",
    "location" : "Room 201, Asian Hospital And Medical Center, Alabang, Muntinlupa",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 8771 9000",
    "link": "https://www.asianhospital.com/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Lovie Hope Go-Chu, M.D.",
    "location" : "Room 215, 2nd Floor, Hall B, Tower 1, Makati Medical Center, Amorsolo Street, Makati City",
    "hours" : "Monday-Sunday, 9am-5pm",
    "number" : "n/a",
    "link": "https://www.makatimed.net.ph/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Paul V. Lee, MD",
    "location" : "Room 22, Philippine Children's Medical Center, Quezon City, Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 8401 2911",
    "link": "http://www.pcmc.gov.ph/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Nelson Anthony Mallillin",
    "location" : "Room 209, Our Lady of the Pillar Medical Center, Tamsui Avenue, Bayan Luma, Imus",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(046) 472 3773",
    "link": "https://www.facebook.com/olpmc/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr Kenneth Javate",
    "location" : "Unit 308 The Xavier Residences, 41 Esteban Abada St, Quezon City, 1108 Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "0916 250 2040",
    "link": "https://pssc.org.ph/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Melissa Reyes",
    "location" : "Room 210, 2nd Floor, Philippine Social Science Center, Commonwealth Avenue, Diliman, Quezon City, Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 3453 8257",
    "link": "https://pssc.org.ph/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Elizabeth Rondain, M.D.",
    "location" : " Room 121, 1st Floor, Hall C, Tower 1, Makati Medical Center, Amorsolo Street, Makati City",
    "hours": "*please schedule an appointment in person*",
    "number" : "n/a",
    "link": "https://www.makatimed.net.ph/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Margaret Helen Udarbe-Alvarez",
    "location" : "Room 210, 2nd Floor, PSS Center, Commonwealth Avenue, Diliman, Quezon City, Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 3453 8257",
    "link": "https://pscentre.org/",
    "web": "website"
  },

  {
    "category" : "pro",
    "title" : "Dr. Josephine Mary Ganar",
    "location" : "Healthway Medical Clinic, 2nd Floor, Alabang Town Center, Alabang-Zapote Road, Muntinlupa, Metro Manila",
    "hours": "*please schedule an appointment through the facility*",
    "number" : "(02) 7720 6102",
    "link": "https://www.healthway.com.ph/healthway-multi-specialty-center/doctors",
    "web": "website"
  }

];



for (let i = 0; i < resourceHelp.length; i++) {
  createElement(resourceHelp[i]);
}


function createElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentLink = document.createElement("A");
  newContentLink.href = incomingJSON['link'];

  let newContentTitle = document.createElement("H4");
  newContentTitle.classList.add('contentTitle');
  newContentTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentTitle);

  let newContentLoc = document.createElement("P");
  newContentLoc.classList.add('contentLoc');
  newContentLoc.innerText = incomingJSON['location'];
  newContentElement.appendChild(newContentLoc);

  let newContentHours = document.createElement("P");
  newContentHours.classList.add('contentHours');
  newContentHours.innerText = incomingJSON['hours'];
  newContentElement.appendChild(newContentHours);

  let newContentNumber = document.createElement("P");
  newContentNumber.classList.add('contentNumber');
  newContentNumber.innerText = incomingJSON['number'];
  newContentElement.appendChild(newContentNumber);

  let newWebLink = document.createElement("P");
  newWebLink.classList.add('webLink');
  newWebLink.innerText = incomingJSON['web'];
  newContentElement.appendChild(newWebLink);
  newContentLink.appendChild(newWebLink);
  newContentElement.appendChild(newContentLink);


  if (incomingJSON['category'] === 'loc'){
    locGrid.appendChild(newContentElement);
  } else if (incomingJSON['category'] === 'pro'){
    proGrid.appendChild(newContentElement);
  }

}
