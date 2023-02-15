import React,{createContext,useState} from "react";
export const context = createContext();
export function provider({children}){
    const [data,SetData] = useState({});
    const updateData = (newData) => {
        setData(newData);
      };
    
      return (
        <context.provider value={{ data, updateData }}>
          {children}
        </context.provider>
      );
    }