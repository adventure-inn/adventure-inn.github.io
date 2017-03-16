function checkDate(dDate) {
  var dateTest = Date.parse(dDate)
  if (isNaN(dateTest)) {
    return false;
  }
  return true;
}

function monthNumber(monthAbbrev) {
     switch(monthAbbrev) {
      case "Jan":
        monthNumber = "01";
        break;
      case "Feb":
        monthNumber = "02";
        break;
      case "Mar":
        monthNumber = "03";
        break;
      case "Apr":
        monthNumber = "04";
        break;
      case "May":
        monthNumber = "05";
        break;
      case "Jun":
        monthNumber = "06";
        break;
      case "Jul":
        monthNumber = "07";
        break;
      case "Aug":
        monthNumber = "08";
        break;
      case "Sep":
        monthNumber = "09";
        break;
      case "Oct":
        monthNumber = "10";
        break;
      case "Nov":
        monthNumber = "11";
        break;
      case "Dec":
        monthNumber = "12";
        break;
    }
    return monthNumber;
}


function monthNumber2(monthAbbrev) {
     switch(monthAbbrev) {
      case "Jan":
        monthNumber2 = "01";
        break;
      case "Feb":
        monthNumber2 = "02";
        break;
      case "Mar":
        monthNumber2 = "03";
        break;
      case "Apr":
        monthNumber2 = "04";
        break;
      case "May":
        monthNumber2 = "05";
        break;
      case "Jun":
        monthNumber2 = "06";
        break;
      case "Jul":
        monthNumber2 = "07";
        break;
      case "Aug":
        monthNumber2 = "08";
        break;
      case "Sep":
        monthNumber2 = "09";
        break;
      case "Oct":
        monthNumber2 = "10";
        break;
      case "Nov":
        monthNumber2 = "11";
        break;
      case "Dec":
        monthNumber2 = "12";
        break;
    }
    return monthNumber2;
}



function submitBookingForm() {

  document.Form1.action= "https://reservations.verticalbooking.com/reservation_hotel.htm";
  document.Form1.target="_self";

  // ************** START DATE ("arrive" on the screen)*****************

  var sMonthAbbrev, sMonthNumber, sDay, sYear
  var eMonthAbbrev, eMonthNumber, eDay, eYear
  var startDate = document.Form1.datepickerp.value
  if (checkDate(startDate)) {

    sMonthAbbrev = startDate.substring(0,3)
    sMonthNumber = monthNumber(sMonthAbbrev);
    sDay = startDate.substring(4,6)
    sYear = startDate.substring(8,12)

  } else {
    //invalid or empty date - set start date to today
    startDate = new Date();
    sDay = startDate.getDate();
    //January = 0 :(
    sMonthNumber = startDate.getMonth()+1;
    sYear = startDate.getFullYear();
  }

  document.Form1.mm.value = sMonthNumber
  document.Form1.gg.value = sDay
  document.Form1.aa.value = sYear

  // ************** END DATE ("departure" on the screen) *****************

  var endDate = document.Form1.datepickerf.value
  if (checkDate(endDate)) {

    //The second time I called the monthNumber function it failed.
    //I finally just created it a second to get it to work...
    eMonthAbbrev = endDate.substring(0,3)
    //alert(eMonthAbbrev)
    eMonthNumber = monthNumber2(eMonthAbbrev);
    //alert(eMonthNumber)
    eDay = endDate.substring(4, 6)
    //alert(eDay)
    eYear = endDate.substring(8,12)
    //alert(eYear)

  } else {
    //invalid or empty date - set end date to today + 2 days
    endDate = new Date();
    endDate.setDate(endDate.getDate()+2);
    eDay = endDate.getDate();
    //January = 0 :(
    eMonthNumber = endDate.getMonth()+1;
    eYear = endDate.getFullYear();
  }

  document.Form1.mmf.value = eMonthNumber
  document.Form1.ggf.value = eDay
  document.Form1.aaf.value = eYear


  document.Form1.submit();
}


function submitTopBookingForm() {

document.Form3.submit();

// this is used to submit the "BOOK NOW" link in the gray bar at the top of the page

}
