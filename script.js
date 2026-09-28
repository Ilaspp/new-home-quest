/* =========================================================
   NEW HOME QUEST
   ========================================================= */


/* =========================================================
   DATA DI INIZIO DELLA QUEST
   ========================================================= */

const questStart = new Date("2026-09-24T18:00:00");

const startButton = document.getElementById("startButton");
const countdown = document.getElementById("countdown");


function updateCountdown() {

    const now = new Date();
    const difference = questStart - now;

    if (difference <= 0) {

        countdown.textContent =
            "🏴‍☠️ La rotta è tracciata!";

        startButton.disabled = false;
        startButton.textContent =
            "Spiegare le vele";

        return;
    }

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    countdown.textContent =
        "⏳ Mancano " +
        days + " giorni, " +
        hours + " ore e " +
        minutes + " minuti";
}


updateCountdown();

setInterval(updateCountdown, 60000);


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

let xp =
    Number(localStorage.getItem("xp")) || 0;

let completedMissions =
    JSON.parse(
        localStorage.getItem("completedMissions")
    ) || [];

let completedCatMissions =
    JSON.parse(
        localStorage.getItem("completedCatMissions")
    ) || [];

let activeCatMissionId =
    Number(
        localStorage.getItem("activeCatMissionId")
    ) || null;

let hasStarted =
    localStorage.getItem("hasStarted") === "true";


/* =========================================================
   SCHERMATE
   ========================================================= */

const continueButton =
    document.getElementById("continueButton");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const adventureScreen =
    document.getElementById("adventureScreen");

const homeScreen =
    document.getElementById("homeScreen");

const missionsButton =
    document.getElementById("missionsButton");

const treasuresButton =
    document.getElementById("treasuresButton");

const missionsScreen =
    document.getElementById("missionsScreen");

const treasuresScreen =
    document.getElementById("treasuresScreen");

const catMission =
    document.getElementById("catMission");

const missionsList =
    document.getElementById("missionsList");


/* =========================================================
   SE L'AVVENTURA ERA GIÀ INIZIATA
   ========================================================= */

if (hasStarted) {

    welcomeScreen.style.display = "none";
    homeScreen.style.display = "block";

}


/* =========================================================
   PULSANTI SCHERMATE
   ========================================================= */

missionsButton.addEventListener("click", function() {

    const isOpen =
        missionsScreen.style.display === "block";

    missionsScreen.style.display =
        isOpen ? "none" : "block";

    treasuresScreen.style.display = "none";
    catMission.style.display = "none";

});


treasuresButton.addEventListener("click", function() {

    const isOpen =
        treasuresScreen.style.display === "block";

    treasuresScreen.style.display =
        isOpen ? "none" : "block";

    missionsScreen.style.display = "none";
    catMission.style.display = "none";

});


/* =========================================================
   DATA ATTUALE
   ========================================================= */

const now = new Date();

if (now < questStart) {

    startButton.disabled = true;

    startButton.textContent =
        "⏳ La quest non è ancora iniziata";

}


/* =========================================================
   XP / BOUNTY
   ========================================================= */

const xpDisplay =
    document.getElementById("xpDisplay");

const bountyDisplay =
    document.getElementById("bountyDisplay");

const xpProgress =
    document.getElementById("xpProgress");

const nextReward =
    document.getElementById("nextReward");


function updateStats() {

    xpDisplay.textContent = xp;

    bountyDisplay.textContent =
        "฿ " +
        (xp * 10).toLocaleString("it-IT");

    const progress =
        (xp / 2500) * 100;

    xpProgress.style.width =
        progress + "%";


    if (xp < 500) {

        nextReward.textContent =
            "Prossimo traguardo: 500 XP";

    } else if (xp < 1000) {

        nextReward.textContent =
            "Prossimo traguardo: 1000 XP";

    } else if (xp < 1500) {

        nextReward.textContent =
            "Prossimo traguardo: 1500 XP";

    } else if (xp < 2000) {

        nextReward.textContent =
            "Prossimo traguardo: 2000 XP";

    } else if (xp < 2500) {

        nextReward.textContent =
            "Prossimo traguardo: 2500 XP";

    } else {

        nextReward.textContent =
            "🏡 Avventura completata";

    }

}


updateStats();


/* =========================================================
   MISSIONI
   ========================================================= */

const missions = [

    {
        id: 1,
        title: "📦 Salpare!",
        description:
            "Porta le prime cose nella nuova casa.",
        category: "salpare",
        xp: 50
    },

    {
        id: 2,
        title:
            "📦 Nessun tesoro viene lasciato indietro",
        description:
            "Svuota uno degli scatoloni.",
        category: "salpare",
        xp: 30
    },

    {
        id: 3,
        title:
            "📦 La grande battaglia degli scatoloni",
        description:
            "Svuota diversi scatoloni.",
        category: "salpare",
        xp: 75
    },

    {
        id: 4,
        title:
            "📦 Il domatore degli scatoloni",
        description:
            "Porta a termine il grosso del trasloco.",
        category: "salpare",
        xp: 110
    },

    {
        id: 5,
        title:
            "📦 Tutto il tesoro è a bordo",
        description:
            "Completa il trasloco.",
        category: "salpare",
        xp: 150
    },


    {
        id: 6,
        title:
            "🪑 Svuota il ponte!",
        description:
            "Dai una bella spolverata alla casa nuova.",
        category: "ponte",
        xp: 75
    },

    {
        id: 7,
        title:
            "🪑 Il ponte deve brillare",
        description:
            "Pulisci i pavimenti del salotto.",
        category: "ponte",
        xp: 60
    },

    {
        id: 8,
        title:
            "🪑 Allestire il ponte",
        description:
            "Sistema gran parte di mobili e arredamento.",
        category: "ponte",
        xp: 100
    },

    {
        id: 9,
        title:
            "🪑 Trova il posto perfetto",
        description:
            "Trova il posto giusto per un oggetto importante.",
        category: "ponte",
        xp: 30
    },

    {
        id: 10,
        title:
            "🧡 Due cuori, una nave",
        description:
            "Fate qualcosa insieme per rendere davvero vostra la casa.",
        category: "ponte",
        xp: 100
    },

    {
        id: 11,
        title:
            "🪑 La nuova casa è completa",
        description:
            "Completa la prima sistemazione della casa.",
        category: "ponte",
        xp: 200
    },


    {
        id: 12,
        title:
            "🍳 Operazione: Cambusa scintillante",
        description:
            "Pulisci per bene la cucina.",
        category: "cambusa",
        xp: 80
    },

    {
        id: 13,
        title:
            "🍳 La cucina è della ciurma",
        description:
            "Sistema completamente la cucina.",
        category: "cambusa",
        xp: 100
    },

    {
        id: 14,
        title:
            "🧡 Il primo banchetto",
        description:
            "Preparate e mangiate il primo pasto nella nuova casa.",
        category: "cambusa",
        xp: 100
    },

    {
        id: 15,
        title:
            "🧡 Colazione in alto mare",
        description:
            "Fate la prima colazione insieme nella nuova casa.",
        category: "cambusa",
        xp: 75
    },

    {
        id: 16,
        title:
            "🍳 Il grande banchetto della ciurma",
        description:
            "Organizzate una cena speciale nella nuova casa.",
        category: "cambusa",
        xp: 100
    },


    {
        id: 17,
        title:
            "🌙 La cabina del Capitano",
        description:
            "Inizia a sistemare la camera.",
        category: "cabina",
        xp: 75
    },

    {
        id: 18,
        title:
            "🌙 Ogni tesoro al suo posto",
        description:
            "Sistema vestiti e oggetti personali.",
        category: "cabina",
        xp: 60
    },

    {
        id: 19,
        title:
            "🌙 La cabina è pronta",
        description:
            "Completa la sistemazione della camera.",
        category: "cabina",
        xp: 75
    },

    {
        id: 20,
        title:
            "🧡 La prima notte a bordo",
        description:
            "Dormite per la prima volta nella nuova casa.",
        category: "cabina",
        xp: 100
    },

    {
        id: 21,
        title:
            "🌙 Il rifugio del Capitano",
        description:
            "Fai qualcosa per rendere la camera davvero vostra.",
        category: "cabina",
        xp: 100
    },


    {
        id: 22,
        title:
            "🧽 Il boss della Testa",
        description:
            "Dai una bella pulita al bagno.",
        category: "bocca di lupo",
        xp: 75
    },

    {
        id: 23,
        title:
            "🧽 Testa scintillante",
        description:
            "Completa la pulizia del bagno.",
        category: "bocca di lupo",
        xp: 75
    },

    {
        id: 24,
        title:
            "🧽 Ogni cosa al suo posto",
        description:
            "Sistema prodotti e oggetti nel bagno.",
        category: "bocca di lupo",
        xp: 50
    },

    {
        id: 25,
        title:
            "🧽 Il bagno della ciurma",
        description:
            "Completa la sistemazione del bagno.",
        category: "bocca di lupo",
        xp: 100
    }

];


/* =========================================================
   CONTATORE MISSIONI
   ========================================================= */

function updateMissionCounter() {

    const missionCounter =
        document.getElementById("missionCounter");

    missionCounter.textContent =
        "Missioni completate: " +
        completedMissions.length +
        " / " +
        missions.length;
}


/* =========================================================
   START / CONTINUE
   ========================================================= */

startButton.addEventListener("click", function() {

    localStorage.setItem(
        "hasStarted",
        "true"
    );

    welcomeScreen.style.display = "none";

    adventureScreen.style.display = "block";

});


continueButton.addEventListener("click", function() {

    adventureScreen.style.display = "none";

    homeScreen.style.display = "block";

    if (
        "Notification" in window &&
        Notification.permission === "default"
    ) {

        Notification.requestPermission().then(function(permission) {

            if (permission === "granted") {

                console.log("🔔 Notifiche attivate!");

                

            }

        });

    } else if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {

        dailySystemNotification();

    }

});


/* =========================================================
   REMINDER — LISTA MISSIONI
   ========================================================= */

const startingMissionIds = [

    // SALPARE — sempre per prime
    1, 2, 3,

    // altre sezioni
    6, 12, 17, 22,
    7, 14, 18, 23,
    9, 15, 20, 24,
    10, 21

];


let reminderMissionIndex =
    Number(
        localStorage.getItem(
            "reminderMissionIndex"
        )
    ) || 0;


function getNextReminderMission() {

    const availableReminderMissions =
        startingMissionIds.filter(function(id) {

            return !completedMissions.includes(id);

        });


    if (
        availableReminderMissions.length === 0
    ) {

        return null;

    }


    if (
        reminderMissionIndex >=
        availableReminderMissions.length
    ) {

        reminderMissionIndex = 0;

    }


    const missionId =
        availableReminderMissions[
            reminderMissionIndex
        ];


    reminderMissionIndex++;


    localStorage.setItem(
        "reminderMissionIndex",
        reminderMissionIndex
    );


    return missions.find(function(mission) {

        return mission.id === missionId;

    });

}


/* =========================================================
   OSCARINO
   ========================================================= */

const catMissions = [

    {
        id: 1,
        title:
            "🐈 Il nostromo di bordo è arrivato",
        description:
            "Porta Oscarino nella nuova casa.",
        xp: 100
    },

    {
        id: 2,
        title:
            "🐈 Il porto delle ciotole",
        description:
            "Trova il posto perfetto per le ciotole di Oscarino.",
        xp: 50
    },

    {
        id: 3,
        title:
            "🐈 L'ispezione del nostromo di bordo",
        description:
            "Lascia che Oscarino esplori la nuova casa.",
        xp: 50
    },

    {
        id: 4,
        title:
            "🐈 Pausa coccole obbligatoria",
        description:
            "Oscarino ha ordinato una pausa coccole.",
        xp: 30
    },

    {
        id: 5,
        title:
            "🐈 Il contrattacco del topino",
        description:
            "Gioca con il topino di peluche.",
        xp: 50
    },

    {
        id: 6,
        title:
            "🐈 Oscarino ha deciso",
        description:
            "Scopri qual è il suo posto preferito nella nuova casa.",
        xp: 75
    }

];


function getNextCatMission() {

    if (activeCatMissionId !== null) {

        return catMissions.find(function(mission) {

            return mission.id === activeCatMissionId;

        });

    }


    const nextCatMission =
        catMissions.find(function(mission) {

            return !completedCatMissions.includes(
                mission.id
            );

        });


    if (!nextCatMission) {

        return null;

    }


    activeCatMissionId =
        nextCatMission.id;


    localStorage.setItem(
        "activeCatMissionId",
        activeCatMissionId
    );


    return nextCatMission;

}


/* =========================================================
   TESORI
   ========================================================= */

const treasures = [

    {
        id: 1,
        title:
            "🗺️ Mappa del Nuovo Mondo",
        description:
            "Il trasloco è finalmente completato.",
        requirement:
            "Completa tutte le missioni del Ponte di Comando.",
        category:
            "salpare"
    },

    {
        id: 2,
        title:
            "💎 Gemma della Cambusa",
        description:
            "La cambusa è pronta per i grandi banchetti.",
        requirement:
            "Completa tutte le missioni della Cambusa.",
        category:
            "cambusa"
    },

    {
        id: 3,
        title:
            "🪙 Moneta del Capitano",
        description:
            "La nave comincia a prendere forma.",
        requirement:
            "Completa tutte le missioni del Ponte.",
        category:
            "ponte"
    },

    {
        id: 4,
        title:
            "🔑 Chiave della Cabina",
        description:
            "Il rifugio del Capitano è pronto.",
        requirement:
            "Completa tutte le missioni della Cabina.",
        category:
            "cabina"
    },

    {
        id: 5,
        title:
            "🚽 Il trono più splendente dei sette mari",
        description:
            "Anche il bagno della ciurma è stato conquistato.",
        requirement:
            "Completa tutte le missioni della Testa.",
        category:
            "bocca di lupo"
    },

    {
        id: 6,
        title:
            "🐈 Medaglia di Oscarino",
        description:
            "Il nostromo di bordo ha approvato la nuova casa.",
        requirement:
            "Completa tutte le missioni di Oscarino.",
        category:
            "oscarino"
    },

    {
        id: 7,
        title:
            "Questa rotta si compie qui, ma per te è solo l'inizio.",
        description:
            "Godetevi la nuova casa 🧡 Dalla plancia di comando, Ilaria",
        requirement:
            "Completa tutte le missioni dell'avventura.",
        category:
            "finale"
    }

];


let previouslyUnlockedTreasures =
    JSON.parse(
        localStorage.getItem(
            "unlockedTreasures"
        )
    ) || [];


/* =========================================================
   ELEMENTI TESORI / POPUP
   ========================================================= */

const treasuresList =
    document.getElementById("treasuresList");

const treasureOverlay =
    document.getElementById("treasureOverlay");

const treasureChest =
    document.getElementById("treasureChest");

const treasureUnlockedTitle =
    document.getElementById(
        "treasureUnlockedTitle"
    );

const treasureUnlockedDescription =
    document.getElementById(
        "treasureUnlockedDescription"
    );

const closeTreasureButton =
    document.getElementById(
        "closeTreasureButton"
    );


/* =========================================================
   CREAZIONE ELEMENTI TESORI
   ========================================================= */

treasures.forEach(function(treasure) {

    // Il Tesoro Finale non viene mostrato
    // finché non viene sbloccato
    if (treasure.category === "finale") {

        const finaleUnlocked =
            missions.every(function(mission) {
                return completedMissions.includes(mission.id);
            }) &&
            catMissions.every(function(mission) {
                return completedCatMissions.includes(mission.id);
            });

        if (!finaleUnlocked) {
            return;
        }
    }

    const treasureElement = document.createElement("div");

    treasureElement.classList.add("treasure");

    treasureElement.dataset.treasureId = treasure.id;

    treasureElement.innerHTML = `
        <h3>🔒 ${treasure.title}</h3>
        <p>${treasure.description}</p>
        <p>🗺️ ${treasure.requirement}</p>
        <p>Ancora da scoprire...</p>
    `;

    treasuresList.appendChild(treasureElement);

});


/* =========================================================
   MOSTRA POPUP TESORO
   ========================================================= */

function showTreasureOverlay(treasure) {

    treasureOverlay.dataset.currentTreasure =
        treasure.category;


    treasureUnlockedTitle.textContent =
        treasure.title;


    treasureUnlockedDescription.textContent =
        treasure.description;


    treasureOverlay.classList.remove(
        "finale"
    );


    treasureChest.textContent = "🪎";


    if (
        treasure.category === "finale"
    ) {

        treasureOverlay.classList.add(
            "finale"
        );

        treasureChest.textContent =
            "🏠";

        closeTreasureButton.textContent =
            "Termina l'avventura";

    } else {

        closeTreasureButton.textContent =
            "Continua l'avventura";

    }


    treasureOverlay.style.display =
        "flex";

}


/* =========================================================
   AGGIORNAMENTO TESORI
   ========================================================= */

function updateTreasures() {

    treasures.forEach(function(treasure) {

        let treasureUnlocked = false;


        /* OSCARINO */

        if (
            treasure.category === "oscarino"
        ) {

            treasureUnlocked =
                catMissions.every(function(mission) {

                    return completedCatMissions.includes(
                        mission.id
                    );

                });

        }


        /* TESORO FINALE */

        else if (
            treasure.category === "finale"
        ) {

            treasureUnlocked =
                missions.every(function(mission) {

                    return completedMissions.includes(
                        mission.id
                    );

                }) &&
                catMissions.every(function(mission) {

                    return completedCatMissions.includes(
                        mission.id
                    );

                });

        }


        /* TESORI DELLE CATEGORIE */

        else {

            const categoryMissions =
                missions.filter(function(mission) {

                    return (
                        mission.category ===
                        treasure.category
                    );

                });


            treasureUnlocked =
                categoryMissions.every(function(mission) {

                    return completedMissions.includes(
                        mission.id
                    );

                });

        }


        const treasureElement =
            treasuresList.querySelector(
                '[data-treasure-id="' +
                treasure.id +
                '"]'
            );


        if (!treasureElement) {

            return;

        }


        treasureElement.classList.remove(
            "locked",
            "unlocked"
        );


        /* TESORO SBLOCCATO */

        if (treasureUnlocked) {

            treasureElement.classList.add(
                "unlocked"
            );


            treasureElement.innerHTML = `
                <h3>🔓 ${treasure.title}</h3>
                <p>Tesoro sbloccato!</p>
                <p>${treasure.description}</p>
            `;


            if (
                !previouslyUnlockedTreasures.includes(
                    treasure.id
                )
            ) {

                previouslyUnlockedTreasures.push(
                    treasure.id
                );


                localStorage.setItem(
                    "unlockedTreasures",
                    JSON.stringify(
                        previouslyUnlockedTreasures
                    )
                );


                /*
                   Il Tesoro Finale viene registrato
                   ma NON viene mostrato qui.

                   Verrà mostrato dopo la cascata.
                */

                if (
                    treasure.category !== "finale"
                ) {

                    showTreasureOverlay(
                        treasure
                    );

                }

            }

        }


        /* TESORO ANCORA BLOCCATO */

        else {

            treasureElement.classList.add(
                "locked"
            );


            treasureElement.innerHTML = `
                <h3>🔒 ${treasure.title}</h3>
                <p>🗺️ ${treasure.requirement}</p>
                <p>Ancora da scoprire...</p>
            `;

        }

    });

}


/* =========================================================
   TRANSIZIONE FINALE
   ========================================================= */

const finalTransition =
    document.getElementById(
        "finalTransition"
    );

const fallingTreasures =
    document.getElementById(
        "fallingTreasures"
    );


function startFinalTransition() {

    finalTransition.style.display =
        "block";


    /* Puliamo eventuali tesori precedenti */

    fallingTreasures.innerHTML = "";


    const emojis = [

        "💰",
        "💰",
        "🪙",
        "🪙",
        "🪎",
        "🪎",
        "✨",
        "✨",
        "✨",
        "🏴‍☠️",
        "🏴‍☠️",
        "☠️",
        "☠️",
        "☠️",
        "☠️",
        "👑",
        "☠️",
        "☠️",
        "☠️",
        "☠️"

    ];


    for (
        let i = 0;
        i < 500;
        i++
    ) {

        const emoji =
            document.createElement("div");


        emoji.classList.add(
            "fallingTreasure"
        );


        emoji.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        emoji.style.left =
            Math.random() * 100 + "%";


        emoji.style.fontSize =
            (25 + Math.random() * 40) +
            "px";


        emoji.style.animationDelay =
            Math.random() * 2.5 + "s";


        emoji.style.animationDuration =
            (2 + Math.random() * 2) +
            "s";


        fallingTreasures.appendChild(
            emoji
        );

    }

}


/* =========================================================
   CHIUSURA POPUP TESORO
   ========================================================= */

closeTreasureButton.addEventListener(
    "click",
    function() {

        const currentTreasure =
            treasureOverlay.dataset.currentTreasure;


        treasureOverlay.style.display =
            "none";


        const allRegularTreasuresUnlocked =
            treasures
                .filter(function(treasure) {

                    return (
                        treasure.category !==
                        "finale"
                    );

                })
                .every(function(treasure) {

                    return previouslyUnlockedTreasures.includes(
                        treasure.id
                    );

                });


        /*
           Se abbiamo appena conquistato
           tutti i 6 tesori normali,
           parte la cascata.
        */

        if (
            currentTreasure !== "finale" &&
            allRegularTreasuresUnlocked
        ) {

            startFinalTransition();


            setTimeout(function() {

                finalTransition.style.display =
                    "none";


                fallingTreasures.innerHTML =
                    "";


                const finalTreasure =
                    treasures.find(function(treasure) {

                        return (
                            treasure.category ===
                            "finale"
                        );

                    });


                if (finalTreasure) {

                    showTreasureOverlay(
                        finalTreasure
                    );

                }

            }, 5000);

        }

    }
);


/* =========================================================
   OSCARINO — PULSANTE
   ========================================================= */

const catButton =
    document.getElementById("catButton");


catButton.addEventListener(
    "click",
    function() {

        missionsScreen.style.display =
            "none";

        treasuresScreen.style.display =
            "none";

        catMission.style.display =
            "block";


        catMission.innerHTML = `
            <h3>🐈 Oscarino sta pensando...</h3>
            <p>👀 Il gatto di bordo sta scegliendo la tua missione</p>
        `;


        setTimeout(function() {

            const mission =
                getNextCatMission();


            if (mission === null) {

                catMission.innerHTML = `
                    <h3>🐈 Oscarino è soddisfatto.</h3>
                    <p>Il nostromo peloso non ha altre richieste.</p>
                `;

                return;

            }


            catMission.innerHTML = `
                <h3>🐈 Oscarino ha scelto! Ascolta il nostromo.</h3>
                <h3>${mission.title}</h3>
                <p>${mission.description}</p>
                <p>⚡ Ricompensa: ${mission.xp} XP</p>
                <button id="completeCatButton">
                    Completa missione
                </button>
            `;


            const completeCatButton =
                document.getElementById(
                    "completeCatButton"
                );


            completeCatButton.addEventListener(
                "click",
                function() {

                    xp =
                        xp + mission.xp;


                    updateStats();


                    localStorage.setItem(
                        "xp",
                        xp
                    );


                    completedCatMissions.push(
                        mission.id
                    );


                    localStorage.setItem(
                        "completedCatMissions",
                        JSON.stringify(
                            completedCatMissions
                        )
                    );


                    activeCatMissionId =
                        null;


                    localStorage.removeItem(
                        "activeCatMissionId"
                    );


                    updateTreasures();


                    if (completedCatMissions.length === catMissions.length) {

    catMission.innerHTML = `
        <h3>🐈 Oscarino è soddisfatto.</h3>
        <p>Il nostromo peloso ha approvato la nuova casa.</p>
    `;

} else {

    completeCatButton.textContent =
        "Missione compiuta";

    completeCatButton.disabled = true;

    alert(
        "🐈 Oscarino approva! Hai guadagnato " +
        mission.xp +
        " XP."
    );
}

                }
            );

        }, 1800);

    }
);


/* =========================================================
   PERSONAGGI DELLE CATEGORIE
   ========================================================= */

const categoryCharacters = {

    "salpare":
        "luffy.jpeg",

    "ponte":
        "nami.jpeg",

    "cambusa":
        "sanji.jpeg",

    "cabina":
        "zoro.jpeg",

    "bocca di lupo":
        "chopper.jpeg"

};


/* =========================================================
   NOMI CATEGORIE
   ========================================================= */

function getCategoryName(category) {

    const names = {

        "salpare":
            "🏴‍☠️ SALPARE",

        "ponte":
            "⚓ PONTE PRINCIPALE",

        "cambusa":
            "🍳 CAMBUSA",

        "cabina":
            "🛏️ CABINA",

        "bocca di lupo":
            "🚿 BOCCA DI LUPO"

    };


    return names[category];

}


/* =========================================================
   CREAZIONE MISSIONI
   ========================================================= */

missions.forEach(function(mission) {

    const missionElement =
        document.createElement("div");


    missionElement.classList.add(
        "mission"
    );


    missionElement.dataset.category =
        mission.category;


    missionElement.dataset.missionId =
        mission.id;


    const characterImage =
        categoryCharacters[
            mission.category
        ];


    missionElement.innerHTML = `
        <img
            src="images/${characterImage}"
            class="mission-character"
        >

        <h3>${mission.title}</h3>

        <p>${mission.description}</p>

        <p>⚡ ${mission.xp} XP</p>

        <button>Completa</button>
    `;


    const button =
        missionElement.querySelector(
            "button"
        );


    if (
        completedMissions.includes(
            mission.id
        )
    ) {

        button.textContent =
            "Missione compiuta";

        button.disabled = true;

    }


    button.addEventListener(
        "click",
        function() {

            if (
                completedMissions.includes(
                    mission.id
                )
            ) {

                alert(
                    "🏴‍☠️ Questa missione è già stata completata!"
                );

                return;

            }


            xp =
                xp + mission.xp;


            updateStats();


            localStorage.setItem(
                "xp",
                xp
            );


            completedMissions.push(
                mission.id
            );


            localStorage.setItem(
                "completedMissions",
                JSON.stringify(
                    completedMissions
                )
            );


            if (
                mission.id === dailyReminderId
            ) {

                localStorage.setItem(
                    "dailyReminderCompleted",
                    "true"
                );


                dailyReminder.style.display =
                    "none";

            }


            updateTreasures();


            updateMissionCounter();


            const allMissionsCompleted =
                missions.every(function(mission) {

                    return completedMissions.includes(
                        mission.id
                    );

                });


            if (allMissionsCompleted) {

                dailyReminder.style.display =
                    "none";

            }


            button.textContent =
                "Missione compiuta";


            button.disabled =
                true;


            alert(
                "🏴‍☠️ Bottino assicurato! Hai guadagnato " +
                mission.xp +
                " XP."
            );

        }
    );


    missionsList.appendChild(
        missionElement
    );

});


updateMissionCounter();


/* =========================================================
   FILTRI CATEGORIE
   ========================================================= */

const filterButtons =
    document.querySelectorAll(
        "#categoryFilters button"
    );


filterButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const selectedCategory =
                button.dataset.category;


            const missionCards =
                document.querySelectorAll(
                    ".mission"
                );


            missionCards.forEach(
                function(card) {

                    if (
                        selectedCategory ===
                        "all"
                    ) {

                        card.style.display =
                            "block";

                    }

                    else if (
                        card.dataset.category ===
                        selectedCategory
                    ) {

                        card.style.display =
                            "block";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

});


/* =========================================================
   PROMEMORIA GIORNALIERO
   ========================================================= */

const dailyReminder =
    document.getElementById(
        "dailyReminder"
    );

const reminderText =
    document.getElementById(
        "reminderText"
    );

const reminderButton =
    document.getElementById(
        "reminderButton"
    );


let dailyReminderDate =
    localStorage.getItem(
        "dailyReminderDate"
    );


let dailyReminderId =
    Number(
        localStorage.getItem(
            "dailyReminderId"
        )
    );


let dailyReminderCompleted =
    localStorage.getItem(
        "dailyReminderCompleted"
    ) === "true";


function prepareDailyReminder() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    if (dailyReminderCompleted) {

        dailyReminder.style.display =
            "none";

        return;

    }


    const allMissionsCompleted =
        missions.every(function(mission) {

            return completedMissions.includes(
                mission.id
            );

        });


    if (allMissionsCompleted) {

        dailyReminder.style.display =
            "none";

        return;

    }


    if (
        dailyReminderDate !== today
    ) {

        dailyReminderCompleted =
            false;


        localStorage.setItem(
            "dailyReminderCompleted",
            "false"
        );


        const mission =
            getNextReminderMission();


        if (mission === null) {

            dailyReminder.style.display =
                "none";

            return;

        }


        dailyReminderDate =
            today;


        dailyReminderId =
            mission.id;


        localStorage.setItem(
            "dailyReminderDate",
            today
        );


        localStorage.setItem(
            "dailyReminderId",
            mission.id
        );

    }

}


function updateDailyReminderText() {

    const allMissionsCompleted =
        missions.every(function(mission) {

            return completedMissions.includes(
                mission.id
            );

        });


    if (allMissionsCompleted) {

        dailyReminder.style.display =
            "none";

        return;

    }


    const mission =
        missions.find(function(mission) {

            return mission.id ===
                dailyReminderId;

        });


    if (!mission) {

        return;

    }


    reminderText.textContent =
        "Capitano c'è una missione per te.";


    reminderButton.textContent =
        "Sei pronto a salpare?";


    reminderButton.dataset.showing =
        "false";

}


prepareDailyReminder();

updateDailyReminderText();


/* =========================================================
   CLICK REMINDER
   ========================================================= */

reminderButton.addEventListener(
    "click",
    function() {

        const mission =
            missions.find(function(mission) {

                return mission.id ===
                    dailyReminderId;

            });


        if (!mission) {

            reminderText.textContent =
                "🏴‍☠️ Nessuna missione disponibile.";

            return;

        }


        /* PRIMO CLIC */

        if (
            reminderButton.dataset.showing !==
            "true"
        ) {

            reminderText.innerHTML = `
                <strong>${mission.title}</strong><br><br>
                ${mission.description}<br><br>
                ⚡ Ricompensa: ${mission.xp} XP
            `;


            reminderButton.textContent =
                "🏴‍☠️ Vai alla missione";


            reminderButton.dataset.showing =
                "true";


            return;

        }


        /* SECONDO CLIC */

        missionsScreen.style.display =
            "block";

        treasuresScreen.style.display =
            "none";

        catMission.style.display =
            "none";


        const missionCards =
            document.querySelectorAll(
                ".mission"
            );


        missionCards.forEach(
            function(card) {

                if (
                    Number(
                        card.dataset.missionId
                    ) === mission.id
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        dailyReminder.style.display =
            "none";

    }
);


/* =========================================================
   AGGIORNAMENTO INIZIALE TESORI
   ========================================================= */

updateTreasures();


// ===============================
// 🔔 NOTIFICHE
// ===============================

function dailySystemNotification() {

    if (!("Notification" in window)) {
        return;
    }

    if (Notification.permission !== "granted") {
        return;
    }

    new Notification("🏴‍☠️ New Home Quest", {
        body: "Capitan Andrea, una nuova missione ti attende a bordo!"
    });
}


// ===============================
// 🔔 RICHIESTA PERMESSO
// ===============================

if (
    "Notification" in window &&
    Notification.permission === "default"
) {

    Notification.requestPermission().then(function(permission) {

        console.log(
            "🔔 Permesso notifiche:",
            permission
        );

        if (permission === "granted") {

            dailySystemNotification();

        }

    });

} else if (
    "Notification" in window &&
    Notification.permission === "granted"
) {

    console.log("🔔 Notifiche già attive!");

}