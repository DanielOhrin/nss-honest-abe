import { getCorporateDonations, getPacs, getCorporations } from "./dataAccess.js"

export const CorporateDonations = () => {
    const corporateDonations = getCorporateDonations()
    const corporations = getCorporations()
    const pacs = getPacs()

    let html = `<article class="pacs">`

    html += pacs.map(pac => {

        return `<section class="pac">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h2>Donors</h2>
            <ul>
                ${corporateDonations.map(donation => {
                    if (donation.pacId === pac.id) {
                        return `<li>${corporations.find(corp => corp.id === donation.corporationId).company} ($${donation.amount})</li>`
                    }
                }).join("")}
            </ul>
        </div>
    </section>`
    }).join("")

    return html += `</article>`
}