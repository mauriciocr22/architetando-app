# Configuração de APIs - Guia Rápido

Este arquivo mostra onde configurar cada API key no projeto.

## 1. OpenWeatherMap API (Tela Home)

**Arquivo:** `src/services/weatherApi.js`

```javascript
// Linha 4
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```

**Como obter:**
1. Acesse: https://openweathermap.org/api
2. Crie uma conta gratuita
3. Gere uma API key
4. Cole no arquivo acima

---

## 2. YouTube Data API (Tela Vídeos)

**Arquivo:** `src/services/youtubeApi.js`

```javascript
// Linha 4
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
```

**Como obter:**
1. Acesse: https://console.cloud.google.com/
2. Crie um novo projeto
3. Ative a "YouTube Data API v3"
4. Crie uma API Key em "Credenciais"
5. Cole no arquivo acima

---

## 3. Google Maps API (Tela Sobre)

**Arquivo (Web):** `src/screens/AboutScreen/index.js`

```javascript
// Linha 49 (dentro do iframe)
src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=...`}
```

**Como obter:**
1. Use o mesmo projeto do Google Cloud Console
2. Ative a "Maps Embed API"
3. Use a mesma API Key criada anteriormente
4. Substitua no arquivo acima

**Nota:** Para iOS/Android nativos, o MapView funciona sem configuração adicional.

---

## 4. Unsplash API (Tela Galeria)

**Arquivo:** `src/services/unsplashApi.js`

```javascript
// Linha 4
const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
```

**Como obter:**
1. Acesse: https://unsplash.com/developers
2. Crie uma conta
3. Registre um novo aplicativo
4. Copie seu "Access Key"
5. Cole no arquivo acima

---

## Testando sem API Keys

O app funciona sem configurar as API keys! Ele mostrará:

- **Clima:** Dados mockados (25°C, parcialmente nublado)
- **Vídeos:** Informações básicas dos vídeos (sem estatísticas)
- **Mapa:** Iframe do Google Maps (pode ter marca d'água)
- **Galeria:** Apenas as imagens locais das obras

Para apresentação acadêmica, isso é suficiente!

---

## URLs Rápidas

- OpenWeatherMap: https://openweathermap.org/api
- Google Cloud Console: https://console.cloud.google.com/
- Unsplash Developers: https://unsplash.com/developers

---

**Dica:** Mantenha suas API keys privadas! Não commite arquivos com keys reais no Git.
