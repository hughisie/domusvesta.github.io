# GitHub Pages Deployment Instructions

This guide provides step-by-step instructions for deploying the DomusVesta website to GitHub Pages.

## Initial Setup

1. **Log in to GitHub** and navigate to your repository: `https://github.com/hughisie/domusvesta.github.io`

2. **Delete existing files** (if you want to start fresh):
   - Click on each file and select the trash icon
   - Add a commit message like "Remove old files for website refresh"
   - Commit the changes

## Uploading New Files

### Option 1: Upload via GitHub Web Interface

1. **Navigate to your repository**
2. **Click "Add file" > "Upload files"**
3. **Drag and drop** all files and folders from the provided package
4. **Add a commit message** like "Upload refreshed DomusVesta website"
5. **Click "Commit changes"**

### Option 2: Upload via Git Command Line (Recommended for Larger Updates)

1. **Clone the repository** to your local machine:
   ```
   git clone https://github.com/hughisie/domusvesta.github.io.git
   ```

2. **Copy all files** from the provided package to the cloned repository folder

3. **Commit and push** the changes:
   ```
   git add .
   git commit -m "Upload refreshed DomusVesta website"
   git push origin main
   ```

## Configuring GitHub Pages

1. **Go to repository Settings**:
   - Click on "Settings" tab in your repository
   - Navigate to "Pages" in the left sidebar

2. **Configure source**:
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

3. **Wait for deployment**:
   - GitHub Pages may take a few minutes to deploy your site
   - You'll see a success message when it's ready

4. **Access your website**:
   - Your site will be available at: `https://hughisie.github.io/domusvesta.github.io/`

## Setting Up Custom Domain (domusvesta.co)

1. **Go to repository Settings** > **Pages**

2. **Under "Custom domain"**:
   - Enter `domusvesta.co`
   - Click "Save"

3. **Configure DNS with your domain provider**:
   - Add these A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record:
     - Name: www
     - Value: hughisie.github.io

4. **Wait for DNS propagation**:
   - This can take up to 24-48 hours
   - GitHub will automatically secure your site with HTTPS

5. **Verify setup**:
   - Check the "Enforce HTTPS" option once available
   - Your site will be accessible at both `domusvesta.co` and `www.domusvesta.co`

## Troubleshooting

### If your site shows a 404 error:
- Ensure your repository name is exactly `domusvesta.github.io`
- Verify that index.html is in the root directory
- Check GitHub Pages settings to confirm the correct branch is selected

### If images aren't displaying:
- Verify all image paths in the HTML files
- Ensure all image files are uploaded to the correct locations
- Try clearing your browser cache with Ctrl+F5 or Cmd+Shift+R

### If custom domain isn't working:
- Verify DNS settings with your domain provider
- Check for any typos in the custom domain field
- Allow 24-48 hours for DNS propagation

## Maintenance and Updates

To make future updates to your website:

1. Edit files directly on GitHub or clone the repository locally
2. Make your changes
3. Commit and push the changes
4. GitHub Pages will automatically rebuild and deploy your site

For image updates, refer to the included `image_integration_guide.md` file for detailed instructions.
