# RNProductsApp

A simple React Native shopping app to browse products, view details, and manage a cart. Uses Redux for state management and `lucide-react-native` for icons.

## Description

RNProductsApp fetches products from the Fake Store API and displays them in a list with pull-to-refresh. Users can view product details and add/remove items from a cart. The app uses Redux Toolkit for managing product and cart data, and `lucide-react-native` for clean icons (star, cart, trash).

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sa1nick/RNProductsApp.git
   cd RNProductsApp
   ```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
