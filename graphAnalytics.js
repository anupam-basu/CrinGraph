let logAnalytics = true;

window.dataLayer = window.dataLayer || [];

// For events related to specific phones, e.g. when a phone is displayed
function pushPhoneTag(eventName, p, trigger) {
    let eventTrigger = trigger ? trigger : "click",
        phoneBrand = p.dispBrand ? p.dispBrand : "Target",
        phoneModel = p.dispName,
        value = 1;
    
    window.dataLayer.push({
        "event" : eventName,
        "trigger" : eventTrigger,
        "site": analyticsSite,
        "phoneBrand": phoneBrand,
        "phoneModel": phoneModel,
        "phoneName" : phoneBrand + ' ' + phoneModel,
        "value": value
    });
    
    if (logAnalytics) { console.log("Event:      "+ eventName +"\nTrigger:    "+ eventTrigger +"\nSite:       "+ analyticsSite +"\nPhone:      "+ phoneBrand +" "+ phoneModel); }
}

// For events not related to a specific phone, e.g. user clicked screenshot button
function pushEventTag(eventName, targetWindow, trigger) {
    let eventTrigger = trigger ? trigger : "click",
        url = targetWindow.location.href,
        par = "?share=",
        value = 1,
        activePhones = url.includes(par) ? decodeURI(url.replace(/_/g," ").split(par).pop().replace(/,/g, ", ")) : "null";
    
    window.dataLayer.push({
        "event" : eventName,
        "trigger" : eventTrigger,
        "site": analyticsSite,
        "activePhones": activePhones,
        "value": value
    });
    
    if (logAnalytics) { console.log("Event:      "+ eventName +"\nTrigger:    "+ eventTrigger +"\nSite name:  "+ analyticsSite +"\nActive:     "+activePhones); }
}

if (logAnalytics) { console.log("... Analytics initialized ..."); }