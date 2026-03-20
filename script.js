const tools = [

{
name:"AI Chat UI",
description:"ChatGPT-style conversational AI interface simulation.",
icon:"💬",
live:"./tools/ai-chat-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-chat-ui"
},

{
name:"AI Text Summarizer UI",
description:"Interface for summarizing long text using AI.",
icon:"📝",
live:"./tools/ai-text-summarizer-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-text-summarizer-ui"
},

{
name:"AI Image Generator UI",
description:"Prompt-based interface for generating images with AI.",
icon:"🖼️",
live:"./tools/ai-image-generator-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-image-generator-ui"
},

{
name:"AI Resume Analyzer UI",
description:"Upload and analyze resumes with AI insights interface.",
icon:"📄",
live:"./tools/ai-resume-analyzer-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-resume-analyzer-ui"
},

{
name:"AI Code Generator UI",
description:"Generate programming code from natural language prompts.",
icon:"💻",
live:"./tools/ai-code-generator-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-code-generator-ui"
},

{
name:"AI Grammar Checker UI",
description:"Tool interface for correcting grammar and writing mistakes.",
icon:"✍️",
live:"./tools/ai-grammar-checker-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-grammar-checker-ui"
},

{
name:"AI Study Planner UI",
description:"AI-powered planner to organize study schedules.",
icon:"📚",
live:"./tools/ai-study-planner-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-study-planner-ui"
},

{
name:"AI Email Writer UI",
description:"Generate professional emails using AI prompts.",
icon:"📧",
live:"./tools/ai-email-writer-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-email-writer-ui"
},

{
name:"AI Logo Generator UI",
description:"Prompt-based AI logo creation interface.",
icon:"🎨",
live:"./tools/ai-logo-generator-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-logo-generator-ui"
},

{
name:"AI Idea Generator UI",
description:"Generate startup or project ideas using AI prompts.",
icon:"💡",
live:"./tools/ai-idea-generator-ui/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-idea-generator-ui"
},

{
name:"AI Meeting Notes Generator",
description:"Automatically convert meeting discussions into notes.",
icon:"📋",
live:"./tools/ai-meeting-notes-generator/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-meeting-notes-generator"
},

{
name:"AI Interview Question Generator",
description:"Generate interview questions for different job roles.",
icon:"🎯",
live:"./tools/ai-interview-question-generator/index.html",
code:"https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-interview-question-generator"
}

];

const grid=document.getElementById("toolsGrid");
const count=document.getElementById("toolCount");

tools.forEach(tool=>{

const card=document.createElement("div");

card.className="tool-card";

card.innerHTML=`

<div class="tool-icon">${tool.icon}</div>

<h3>${tool.name}</h3>

<p>${tool.description}</p>

<div class="buttons">

<a class="btn open" href="${tool.live}">Open</a>

<a class="btn code" target="_blank" href="${tool.code}">Code</a>

</div>

`;

grid.appendChild(card);

});

count.textContent=tools.length;