const origin='https://kcolwell1.github.io';
if(location.origin===origin&&location.pathname.startsWith('/consumer-profile/')){
const send=(type,extra={})=>window.postMessage({channel:'orbit-extension',type,...extra},origin);
window.addEventListener('message',async e=>{if(e.source!==window||e.origin!==origin||e.data?.channel!=='orbit-dashboard')return;try{if(e.data.type==='ping')send('ready',{id:chrome.runtime.id});if(e.data.type==='connect')send('error',{message:'Open the Orbit extension popup to approve history access and start analysis.'});if(e.data.type==='disconnect'){await chrome.runtime.sendMessage({type:'disconnect'});send('error',{message:'History permission revoked.'})}}catch{send('error',{message:'Extension unavailable. Reload the dashboard.'})}});
chrome.runtime.onMessage.addListener(m=>{if(m.type==='history')send('history',{records:m.records});if(m.type==='error')send('error',{message:m.message})});send('ready',{id:chrome.runtime.id});}
