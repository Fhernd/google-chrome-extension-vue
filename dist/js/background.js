chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        toggleSitesActive: false,
        toggleSitesList: 'example.com',
    }, () => {});
});

let toggleSitesActive = false;
let toggleSitesList = 'example.com';

chrome.storage.sync.get(['toggleSitesActive', 'toggleSitesList'], (result) => {
    toggleSitesActive = result.toggleSitesActive;
    toggleSitesList = result.toggleSitesList;
});
