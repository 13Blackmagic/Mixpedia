const addData = (data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem('data', dataString);
  }
  
  const getData = () => {
    const dataString = localStorage.getItem('data');
    return JSON.parse(dataString);
  }
  
  const removeData = () => {
    localStorage.removeItem('data');
  }
  
  export { addData, getData, removeData };
  