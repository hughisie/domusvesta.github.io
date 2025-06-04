# DomusVesta Website Image and Integration Guide

This guide provides detailed instructions for updating images and integrating content on the DomusVesta website.

## Image Requirements Overview

### Hero Section
- **Type**: Video (preferred) or Image
- **Content**: Professionals working in homes, providing various services
- **Dimensions**: 1920x1080px (16:9 ratio)
- **Format**: MP4 (for video), JPG or PNG (for image)
- **File Size**: Max 5MB for images, Max 20MB for video
- **Location**: `/assets/hero-video.mp4` or `/assets/hero-bg.jpg`
- **Focus**: Center of action, showing professionals and clients interacting

### About/Why DomusVesta Section
- **Type**: Image
- **Content**: Service professionals and customers together
- **Dimensions**: 800x600px
- **Format**: JPG or PNG
- **File Size**: Max 2MB
- **Location**: `/assets/about-image.jpg`
- **Focus**: Clear view of interaction between service provider and customer

### How It Works Section
- **Type**: Icons
- **Dimensions**: 128x128px
- **Format**: SVG (preferred) or PNG with transparency
- **File Size**: Max 100KB each
- **Location**: `/assets/icons/[icon-name].svg`
- **Focus**: Simple, clear iconography representing each step

### Our Promise Section
- **Type**: Image
- **Content**: Community, trust, or skill-building imagery
- **Dimensions**: 1000x750px
- **Format**: JPG or PNG
- **File Size**: Max 2MB
- **Location**: `/assets/promise-image.jpg`
- **Focus**: Community connection or professional development

### News/Blog Section
- **Type**: Article thumbnail images
- **Content**: Relevant to article topics
- **Dimensions**: 600x400px
- **Format**: JPG or PNG
- **File Size**: Max 1MB each
- **Location**: `/assets/news/news-1.jpg`, `/assets/news/news-2.jpg`, `/assets/news/news-3.jpg`
- **Focus**: Clear representation of article topic

### Logo
- **Type**: Logo image
- **Dimensions**: Original size preserved (displayed at 3x larger than previous version)
- **Format**: PNG with transparency
- **Location**: `/assets/images/domusvesta_logo.png`
- **Focus**: Clear, high-quality logo with transparent background

## Integration Instructions

### Replacing Images

1. **Prepare your image** according to the specifications above
2. **Name your file** exactly as specified in the "Location" field
3. **Upload to GitHub**:
   - Navigate to your repository: `https://github.com/hughisie/domusvesta.github.io`
   - Go to the specified folder (e.g., `/assets/`)
   - Click "Add file" > "Upload files"
   - Drag and drop your image or click to select
   - Add a commit message (e.g., "Update hero image")
   - Click "Commit changes"

### Adding Hero Video

1. **Prepare your video**:
   - Format: MP4
   - Resolution: 1920x1080px
   - Duration: 15-30 seconds (recommended)
   - File size: Max 20MB
   
2. **Update the HTML**:
   - Open `index.html` in your repository
   - Find the hero section code:
   ```html
   <div class="hero__video-container">
       <!-- Video will replace this when available -->
       <div class="hero__placeholder" style="background-image: url('assets/hero-bg.jpg');"></div>
   </div>
   ```
   
   - Replace with:
   ```html
   <div class="hero__video-container">
       <video autoplay muted loop playsinline class="hero__video">
           <source src="assets/hero-video.mp4" type="video/mp4">
           <!-- Fallback to image if video doesn't load -->
           <div class="hero__placeholder" style="background-image: url('assets/hero-bg.jpg');"></div>
       </video>
   </div>
   ```

### Updating Tally.so Forms

1. **Create your forms on Tally.so**:
   - Create two separate forms: one for customers and one for service partners
   
2. **Get the embed code** from Tally.so for each form

3. **Update the HTML**:
   - Open `index.html` in your repository
   - Find the form sections:
   ```html
   <div class="tally-embed" data-tally-form="partner-signup">
       <!-- Tally.so form will be embedded here -->
       <p class="form-placeholder">Loading form...</p>
   </div>
   ```
   
   - Replace with your Tally.so embed code:
   ```html
   <div class="tally-embed" data-tally-form="partner-signup">
       <iframe src="YOUR_TALLY_EMBED_URL_HERE" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" title="Service Partner Registration"></iframe>
   </div>
   ```

### Adding New News/Blog Articles

1. **Prepare your article image** (600x400px)
2. **Upload to** `/assets/news/`
3. **Update the HTML**:
   - Open `index.html` in your repository
   - Find the news section
   - Copy an existing article block and modify:
   ```html
   <article class="news-card">
       <div class="news-card__image">
           <img src="assets/news/your-new-image.jpg" alt="Article Title" class="news-card__img">
       </div>
       <div class="news-card__content">
           <div class="news-card__meta">
               <span class="news-card__date">June 5, 2025</span>
               <span class="news-card__category">Category</span>
           </div>
           <h3 class="news-card__title">Your Article Title</h3>
           <p class="news-card__excerpt">Your article excerpt goes here...</p>
           <a href="#" class="news-card__link">Read More</a>
       </div>
   </article>
   ```

## Mobile Optimization Tips

- **Test all images** on both desktop and mobile views
- **Consider focal points** that remain visible when images are cropped on smaller screens
- **Compress images** for faster loading on mobile devices
- **Use responsive images** with the `srcset` attribute for advanced optimization

## General Guidelines

- Use high-quality, professional images
- Ensure images reflect diversity and inclusion
- Avoid overly staged or artificial-looking stock photos
- Maintain consistent style across all images
- Follow the DomusVesta color palette when possible

## Technical Support

If you encounter any issues with image integration or need assistance with website updates, please contact your web development team or email support@domusvesta.co.
