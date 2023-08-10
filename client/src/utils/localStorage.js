export const getSavedDrinkIds = () => {
    const savedDrinkIds = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : [];
  
    return savedDrinkIds;
  };
  
  export const SAVE_DRINK = (drinkIdArr) => {
    if (drinkIdArr.length) {
      localStorage.setItem('save_drink', JSON.stringify(drinkIdArr));
    } else {
      localStorage.removeItem('saved_drink');
    }
  };
  
  export const removeDrinkId = (DrinkId) => {
    const savedDrinkIds = localStorage.getItem('save_drink')
      ? JSON.parse(localStorage.getItem('save_drink'))
      : null;
  
    if (!savedDrinkIds) {
      return false;
    }
  
    const updatedSavedDrinkIds = savedDrinkIds?.filter((savedDrinkId) => savedDrinkId !== DrinkId);
    localStorage.setItem('save_drink', JSON.stringify(updatedSavedDrinkIds));
  
    return true;
  };

  export const addDrinkIds = (DrinkId) => {
    const savedDrinkIds = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : null;
  
    if (!savedDrinkIds) {
      return false;
    }
  
    const updatedSavedDrinkIds = savedDrinkIds?.filter((savedDrinkId) => savedDrinkId !== DrinkId);
    localStorage.setItem('saved_drinks', JSON.stringify(updatedSavedDrinkIds));
  
    return true;
  };