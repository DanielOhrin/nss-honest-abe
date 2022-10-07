const applicationState = {
    politicians: [],
    corporations: [],
    pacs: [],
    corporatedonations: [],
    pacdonations: [],
    corporateinterests: [],
    legislations: [],
    politicianlegislations: [],
    interests: []
}

const API = `http://localhost:8088`
const mainContainer = document.querySelector("#container")

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.politicians = [...data]
            }
        )
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.corporations = [...data]
            }
        )
}

export const fetchPacs = () => {
    return fetch(`${API}/pacs`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.pacs = [...data]
            }
        )
}

export const fetchCorporateDonations = () => {
    return fetch(`${API}/corporatedonations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.corporatedonations = [...data]
            }
        )
}

export const fetchPacDonations = () => {
    return fetch(`${API}/pacdonations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.pacdonations = [...data]
            }
        )
}

export const fetchCorporateInterests = () => {
    return fetch(`${API}/corporateinterests`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.corporateinterests = [...data]
            }
        )
}

export const fetchLegislations = () => {
    return fetch(`${API}/legislations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.legislations = [...data]
            }
        )
}

export const fetchPoliticianLegislations = () => {
    return fetch(`${API}/politicianlegislations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.politicianlegislations = [...data]
            }
        )
}

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.interests = [...data]
            }
        )
}

export const getPoliticians = () => {
    return applicationState.politicians.map(politician => ({ ...politician }))
}

export const getCorporations = () => {
    return applicationState.corporations.map(corporation => ({ ...corporation }))
}

export const getPacs = () => {
    return applicationState.pacs.map(pac => ({ ...pac }))
}

export const getCorporateDonations= () => {
    return applicationState.corporatedonations.map(donation => ({ ...donation }))
}

export const getPacDonations = () => {
    return applicationState.pacdonations.map(donation => ({ ...donation }))
}

export const getCorporateInterests = () => {
    return applicationState.corporateinterests.map(cI => ({ ...cI }))
}

export const getLegislations = () => {
    return applicationState.legislations.map(legislation => ({ ...legislation }))
}

export const getPoliticianLegislations = () => {
    return applicationState.politicianlegislations.map(pI => ({ ...pI }))
}

export const getInterests = () => {
    return applicationState.interests.map(interest => ({ ...interest }))
}
