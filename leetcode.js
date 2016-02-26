chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.action == "hidePremium") {
        $(".fa-lock").parent().parent().hide();
    }
    if(request.action == "showPremium") {
        $(".fa-lock").parent().parent().show();
    }
});

chrome.runtime.sendMessage({action:"show"});
$("#filterchosen").after('<button id="hidePremium">Hide Premium</button> <button id="showPremium" style="display:none">Show Premium</button>');

    $(".blog-main #hidePremium").on("click", function() {
        $(".fa-lock").parent().parent().hide();
        $("#hidePremium").hide();
        $("#showPremium").show();
    });

    $(".blog-main #showPremium").on("click", function() {
        $(".fa-lock").parent().parent().show();
        $("#showPremium").hide();
        $("#hidePremium").show();
    });
