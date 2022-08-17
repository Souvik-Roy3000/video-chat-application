// const optionBtn = document.createElement("button");
// optionBtn.classList.add("video-element");
// optionBtn.classList.add("options-button");
// optionBtn.innerHTML = `
// <style>

// /* Dropdown Button */
// .dropbtn {
//    background-color: transparent;
//    color: white;
//    padding: 16px;
//    font-size: 16px;
//    border: none;
//    cursor: pointer;
//  }
 
//  /* Dropdown button on hover & focus */
//  .dropbtn:hover, .dropbtn:focus {
   
//  }
 
//  /* The container <div> - needed to position the dropdown content */
//  .dropdown {
//    position: relative;
//    display: inline-block;
//  }
 
//  /* Dropdown Content (Hidden by Default) */
//  .dropdown-content {
//    display: none;
//    position: relative;
//    background-color: #f1f1f1;
//    min-width: 160px;
//    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//    z-index: 1;
//  }
 
//  /* Links inside the dropdown */
//  .dropdown-content a {
//    color: black;
//    padding: 12px 16px;
//    text-decoration: none;
//    display: block;
//  }
 
//  /* Change color of dropdown links on hover */
//  .dropdown-content a:hover {background-color: #ddd}
 
//  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
//  .show {display:block;}

// </style>

// <div class="dropdown">
// <button class="dropbtn">⁝</button>
// <div id="myDropdown" class="dropdown-content">
//  <a href="#">Report</a>
//  <a href="#">Find Location</a>
 
// </div>
// </div>


// `;

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
// document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
// if (!event.target.matches('.dropbtn')) {
//  var dropdowns = document.getElementsByClassName("dropdown-content");
//  var i;
//  for (i = 0; i < dropdowns.length; i++) {
//    var openDropdown = dropdowns[i];
//    if (openDropdown.classList.contains('show')) {
//      openDropdown.classList.remove('show');
//    }
//  }
// }
// }


// //   modal part





// optionBtn.addEventListener('click',()=>{
// myFunction();
// })

// module.export= findLocation=()=>{
//     const success=(position)=>{
//         const latitude= position.coords.latitude;
//         const longitude= position.coords.longitude;
//         console.log(latitude + "  and  " + longitude);
//     }
//     const errormsg=()=>{
//         console.log("unable to retrive location");
//     }
//     global.navigator.geolocation.getCurrentPosition(success, errormsg);
// }

  function initCoords() {
    if (global.navigator.geolocation) {
      global.navigator.geolocation.getCurrentPosition(initialize, locationError);
      const latitude= initialize.coords.latitude;
      const longitude= initialize.coords.longitude;
    } else {
      showError("Your browser does not support Geolocation!");
    }
  }
  initCoords();