import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const useRandomDate = () => {
  const randomDate =
    new Date(2020, 0, 1).getTime() +
    Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime());

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
