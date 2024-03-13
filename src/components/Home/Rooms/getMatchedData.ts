
// interface ObjectType {
//     id: string;  
// }

export const getMatchedData = (id: string, array: any[]) => {
 
  return  array?.find(obj => obj._id === id);
    
}

