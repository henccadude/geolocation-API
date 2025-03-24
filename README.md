# 🌍 Geolocation & Reverse Geocoding with JavaScript

This project demonstrates how to get the user's current geographical location using the browser's built-in Geolocation API, and then retrieve location details (like country and city) using two different reverse geocoding APIs.

## 🚀 Features

- Uses `navigator.geolocation` to get the user's coordinates
- Fetches country and city info using:
  - [Nominatim (OpenStreetMap)](https://nominatim.openstreetmap.org/)
  - [BigDataCloud Reverse Geocoding API](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-client)
- Handles asynchronous operations with `async/await`
- Centralized error handling
- Example of making API requests in **parallel** using `Promise.all`

## 📦 APIs Used

### 1. Nominatim (OpenStreetMap)

- Free to use, no API key required
- Provides detailed address information based on coordinates

### 2. BigDataCloud

- Free tier available
- No API key needed for basic reverse geocoding
- Supports multiple languages (in this project: Finnish via `localityLanguage=fi`)

## 🔧 Usage

Just open the project in a modern browser that supports the Geolocation API (like Chrome or Firefox) and allow location access when prompted.
