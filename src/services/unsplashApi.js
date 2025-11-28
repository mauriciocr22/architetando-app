import axios from 'axios';

// Unsplash API configuration
const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Substituir pela sua chave
const BASE_URL = 'https://api.unsplash.com';

/**
 * Busca imagens de arquitetura histórica no Unsplash
 * @param {number} count - Número de imagens a buscar (padrão: 8)
 * @returns {Promise} Array de imagens
 */
export const getHistoricArchitectureImages = async (count = 8) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query: 'historic architecture restoration',
        per_page: count,
        orientation: 'portrait',
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    // Formata os dados retornados
    const images = response.data.results.map(item => ({
      id: `unsplash_${item.id}`,
      url: item.urls.regular,
      thumbnail: item.urls.small,
      description: item.description || item.alt_description || 'Arquitetura histórica',
      photographer: item.user.name,
      photographerUrl: item.user.links.html,
      source: 'unsplash',
    }));

    return images;
  } catch (error) {
    console.error('Erro ao buscar imagens do Unsplash:', error);
    // Retorna array vazio em caso de erro
    return [];
  }
};

/**
 * Imagens locais de obras da Architetando
 * Estas são as imagens na pasta assets/images
 */
export const getLocalImages = () => {
  return [
    {
      id: 'local_obra1',
      source: require('../../assets/images/obra1.png'),
      description: 'Obra de revitalização - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
    {
      id: 'local_obra1_2',
      source: require('../../assets/images/obra1-2.png'),
      description: 'Obra de revitalização - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
    {
      id: 'local_obra2',
      source: require('../../assets/images/obra2.png'),
      description: 'Obra de conservação - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
    {
      id: 'local_obra3',
      source: require('../../assets/images/obra3.png'),
      description: 'Obra de restauração - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
    {
      id: 'local_obra3_2',
      source: require('../../assets/images/obra3-2.png'),
      description: 'Obra de restauração - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
    {
      id: 'local_obra4',
      source: require('../../assets/images/obra4.png'),
      description: 'Adaptação de edifício histórico - Architetando',
      photographer: 'Architetando',
      type: 'local',
    },
  ];
};

/**
 * Retorna todas as imagens (locais + Unsplash)
 */
export const getAllGalleryImages = async () => {
  try {
    const localImages = getLocalImages();
    const unsplashImages = await getHistoricArchitectureImages(6);

    // Combina imagens locais com imagens do Unsplash
    return [...localImages, ...unsplashImages];
  } catch (error) {
    console.error('Erro ao carregar galeria:', error);
    // Retorna apenas imagens locais em caso de erro
    return getLocalImages();
  }
};
