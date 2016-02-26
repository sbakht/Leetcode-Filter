chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.action == "hidePremium") {
        $(".fa-lock").parent().parent().hide();
    }
    if(request.action == "showPremium") {
        $(".fa-lock").parent().parent().show();
    }
});

chrome.runtime.sendMessage({action:"show"});

