$(function () {
    $("#hidePremium").on("click", function() {
        $("#hidePremium").hide();
        $("#showPremium").show();
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action:"hidePremium"});
        });
    });
    $("#showPremium").on("click", function() {
        $("#showPremium").hide();
        $("#hidePremium").show();
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action:"showPremium"});
        });
    });
});
