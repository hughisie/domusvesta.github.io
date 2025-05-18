# GitHub Pages and Domain Configuration Instructions

This guide will walk you through the process of uploading your Domus Vesta website to GitHub Pages and configuring your custom domain (domusvesta.co).

## 1. Create a GitHub Account (if you don't have one)

1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and follow the registration process
3. Verify your email address

## 2. Create a New Repository

1. Click the "+" icon in the top right corner of GitHub and select "New repository"
2. Name your repository `domusvesta.github.io` (this specific name format is important for GitHub Pages)
3. Make sure the repository is set to "Public"
4. Click "Create repository"

## 3. Upload Your Website Files

### Option 1: Using GitHub Web Interface (Easiest)

1. In your new repository, click "uploading an existing file" link
2. Drag and drop all the files and folders from your website (index.html, css folder, js folder, assets folder)
3. Click "Commit changes"

### Option 2: Using Git Command Line (More Technical)

1. Install Git from [git-scm.com](https://git-scm.com/downloads) if you don't have it
2. Open Terminal (Mac/Linux) or Command Prompt (Windows)
3. Navigate to your website folder:
   ```
   cd path/to/domusvesta
   ```
4. Initialize a Git repository:
   ```
   git init
   ```
5. Add all files:
   ```
   git add .
   ```
6. Commit the files:
   ```
   git commit -m "Initial commit"
   ```
7. Link to your GitHub repository:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/domusvesta.github.io.git
   ```
8. Push the files:
   ```
   git push -u origin main
   ```
   (Note: If you're using an older version of Git, you might need to use `master` instead of `main`)

## 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at `https://YOUR-USERNAME.github.io/domusvesta.github.io`

## 5. Configure Custom Domain (domusvesta.co)

### Step 1: Add Custom Domain in GitHub

1. In your repository settings, under "GitHub Pages" section
2. Enter "domusvesta.co" in the "Custom domain" field
3. Click "Save"
4. Check "Enforce HTTPS" (recommended for security)

### Step 2: Configure DNS Records at Your Domain Registrar

1. Log in to your domain registrar (where you purchased domusvesta.co)
2. Go to DNS settings or DNS management
3. Add the following records:

   **Option A: Using an A record (recommended)**
   
   Add these A records pointing to GitHub's IP addresses:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 3600 (or default)
   ```
   
   Repeat for these IP addresses:
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

   **Option B: Using a CNAME record**
   
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io.
   TTL: 3600 (or default)
   ```

4. Save your DNS settings

### Step 3: Create a CNAME File (if not already done)

1. In your GitHub repository, create a new file named `CNAME` (no file extension)
2. Add only this text to the file:
   ```
   domusvesta.co
   ```
3. Commit the changes

## 6. Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. During this time, your website might be intermittently available at your custom domain.

## 7. Verify Your Setup

1. After DNS propagation, visit `https://domusvesta.co` to verify your website is working
2. Check that HTTPS is working correctly (look for the padlock icon in your browser)

## Troubleshooting

- **404 Error**: Make sure your repository is named correctly and GitHub Pages is enabled
- **Domain Not Working**: DNS propagation might still be in progress, or DNS records might be incorrect
- **HTTPS Not Working**: It can take up to 24 hours for the SSL certificate to be issued after setting up the custom domain

## Updating Your Website

To update your website in the future:

### Using GitHub Web Interface

1. Navigate to the file you want to change
2. Click the pencil icon to edit
3. Make your changes
4. Click "Commit changes"

### Using Git Command Line

1. Make changes to your local files
2. Add the changes:
   ```
   git add .
   ```
3. Commit the changes:
   ```
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```
   git push
   ```

Your changes will be automatically published to your website.
