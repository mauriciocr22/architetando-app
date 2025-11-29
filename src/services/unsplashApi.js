export const getLocalImages = () => {
  return [
    {
      id: "local_obra1",
      source: require("../../assets/images/obra1.png"),
      description: "Obra de revitalização - Architetando",
      photographer: "Architetando",
      type: "local",
    },
    {
      id: "local_obra1_2",
      source: require("../../assets/images/obra1-2.png"),
      description: "Obra de revitalização - Architetando",
      photographer: "Architetando",
      type: "local",
    },
    {
      id: "local_obra2",
      source: require("../../assets/images/obra2.png"),
      description: "Obra de conservação - Architetando",
      photographer: "Architetando",
      type: "local",
    },
    {
      id: "local_obra3",
      source: require("../../assets/images/obra3.png"),
      description: "Obra de restauração - Architetando",
      photographer: "Architetando",
      type: "local",
    },
    {
      id: "local_obra3_2",
      source: require("../../assets/images/obra3-2.png"),
      description: "Obra de restauração - Architetando",
      photographer: "Architetando",
      type: "local",
    },
    {
      id: "local_obra4",
      source: require("../../assets/images/obra4.png"),
      description: "Adaptação de edifício histórico - Architetando",
      photographer: "Architetando",
      type: "local",
    },
  ];
};

export const getAllGalleryImages = async () => {
  return getLocalImages();
};
