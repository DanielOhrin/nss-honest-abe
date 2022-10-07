import { getCorporations } from "./dataAccess.js"

export const Corporations = () => {
    const corporations = getCorporations()
    let html = `<article class="corporations">`

    html += corporations.map(corp => {
        return `<section class="corporation">
            <header class="corporation__name">
                <h1>${corp.company}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${corp.address}</div>
            </div>
        </section>`
    }).join("")

    return html += `</article>`
}