import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

const useRandomDate = () => {
  const [randomDate, setRandomDate]= useState(0)
  useEffect(() =>{
    const randomDate =
      new Date(2020, 0, 1).getTime() +
      Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime());

    setRandomDate(randomDate)  
  },[])

  const contentDate = formatDistanceToNow(randomDate, {
    locale: ptBR,
    addSuffix: true,
  });
  const titleDate = format(randomDate, "d 'de' MMMM 'de' yyyy 'às' p", {
    locale: ptBR,
  });

  return { contentDate, titleDate };
};

export default useRandomDate;
