# Web Scraping

<sup>[Scroll to Turkish Translation](#turkish-translation)</sup>

## Overview

This project is a full-stack web application built with Next.js and Express.js that allows users to explore and manage versions of popular mobile apps from platforms like Instagram, TikTok, Snapchat, and Facebook. The application leverages web scraping techniques to gather information from www.apkmirror.com and stores the data in MongoDB using Mongoose.

## Features

Platform Selection: Users can choose from various social media platforms (Instagram, TikTok, Snapchat, Facebook).
Version Listing: The 10 most recent versions of the selected platform are scraped and displayed.
Version Details: Users can click on a specific version to view its details and variants.
Variant Scraping: The application fetches and displays the variants of a selected version.
Database Integration: MongoDB is used to store version and variant data.
Deletion Functionality: Users can delete unwanted versions from the database.

## Technologies Used

### Frontend:

1. Next.js
2. Typescript
3. css Modules
4. Tailwind

### Backend:

1. Express.js
2. Typescript
3. MongoDB with Mongoose

### Scraping:

1.cheerio

## Getting Started

<hr>

1. [Node.js](https://nodejs.org/en/)
2. [Npm](https://www.npmjs.com)
3. [Git](https://git-scm.com/)
4. MongoDB installed and running
5. Docker and Docker Compose installed

# Installation With Docker

<hr>

1. Clone the repo

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Navigate to the project folder
   ```sh
   cd web-scraping
   ```
3. Build and run the Docker containers
   ```sh
   docker-compose up -d
   ```
4. Open the application in your web browser.
   Server: http://localhost:8000
   Client: http://localhost:3000
   <br>

# Installation Without Docker

<hr>

1. Clone the repo

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Install dependencies
   ```sh
   npm install
   ```
3. Run the server
   ```sh
   npm start
   ```
4. Run the client
   ```sh
   npm run build
   npm run start
   ```
5. Open the application in your web browser.
   Server: http://localhost:8000
   Client: http://localhost:3000
   <br>

## Usage

1. Open the application in your web browser.
2. Choose a social media platform.
3. Explore the latest versions and click on a version to see its details.
4. Delete versions as needed.

## Turkish Translation

## Genel Bakış

Bu proje, Instagram, TikTok, Snapchat ve Facebook gibi popüler mobil uygulama platformlarının sürümlerini keşfetmeye ve yönetmeye olanak tanıyan Next.js ve Express.js ile geliştirilmiş tam yığın bir web uygulamasıdır. Uygulama, www.apkmirror.com'dan bilgi toplamak için web kazıma tekniklerini kullanır ve verileri Mongoose kullanarak MongoDB'de depolar.

## Özellikler

- **Platform Seçimi:** Kullanıcılar çeşitli sosyal medya platformları arasından seçim yapabilirler (Instagram, TikTok, Snapchat, Facebook).
- **Sürüm Listeleme:** Seçilen platformun en son 10 sürümü kazınır ve görüntülenir.
- **Sürüm Detayları:** Kullanıcılar belirli bir sürüme tıklayarak detaylarını ve varyantlarını görebilirler.
- **Varyant Kazıma:** Uygulama, seçilen bir sürümün varyantlarını çeker ve görüntüler.
- **Veritabanı Entegrasyonu:** MongoDB, sürüm ve varyant verilerini depolamak için kullanılır.
- **Silme İşlevselliği:** Kullanıcılar istenmeyen sürümleri veritabanından silebilirler.

## Kullanılan Teknolojiler

### Frontend:

1. Next.js
2. TypeScript
3. CSS Modülleri
4. Tailwind

### Backend:

1. Express.js
2. TypeScript
3. MongoDB ve Mongoose

### Kazıma:

1. Cheerio

## Başlangıç

<hr>

1. [Node.js](https://nodejs.org/en/)
2. [Npm](https://www.npmjs.com)
3. [Git](https://git-scm.com/)
4. MongoDB kurulu ve çalışıyor olmalı

# Docker ile Kurulum

<hr>

1. Repo'yu klonlayın

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Proje klasörüne gidin
   ```sh
   cd web-scraping
   ```
3. Docker konteynerlerini oluşturun ve çalıştırın
   ```sh
   docker-compose up -d
   ```
4. Uygulamayı web tarayıcınızda açın.
   Server: http://localhost:8000
   Client: http://localhost:3000
   <br>

# Docker Olmadan Kurulum

<hr>

1. Repo'yu klonlayın

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Bağımlılıkları yükleyin
   ```sh
   npm install
   ```
3. server çalıştırın
   ```sh
   npm start
   ```
4. client çalıştırın
   ```sh
   npm run build
   npm run start
   ```
5. Uygulamayı web tarayıcınızda açın.
   Server: http://localhost:8000
   Client: http://localhost:3000
   <br>

## Kullanım

1. Uygulamayı web tarayıcınızda açın.
2. Bir sosyal medya platformu seçin.
3. En son sürümleri keşfedin ve bir sürüme tıklayarak detaylarını görüntüleyin.
4. İhtiyaca göre sürümleri silin.
