function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let long = document.getElementById("form-longitude");
  let lat = document.getElementById("form-latitude");
  
  let invalid_feedback_lat = document.querySelector(".invalid-feedback-lat");
  let invalid_feedback_long = document.querySelector(".invalid-feedback-long");

  let count = 0;

  if(lat.value < -90 || lat.value > 90){
    invalid_feedback_lat.removeAttribute("hidden");
  }else{
    count++;
      console.log("1");
      invalid_feedback_lat.setAttribute("hidden", true);
  }

  if(long.value < -180 || long.value > 180){
    invalid_feedback_long.removeAttribute("hidden");
  }else{   
    count++;
    console.log("2");
    invalid_feedback_long.setAttribute("hidden", true);
  }

  if(count === 2){
    console.log("hello");
  return true;
  }

  return false;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('#observation-form');
  form.onsubmit = validate;
};
