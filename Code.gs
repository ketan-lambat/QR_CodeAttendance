function doGet(e){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1mcD33p3AlnSC6qRvONPLrtxBzwCc6aBLf-adkVrAuh4/edit?usp=sharing");
  ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1mcD33p3AlnSC6qRvONPLrtxBzwCc6aBLf-adkVrAuh4/edit?usp=sharing");
  var sheet = ss.getSheetByName("Sheet1");
  return insert(e, sheet);
}

function doPost(e){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1mcD33p3AlnSC6qRvONPLrtxBzwCc6aBLf-adkVrAuh4/edit?usp=sharing");
  var sheet = ss.getSheetByName("Sheet1");
  return insert(e, sheet);
}

function insert(e, sheet) {
  
  var scannedData = e.parameter.sdata;
  var rx1 = /Id:(.*)?\s/;
  var rx2 = /Name:(.*)\s/;
  
  var id = scannedData.match(rx1);
  var name = scannedData.match(rx2);
   
  id = id[1].toString();
  name = name[1].toString();
 
  var d = new Date();
  var ctime = d.toLocaleString();

  sheet.appendRow([scannedData, id, name, ctime]);
  
  return ContentService
  .createTextOutput(scannedData)
  .setMimeType(ContentService.MimeType.JAVASCRIPT);  
}
