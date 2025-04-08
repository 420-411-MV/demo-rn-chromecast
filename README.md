# demo-rn-chromecast (dbillnatcast) (Android)

## Installation git

Git doit être installé sur votre poste.

## Vérifier si npm est installé.

    npm -v

## Installer les libs (voir info dans package.json)

    npm i

# Ajout du keystore file debug.keystore

Si vous avez cette erreur lors de commande : npx expo run:android

Erreur: Task :app:validateSigningDebug FAILED

Aller dans ./android/app

    keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

# Rendre le gradlew dans ./android exécutable

    chmod +x ./android/gradlew


## Validation de Java (23 ou moins)

    java -version

La version de Java doit être 17 idéalement.

# Ajout ANDROID_HOME

Pour Windows
set ANDROID_HOME=C:/Android/SDK

Pour Linux, installer le Android-SDK et le SDK 26.0.10792817 :

    sudo apt-get install android-sdk

    export ANDROID_HOME="/usr/lib/android-sdk"

# Ajout des commandes dans le PATH (pour Linux seulement)

    export PATH="${PATH}:${ANDROID_HOME}/platform-tools/"

# Build avec connexion WIFI pour Android

Télécharger Wireless ADB sur votre téléphone

Activez le WIFI Debug sur votre cellulaire et accepter le réseau MV_DC_TEST

Sur le serveur distant, connectez-vous sur celui-ci avec la commande

    adb pair ipdutelephone:portpairing

# Builder localement iOS

    npx expo run:ios --device

# Si application est déjà buildé et que npx expo est en erreur

Repartez l'application expo (start).

    npx expo start

Puis démarrer votre application sur votre téléphone.

Entrez manuellement l'ip écrit à l'écran (192.168.0.X)




# Configuration

1. Donwgrader les versions à ceux qui ont été testés officiellement par les devs de **react-native-google-cast** cast react

   "expo": "~51.0.20",
   "expo-build-properties": "~0.12.3",
   "expo-dev-client": "~4.0.20",
   "expo-status-bar": "~1.12.1",
   "react": "18.2.0",
   "react-native": "0.74.5",
   "react-native-google-cast": "4.8.2"

2. Utilisez **expo-dev-client** et non expo go
