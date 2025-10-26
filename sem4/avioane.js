async function getPlanesOverRomania() {
    const url = "https://opensky-network.org/api/states/all?lamin=43.6&lomin=20.2&lamax=48.3&lomax=29.7"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        const planes = data.states || []

        console.log(`Sunt ${planes.length} avioane deasupra României.`)

        // afișăm primele 5 avioane (dacă există)
        planes.slice(0, 5).forEach((plane, index) => {
            console.log(`${index + 1}. ${plane[1]} - ${plane[2]} - altitudine: ${plane[13]} m`)
        })
    } catch (err) {
        console.error("Eroare la cererea HTTP:", err.message)
    }
}

getPlanesOverRomania()
