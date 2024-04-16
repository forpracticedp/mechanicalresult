String.prototype.trim = function () {
  return this.replace(/^\s*/, "").replace(/\s*$/, "");
};
function Valsearch() {
  var CodeNumberTextBox = document.getElementById("CodeNumberTextBox");
  var txtenroll = document.getElementById("txtenroll");
  var txtSheetNo = document.getElementById("txtSheetNo");
  var ddlbatch = document.getElementById("ddlbatch");
  var valenroll = txtenroll.value.trim();
  var valSheetNo = txtSheetNo.value.trim();
  var captcha = CodeNumberTextBox.value.trim();
  var valbatch = ddlbatch.options[ddlbatch.selectedIndex].value;
  if (valbatch == "") {
    alert("Please choose batch type.");
    valbatch.focus();
    return false;
  } else if (valenroll == "" && valSheetNo == "") {
    alert("Please enter any one search term.");
    txtenroll.focus();
    return false;
  } else if (captcha == "") {
    alert("Please enter security code.");
    CodeNumberTextBox.focus();
    return false;
  }
}
function alphaNumOnly(evt) {
  var charCode = evt.which ? evt.which : window.event.keyCode;
  if (charCode <= 13) {
    return true;
  } else {
    var keyChar = String.fromCharCode(charCode);
    var re = /[a-zA-Z0-9]/;
    return re.test(keyChar);
  }
}
function numOnly(evt) {
  var charCode = evt.which ? evt.which : window.event.keyCode;
  if (charCode <= 13) {
    return true;
  } else {
    var keyChar = String.fromCharCode(charCode);
    var re = /[0-9]/;
    return re.test(keyChar);
  }
}
function hideBodyloader() {
  document.getElementById("bodyloader").style.display = "none";
}
