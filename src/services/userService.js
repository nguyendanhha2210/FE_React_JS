import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
}

const createNewUserService = (data) => {
    return axios.post(`/api/create-user`, data);
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId,
        }
    });
}

const editUserService = (data) => {
    return axios.put(`/api/edit-user`, data);
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/all-codes?type=${inputData}`);
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/top-all-doctor`)
}

const saveDetailDoctors = (data) => {
    return axios.post(`/api/save-infor-doctor`, data)
}

export {
    handleLoginApi, getAllUsers, createNewUserService, deleteUserService,
    editUserService, getAllCodeService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctors
}