const colorThemes = {
  light: {
    colors: {
      background: "#FFFFFF",
      neutral: {
        n_1: "#263238",
        n_2: "#4D4D4D",
        n_3: "#717171",
        n_4: "#89939E",
        n_5: "#ABBED1",
        n_6: "#F5F7FA",
        n_7: "#FFFFFF",
      },
      primary: "#28CB8B",
      secondary: "#263238",
      info: "#2194f3",
      shade: {
        s_1: "#43A046",
        s_2: "#388E3B",
        s_3: "#237D31",
        s_4: "#1B5E1F",
        s_5: "#103E13",
      },
      tint: {
        t_1: "#66BB69",
        t_2: "#81C784",
        t_3: "#A5D6A7",
        t_4: "#C8E6C9",
        t_5: "#E8F5E9",
      },
      action: {
        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
      },
    },
  },
  dark: {
    colors: {
      background: "#121212",
      neutral: {
        n_1: "#E0E0E0",
        n_2: "#BDBDBD",
        n_3: "#9E9E9E",
        n_4: "#757575",
        n_5: "#616161",
        n_6: "#424242",
        n_7: "#212121",
      },
      primary: "#1DE9B6",
      secondary: "#E0E0E0",
      info: "#64B5F6",
      shade: {
        s_1: "#00E676",
        s_2: "#00C853",
        s_3: "#00B248",
        s_4: "#007B33",
        s_5: "#004D1A",
      },
      tint: {
        t_1: "#69F0AE",
        t_2: "#B9F6CA",
        t_3: "#CCFF90",
        t_4: "#F1F8E9",
        t_5: "#E0F7FA",
      },
      action: {
        warning: "#FFEB3B",
        error: "#FF5252",
        success: "#00E676",
      },
    },
  },
  highContrast: {
    colors: {
      background: "#000000",
      neutral: {
        n_1: "#FFFFFF",
        n_2: "#F5F5F5",
        n_3: "#EEEEEE",
        n_4: "#E0E0E0",
        n_5: "#BDBDBD",
        n_6: "#9E9E9E",
        n_7: "#757575",
      },
      primary: "#FFFF00", // Amarelo brilhante para contraste
      secondary: "#FFFFFF",
      info: "#00FFFF", // Ciano para contraste
      shade: {
        s_1: "#FFD700", // Ouro
        s_2: "#FF8C00", // Laranja escuro
        s_3: "#FF4500", // Laranja avermelhado
        s_4: "#FF0000", // Vermelho
        s_5: "#8B0000", // Vermelho escuro
      },
      tint: {
        t_1: "#FFFFE0", // Amarelo claro
        t_2: "#FFFACD", // Limão claro
        t_3: "#FAFAD2", // Dourado claro
        t_4: "#FFEFD5", // PapayaWhip
        t_5: "#FFF5EE", // SeaShell
      },
      action: {
        warning: "#FFD700", // Ouro
        error: "#FF0000", // Vermelho
        success: "#00FF00", // Verde brilhante
      },
    },
  },
  inverted: {
    colors: {
      background: "#FFFFFF",
      neutral: {
        n_1: "#FFFFFF",
        n_2: "#F5F5F5",
        n_3: "#EEEEEE",
        n_4: "#E0E0E0",
        n_5: "#BDBDBD",
        n_6: "#9E9E9E",
        n_7: "#757575",
      },
      primary: "#FF4081", // Rosa brilhante para contraste
      secondary: "#000000",
      info: "#2979FF", // Azul brilhante
      shade: {
        s_1: "#FF80AB", // Rosa claro
        s_2: "#FF4081", // Rosa brilhante
        s_3: "#F50057", // Rosa escuro
        s_4: "#C51162", // Rosa mais escuro
        s_5: "#880E4F", // Vinho
      },
      tint: {
        t_1: "#FFCDD2", // Rosa claro
        t_2: "#F8BBD0", // Rosa suave
        t_3: "#E1BEE7", // Lilás claro
        t_4: "#D1C4E9", // Lilás suave
        t_5: "#C5CAE9", // Azul claro
      },
      action: {
        warning: "#FFAB00", // Laranja brilhante
        error: "#D50000", // Vermelho escuro
        success: "#00C853", // Verde brilhante
      },
    },
  },
};

const textSizeThemes = {
  normal: {
    typography: {
      lineHeight: "1.5",
      header: {
        h_1: "32px",
        h_2: "28px",
        h_3: "24px",
        h_4: "20px",
      },
      regular: {
        r_1: "16px",
        r_2: "14px",
        r_3: "12px",
        r_4: "10px",
      },
      medium: {
        m_1: "18px",
        m_2: "16px",
        m_3: "14px",
        m_4: "12px",
      },
    },
  },
  large: {
    typography: {
      lineHeight: "1.6",
      header: {
        h_1: "40px",
        h_2: "36px",
        h_3: "32px",
        h_4: "28px",
      },
      regular: {
        r_1: "20px",
        r_2: "18px",
        r_3: "16px",
        r_4: "14px",
      },
      medium: {
        m_1: "22px",
        m_2: "20px",
        m_3: "18px",
        m_4: "16px",
      },
    },
  },
  extraLarge: {
    typography: {
      lineHeight: "1.8",
      header: {
        h_1: "48px",
        h_2: "44px",
        h_3: "40px",
        h_4: "36px",
      },
      regular: {
        r_1: "24px",
        r_2: "22px",
        r_3: "20px",
        r_4: "18px",
      },
      medium: {
        m_1: "26px",
        m_2: "24px",
        m_3: "22px",
        m_4: "20px",
      },
    },
  },
};

export { colorThemes, textSizeThemes };
