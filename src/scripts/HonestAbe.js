import { Corporations } from "./corporations.js"
import { Politicians } from "./politicians.js"
import { CorporateDonations } from "./corporate-donations.js"

export const HonestAbe = () => {
    return `${ Politicians() }
    ${ Corporations() }
    ${ CorporateDonations() }`
}