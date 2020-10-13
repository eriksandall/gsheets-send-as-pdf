# GSuite Send Sheet as PDF

This script adds a menu item and action for emailing the current sheet as a PDF attachment. The script will prompt the user for the recipient's email address. The `from`, `subject`, and `body` email parameters are defined in the code.

## Try it

1. In an existing spreadsheet, click **Tools** > **Script Editor**. This brings
   you to the _Apps Script editor._
1. Copy the contents of `src/Code.js` and paste into the script editor.
1. Edit the `from`, `subject`, and `body` parameters as appropriate for your needs.
1. Save the script.
1. Reload your spreadsheet. When the page refreshes, you will see the new item in the menu.
1. Click **Custom Tools** > **Send this sheet as PDF**
1. When prompted, click **Review permissions** and **Allow**
   so the script can send email on your behalf. You will only need to do this once.
   
   > If you get a warning that **This app isn't verified** continue
   > with the verification process by clicking **Advanced** and
   > then scroll down and click the grey text at the bottom that
   > says **Go to (Copy this) Script to send content**
1. After granting permission, repeat **Step 6**.
1. Enter the recipient's email address, then click **OK**.
