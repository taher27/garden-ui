const URL = "http://localhost:3030";
const challan_url = `${URL}/challan`;
const inventory_url = `${URL}/inventory`;

// Challan
export const getAllChallanData = `${challan_url}`;
export const getChallanDataById = `${challan_url}/id`;
export const addChallanData = `${challan_url}/add`;
export const editChallanData = `${challan_url}/edit`;
export const deleteChallanData = `${challan_url}/delete`;

// Inventory
export const getAllInventoryData = `${inventory_url}`;
export const getInventoryDataById = `${inventory_url}/id`;
export const addInventoryData = `${inventory_url}/add`;
export const editInventoryData = `${inventory_url}/edit`;
export const deleteInventoryData = `${inventory_url}/delete`;
