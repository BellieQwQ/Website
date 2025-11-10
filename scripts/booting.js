const lines = [
  document.getElementById("line_1_booting"),
  document.getElementById("line_2_booting"),
  document.getElementById("line_3_booting"),
  document.getElementById("line_4_booting"),
  document.getElementById("line_5_booting"),
  document.getElementById("line_6_booting"),
  document.getElementById("line_7_booting"),
  document.getElementById("line_8_booting"),
  document.getElementById("line_9_booting"),
  document.getElementById("line_10_booting"),
  document.getElementById("line_11_booting"),
  document.getElementById("error_message"),
];

const texts = [
  "SaturnWare SA-94 version 3.0.2a",
  "(C) Copyright 1994.12.07 SaturnWare, Inc.",
  "Starting SaturnOS v1.4 ...",
  "C://SystemFiles/SaturnOS/HyperionBIOS/Startup_Wizard.exe",
  "Initializing Hyperion BIOS ... OK!",
  "GPU: SaturnXVISION 2MB VGA ... OK!",
  "CPU: 7071 UC-EMA 75MHz ... OK!",
  "Memory Test: 7896Kb ... OK!",
  "HDD SysteMAX RAZDAC 400MB ... OK!",
  "Floppy Disk Reader SaturnRX 1.44MB ... OK!",
  `Run "sysinit -r" To Start The System.`,
];

const command = document.getElementById("command_line_input");
const error = document.getElementById("error_message");

function setRandomTime() {
  return Math.floor(Math.random() * (2000 - 100)) + 100;
}

let counter = 0;

function showLines() {
  lines[counter].textContent = texts[counter];
  counter++;
  if (counter < lines.length) {
    const delay = setRandomTime();
    setTimeout(showLines, delay);
  }
}

setTimeout(showLines, 2000);

document.addEventListener("keydown", (event) => {
  const ignoreKeys = [
    "Shift",
    "Control",
    "Alt",
    "CapsLock",
    "Tab",
    "Meta",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Escape",
  ];

  if (ignoreKeys.includes(event.key)) return;

  if (event.key === "Enter") {
    runSystem();
    return;
  }

  if (event.key === "Backspace") {
    command.textContent = command.textContent.slice(0, -1);
    return;
  }

  if (event.key === " ") {
    event.preventDefault();
    command.textContent += " ";
    return;
  }

  if (event.key.length === 1) {
    command.textContent += event.key;
  }
});

function runSystem() {
  const input = command.textContent.trim();

  if (input !== "sysinit -r") {
    error.textContent = `[ERROR] Command ${command.textContent} is invalid, run "sysinit -r" instead`;
    command.textContent = " ";
  } else {
    const blackout = document.createElement("div");
    blackout.style.position = "fixed";
    blackout.style.top = 0;
    blackout.style.left = 0;
    blackout.style.width = "100%";
    blackout.style.height = "100%";
    blackout.style.backgroundColor = "#000";
    blackout.style.zIndex = 9999;
    document.body.appendChild(blackout);

    setTimeout(() => {
      window.location.href = "main_screen.html";
    }, 2000);
  }
}
