# 🔄 Limpar Todos os Caches - Android

Se você está enfrentando o erro **"java.lang.String cannot be cast to java.lang.Boolean"**, siga TODOS estes passos para limpar completamente o cache:

## 🧹 Passo 1: Limpar Cache do Android Studio

### Opção A - Pelo Android Studio:
1. Abra o Android Studio
2. Vá em **Build** → **Clean Project**
3. Depois **Build** → **Rebuild Project**

### Opção B - Manual (no terminal):
```bash
cd architetando-app
cd android
./gradlew clean
cd ..
```

## 🧹 Passo 2: Limpar Cache do Metro Bundler

```bash
cd architetando-app
npx expo start --clear
```

OU

```bash
npx react-native start --reset-cache
```

## 🧹 Passo 3: Limpar node_modules e reinstalar

```bash
cd architetando-app
rm -rf node_modules
rm package-lock.json
npm install
```

## 🧹 Passo 4: Limpar pasta android/build (se existir)

```bash
cd architetando-app
rm -rf android/build
rm -rf android/app/build
```

## 🧹 Passo 5: Limpar cache global do npm

```bash
npm cache clean --force
```

## 🧹 Passo 6: Desinstalar o app do dispositivo/emulador

No dispositivo Android ou emulador:
1. Vá em Configurações → Apps
2. Encontre "architetando-app" ou "Expo Go"
3. Toque em "Desinstalar" ou "Limpar dados"

## 🚀 Passo 7: Tentar rodar novamente

### Opção 1 - Expo Go:
```bash
cd architetando-app
npx expo start --clear
```

Depois escaneie o QR code com Expo Go

### Opção 2 - Build Nativo:
```bash
cd architetando-app
npx expo run:android --no-build-cache
```

## ⚡ Script Completo de Limpeza

Execute TUDO de uma vez:

```bash
cd architetando-app

# Limpar node_modules
rm -rf node_modules
rm package-lock.json

# Limpar cache do Android (se pasta android existir)
rm -rf android/build 2>/dev/null
rm -rf android/app/build 2>/dev/null

# Limpar cache do Metro
watchman watch-del-all 2>/dev/null || echo "Watchman não instalado (ok)"

# Limpar cache global
npm cache clean --force

# Reinstalar
npm install

# Iniciar com cache limpo
npx expo start --clear
```

## 🔍 Se o erro persistir

### Verifique se o problema está no código:

Execute este comando para ver se há algum valor incorreto:

```bash
# Procurar por possíveis strings em propriedades numéricas
grep -rn "fontSize.*['\"]" src/
grep -rn "width.*['\"]" src/
grep -rn "height.*['\"]" src/
```

Se encontrar algo como:
```javascript
// ❌ ERRADO
fontSize: "16"  // String
width: "100"    // String

// ✅ CORRETO
fontSize: 16    // Número
width: 100      // Número
```

## 💡 Outras Possíveis Causas

### 1. Versões incompatíveis
Certifique-se de estar usando as versões corretas:
```bash
npx expo install --check
```

### 2. Variáveis de ambiente
Limpe variáveis de ambiente:
```bash
unset ANDROID_HOME
export ANDROID_HOME=$HOME/Android/Sdk
```

### 3. Gradle daemon
Pare o daemon do Gradle:
```bash
cd android
./gradlew --stop
cd ..
```

## ✅ Checklist Final

Antes de rodar novamente, certifique-se de que:

- [ ] Limpou node_modules e reinstalou
- [ ] Limpou cache do Metro
- [ ] Limpou build do Android
- [ ] Desinstalou o app do dispositivo
- [ ] Não há erros de sintaxe no código
- [ ] babel.config.js existe e está correto
- [ ] app.json não tem flags experimentais (newArchEnabled, edgeToEdgeEnabled)

## 🎯 Teste Final

```bash
cd architetando-app
npm start -- --reset-cache
```

No Expo Go, escaneie o QR code e teste!

---

**Se o erro persistir mesmo após todos esses passos, tire um novo screenshot do erro completo (com stack trace) para análise mais profunda.**
