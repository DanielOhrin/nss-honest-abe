import { fetchCorporateDonations, fetchCorporateInterests, fetchCorporations, fetchInterests, fetchLegislations, fetchPacDonations, fetchPacs, fetchPoliticianLegislations, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    const fetchData = Promise.all([
    fetchCorporateDonations(),
    fetchCorporateInterests(),
    fetchCorporations(),
    fetchInterests(),
    fetchLegislations(),
    fetchPacDonations(),
    fetchPacs(),
    fetchPoliticianLegislations(),
    fetchPoliticians()
    ])
    
    fetchData.then(
        () => {
            mainContainer.innerHTML += HonestAbe()
        }
    )
}

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)