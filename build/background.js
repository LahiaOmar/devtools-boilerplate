(function(s){typeof define=="function"&&define.amd?define(s):s()})(function(){let a="AutoRefresher-panel";var r=(t=>(t.init="init",t.saveSettings="saveSettings",t))(r||{});chrome.runtime.onMessage.addListener(E),chrome.runtime.onConnect.addListener(d);let n={};function E(t,e){const i=e.tab&&e.tab.id!==void 0&&n[e.tab.id];return i&&i.postMessage(t),!0}function d(t){t.onMessage.addListener(i),t.onDisconnect.addListener(c);let e;function i(o){if(o.source===a){if(o.type===r.init){e&&n[e]&&c(),e=o.tabId,n[e]=t,chrome.tabs.sendMessage(e,o);return}e&&n[e]&&chrome.tabs.sendMessage(e,o)}}function c(){delete n[e]}}chrome.tabs.onUpdated.addListener((t,e,i)=>{e.status==="complete"&&chrome.tabs.sendMessage(t,{source:a,type:r.init})})});
