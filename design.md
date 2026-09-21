# Lomagugu Properties Design System

## Overview
This document outlines the core design principles, reusable components, and code patterns for Lomagugu Properties. Adhering to these guidelines ensures consistency across all pages and components.

## Core Principles
1. **Modern & Premium Feel**: Use clean lines, generous whitespace, and sharp contrast to convey a premium real estate brand.
2. **Intuitive Navigation**: Menus should be easily accessible but not distracting.
3. **Immersive Imagery**: High-quality property images are the focal point. UI elements should complement, not compete with, the imagery.
4. **Responsive First**: All layouts must degrade gracefully on mobile and tablet devices.

## Colors & Typography
- **Primary Color (`#2c5f45`)**: Used for primary buttons, active states, and important highlights.
- **Background (`#ffffff`)**: The default background for content areas.
- **Dark Mode / Contrast (`#010101`)**: Used for high-contrast sections and text.
- **Typography**: Helvetica Neue (or fallback sans-serif). Keep tracking wide on uppercase subheadings for an elegant look.

## Reusable Patterns

### 1. The Global Header (Navbar)
- **Style**: Absolute positioning, transparent background (`absolute top-0 left-0 right-0 z-50`).
- **Behavior**: Overlays on top of the Hero section of every page. Text and icons should be `text-white` to ensure visibility against the dark gradient of the hero images.

### 2. Page Hero Sections
Every major page (Home, Properties, Valuations) should begin with a standard Hero section.
- **Implementation**:
  - `min-h-[500px]` (or similar) with `flex-col justify-end`.
  - Use a background cover image.
  - **Crucial**: Apply a dark gradient overlay so the transparent white text of the Navbar remains readable.
    ```css
    linear-gradient(to bottom, rgba(10,20,15,0.40) 0%, rgba(10,20,15,0.7) 50%, rgba(10,20,15,0.95) 100%)
    ```

### 3. Filter Bars (e.g., Properties Page)
- **Style**: Sticky top (`sticky top-0 z-40`), white background with a subtle bottom border (`border-b border-border`) and a light shadow (`shadow-sm`).
- **Alignment**: Inputs and dropdowns should have consistent heights (e.g., `h-11`) and padding. Use Flexbox to align them perfectly horizontally on desktop.

### 4. The Footer
- **Layout**: Clean grid layout (`grid-cols-1 md:grid-cols-3 gap-10`).
- **Padding**: Use moderate vertical padding (`py-10`) to keep the page ending tight without excessive white space.
- Do not use images in the footer to keep it lightweight and focused on navigation and contact info.
