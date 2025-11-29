import axios from "axios";

const API_KEY = "AIzaSyC3KSwEIOYolnmZaxjI6FCyx_Lamh8kTbw";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const ARCHITETANDO_VIDEOS = [
  {
    id: "hkql4S49N1A",
    title: "Ricardo Andalaft",
    defaultThumbnail: `https://img.youtube.com/vi/hkql4S49N1A/maxresdefault.jpg`,
  },
  {
    id: "Q3C8pd9fcto",
    title: "História da Padroeira de Santos",
    defaultThumbnail: `https://img.youtube.com/vi/Q3C8pd9fcto/maxresdefault.jpg`,
  },
  {
    id: "gdaGBWojVsc",
    title: "604 Paraciclo Unimonte",
    defaultThumbnail: `https://img.youtube.com/vi/gdaGBWojVsc/maxresdefault.jpg`,
  },
  {
    id: "_MZj07LHuGc",
    title: "Os Canais salvaram a cidade",
    defaultThumbnail: `https://img.youtube.com/vi/_MZj07LHuGc/maxresdefault.jpg`,
  },
  {
    id: "PCVg2gKeX_o",
    title: "Prédios tortos de Santos",
    defaultThumbnail: `https://img.youtube.com/vi/PCVg2gKeX_o/maxresdefault.jpg`,
  },
];

export const getArchitetandoVideos = async () => {
  try {
    const videoIds = ARCHITETANDO_VIDEOS.map((v) => v.id).join(",");

    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        id: videoIds,
        key: API_KEY,
      },
    });

    const videos = response.data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      viewCount: item.statistics.viewCount,
      url: `https://www.youtube.com/watch?v=${item.id}`,
    }));

    return videos;
  } catch (error) {
    console.error("Erro ao buscar vídeos do YouTube:", error);
    return ARCHITETANDO_VIDEOS.map((video) => ({
      id: video.id,
      title: video.title,
      description: "Vídeo educativo sobre arquitetura e história de Santos/SP",
      thumbnail: video.defaultThumbnail,
      publishedAt: "2024-01-01",
      viewCount: "0",
      url: `https://www.youtube.com/watch?v=${video.id}`,
      error: "Dados básicos. Configure sua YouTube API key para mais detalhes.",
    }));
  }
};

export const getVideoUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};
