function showAlert() {
    alert('one the of the dialog box');
    document.getElementsByClassName('alert-popup')[0].innerHTML = 'Alert is working';
}

function showConfrm() {
    var cnfrm = confirm('Do you want you contine');
    if (cnfrm) {
        document.getElementsByClassName('confrm-popup')[0].innerHTML = 'Yes Confirmed...';
        return true;
    }
    else {
        document.getElementsByClassName('confrm-popup')[0].innerHTML = 'Not Confirmed...';
        return false;
    }
}

function showPrompt() {
    var promptVal = prompt('Enter your name');
    document.getElementsByClassName('prompt-popup')[0].innerHTML = 'Your name is: ' + promptVal;
}