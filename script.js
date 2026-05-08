const tools = [
  {
    name: "AI Chat UI",
    description: "ChatGPT-style conversational AI interface simulation.",
    icon: "💬",
    live: "./tools/ai-chat-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-chat-ui"
  },
  {
    name: "AI Text Summarizer UI",
    description: "Interface for summarizing long text using AI.",
    icon: "📝",
    live: "./tools/ai-text-summarizer-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-text-summarizer-ui"
  },
  {
    name: "AI Image Generator UI",
    description: "Prompt-based interface for generating images with AI.",
    icon: "🖼️",
    live: "./tools/ai-image-generator-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-image-generator-ui"
  },
  {
    name: "AI Resume Analyzer UI",
    description: "Upload and analyze resumes with AI insights interface.",
    icon: "📄",
    live: "./tools/ai-resume-analyzer-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-resume-analyzer-ui"
  },
  {
    name: "AI Code Generator UI",
    description: "Generate programming code from natural language prompts.",
    icon: "💻",
    live: "./tools/ai-code-generator-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-code-generator-ui"
  },
  {
    name: "AI Grammar Checker UI",
    description: "Tool interface for correcting grammar and writing mistakes.",
    icon: "✍️",
    live: "./tools/ai-grammar-checker-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-grammar-checker-ui"
  },
  {
    name: "AI Study Planner UI",
    description: "AI-powered planner to organize study schedules.",
    icon: "📚",
    live: "./tools/ai-study-planner-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-study-planner-ui"
  },
  {
    name: "AI Email Writer UI",
    description: "Generate professional emails using AI prompts.",
    icon: "📧",
    live: "./tools/ai-email-writer-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-email-writer-ui"
  },
  {
    name: "AI Logo Generator UI",
    description: "Prompt-based AI logo creation interface.",
    icon: "🎨",
    live: "./tools/ai-logo-generator-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-logo-generator-ui"
  },
  {
    name: "AI Idea Generator UI",
    description: "Generate startup or project ideas using AI prompts.",
    icon: "💡",
    live: "./tools/ai-idea-generator-ui/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-idea-generator-ui"
  },
  {
    name: "AI Meeting Notes Generator",
    description: "Automatically convert meeting discussions into notes.",
    icon: "📋",
    live: "./tools/ai-meeting-notes-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-meeting-notes-generator"
  },
  {
    name: "AI Interview Question Generator",
    description: "Generate interview questions for different job roles.",
    icon: "🎯",
    live: "./tools/ai-interview-question-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ai-interview-question-generator"
  },
  // ── Newly added tools ──────────────────────────────────────────────────────
  {
    name: "Age Calculator",
    description: "Calculate exact age from a given date of birth.",
    icon: "🎂",
    live: "./tools/age-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/age-calculator"
  },
  {
    name: "ASCII Art Generator",
    description: "Convert text into creative ASCII art styles.",
    icon: "🔤",
    live: "./tools/ascii-art-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ascii-art-generator"
  },
  {
    name: "Base64 Encoder / Decoder",
    description: "Encode or decode text and files using Base64 format.",
    icon: "🔐",
    live: "./tools/base64-encoder-decoder/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/base64-encoder-decoder"
  },
  {
    name: "Binary Converter",
    description: "Convert numbers between binary, decimal, hex and octal.",
    icon: "01",
    live: "./tools/binary-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/binary-converter"
  },
  {
    name: "BMI Calculator",
    description: "Calculate Body Mass Index and check your health range.",
    icon: "⚖️",
    live: "./tools/bmi-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/bmi-calculator"
  },
  {
    name: "Calorie Calculator",
    description: "Estimate daily calorie needs based on your body metrics.",
    icon: "🔥",
    live: "./tools/calorie-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/calorie-calculator"
  },
  {
    name: "Character Counter",
    description: "Count characters, words, and lines in any text instantly.",
    icon: "🔢",
    live: "./tools/character-counter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/character-counter"
  },
  {
    name: "Code Formatter",
    description: "Format and beautify code across multiple programming languages.",
    icon: "🖥️",
    live: "./tools/code-formatter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/code-formatter"
  },
  {
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes for your design projects.",
    icon: "🎨",
    live: "./tools/color-palette-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/color-palette-generator"
  },
  {
    name: "Color Picker",
    description: "Pick colors visually and get HEX, RGB, and HSL codes.",
    icon: "🎨",
    live: "./tools/color-picker/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/color-picker"
  },
  {
    name: "Countdown Timer",
    description: "Set a countdown timer for any event or deadline.",
    icon: "⏳",
    live: "./tools/countdown-timer/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/countdown-timer"
  },
  {
    name: "CSS Box Shadow Generator",
    description: "Visually create and copy CSS box-shadow code.",
    icon: "🟦",
    live: "./tools/css-box-shadow/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/css-box-shadow"
  },
  {
    name: "CSS Gradient Generator",
    description: "Create and export custom CSS gradient backgrounds.",
    icon: "🌈",
    live: "./tools/css-gradient-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/css-gradient-generator"
  },
  {
    name: "Currency Converter",
    description: "Convert amounts between world currencies in real time.",
    icon: "💱",
    live: "./tools/currency-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/currency-converter"
  },
  {
    name: "EMI Calculator",
    description: "Calculate monthly EMI for loans with interest breakdown.",
    icon: "🏦",
    live: "./tools/emi-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/emi-calculator"
  },
  {
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256 hashes from any input text.",
    icon: "#️⃣",
    live: "./tools/hash-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/hash-generator"
  },
  {
    name: "HEX to RGB Converter",
    description: "Convert HEX color codes to RGB values and vice versa.",
    icon: "🔵",
    live: "./tools/hex-to-rgb/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/hex-to-rgb"
  },
  {
    name: "Image to Base64",
    description: "Convert images to Base64 encoded strings instantly.",
    icon: "🖼️",
    live: "./tools/image-to-base64/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/image-to-base64"
  },
  {
    name: "Internet Speed Test",
    description: "Check your internet download and upload speed online.",
    icon: "⚡",
    live: "./tools/internet-speed-test/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/internet-speed-test"
  },
  {
    name: "Invoice Generator",
    description: "Create and download professional invoices in seconds.",
    icon: "🧾",
    live: "./tools/invoice-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/invoice-generator"
  },
  {
    name: "IP Address Lookup",
    description: "Find geolocation and details of any IP address.",
    icon: "🌐",
    live: "./tools/ip-address-lookup/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/ip-address-lookup"
  },
  {
    name: "JSON Formatter & Validator",
    description: "Format, validate, and beautify JSON data with ease.",
    icon: "{ }",
    live: "./tools/json-formatter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/json-formatter"
  },
  {
    name: "Loan Calculator",
    description: "Calculate loan repayments, interest, and total cost.",
    icon: "💰",
    live: "./tools/loan-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/loan-calculator"
  },
  {
    name: "Loan Eligibility Calculator",
    description: "Check how much loan you qualify for based on your income.",
    icon: "🏠",
    live: "./tools/loan-eligibility-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/loan-eligibility-calculator"
  },
  {
    name: "Markdown Previewer",
    description: "Write and preview Markdown with live rendering.",
    icon: "📝",
    live: "./tools/markdown-previewer/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/markdown-previewer"
  },
  {
    name: "Morse Code Converter",
    description: "Translate text to Morse code and decode Morse back to text.",
    icon: "📡",
    live: "./tools/morse-code-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/morse-code-converter"
  },
  {
    name: "Number to Words",
    description: "Convert any number into its English word representation.",
    icon: "🔢",
    live: "./tools/number-to-words/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/number-to-words"
  },
  {
    name: "Paint App",
    description: "A simple browser-based drawing and painting canvas.",
    icon: "🖌️",
    live: "./tools/paint-app/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/paint-app"
  },
  {
    name: "Password Generator",
    description: "Generate strong, secure, and customizable passwords.",
    icon: "🔑",
    live: "./tools/password-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/password-generator"
  },
  {
    name: "Percentage Calculator",
    description: "Quickly calculate percentages, increases, and decreases.",
    icon: "%",
    live: "./tools/percentage-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/percentage-calculator"
  },
  {
    name: "Pomodoro Timer",
    description: "Boost focus with a classic Pomodoro productivity timer.",
    icon: "🍅",
    live: "./tools/pomodoro-timer/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/pomodoro-timer"
  },
  {
    name: "QR Code Generator",
    description: "Generate QR codes instantly from any URL or text.",
    icon: "📷",
    live: "./tools/qr-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/qr-generator"
  },
  {
    name: "Random Number Generator",
    description: "Generate random numbers within any custom range.",
    icon: "🎲",
    live: "./tools/random-number-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/random-number-generator"
  },
  {
    name: "Regex Tester",
    description: "Test and debug regular expressions with live match highlighting.",
    icon: "🔍",
    live: "./tools/regex-tester/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/regex-tester"
  },
  {
    name: "Responsive Breakpoints",
    description: "Preview your site at common responsive design breakpoints.",
    icon: "📱",
    live: "./tools/responsive-breakpoints/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/responsive-breakpoints"
  },
  {
    name: "Roman Numeral Converter",
    description: "Convert numbers to Roman numerals and back instantly.",
    icon: "🏛️",
    live: "./tools/roman-numeral-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/roman-numeral-converter"
  },
  {
    name: "Speed Distance Time Calculator",
    description: "Solve speed, distance, and time problems effortlessly.",
    icon: "🚀",
    live: "./tools/speed-distance-time/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/speed-distance-time"
  },
  {
    name: "Stopwatch",
    description: "A precise browser stopwatch with lap tracking.",
    icon: "⏱️",
    live: "./tools/stopwatch/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/stopwatch"
  },
  {
    name: "Temperature Converter",
    description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    icon: "🌡️",
    live: "./tools/temperature-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/temperature-converter"
  },
  {
    name: "Text Case Converter",
    description: "Convert text to uppercase, lowercase, title case, and more.",
    icon: "🔡",
    live: "./tools/text-case-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/text-case-converter"
  },
  {
    name: "Text Diff Checker",
    description: "Compare two texts and highlight the differences clearly.",
    icon: "↔️",
    live: "./tools/text-diff-checker/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/text-diff-checker"
  },
  {
    name: "Text Encryptor",
    description: "Encrypt and decrypt text using secure cipher algorithms.",
    icon: "🔒",
    live: "./tools/text-encryptor/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/text-encryptor"
  },
  {
    name: "Text Statistics",
    description: "Analyze text for word count, readability, and more.",
    icon: "📊",
    live: "./tools/text-statistics/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/text-statistics"
  },
  {
    name: "Time Zone Converter",
    description: "Convert time across different world time zones instantly.",
    icon: "🕐",
    live: "./tools/time-zone-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/time-zone-converter"
  },
  {
    name: "Tip Calculator",
    description: "Calculate tip amounts and split bills between friends.",
    icon: "💵",
    live: "./tools/tip-calculator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/tip-calculator"
  },
  {
    name: "Unit Converter",
    description: "Convert units of length, weight, volume, and more.",
    icon: "📏",
    live: "./tools/unit-converter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/unit-converter"
  },
  {
    name: "URL Encoder / Decoder",
    description: "Encode or decode URLs and query strings instantly.",
    icon: "🔗",
    live: "./tools/url-encoder/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/url-encoder"
  },
  {
    name: "UUID Generator",
    description: "Generate unique UUIDs (v1/v4) for your applications.",
    icon: "🆔",
    live: "./tools/uuid-generator/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/uuid-generator"
  },
  {
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in text.",
    icon: "🔤",
    live: "./tools/word-counter/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/word-counter"
  },
  {
    name: "Word Frequency Analyzer",
    description: "Analyze how often each word appears in a given text.",
    icon: "📈",
    live: "./tools/word-frequency/index.html",
    code: "https://github.com/KrushnaTaur/ai-tools-collection/tree/main/tools/word-frequency"
  }
];

const grid = document.getElementById("toolsGrid");
const count = document.getElementById("toolCount");

tools.forEach(tool => {
  const card = document.createElement("div");
  card.className = "tool-card";
  card.innerHTML = `
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

count.textContent = tools.length;