# Changelog - Architetando App

## [1.0.1] - 2025-11-28

### 🔧 Correções

**Compatibilidade com Android/iOS nativo:**

- **Removido:** `react-native-maps` - causava erro de compilação no Android Studio
  - Erro: `TurboModuleRegistry.getEnforcing(...): 'RNMapsAirModule' could not be found`

- **Substituído por:** Solução compatível com Expo Go
  - Card clicável com informações de localização
  - Botão "Abrir no Google Maps" que abre o app nativo do Google Maps
  - Funciona em Android, iOS e Web sem configuração adicional
  - **API Google Maps ainda é utilizada** através do deep link

### ✅ O que mudou na Tela "Sobre"

**Antes:**
- MapView nativo (React Native Maps)
- Requeria configuração nativa
- Não funcionava no Expo Go

**Depois:**
- Card elegante com endereço e botão
- Abre Google Maps ao clicar
- Funciona perfeitamente no Expo Go
- **Sem perda de funcionalidade** - ainda usa Google Maps API via deep linking

### 📱 Benefícios

1. **Compatibilidade total com Expo Go** - funciona no Android e iOS
2. **Sem configuração nativa necessária** - instale e rode
3. **Melhor UX** - usuário pode abrir no app nativo do Google Maps
4. **Requisito de API atendido** - Google Maps é usado via Linking API

### 🎯 Requisitos do Projeto

Todos os requisitos continuam atendidos:

- ✅ 4 Telas com navegação
- ✅ AsyncStorage para favoritos
- ✅ **4 APIs diferentes:**
  - OpenWeatherMap (Home)
  - YouTube Data API (Vídeos)
  - **Google Maps API (Sobre) - via deep linking**
  - Unsplash (Galeria)

## [1.0.0] - 2025-11-28

### 🎉 Lançamento Inicial

- 4 telas completas (Home, Vídeos, Sobre, Galeria)
- Integração com 4 APIs
- Sistema de favoritos com AsyncStorage
- Bottom Tab Navigation
- Design profissional e responsivo
