(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2713:(e,t,a)=>{Promise.resolve().then(a.bind(a,2768))},2768:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(5155),r=a(2115);let s=e=>{let{skill:t,selectedSkills:a,onSelect:r}=e,s=a.includes(t);return(0,n.jsx)("span",{onClick:()=>r(t),className:"cursor-pointer inline-block m-1 px-3 py-1 rounded-full transition-colors duration-300\n        ".concat(s?"bg-[var(--brand-tertiary)] text-white":"bg-gray-300 text-gray-800 hover:bg-gray-500"),children:t})};var i=a(6766);let o=e=>{let{title:t,subtitle:a,link:r,image:o,description:l,skills:c,selectedSkills:d,onSelectSkill:m,startDate:h,endDate:p,type:x}=e,u=d.length>0&&!c.some(e=>d.includes(e)),g=e=>e?"string"==typeof e?"Present"===e&&"Experience"===x?"Present":"In Progress":e.toLocaleDateString(void 0,{month:"short",year:"numeric"}):"";return(0,n.jsxs)("div",{className:"bg-[var(--brand-accent)] rounded-lg shadow-md text-[var(--brand-text)] p-6 pr-20 mb-6 relative transition-opacity duration-300 ".concat(u?"opacity-30":"opacity-100"),children:[(h||p)&&(0,n.jsx)("div",{className:"absolute top-4 right-4 text-sm text-[var(--brand-text)] whitespace-nowrap",children:h?"".concat(g(h)," – ").concat(g(p)):"".concat(g(p))}),(0,n.jsxs)("div",{className:"flex items-center",children:[o&&(0,n.jsx)(i.default,{src:o,alt:t,width:128,height:128,className:"w-32 h-32 mr-4 object-contain"}),(0,n.jsx)("div",{children:r?(0,n.jsxs)("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"text-xl font-bold text-[var(--brand-text)] hover:underline flex items-center",children:[t,(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline ml-1 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}):(0,n.jsx)("span",{className:"text-xl font-bold",children:t})})]}),a&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"text-lg italic",children:a})}),(0,n.jsx)("p",{className:"mt-4 text-[var(--brand-text)]",children:l}),(0,n.jsx)("div",{className:"mt-4 flex flex-wrap",children:c.map(e=>(0,n.jsx)(s,{skill:e,selectedSkills:d,onSelect:m},e))})]})},l=JSON.parse('[{"id":1,"title":"geoChat","link":"https://github.com/ShaneBerhoff/geoChat","image":"/geoChatSS.jpg","description":"Built a full-stack, anonymous live chat app using React, NodeJS, MongoDB, Docker, AWS, and Socket.io. Achieved 99 unique users, 1000+ messages, and 600+ sessions using OSM geofencing data (87 zones).","skills":["React","NodeJS","MongoDB","Docker","AWS","Socket.io"],"type":"Project","startDate":null,"endDate":"2023-06-01"},{"id":2,"title":"Solo","link":"https://github.com/TheMaxRob/Solo","image":"https://via.placeholder.com/150","description":"Implemented a globe-based navigation system with SwiftUI and MapKit to display events. Utilized Firebase for real-time data syncing, authentication, and caching.","skills":["SwiftUI","MapKit","Firebase"],"type":"Project","startDate":null,"endDate":"Present"},{"id":3,"title":"Worldline","link":"https://github.com/emory-worldline/worldline","image":"/WorldlinePhoto.jpg","description":"Developed a data visualizer for photo library metadata using React Native, Expo, and Mapbox. Created custom animations and managed dynamic data clusters.","skills":["React Native","Expo","Mapbox"],"type":"Project","startDate":null,"endDate":"2024-12-01"},{"id":4,"title":"Venmo Receipt Scanner","link":"https://github.com/TheMaxRob/Venmo-Receipt-Scanner","image":"https://via.placeholder.com/150","description":"A full-stack app that parses receipt items using React Native, Python/Flask, Pytesseract, and OpenCV. Integrates with the Venmo API for automated transactions.","skills":["React Native","Python","Flask","Pytesseract","OpenCV"],"type":"Project","startDate":null,"endDate":"2024-03-01"},{"id":5,"title":"Raspberry Pi Friend Recognizer","link":"https://github.com/TheMaxRob/RpiFaceDetector","image":"https://via.placeholder.com/150","description":"An in-progress facial recognition system using C++ and OpenCV on a Raspberry Pi. Designed to differentiate friends in real time with a Pi Camera.","skills":["C++","OpenCV","Raspberry Pi"],"type":"Project","startDate":null,"endDate":"Present"},{"id":6,"title":"nCent Holdings","subtitle":"Full-stack Software Engineer Intern","description":"Serving as a Full-Stack Engineer Intern, developing the nCent platform with React and Node.js. Built the database system to enable users to monetize their personal data using Agile workflows and Jira.","skills":["React","Node.js","Agile","Jira"],"type":"Experience","startDate":"2024-10-01","endDate":"Present"},{"id":7,"title":"Emory Computer Research Lab","subtitle":"Undergraduate Researcher | Atlanta, GA","description":"Conducting research on creating programmable IoT ecosystems with simultaneous RFID Tag Readers.","skills":["IoT","RFID","Research"],"type":"Experience","startDate":"2024-09-01","endDate":"Present"},{"id":8,"title":"Guardian Owl Digital","subtitle":"Development Intern | Louisville, KY","description":"Worked as a Development Intern, managing blog content, optimizing SEO, and creating a GPT model for advertising and website audits while collaborating with clients on marketing strategies.","skills":["SEO","GPT","Marketing"],"type":"Experience","startDate":"2024-06-01","endDate":"2024-08-01"},{"id":9,"title":"Emory Impact Investing Group","subtitle":"Senior Analyst","link":"https://www.emoryimpactinvesting.com/","description":"Managed a $250,000 investment fund to provide microloans and pro-bono consulting to entrepreneurs in Atlanta.","skills":["Consulting","Project Management"],"type":"Involvement","startDate":"2023-01-01","endDate":"2024-09-01"},{"id":10,"title":"Emory Rock Climbing Team","subtitle":"Member","skills":[],"type":"Involvement","startDate":"2023-08-01","endDate":"2024-12-01"},{"id":11,"title":"Kappa Alpha Epsilon","subtitle":"Philanthropy Chair","skills":[],"type":"Involvement","startDate":"2024-10-01","endDate":"2025-06-01"}]'),c=()=>{let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)("about"),i=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},c=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)(null),h=(0,r.useRef)(null),p=l.map(e=>({...e,type:e.type,startDate:e.startDate?new Date(e.startDate):null,endDate:"Present"===e.endDate?"Present":e.endDate?new Date(e.endDate):new Date}));return(0,r.useEffect)(()=>{let e=[{id:"about",ref:c},{id:"experience",ref:d},{id:"projects",ref:m},{id:"involvement",ref:h}],t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&s(e.target.id)})},{root:null,threshold:.1});return e.forEach(e=>{e.ref.current&&t.observe(e.ref.current)}),()=>{e.forEach(e=>{e.ref.current&&t.unobserve(e.ref.current)})}},[]),(0,n.jsxs)("div",{className:"min-h-screen bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]",children:[(0,n.jsx)("nav",{className:"fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] backdrop-blur-sm shadow-md z-20",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4 py-3 flex justify-center space-x-4",children:[(0,n.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("about"))||void 0===e||e.scrollIntoView({behavior:"smooth"}),s("about")},className:"px-4 py-2 rounded-full transition-all ".concat("about"===a?"bg-[var(--brand-accent)] text-[var(--brand-text)]":"text-gray-500 hover:bg-gray-200"),children:"About"}),(0,n.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("experience"))||void 0===e||e.scrollIntoView({behavior:"smooth"}),s("experience")},className:"px-4 py-2 rounded-full transition-all ".concat("experience"===a?"bg-[var(--brand-accent)] text-[var(--brand-text)]":"text-gray-500 hover:bg-gray-200"),children:"Experience"}),(0,n.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("projects"))||void 0===e||e.scrollIntoView({behavior:"smooth"}),s("projects")},className:"px-4 py-2 rounded-full transition-all ".concat("projects"===a?"bg-[var(--brand-accent)] text-[var(--brand-text)]":"text-gray-500 hover:bg-gray-200"),children:"Projects"}),(0,n.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("involvement"))||void 0===e||e.scrollIntoView({behavior:"smooth"}),s("involvement")},className:"px-4 py-2 rounded-full transition-all ".concat("involvement"===a?"bg-[var(--brand-accent)] text-[var(--brand-text)]":"text-gray-500 hover:bg-gray-200"),children:"Involvement"})]})}),(0,n.jsxs)("div",{className:"fixed top-0 left-0 w-1/2 h-screen flex flex-col gap-2 justify-center items-center border-r",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-[var(--brand-text)]",children:"Hey! I’m Max Roberts."}),(0,n.jsx)("h3",{className:"text-lg font-semibold mb-4 text-[var(--brand-text)]",children:"Welcome to my website :)"}),(0,n.jsxs)("div",{className:"flex space-x-18",children:[(0,n.jsx)("a",{href:"mailto:maxroberts2003@gmail.com",className:"hover:opacity-80",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 inline ml-1 text-[var(--brand-accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"})})}),(0,n.jsx)("a",{href:"/MaxRobertsResume.pdf",download:!0,className:"hover:opacity-80",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 inline ml-1 text-[var(--brand-accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16h8M8 12h8M8 8h4m2-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"})})}),(0,n.jsx)("a",{href:"https://github.com/TheMaxRob",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-[var(--brand-accent)]",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.012-1.243-.018-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.895-.015 3.286 0 .323.216.698.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"})})}),(0,n.jsx)("a",{href:"https://linkedin.com/in/maxwroberts",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-[var(--brand-accent)]",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M20.447 20.452H17.36v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H10.27V9h3.114v1.561h.045c.434-.82 1.494-1.683 3.074-1.683 3.289 0 3.895 2.163 3.895 4.977v6.597zM5.337 7.433a1.803 1.803 0 01-1.806-1.806 1.803 1.803 0 011.806-1.806 1.803 1.803 0 011.806 1.806 1.803 1.803 0 01-1.806 1.806zm1.783 13.019H3.554V9h3.566v11.452z"})})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>{t([])},className:"mt-8 px-16 py-2 rounded-full bg-[var(--brand-accent)] text-[var(--brand-text)] hover:opacity-90 transition delay-75 hover: cursor-pointer",children:"Reset Skill Filters"})})]}),(0,n.jsxs)("div",{className:"ml-[50%] w-1/2 pt-24 p-6 overflow-y-auto h-screen scroll-smooth",children:[(0,n.jsxs)("section",{id:"about",ref:c,className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-2 text-[var(--brand-text)]",children:"About Me"}),(0,n.jsx)("p",{className:"text-[var(--brand-text)]",children:'I had no interest in computer science when I was young; The only thing I wanted to do was play video games. Fortunately, a lot of people who knew nothing about computer science kept telling me "you love computer games, you should study computer science!" And so I did; I took an AP Programming course in high school... and I did terribly on the exam.'}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"text-[var(--brand-text)]",children:"I’ve come a long way since that AP exam, and I’ve fallen in love with software along that path. Forming ideas, designing them, and getting to build things that impact people and make their lives better is one of the most exciting things I can imagine doing with my life. I truly believe you can only become the best at what you do if you genuinely love it, and so I try to build things I love. Whether full-stack social platforms or data visualizers, I’ve started every one of my projects with no idea what I was doing. If you can perservere through something insurmountable to you, then you have become insurmountable to who you were before you began."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"text-[var(--brand-text)]",children:"In my free time you can usually find me lifting weights, rock climbing, or learning languages (I speak Spanish and German). I also love to travel, and am hoping to crack 30 visited countries before I graduate from Emory."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"text-[var(--brand-text)]"})]}),(0,n.jsxs)("section",{id:"experience",ref:d,className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4 text-[var(--brand-text)]",children:"Experience"}),p.filter(e=>"Experience"===e.type).map(t=>(0,n.jsx)(o,{...t,selectedSkills:e,onSelectSkill:i},t.id))]}),(0,n.jsxs)("section",{id:"projects",ref:m,className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4 text-[var(--brand-text)]",children:"Projects"}),p.filter(e=>"Project"===e.type).map(t=>(0,n.jsx)(o,{...t,selectedSkills:e,onSelectSkill:i},t.id))]}),(0,n.jsxs)("section",{id:"involvement",ref:h,className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4 text-[var(--brand-text)]",children:"Involvement"}),p.filter(e=>"Involvement"===e.type).map(t=>(0,n.jsx)(o,{...t,selectedSkills:e,onSelectSkill:i},t.id))]})]})]})};function d(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[766,441,684,358],()=>t(2713)),_N_E=e.O()}]);