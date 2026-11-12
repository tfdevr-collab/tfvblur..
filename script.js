const artworks = [
 {id:"ARTWORK_001",tag:"PUBLIC NOTICE",title:"WE ONLY SEE THE LIES WE'RE READY TO BELIEVE",src:"assets/artwork-01.jpg"},
 {id:"ARTWORK_002",tag:"AFTER HOURS",title:"SILENCE IS LOUDER THAN LIES",src:"assets/artwork-02.jpg"},
 {id:"ARTWORK_003",tag:"PASSING MOMENT",title:"WE NEVER NOTICE THE LAST TIME UNTIL IT'S TOO LATE",src:"assets/artwork-03.jpg"},
 {id:"ARTWORK_004",tag:"NO EXIT",title:"YOUR COMFORT ZONE IS A PRISON WITHOUT BARS",src:"assets/artwork-04.jpg"},
 {id:"ARTWORK_005",tag:"LOW TIDE",title:"IF THEY CAME BACK TONIGHT, WOULD YOUR HEART FORGET EVERYTHING YOUR MIND REMEMBERS?",src:"assets/artwork-05.jpg"},
 {id:"ARTWORK_006",tag:"TEMPORARY",title:"EVERYONE IS LOOKING FOR A HOTEL — ONLY SOME WANT A HOME",src:"assets/artwork-06.jpg"},
 {id:"ARTWORK_007",tag:"THE LONG RUN",title:"LIES RUN SPRINTS. TRUTH RUNS MARATHONS. LIES ALWAYS GET A HEADSTART, BUT THE TRUTH NEVER STOPS RUNNING.",src:"assets/artwork-07.jpg"}
];
const $ = s => document.querySelector(s);
const lightbox = $("#lightbox"), terminal = $("#terminal");
let current = 0;
function showArt(i){current=(i+artworks.length)%artworks.length;const a=artworks[current];$("#lightboxImg").src=a.src;$("#lightboxImg").alt=a.title;$("#lightboxId").textContent=a.id;$("#lightboxTag").textContent=a.tag;$("#lightboxTitle").textContent=a.title;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.classList.add("locked")}
function closeArt(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("locked")}
document.querySelectorAll(".art-card").forEach(b=>b.addEventListener("click",()=>showArt(Number(b.dataset.art))));
$(".lightbox-close").addEventListener("click",closeArt);$(".lightbox-prev").addEventListener("click",()=>showArt(current-1));$(".lightbox-next").addEventListener("click",()=>showArt(current+1));
function openTerminal(){terminal.classList.add("open");terminal.setAttribute("aria-hidden","false");document.body.classList.add("locked");setTimeout(()=>$("#terminalInput").focus(),80)}
function closeTerminal(){terminal.classList.remove("open");terminal.setAttribute("aria-hidden","true");document.body.classList.remove("locked")}
document.querySelectorAll(".terminal-trigger,.tiny-terminal").forEach(b=>b.addEventListener("click",openTerminal));$(".terminal-close").addEventListener("click",closeTerminal);
const output=$("#terminalOutput"), input=$("#terminalInput");
const lines={
 help:["AVAILABLE COMMANDS:","help — list commands","about — what is this?","archive — inspect the archive","signal — receive a signal","whoami — identify yourself","clear — clear the screen"],
 about:["THIS IS NOT A BIOGRAPHY.","THE WORK IS THE ONLY INTRODUCTION."],
 archive:["7 FRAGMENTS CURRENTLY INDEXED.","THE NEXT ONE HAS NOT BEEN DOCUMENTED YET."],
 signal:["IF YOU FOUND THIS, YOU WERE LOOKING.","KEEP LOOKING. QUESTION WHAT YOU FIND."],
 whoami:["VISITOR: UNKNOWN","LOCATION: NOT RECORDED","IDENTITY: YOURS TO KEEP."]
};
function printLine(t,cls=""){const p=document.createElement("p");p.textContent=t;if(cls)p.className=cls;output.appendChild(p);output.scrollTop=output.scrollHeight}
$("#terminalForm").addEventListener("submit",e=>{e.preventDefault();const cmd=input.value.trim().toLowerCase();if(!cmd)return;printLine("visitor@unknown:~$ "+cmd);input.value="";
 if(cmd==="clear"){output.innerHTML="";return}
 if(lines[cmd])lines[cmd].forEach((t,i)=>printLine(t,i===0?"terminal-highlight":""));
 else if(cmd==="sudo reveal"){printLine("NICE TRY.");printLine("SOME THINGS STAY UNIDENTIFIED.")}
 else if(cmd==="coffee"){printLine("BREWING...");printLine("ERROR: NO COFFEE. ONLY QUESTIONS.")}
 else if(cmd==="42"){printLine("THE ANSWER IS NOT THE SAME AS UNDERSTANDING.")}
 else printLine("COMMAND NOT RECOGNIZED. TYPE 'help'.");
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeArt();closeTerminal()}if(lightbox.classList.contains("open")){if(e.key==="ArrowRight")showArt(current+1);if(e.key==="ArrowLeft")showArt(current-1)}});
const menu=$(".menu-toggle"), nav=$(".nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.querySelector("span").textContent=open?"×":"＋"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.querySelector("span").textContent="＋"}));
// A tiny hidden interaction: type BLUR anywhere outside an input to reveal the terminal.
let sequence="";document.addEventListener("keydown",e=>{if(e.target.tagName==="INPUT")return;sequence=(sequence+e.key.toLowerCase()).slice(-4);if(sequence==="blur")openTerminal()});
