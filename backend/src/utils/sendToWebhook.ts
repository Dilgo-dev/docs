const url: string = "https://discord.com/api/webhooks/1217048896577212466/04GwmSn8ViC_K52XPEMjilc27CsRyjXAiqYsSLUQ2_LKKRH9wTpH1qgmainH-Bqu5gZT";

export async function sendError(title: string, error: string) {
    await fetch(url, {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "embeds": [
                {
                    "title": `🔧  Error ${title}  🧱`,
                    "color": 16744576,
                    "fields": [
                        {
                            "name": "Error",
                            "value": error,
                            "inline": true
                        }
                    ],
                }
            ]
        }),  
    })
}

export async function sendFatalError(title: string, error: string) {
    await fetch(url, {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "embeds": [
                {
                    "title": `💀 Fatal Error ${title}  ⚰️`,
                    "color": 16744576,
                    "fields": [
                        {
                            "name": "Error",
                            "value": error + "\n<@314068387577987074> !",
                        }
                    ],
                    "footer": {
                        "text": "Faut réparer ce problème très vite !"
                    }
                }
            ]
        }),  
    })
}

export default function sendToWebhook(title: string) {
    console.log("Send");
    fetch(url, {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "embeds": [
                {
                    "title": title,
                    "description": "Description de l'embed",
                    "color": 16711680,
                    "fields": [
                        {
                            "name": "NomDuChamp",
                            "value": "ValeurDuChamp",
                            "inline": true // ou false pour afficher en ligne ou non
                        }
                    ],
                    "footer": {
                        "text": "Texte de bas de page"
                    }
                }
            ]
        }),  
    })
}
