# demo-rn-chromecast (dbillnatcast) (Android)

## Installation git

Git doit être installé sur votre poste.

## Vérifier si npm est installé.

    npm -v

## Installer les libs (voir info dans package.json)

    npm i

## Installer expo via npm (si première fois)

    npm install react-native-devtools
    npx expo install expo-dev-client

## Ajout EAS-CLI (retrait du -g pour ubuntu si non root)

    npm install eas-cli

## Validation de Java

    java -version

La version de Java doit être 17 idéalement.

## SDK local via local.properties (dans ./android)

Dans votre répertoire ./android, ajoutez le fichier local.properties et remplacer la valeur par le path du SDK d'Android.
Validez la présence du répertoire et de son contenu ($ANDROID_HOME/ndk et $ANDROID_HOME/cmake).

NDK doit être 26.0.10792818
CMAKE doit être 3.22.1

    sdk.dir=C:/Users/Utilisateur/AppData/Local/Android/Sdk
    cmake.dir=C:/Users/Utilisateur/AppData/Local/Android/Sdk/cmake/3.22.1

# Ajout ANDROID_HOME

Pour Windows
set ANDROID_HOME=C:/Android/SDK

Pour Linux, installer le Android-SDK et le SDK 26.0.10792817 :

    sudo apt-get install android-sdk

    export ANDROID_HOME="/usr/lib/android-sdk"

# Ajout des commandes dans le PATH (pour Linux seulement)

    export PATH="${PATH}:${ANDROID_HOME}/tools/:${ANDROID_HOME}/platform-tools/":${ANDROID_HOME}/cmdline-tools/bin/"

# Installation des paquets NDK et cmake avec sdkmanager

    sdkmanager --sdk_root=$ANDROID_HOME --install "ndk;26.0.10792818"

    sdkmanager --sdk_root=$ANDROID_HOME --install "cmake;3.22.1"

# Build avec connexion WIFI pour Android

Télécharger Wireless ADB sur votre téléphone

Activez le WIFI Debug sur votre cellulaire et accepter le réseau MV_DC_TEST

Sur le serveur distant, connectez-vous sur celui-ci avec la commande

    adb pair ipdutelephone:portpairing

# Build et transfert de l'app en debug sur votre téléphone

    npx expo prebuild

# Build de l'application vers votre Android

    npx expo run:android

# Ajout du keystore file debug.keystore

Si vous avez cette erreur lors de commande : npx expo run:android

Erreur: Task :app:validateSigningDebug FAILED

Aller dans ./android/app

    keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

# Builder localement de nouveau

    npx expo run:android

# Si application est déjà buildé et que npx expo est en erreur

Repartez l'application expo (start).

    npx expo start

Puis démarrer votre application sur votre téléphone.

Entrez manuellement l'ip écrit à l'écran (192.168.0.X)

## Installer expo-dev-client

## Valider que expo est fonctionnel.

    npx expo start

## Installer eas-cli (qui va vous permettre de builder une image en ligne)

    npm install -g eas-cli

## Créer un compte expo.dev

Aller à https://expo.dev

## Login via la ligne de commande ici

    eas login

## Initialisé votre projet

    eas init

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

Pour l'installer expo-dev-client. (root)

    npx expo install expo-dev-client

3. Valider version expo
   npx expo -version
4. Valider version react-native
   npx react-native -v
5. Installer adb et valider les devices connectés sur la machine (ne fonctionne pas sous les postes des étudiants)
   adb devices

Installation sous Windows (ou utiliser ANDROID_HOME):
https://developer.android.com/tools/releases/platform-tools?hl=fr#downloads

Ajout de platform-tools dans le path de la machine (à partir de celui de ANDROID_HOME idéalement pour pas avoir de doublon)

## Prebuild (au début du projet seulement)

    npx expo prebuild

En cas d'erreur avec GRADLE, mettez à jour les permissions

    chmod 755 android/gradlew

## Ajoutez aussi les 2 versions NDK et CMake dans ./android/gradle.properties

    android.ndkVersion=26.0.10792818
    android.cmakeVersion=3.22.1

## Dans le fichier app.json

"newArchEnabled": false,

Si ça ne fonctionne pas. Annuler les autorisations, cliquez sur debug USB et recommencer.

# Autre ajout

## apt install -y ninja-build (ubuntu seulement)

## Formater code VS

Ajout extension
Prettier - Code Formater

CTRL + SHIFT + P

> Changement dans Preference : Open User Setting (JSON)
> "editor.formatOnSave": true,

Ensuite, choisir Prettier comme formater par défaut.

## Auto rename tag

Cette extension permet de rennomer le tag à la fin lors du renommage.

## Ajout de la lib pour empêcher la barre de statut soit encombrée.

    npm i react-native-safe-area-context

## Ajout de la lib pour svg

    npm install react-native-svg

    npm install --save-dev react-native-svg-transformer

Ensuite, utiliser un import pour vos svg avec xml

    import { SvgXml } from 'react-native-svg';

## Nettoyer le répertoire android

    cd android
    ./gradlew clean
    cd ..
