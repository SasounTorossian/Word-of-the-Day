(()=>{"use strict";const e=document.querySelector(".description-container"),t=document.querySelector(".description-container"),n="qexbnl8z23x2ptwjlymloyj6fd4zkcy7ddb6a2yjbrdiyttwk";let o=`http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&api_key=${n}`;const a=async()=>{try{let t=await(async()=>{const e=await fetch(o),t=await e.json();if(200!=e.status)throw e.status;return t})(),a=await(async e=>{const t=await fetch((o=e.word,`http://api.wordnik.com:80/v4/word.json/${o}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${n}`));var o;const a=await t.json();if(200!=t.status)throw t.status;return a})(t);((t,n)=>{const o=document.createElement("h2");o.classList.add("word-container"),o.textContent=t,e.appendChild(o);const a=document.createElement("hr");e.appendChild(a),n.forEach((t=>{if(null==t.text)return;const n=new RegExp("<.*?>","g");let o=t.text.replace(n,"");null==t.partOfSpeech&&(t.partOfSpeech="unknown");const a=document.createElement("div");a.classList.add("definition-container");const i=document.createElement("div");i.classList.add("part-of-speech"),i.textContent=t.partOfSpeech;const r=document.createElement("div");r.classList.add("definition"),r.textContent=o,a.appendChild(i),a.appendChild(r),a.appendChild(document.createElement("br")),e.appendChild(a)}))})((e=>e.word)(t),(e=>{let t=[];for(let n=0;n<3&&n<e.length;n++)t.push(e[n]);return t})(a))}catch(e){(e=>{const n=document.createElement("div");n.textContent=`Error code ${e}: ${{100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}[e]}`,n.classList.add("error-container"),t.appendChild(n)})(e)}},i=document.querySelector(".description-container");document.querySelector(".header-icon").addEventListener("click",(()=>{i.innerHTML="",a()}))})();
//# sourceMappingURL=main.js.map