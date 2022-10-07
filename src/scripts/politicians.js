import { getCorporateDonations, getCorporateInterests, getCorporations, getInterests, getLegislations, getPacDonations, getPacs, getPoliticianLegislations, getPoliticians,  } from "./dataAccess.js"

export const Politicians = () => {
    const corporateInterests = getCorporateInterests()
    const corporations = getCorporations()
    const interests = getInterests()
    const sponsoredLegislations = getPoliticianLegislations()
    const legislations = getLegislations()
    const pacs = getPacs()
    const pacDonations = getPacDonations()
    const politicians = getPoliticians()
    const corporateDonations = getCorporateDonations()
    let html = `<article class="politicians">`

    html += politicians.map(politician => {
        const supportingPacs = pacDonations.map(donation => {
            if (donation.politicianId === politician.id) {
                return pacs.find(pac => pac.id === donation.pacId).id
            }
        }).join("")

        const supportingCorporations = corporateDonations.map(donation => {
            if (supportingPacs.includes(donation.pacId)) {
                return corporations.find(corp => corp.id === donation.corporationId).id
            }
        }).join("")

        const supportingInterests = [] // Pushed into later (It's all of the bill objects that the politician supports)
        const corpInterests = corporateInterests.filter(interestObj => supportingCorporations.includes(interestObj.corporationId)) // All of the corpInterests Objects of corps that have supported PACs that have supported the politician

        return `<section class="politician">
            <header class="politician__name">
                <h1>${Object.values(politician.name).join(" ")}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="politician__bills">
                <h2>Sponsored Bills</h2>
                <div>
                    <ul>
                        ${sponsoredLegislations.map(leg => {
                            if (leg.politicianId === politician.id) {
                                const matchingLegislation = legislations.find(legislation => legislation.id === leg.legislationId)
                                supportingInterests.push(matchingLegislation) // Here is where we push into supportingInterests
                                return `<li>${matchingLegislation.name} (Interest: ${interests.find(interest => interest.id === matchingLegislation.interestId).about})</li>`
                            }
                        }).join("")}
                    </ul>
                </div>
            </div>
            <div class="politician__funders">
                <h2>Related PACs</h2>
                <ul>
                    ${pacDonations.map(donation => {
                        if (donation.politicianId === politician.id) {
                            return `<li>${pacs.find(pac => pac.id === donation.pacId).registeredName}</li>`
                        }
                    }).join("")}
                </ul>
            </div>
            <div class="politician__influencers">
                <h3>Influencing Corporations</h3>
                <ul>
                    ${corporations.map(corp => {
                        const currentInterests = corpInterests.filter(interest => interest.corporationId === corp.id)
                        let matches = 0

                        for (const interest of supportingInterests) { // Since we already checked if the corporation supports a PAC that supports the politician, the only thing left is to check for at least one corporation interest that matches a politician's bill's interest
                            for (const int of currentInterests) {
                                if (interest.interestId === int.interestId) {
                                    matches++
                                }
                            }
                        }

                        if (matches > 0) {
                            return `<li>${corp.company}</li>`
                        }
                    }).join("")}
                </ul>
            </div>
        </section>`
    }).join("")
    
    return html += `</article>`
}