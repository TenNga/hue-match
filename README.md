# Hue Match: Personal Palette Generator

The **Hue Match** is a web application built with React, Next.js, and TypeScript. It uses the ChatGPT API to generate customized color palettes based on the user's facial image and selected colors, creating seasonal palettes and suggested color groups to avoid.

## Table of Contents

- [Hue Match: Personal Palette Generator](#hue-match-personal-palette-generator)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Figma: Design](#figma-design)
  - [Installation](#installation)
  - [Screenshots](#screenshots)

## Features

📁 **Image Upload**: Upload a picture of your face to generate a personalized color palette.

✏️ **Color Selection**: Choose skin tone and hair color using an - interactive color picker.

🎨 **Seasonal Palettes**: Generates suggested color palettes based on the user’s skin tone for four seasons (winter, summer, spring, and fall).

🚫 **Avoid Colors**: Provides a list of colors to avoid based on the user's skin tone.

🔍 **Interactive Color Picker**: Users select colors from their image, enhancing personalization.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **API Requests**: Axios, ChatGPT API
- **State Management**: React Query (for API data handling)
- **Color Picker**: `react-image-palette` (used for color extraction)

## Figma: Design
- [Mockup](https://www.figma.com/design/KMno1dJ3EdJDeacy7Dr4r2/HueMatch?node-id=1-2&t=mHlnVomCdMCUFngx-1)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TenNga/hue-match.git
   cd hue-match
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables:
   - Create a `.env` file in the root directory and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_openai_api_key
4. Start the development server:
   ```bash
   npm run dev
5. Visit `http://localhost:3000` in your browser.

## Screenshots
![](https://github.com/TenNga/hue-match/blob/main/screen_demo.gif)