import data from "./logements.json" with {type: "json"};

function getLogementById(id) {
    const logement = data.find((item) => item.id === id);
    return logement;
}

function getAllLogements() {
    return data;
}

export {data as logementsData, getLogementById, getAllLogements};
