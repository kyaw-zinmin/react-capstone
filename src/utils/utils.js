export const checkIfFileExists = async (path) => {
  try{
    const response = await fetch(path, {method: 'HEAD'});
    return response.ok;
  } catch (err){
    return false;
  }
};