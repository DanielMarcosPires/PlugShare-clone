interface lightProps {
  black: string;
  white: string;
  white2: string;
  white3: string;
}

interface darkProps {
  black: string;
  white: string;
  white2: string;
  white3: string;
}

interface webPalleteProps {
  red: string;
  yellow: string;
  green: string;
  blue: string;
}

export class Theme {
  private light: lightProps;
  private dark: darkProps;
  private WebPallete_Colors: webPalleteProps;

  constructor() {
    this.light = {
      black: "#000",
      white: "#fff",
      white2: "#f4f4f4",
      white3: "#D2D5D8",
    };
    this.dark = {
      black: "#fff",
      white: "#000",
      white2: "#121212",
      white3: "#2C2C2C",
    };
    this.WebPallete_Colors = {
      red: "#A51523",
      yellow: "#FFDB63",
      green: "#01C09A",
      blue: "#293A6F",
    };
  }

  public Get_WebPallete_Colors() {
    return this.WebPallete_Colors;
  }

  public Get_Light(value: boolean) {
    if (value) {
      return this.light;
    }
    return this.dark;
  }
}
