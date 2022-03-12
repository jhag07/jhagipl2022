"use strict";
console.log("satyam jha");
// console.log((document.getElementById("hey").innerHTML = "SATYAM JHA"));
function myFunction() {
  let x = document.getElementById("tarik").value;
  let text;

  if (x === "2022-03-26") {
    text = "chennai vs kolkata <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-03-27") {
    text =
      " 1 delhi vs mumbai <br/> [Brabourne Stadium,Mumbai] <br/> <br/> 2 Punjab vs Rcb <br/> [D.Y.Patil Stadium ,Mumbai]";
  } else if (x === "2022-03-28") {
    text = "Gujrat vs Lucknow <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-03-29") {
    text = "Hyderabad vs Rajasthan <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-03-30") {
    text = "Rcb vs Kolkata <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-03-31") {
    text = "Lucknow vs Chennai <br/> [MCA Stadium,Pune] ";
  } else if (x === "2022-04-01") {
    text = "Kolkata vs Punjab <br/> [Wankhede Stadium,Mumbai] ";
  } else if (x === "2022-04-02") {
    text =
      "1 Mumbai vs Rajasthan <br/> [D.Y.Patil Stadium,Mumbai] <br/> <br/> 2 Gujrat vs Delhi <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-03") {
    text = "Chennai vs Punjab <br/>  [Brabourne Stadium,Mumbai]  ";
  } else if (x === "2022-04-04") {
    text = "Hyderabad vs Lucknow <br/>[D.Y.Patil Stadium,Mumbai] ";
  } else if (x === "2022-04-05") {
    text = "Rajasthan vs Rcb <br/> [Wankhede Stadium,Mumbai] ";
  } else if (x === "2022-04-06") {
    text = "Kolkata vs Mumbai <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-07") {
    text = "Lucknow vs Delhi <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-08") {
    text = "Punjab vs Gujrat <br/> [Brabourne Stadium,Mumbai] ";
  } else if (x === "2022-04-09") {
    text =
      "1 Csk vs Hyderabad <br/> [D.Y.Patil Stadium,Mumbai] <br/> <br/> 2 Rcb vs Mumbai <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-10") {
    text =
      "1 Kolkata vs Delhi <br/> [Brabourne Stadium,Mumbai] <br/> <br/> 2 Rajasthan vs Lucknow <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-11") {
    text = "Hyderabad vs Gujrat <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-12") {
    text = "Csk vs Rcb <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-13") {
    text = "Mumbai vs Punjab <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-14") {
    text = "Rajasthan vs Gujrat <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-15") {
    text = "Hyderabad vs Kolkata <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-04-16") {
    text =
      "1 Mumbai vs Lucknow <br/> [Brabourne Stadium,Mumbai] <br/> <br/> 2 Delhi vs Rcb <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-17") {
    text =
      "1 Punjab vs Hyderabad <br/> [D.Y.Patil Stadium,Mumbai] <br/> <br/> 2 Gujrat vs Csk <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-18") {
    text = "Rajasthan vs Kolkata <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-04-19") {
    text = "Lucknow vs Rcb <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-20") {
    text = "Delhi vs Punjab <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-21") {
    text = "Mumbai vs Csk <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-04-22") {
    text = "Delhi vs Rajasthan <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-23") {
    text =
      "1 Kolkata vs Gujrat <br/> [D.Y.Patil Stadium,Mumbai] <br/> <br/> 2 Rcb vs Hyderabad <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-04-24") {
    text = "Lucknow vs Mumbai <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-25") {
    text = "Punjab vs Csk <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-26") {
    text = "Rcb vs Rajasthan <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-27") {
    text = "Gujrat vs Hyderabad <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-28") {
    text = "Delhi vs Kolkata <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-04-29") {
    text = "Punjab vs Lucknow <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-04-30") {
    text =
      "1 Gujrat vs Rcb <br/> [Brabourne Stadium,Mumbai] <br/> <br/> 2 Rajasthan vs Mumbai <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-01") {
    text =
      "Delhi vs Lucknow <br/> [Wankhede Stadium,Mumbai]<br/> <br/> 2 Hyderabad vs CSk <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-05-02") {
    text = "Kolkata vs Rajasthan <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-05-03") {
    text = "Gujarat vs Punjab <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-04") {
    text = "Rcb vs Csk <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-05-05") {
    text = "Delhi vs Hyderabad <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-05-06") {
    text = "Gujarat vs Mumbai <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-05-07") {
    text =
      "1 Punjab vs Rajasthan <br/> [Wankhede Stadium,Mumbai] <br/> <br/> 2 Lucknow vs Kolkata <br/> [MCA Stadium,Pune] ";
  } else if (x === "2022-05-08") {
    text =
      "1 Hyderabad vs Rcb <br/> [Wankhede Stadium,Mumbai] <br/> <br/> 2 CSk vs Delhi <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-09") {
    text = "Mumbai vs Kolkata <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-10") {
    text = "Lucknow vs Gujrat <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-05-11") {
    text = "Rajasthan vs Delhi <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-12") {
    text = "Csk vs Mumbai <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-05-13") {
    text = "Rcb vs Punjab <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-05-14") {
    text = "Kolkata vs Hyderabad <br/> [MCA Stadium,Pune]";
  } else if (x === "2022-05-15") {
    text =
      "1 Csk vs Gujarat <br/> [Wankhede Stadium,Mumbai] <br/> <br/> 2 Lucknow vs Rajasthan<br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-05-16") {
    text = "Punjab vs Delhi <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-17") {
    text = "Mumbai vs Hyderabad <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-05-18") {
    text = "Kolkata vs Lucknow <br/> [D.Y.Patil Stadium,Mumbai]";
  } else if (x === "2022-05-19") {
    text = "Rcb vs Gujarat <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-05-20") {
    text = "Rajasthan vs Csk <br/> [Brabourne Stadium,Mumbai]";
  } else if (x === "2022-05-21") {
    text = "Mumbai vs Delhi <br/> [Wankhede Stadium,Mumbai]";
  } else if (x === "2022-05-22") {
    text = "Hyderabad vs Punjab <br/> [Wankhede Stadium,Mumbai]";
  } else {
    text = "please enter valid date";
  }

  document.getElementById("info").innerHTML = text;
}

function resetInfo() {
  document.getElementById("tarik").value = "";
  document.getElementById("info").innerHTML = "Data Processing...";
}
console.log(document.getElementById("tarik").value);
