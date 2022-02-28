const PATIENT_DATA_URL = "./MH-Score-Visualizer.json"

export const fetchPatientData = async () => {
    try {
        const response = await fetch(PATIENT_DATA_URL);
        const json = await response.json();
        return patientDataByName(json)
    } catch (error) {
        console.log("error", error);
    }
};

/*
    create map of patient data from array of patient data
*/
const patientDataByName = (data) => {
    let map = {};

    data.forEach(entry => {
        let patientName = entry['Patient Name'];

        if (patientName in map) {
            map[patientName].push(entry);
        } else {
            map[patientName] = [];
        }
    })

    return map;
}
