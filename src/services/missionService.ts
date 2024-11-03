import axios from 'axios';
const APIKEY : string =  import.meta.env.VITE_APIKEY || ""
const API_URL :string =  import.meta.env.VITE_API_URL+"/"+APIKEY  || "Didn't provide env";

export const getMissions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addMission = async (mission: any) => {
  const response = await axios.post(API_URL, mission);
  return response.data;
};

export const updateMission = async (id: string, mission: any) => {
  const response = await axios.put(`${API_URL}/${id}`, mission);
  return response.data;
};

export const deleteMission = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
export const progressMission = async(id:string)=>{
    const response = await axios.post(`${API_URL}/progress/${id}`)
    return response.data
}