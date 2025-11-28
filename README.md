# Architetando App

Aplicativo mobile desenvolvido em React Native para a **Architetando Cursos de Arquitetura**, empresa especializada em patrimônio histórico, restauração e educação em arquitetura, localizada no Centro Histórico de Santos/SP.

## 📱 Sobre o Projeto

Este é um aplicativo acadêmico que apresenta a empresa Architetando, seus cursos e vídeos educativos sobre arquitetura e história de Santos. O app foi desenvolvido seguindo os requisitos do projeto acadêmico, implementando navegação, APIs e AsyncStorage.

### Funcionalidades

- **Home**: Apresentação da empresa com widget de clima de Santos/SP
- **Vídeos**: Lista de vídeos educativos do YouTube com opção de favoritar
- **Sobre**: Informações da empresa com mapa de localização
- **Galeria**: Obras de revitalização da empresa + imagens inspiradoras

## 🛠 Tecnologias Utilizadas

- **React Native** com **Expo**
- **React Navigation** (Bottom Tabs)
- **AsyncStorage** para favoritos
- **Axios** para requisições HTTP
- **Linking API** para integração com Google Maps

### APIs Integradas

1. **OpenWeatherMap API** - Clima de Santos/SP (Tela Home)
2. **YouTube Data API** - Detalhes dos vídeos educativos (Tela Vídeos)
3. **Google Maps API** - Localização da empresa (Tela Sobre)
4. **Unsplash API** - Imagens complementares de arquitetura (Tela Galeria)

## 📋 Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Expo CLI** (instalado globalmente)

```bash
npm install -g expo-cli
```

## 🚀 Instalação

1. **Clone o repositório** (ou extraia os arquivos):

```bash
git clone <url-do-repositorio>
cd architetando-app
```

2. **Instale as dependências**:

```bash
npm install
```

## 🔑 Configuração das API Keys

Para funcionalidade completa, você precisa configurar as chaves de API nos seguintes arquivos:

### 1. OpenWeatherMap API

- Crie uma conta gratuita em: https://openweathermap.org/api
- Obtenha sua API key
- Edite o arquivo `src/services/weatherApi.js`:

```javascript
const API_KEY = 'SUA_API_KEY_AQUI';
```

### 2. YouTube Data API

- Acesse: https://console.cloud.google.com/
- Crie um novo projeto
- Ative a "YouTube Data API v3"
- Crie credenciais (API Key)
- Edite o arquivo `src/services/youtubeApi.js`:

```javascript
const API_KEY = 'SUA_YOUTUBE_API_KEY_AQUI';
```

### 3. Google Maps API

**Para Web (Expo Web):**
- No mesmo projeto do Google Cloud Console
- Ative a "Maps Embed API"
- Edite o arquivo `src/screens/AboutScreen/index.js` (linha do iframe):

```javascript
src={`https://www.google.com/maps/embed/v1/place?key=SUA_GOOGLE_MAPS_KEY&q=...`}
```

**Para Mobile (iOS/Android):**
- Não requer configuração adicional (usa MapView nativo)

### 4. Unsplash API

- Crie uma conta em: https://unsplash.com/developers
- Registre um novo aplicativo
- Obtenha seu Access Key
- Edite o arquivo `src/services/unsplashApi.js`:

```javascript
const ACCESS_KEY = 'SEU_UNSPLASH_ACCESS_KEY_AQUI';
```

**Nota:** O app funciona sem as API keys, mas mostrará dados mockados ou limitados.

## ▶️ Como Executar

### Expo Go (Mobile)

1. Instale o app **Expo Go** no seu celular:
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Inicie o projeto:

```bash
npm start
```

3. Escaneie o QR code com a câmera (iOS) ou com o app Expo Go (Android)

### Expo Web (Navegador)

Para demonstração em vídeo ou testes no navegador:

```bash
npm run web
```

O app abrirá automaticamente em `http://localhost:19006`

### iOS Simulator (macOS)

```bash
npm run ios
```

### Android Emulator

```bash
npm run android
```

## 📁 Estrutura do Projeto

```
architetando-app/
├── assets/
│   └── images/              # Logos e fotos de obras
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header/
│   │   ├── VideoCard/
│   │   ├── ImageCard/
│   │   └── WeatherWidget/
│   ├── screens/             # Telas do aplicativo
│   │   ├── HomeScreen/
│   │   ├── VideosScreen/
│   │   ├── AboutScreen/
│   │   └── GalleryScreen/
│   ├── services/            # Serviços de API e storage
│   │   ├── weatherApi.js
│   │   ├── youtubeApi.js
│   │   ├── unsplashApi.js
│   │   └── storage.js
│   ├── navigation/          # Configuração de navegação
│   │   └── AppNavigator.js
│   └── constants/           # Constantes (cores, etc)
│       └── colors.js
├── App.js                   # Componente principal
└── package.json
```

## 🎨 Design

- **Cor principal**: `#000330` (azul marinho escuro)
- **Tema**: Claro/White
- **Estilo**: Minimalista e profissional

## 📝 Funcionalidades Implementadas

### ✅ Requisitos Atendidos

- [x] **Navegação**: Bottom Tabs Navigator com 4 telas
- [x] **AsyncStorage**: Favoritos de vídeos e imagens
- [x] **4 APIs diferentes**: Uma por tela
  - Home: OpenWeatherMap
  - Vídeos: YouTube Data API
  - Sobre: Google Maps
  - Galeria: Unsplash API
- [x] **Componentes reutilizáveis** com separação de estilos
- [x] **Loading states** durante carregamento de APIs
- [x] **Tratamento de erros** nas chamadas de API
- [x] **Fallback de dados** quando API não disponível

### 📱 Telas

#### 1. Home
- Apresentação da empresa
- Logo da Architetando
- Widget de clima de Santos/SP
- Cards de navegação rápida

#### 2. Vídeos
- Lista de 5 vídeos do YouTube da empresa
- Thumbnail, título e descrição
- Botão de favoritar (estrela)
- Ao clicar, abre vídeo no YouTube
- Indicador visual de favoritos

#### 3. Sobre
- Informações sobre a empresa
- Mapa interativo (Google Maps)
- Endereço e contatos clicáveis
- Informações sobre parcerias

#### 4. Galeria
- Grid 2 colunas de imagens
- 6 fotos locais de obras da empresa
- Imagens complementares do Unsplash
- Botão de favoritar cada imagem
- Créditos do fotógrafo

## 🎥 Vídeos Incluídos

Os seguintes vídeos da Architetando estão integrados no app:

1. Ricardo Andalaft
2. História da Padroeira de Santos
3. 604 Paraciclo Unimonte
4. Os Canais salvaram a cidade
5. Prédios tortos de Santos

## 🐛 Resolução de Problemas

### Erro ao carregar imagens SVG

Se houver erro ao carregar os logos SVG no Expo Web, instale:

```bash
npm install react-native-svg
```

### Erro no MapView (Expo Web)

O MapView usa iframe no Expo Web. Certifique-se de ter configurado a Google Maps API key no componente AboutScreen.

### AsyncStorage não funciona

Certifique-se de que o pacote foi instalado:

```bash
npm install @react-native-async-storage/async-storage
```

## 📧 Contato

**Architetando Cursos de Arquitetura**

- 📍 Praça Visc. de Mauá, 29 - sala 422 - Centro, Santos/SP
- 📞 (13) 99137-0528
- 🌐 www.architetando.com.br

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.

---

Desenvolvido com React Native + Expo para a Architetando 🏛️
