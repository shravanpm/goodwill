export const baseUrl = "http://localhost:5000/api/";

export const loadData = (key) => {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    return "";
  }
};

export const saveData = (key, data = "") => {
  localStorage.setItem(key, JSON.stringify(data));
};
