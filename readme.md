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

# Frontend:

1. Next.js
2. Typescript
3. css Modules
4. Tailwind

# Backend:

1. Express.js
2. Typescript
3. MongoDB with Mongoose

# Scraping:

1.cheerio

## Getting Started

<hr>

1. [Node.js](https://nodejs.org/en/)
2. [Npm](https://www.npmjs.com)
3. [Git](https://git-scm.com/)
4. MongoDB installed and running

# Installation

<hr>

1. Clone the repo

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Install dependencies
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```
4. Run checks and tests
   ```sh
   npm test
   ```

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

## Kurulum
<hr>

1. Clone the repo

   ```sh
   git clone https://github.com/Mohammad-Ayman/web-scraping.git
   ```

2. Install dependencies
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```
4. Run checks and tests
   ```sh
   npm test
   ```

<br>
## Kullanım

1. Uygulamayı web tarayıcınızda açın.
2. Bir sosyal medya platformu seçin.
3. En son sürümleri keşfedin ve bir sürüme tıklayarak detaylarını görüntüleyin.
4. İhtiyaca göre sürümleri silin.


