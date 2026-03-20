import axios from "axios";

const mealDbApi = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const fetchMealByName = async (name) => {
  try {
    const response = await mealDbApi.get(`/search.php?s=${name}`);
    return response?.data?.meals || [];
  } catch {
    return [];
  }
};

export const fetchAllAreas = async () => {
  try {
    const response = await mealDbApi.get("/list.php?a=list");
    return response?.data?.meals || [];
  } catch {
    return [];
  }
};

export const fetchMealsByArea = async (area) => {
  try {
    const response = await mealDbApi.get(`/filter.php?a=${area}`);
    return response?.data?.meals || [];
  } catch {
    return [];
  }
};

export default mealDbApi;
