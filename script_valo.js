const valorantUsername = 'SIMP Poryco #666';  // Ersetze dies durch deinen Valorant-Namen
const apiKey = 'RGAPI-cb3197f3-ed46-4c3c-8352-b7d93515f567';  // Falls du eine API verwendest, die einen Key benötigt

// Beispiel für ein Abrufen von Valorant-Statistiken (ersetzte den Endpunkt durch den korrekten der API)
async function getValorantStats() {
    try {
        const response = await fetch(`https://example-valorant-api.com/stats/${valorantUsername}?api_key=${apiKey}`);
        const data = await response.json();

        // Beispiel: Anzeige der Win/Loss-Statistik
        const wins = data.wins;
        const losses = data.losses;
        document.getElementById('win-loss').textContent = `${wins}/${losses}`;

        // Beispiel: KDA-Werte abrufen
        const kda = data.kda;
        document.getElementById('kda').textContent = kda;

    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        document.getElementById('win-loss').textContent = "Fehler";
        document.getElementById('kda').textContent = "Fehler";
    }
}

// Automatisches Update alle 60 Sekunden
setInterval(getValorantStats, 60000);
getValorantStats();
