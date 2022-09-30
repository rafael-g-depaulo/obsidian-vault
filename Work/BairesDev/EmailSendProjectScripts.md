Code.gs
```
function sendEmails() {

  var ui = SpreadsheetApp.getUi();

  var response = ui.alert('Are you sure to send an email with this information?', ui.ButtonSet.YES_NO);

  

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();  

  var checkBox = ss.getRange('B14').isChecked()

  var focalPointName = ss.getRange(11,2).getValue();

  var focalPointEmail = ss.getRange(12,2).getValue();

  var pmEmail = ss.getRange(2,5).getValue();

  var employeeName = ss.getRange(4,5).getValue();

  var fpfrequency = ss.getRange(6,5).getValue();

  var isMonday = ss.getRange(8,5).getValue();

  var isTuesday = ss.getRange(9,5).getValue();

  var isWednesday = ss.getRange(10,5).getValue();

  var isThursday = ss.getRange(11,5).getValue();

  var isFriday = ss.getRange(12,5).getValue();

  var lastsend = ss.getRange(6,7).getValue();

  var bpEmail = 'dailyprogressreports@bairesdev.com';

  var currentDateNoFormat = ss.getRange(3,5).getValue();

  var currentDate = Utilities.formatDate(currentDateNoFormat,"GMT","dd-MMM-yyyy");

  var sprintEndDate = ss.getRange(3,2).getValue();

  var emailSubject = fpfrequency+ ' Progress Report | '+employeeName+' | '+currentDate;

  var salute = 'Hi, '+focalPointName;  

  var validatedFields = false;

  var blankEstimatedHours = 0;

  var currentDay = Utilities.formatDate(ss.getRange(3,5).getValue(), "GMT", "u");

  

  if(focalPointEmail==''|| focalPointName=='' || pmEmail=='' || employeeName=='')

  {

    ui.alert('Please fill all the fields in the report.')

  }else{

    validatedFields = true

  }

  

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Date rules validation

  

  let validatedDates = true;

  let lastRow = ss.getLastRow()-1;

  let notMondayDate = ss.getRange(3,5).getValue();

  let mondayDate = ss.getRange(3,5).getValue();;

  notMondayDate = notMondayDate.setDate(notMondayDate.getDate()-1); //If current day is not Monday, only substract 1 day

  mondayDate = mondayDate.setDate(mondayDate.getDate()-3); //If current day is Monday, substract 3 days

  

  if ((sprintEndDate < notMondayDate && currentDay != 1)

    || (sprintEndDate < mondayDate && currentDay == 1)){

    validatedDates = false;

    ui.alert('Error:\n\nMail is only allowed to be sent with one working day of delay.\n\nPlease adjust the Sprint End Date to be AT MOST one working day before today.')

    return;

  }

  

  for(let counter=19; counter<=lastRow; counter++){

    let statusValue = ss.getRange(counter,2).getValue();

    let originalDueDate = ss.getRange(counter,4).getValue();

    let updatedDueDate = ss.getRange(counter,5).getValue();

    let realDeliveryDate = ss.getRange(counter,6).getValue();

    let pendingHours = ss.getRange(counter,11).getValue();

  

    if ((statusValue == 'Done' && realDeliveryDate == '') || (statusValue != 'Done' && realDeliveryDate != '')){

      validatedDates = false;

      ui.alert('Error:\n\nPlease make sure that The Real Delivery Date is filled out ONLY when a task status is "Done".\n\nLeave the other tasks\' Real Delivery Date as empty.')

      break;

    }

    if (realDeliveryDate != ''){

      if (realDeliveryDate > currentDateNoFormat){

        validatedDates = false;

        ui.alert('Error:\n\nPlease make sure that The Real Delivery Date is equal or smaller than today\'s date.')

        break;

      }

    }

  

    if ((statusValue == 'In progress') && (((originalDueDate < notMondayDate && updatedDueDate < notMondayDate) && currentDay != 1)

        || ((originalDueDate < mondayDate && updatedDueDate < mondayDate) && currentDay == 1))){

      validatedDates = false;

      ui.alert('Error:\n\nThere are tasks marked as "In progress" with both "Original Due Date" and "Updated Due Date" with more than one working day of delay.\n\nPlease adjust at least one of these dates to be delayed AT MOST one working day regarding the Sprint End Date.')

      break;

    }

  

    if ((statusValue == 'To do') && (((originalDueDate < notMondayDate && updatedDueDate < notMondayDate) && currentDay != 1)

        || ((originalDueDate < mondayDate && updatedDueDate < mondayDate) && currentDay == 1))){

      validatedDates = false;

      ui.alert('Error:\n\nThere are tasks marked as "To do" with both "Original Due Date" and "Updated Due Date" with more than one working day of delay.\n\nPlease adjust at least one of these dates to be delayed AT MOST one working day regarding the Sprint End Date.')

      break;

    }

  

    if (statusValue == 'Done' && pendingHours != 0){

        validatedDates = false;

        ui.alert('Error:\n\nPlease make sure that tasks marked as "Done" have 0 Pending Hours.')

        break;

    }

  

  }

//////////////////////////////////////////////////////////////////////////////////////////////////////

  

  if (((currentDay == 1 && isMonday == true) || (currentDay == 2 && isTuesday == true) || (currentDay == 3 && isWednesday == true) || (currentDay == 4 && isThursday == true) || (currentDay == 5 && isFriday == true))

   && ( fpfrequency == 'Weekly' || fpfrequency == 'Specific Days')){

    checkBox = true; //override checkbox to true.

  }else if (fpfrequency == 'Monthly' || fpfrequency == 'Fortnightly'){

    var numdays = 13.7;

    if (fpfrequency == 'Monthly'){

      numdays = 27.7;

    }

    var newlastdate = new Date(lastsend.getTime() + 24 * 60 * 60 * 1000 * numdays);

    var today = new Date();

    var snewdate = Utilities.formatDate(newlastdate,newlastdate.getTimezoneOffset,"dd-MMM-yyyy");

    var stoday = Utilities.formatDate(today,today.getTimezoneOffset,"dd-MMM-yyyy");

    if(snewdate >= stoday){

      ss.getRange(6,7).setValue(today);

      checkBox = true;

    }else{

      checkBox = false;

    }

  }else if (fpfrequency == 'Daily'){

    //use the normal checkbox.

  }else{

    checkBox = false; //override checkbox to false.

  }

  

  if (!checkBox){

    focalPointEmail=pmEmail;

  }

  

  if(response==ui.Button.YES && validatedFields == true && validatedDates == true)

  {    

    const ts = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const headers = ts.getRange("A18:H18").getValues();

    const taskDescription = headers[0][0]

    const status = headers[0][1]

    const priority = headers[0][2]

    const orDueDate = headers[0][3]

    const updateDate = headers[0][4]

    const reDueDate = headers[0][5]

    const prStatus = headers[0][6]

    const notes = headers[0][7]

  

    var lr = ss.getLastRow();

    console.log(lr)

    var flag = false

    for(var counter=0; counter<lr; counter = counter+1){

      var blankCheck = ts.getRange(lr-counter,1).getValue()

      if(blankCheck !='' && !flag){

        lr = lr-counter;  

        flag=true

      }

    }

    const tableRangeValues = ts.getRange(19,1,(lr+1)-19,8).getDisplayValues();

    const tableRangeHr = ts.getRange(19,9,(lr+1)-19,1).getDisplayValues();

    console.log(tableRangeHr)

    const htmlTemplate = HtmlService.createTemplateFromFile("EmailTable");

    var signature = Gmail.Users.Settings.SendAs.list("me").sendAs.filter(function(account){if(account.isDefault){return true}})[0].signature;

  

    // Exit script if there is only one task

    try{

      for(var ii=0; ii<tableRangeHr; ii++){

        if(tableRangeHr[ii].trim()==''){blankEstimatedHours++}            

      }

    } catch {

      ui.alert("The Planning sheet only has 1 task. Please split the task.")

      return;

    }

    htmlTemplate.salute = salute

    htmlTemplate.taskDescription = taskDescription;

    htmlTemplate.status = status;

    htmlTemplate.priority = priority;

    htmlTemplate.orDueDate = orDueDate;

    htmlTemplate.updateDate = updateDate;

    htmlTemplate.reDueDate = reDueDate;

    htmlTemplate.prStatus = prStatus;

    htmlTemplate.notes = notes;

    htmlTemplate.tableRangeValues = tableRangeValues;

  

    const htmlBody = htmlTemplate.evaluate().getContent() + '</br> '+signature;

    if(blankEstimatedHours>1 || lr-19 < 1){

      ui.alert('Please check your tasks and estimated hours data.')

    }

    else{

      MailApp.sendEmail(focalPointEmail,emailSubject,"",{

        htmlBody: htmlBody,

        cc:  pmEmail,

        bcc: bpEmail

      });

      ui.alert("Email sent successfully.")

    }   

  }

}
```

EmailTable.html
```
<!DOCTYPE html>

<html>

  <head>

    <base target="_top">

  </head>

  <body>

    <div>

      <div>

        <p><?=salute?></p>   

        <p>I'm sending you the updated report of what I'm currently working on.</p>   

        <p style="font-weight:bold;margin-bottom:25px">Please let me know about any changes to the tasks or their priorities to review this plan if needed.</p>           

        <div></div>

        <table style="border-collapse: collapse;border: 1px solid gray;">

          <thead style="background-color:#AFCEEE; color:#0b213c;">

            <tr style="border: 1px solid gray;">

              <th style="border: 1px solid gray;padding:5px; "><?= taskDescription ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= status ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= priority ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= orDueDate ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= updateDate ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= reDueDate ?></th>

              <th style="border: 1px solid gray;padding:5px;text-align:center;"><?= prStatus ?></th>

              <th style="border: 1px solid gray;padding:5px;"><?= notes ?></th>

            </tr>

          </thead>

          <tbody>

               <? tableRangeValues.forEach(r=> { ?>

                <tr style="border: 1px solid gray;">

                  <td style="background-color:#d3d3d3;width:250px; font-weight:bold;padding:5px;border: 1px solid gray;"><?= r[0] ?> </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[1] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[2] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[3] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[4] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[5] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;text-align:center;"><?= r[6] ?>  </td>

                  <td style="border: 1px solid gray;padding:5px;width:250px;"><?= r[7] ?> </td>

                </tr>

                <? }) ?>                                                     

          </tbody>

        </table>

        <p style="margin-top:25px">If there is any feedback you could share, that would be great as well.</p>   

        <p>Regards,</p>  

      </div>

    </div>

  </body>

</html>
```