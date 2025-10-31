/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useState } from "react";
import { Theme } from "../theme/Theme";

export interface ImageProps {
  src: string;
  title: string;
}
interface WebProviderProps {
  children: React.ReactNode;
}

interface webStructure {
  principalTitle: string;
  text: string;
  textInverted: string;
  textDestaque: string;
  background: string;
  invertedBackground:string;
}

interface ProviderValues {
  addImage: ({ src, title }: ImageProps) => string;
  image: { src: string; title: string }[];
  darkMode: () => void;
  isOn: boolean;
  webStructure: webStructure;
}
export const WebContext = createContext<ProviderValues>({
  addImage: () => "",
  image: [],
  darkMode() {},
  isOn: false,
  webStructure: {
    principalTitle: "",
    text: "",
    textInverted: "",
    textDestaque: "",
    background: "",
    invertedBackground:""
  },
});

export const WebProvider = ({ children }: WebProviderProps) => {
  const [image, setImage] = useState<ImageProps[]>([]);
  const [isOn, setIsOn] = useState(true);

  if (image.length === 0) {
    setImage([
      { src: "/imagensCarrosel/imagem1.png", title: "Sem imagem!" },
      { src: "/imagensCarrosel/imagem2.png", title: "Sem imagem!" },
      { src: "/imagensCarrosel/imagem1.png", title: "Sem imagem!" },
      { src: "/imagensCarrosel/imagem2.png", title: "Sem imagem!" },
    ]);
  }

  const addImage = useCallback(({ src, title }: ImageProps) => {
    setImage((prev) => [...prev, { src, title }]);
    return "Imagem adicionada com sucesso";
  }, []);

  const darkMode = () => setIsOn(!isOn);

  const theme = new Theme();

  const webStructure = {
    principalTitle: theme.Get_Light(isOn).black,
    text: theme.Get_Light(isOn).black,
    textInverted: theme.Get_Light(!isOn).black,
    textDestaque: theme.Get_WebPallete_Colors().green,
    background: theme.Get_Light(isOn).white,
    invertedBackground:theme.Get_Light(!isOn).white,
    darkButton:theme.Get_Light(isOn).white
  };

  const providerValues = {
    addImage,
    image,
    darkMode,
    isOn,
    webStructure,
  };

  return (
    <WebContext.Provider value={providerValues}>{children}</WebContext.Provider>
  );
};
