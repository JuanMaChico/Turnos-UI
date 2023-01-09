import request from "../utils/request"

export const getAppointments = async (employee = null) => {
    try {

        return await request.post('http://localhost:3000/api/v1/appointments/getCalendar');
        

    } catch(error) {
        console.log(error);
        return error;
    }
}

export const getEmployees = async (store) => {
    try {

        return await request.post("http://localhost:3000/api/v1/appointments/getEmployees", store)
    } catch(error) {
        console.log(error)
    }
}