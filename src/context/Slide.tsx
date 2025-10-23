/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useCallback, useState } from "react";

export interface ImageProps {
  src: string;
  title: string;
}
interface SlideProviderProps {
  children: React.ReactNode;
}
interface ProviderValues {
  addImage: ({ src, title }: ImageProps) => string;
  image: { src: string; title: string }[];
}
export const SlideContext = createContext<ProviderValues>({
  addImage: () => "",
  image: [],
});

export const SlideProvider = ({ children }: SlideProviderProps) => {
  const [image, setImage] = useState<ImageProps[]>([]);

  if(image.length === 0){
    setImage([
        {src: "", title: "Sem imagem!"},
    ])
  }
  
  const addImage = useCallback(({ src, title }: ImageProps) => {
    setImage((prev) => [...prev, { src, title }]);
    return "Imagem adicionada com sucesso";
  }, []);

  const providerValues = {
    addImage,
    image,
  };

  return (
    <SlideContext.Provider value={providerValues}>
      {children}
    </SlideContext.Provider>
  );
};
