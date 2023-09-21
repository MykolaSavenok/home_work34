export const addProduct = (caption, amount) => ({
   type: "ADD_PRODUCT",
   payload: { caption, amount },
 });
 
 export const editProduct = (id, caption, amount) => ({
   type: "EDIT_PRODUCT",
   payload: { id, caption, amount },
 });
 
 export const removeProduct = (id) => ({
   type: "REMOVE_PRODUCT",
   payload: { id },
 });
