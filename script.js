const summonerName = 'SIMP Poryco #666';
const apiKey = 'RGAPI-cb3197f3-ed46-4c3c-8352-b7d93515f567';

async function getMatchHistory() {
    try {
        const response = await fetch(`https://<riot-api-url>/lol/match/v4/matchlists/by-summoner/${summonerName}?api_key=${apiKey}`);
        const data = await response.json();
        
        // Hole die letzte Match ID und die Details
        const lastMatchId = data.matches[0].gameId;
        const matchResponse = await fetch(`https://<riot-api-url>/lol/match/v4/matches/${lastMatchId}?api_key=${apiKey}`);
        const matchData = await matchResponse.json();
        
        // Verarbeite die Statistiken
        const kda = matchData.participants[0].stats.kills + "/" + matchData.participants[0].stats.deaths + "/" + matchData.participants[0].stats.assists;
        document.getElementById('kda').textContent = kda;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }
}

function updateStats() {
    getMatchHistory();
    // Hier könntest du auch das Win/Lose Verhältnis aktualisieren.
}

setInterval(updateStats, 60000); // Alle 60 Sekunden aktualisieren
