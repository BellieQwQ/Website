

const lines = [document.getElementById("line_1_booting"),
    document.getElementById("line_2_booting"),
    document.getElementById("line_3_booting"),
    document.getElementById("line_4_booting"),
    document.getElementById("line_5_booting"),
    document.getElementById("line_6_booting"),
    document.getElementById("line_7_booting"),
    document.getElementById("line_8_booting"),
    document.getElementById("line_9_booting"),
    document.getElementById("line_10_booting"),
    ];

const texts = ["SaturnWare S94 version 3.0.2a",
    "@Copyright 1994.12.07 SaturnWare, Inc.",
    "Starting SaturnOS v1.4...",
    "C://SystemFiles/SaturnOS/HyperionBIOS/Startup_Wizard.exe",
    "Initializing Hyperion BIOS ... OK!",
    "Video Adapter: SaturnXVISION ... OK!",
    "Input Device: Neptune Interface 4 ... OK!",
    "Loading SaturnNet v0.9 ... OK!",
    "Loading SaturnOS File Manager ... OK!",
    "Initializing...",
]

function setRandomTime(){
    let randomTime = Math.floor(Math.random() * (2000 - 100)) + 100;
    return randomTime;
}

let counter = 0;

function showLines(){
    lines[counter].textContent = texts[counter];
    counter++
    if (counter < lines.length){
        const delay = setRandomTime();
        setTimeout(showLines, delay);
    }
};

setTimeout(showLines, 3000);



