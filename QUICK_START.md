# 🚀 Quick Start - Architetando App

## Comandos Rápidos

### 1. Instalar Dependências
```bash
cd architetando-app
npm install
```

### 2. Rodar o App

**Expo Web (Para gravação de vídeo):**
```bash
npm run web
```
Abre em: http://localhost:19006

**Expo Go (Mobile):**
```bash
npm start
```
Escaneie o QR code com o app Expo Go

**iOS Simulator:**
```bash
npm run ios
```

**Android Emulator:**
```bash
npm run android
```

## ✅ Checklist de Apresentação

### Requisitos Atendidos

- [x] **4 Telas** implementadas e funcionais
  - Home (Apresentação + Clima)
  - Vídeos (Lista de vídeos educativos)
  - Sobre (Info da empresa + Mapa)
  - Galeria (Obras + Imagens)

- [x] **Navegação**: Bottom Tab Navigator
- [x] **AsyncStorage**: Favoritos (vídeos e imagens)
- [x] **4 APIs diferentes**:
  - OpenWeatherMap (Home)
  - YouTube Data API (Vídeos)
  - Google Maps (Sobre)
  - Unsplash (Galeria)

- [x] **Design limpo e profissional**
  - Cor principal: #000330
  - Tema claro/white
  - Componentes organizados

- [x] **Funciona no Expo Web**

### Funcionalidades Principais

1. **Home Screen**
   - Apresentação da empresa
   - Widget de clima de Santos/SP em tempo real
   - Cards de navegação rápida

2. **Vídeos Screen**
   - 5 vídeos educativos do YouTube
   - Favoritar vídeos (AsyncStorage)
   - Abrir vídeo no YouTube ao clicar

3. **Sobre Screen**
   - Informações da empresa
   - Mapa interativo (Google Maps)
   - Contatos clicáveis
   - Endereço da empresa

4. **Galeria Screen**
   - 6 imagens locais de obras
   - Imagens complementares do Unsplash
   - Favoritar imagens (AsyncStorage)
   - Grid 2 colunas

## 📱 Testando Funcionalidades

### AsyncStorage (Favoritos)
1. Vá na tela "Vídeos" ou "Galeria"
2. Clique na estrela ☆ de um item
3. A estrela fica preenchida ★
4. Feche e abra o app novamente
5. Os favoritos permanecem salvos

### APIs
- **Clima**: Aparece automaticamente na Home
- **Vídeos**: Carregam com thumbnails e detalhes
- **Mapa**: Mostra localização da empresa na tela Sobre
- **Imagens**: Galeria carrega imagens do Unsplash

## 🎥 Gravando Demonstração

### Melhor opção: Expo Web
```bash
npm run web
```

**Dicas para gravação:**
1. Use Chrome em tela cheia
2. Abra as DevTools (F12) e ative o modo mobile
3. Escolha "iPhone 12 Pro" ou "Pixel 5"
4. Grave mostrando:
   - Home com clima
   - Navegação entre telas
   - Favoritar um vídeo
   - Favoritar uma imagem
   - Interação com o mapa

## 🔧 Configuração de APIs (Opcional)

O app funciona sem configurar APIs! Mostrará dados mockados.

Para dados reais, edite:
- `src/services/weatherApi.js` - linha 4
- `src/services/youtubeApi.js` - linha 4
- `src/services/unsplashApi.js` - linha 4
- `src/screens/AboutScreen/index.js` - linha 49

Veja `API_CONFIG_EXAMPLE.md` para detalhes.

## 📊 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── screens/          # 4 telas do app
├── services/         # APIs e AsyncStorage
├── navigation/       # Navegação (Tabs)
└── constants/        # Cores e constantes
```

## 🐛 Solução de Problemas

**Erro "metro bundler":**
```bash
npm start -- --reset-cache
```

**Erro de dependências:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Porta em uso:**
```bash
npx kill-port 19000
npm run web
```

## 📝 Informações da Empresa

**Architetando Cursos de Arquitetura**
- Endereço: Praça Visc. de Mauá, 29 - sala 422 - Centro, Santos/SP
- Telefone: (13) 99137-0528
- Site: www.architetando.com.br
- Foco: Patrimônio histórico e restauração

## 🎓 Projeto Acadêmico

Desenvolvido como projeto acadêmico demonstrando:
- Integração com múltiplas APIs
- Navegação entre telas
- Persistência de dados local
- Design responsivo e profissional
- Boas práticas de React Native

---

**Pronto para apresentar!** 🎉
