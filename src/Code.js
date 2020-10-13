/**
 * Adds a menu item to the UI for the action.
 */
function onOpen(e) {
  try {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Tools')
      .addItem('Send this sheet as PDF', 'sendSheetAsPDF')
      .addToUi();
  }
  catch (err) {
    Logger.log(err);
  }
}

/**
 * Preps email params, gets the sheet as a PDF blob, and emails it to
 * the address provided by the user in a prompt.
 */
function sendSheetAsPDF() {
  try {
    // Prep the email parameters:
    var from = 'MY_NAME';
    var replyto = 'MY_EMAIL_ADDRESS';
    var subject = 'MY_SUBJECT_LINE';
    var body = 'MY_EMAIL_BODY';

    // Get the sheet as a PDF blob:
    var ss = SpreadsheetApp.getActive();
    var sheet = SpreadsheetApp.getActiveSheet();
    var url = "https://docs.google.com/feeds/download/spreadsheets/Export?key=" + ss.getId() + "&gid=" + sheet.getSheetId() + "&exportFormat=pdf";
    var params = {
      method: "get",
      headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
      muteHttpExceptions: true
    };
    var blob = UrlFetchApp.fetch(url, params).getBlob();
    blob.setName(sheet.getSheetName() + ".pdf");

    // Prompt for the recipent's email address:
    var ui = SpreadsheetApp.getUi();
    var response = ui.prompt('Recipient email address:');
    // Process the user's input:
    if (response.getSelectedButton() == ui.Button.OK) {
      // User clicked "OK".
      var email = response.getResponseText();
    } else {
      // User clicked 'X' to close the prompt.
      // Stop execution of the function:
      return;
    }

    // Send the email
    MailApp.sendEmail({
      to: email,
      name: from,
      replyTo: replyto,
      subject: subject,
      body: body,
      attachments: [blob],
    });

  } catch (err) {
    Logger.log(err);
  }
}
