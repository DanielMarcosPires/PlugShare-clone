/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useCallback, useState } from "react";

export interface ImageProps {
  src: string;
  title: string;
}
interface WebProviderProps {
  children: React.ReactNode;
}
interface ProviderValues {
  addImage: ({ src, title }: ImageProps) => string;
  image: { src: string; title: string }[];
  darkMode:()=>void;
  isOn:boolean
}
export const WebContext = createContext<ProviderValues>({
  addImage: () => "",
  image: [],
  darkMode(){},
  isOn:false
});

export const WebProvider = ({ children }: WebProviderProps) => {
  const [image, setImage] = useState<ImageProps[]>([]);
  const [isOn, setIsOn] = useState(false);
  if(image.length === 0){
    setImage([
        {src: "", title: "Sem imagem!"},
    ])
  }
  
  const addImage = useCallback(({ src, title }: ImageProps) => {
    setImage((prev) => [...prev, { src, title }]);
    return "Imagem adicionada com sucesso";
  }, []);

  
  const darkMode = () => setIsOn(!isOn);
  
  const providerValues = {
    addImage,
    image,
    darkMode,
    isOn
  };

  return (
    <WebContext.Provider value={providerValues}>
      {children}
    </WebContext.Provider>
  );
};
