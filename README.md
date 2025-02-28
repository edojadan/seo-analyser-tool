# seo-analyser tool
 
# SEO Analyser Tool

## Overview
The **SEO Analyser Tool** is a web-based utility that checks the SEO health of a website by analysing metadata, headings, image alt attributes, and page speed. It uses **Node.js (Express)** for the backend, **Puppeteer & Cheerio** for web scraping, and **Java (PageSpeedAnalyser.jar)** for page speed analysis.

## Features
- **Extract Metadata** (Title, Description, Keywords)
- **Check Heading Structure** (H1, H2, H3 Counts)
- **Identify Missing Image Alt Attributes**
- **Analyse Page Speed** using a Java-based tool
- **Extracting Canonical URLs**
- **Checking for Missing Meta Tags**
- **Analysing Word Count, Keyword Density, and Broken Links**
- **REST API with JSON Responses**
- **Extract Metadata** (Title, Description, Keywords)
- **Check Heading Structure** (H1, H2, H3 Counts)
- **Identify Missing Image Alt Attributes**
- **Analyse Page Speed** using a Java-based tool
- **REST API with JSON Responses**

## What I Enjoyed the Most
The most engaging part of this project was implementing **automation using Puppeteer & Cheerio** to extract and analyse website elements dynamically. This aligns closely with **web automation tasks**, as it enhanced my understanding of how to automate and process large-scale web data efficiently.

## How the Analyser Helps Improve SEO Decisions
The **SEO Analyser Tool** provides actionable insights that help users **enhance their website’s SEO** by identifying issues and opportunities for improvement. Below are some **ways users can utilize the results:**

- **Metadata Optimization**
  - If the tool detects a **missing or weak meta description**, users should update their **meta description** with relevant keywords to improve search engine rankings.
  - Example: If a page has `No description`, update it with a compelling 150-160 character meta description.

- **Heading Structure Improvements**
  - The analyser checks for **proper heading hierarchy** (H1, H2, H3 usage).
  - If a page has **multiple H1 tags**, users should restructure their headings to maintain SEO-friendly formatting.
  - Example: Change multiple `<h1>` tags to `<h2>` or `<h3>` for better hierarchy.

- **Fixing Missing Image Alt Attributes**
  - If images are missing **alt attributes**, users should add meaningful alt text to improve **image search visibility** and accessibility.
  - Example: Instead of `<img src='product.jpg'>`, update to `<img src='product.jpg' alt='Handmade vegan candle'>`.

- **Enhancing Page Speed**
  - If the **page speed is low**, users can optimize their site by:
    - **Compressing images**
    - **Enabling caching**
    - **Minimizing JavaScript and CSS files**
  - Example: If the tool shows a **slow page load time**, consider using a **CDN (Content Delivery Network)** to speed up content delivery.

- **Fixing Broken Links**
  - The analyser detects **broken links** that can negatively impact SEO.
  - Example: If the tool detects a **broken link (404 error)**, replace it with an active link or set up a redirect.

By leveraging these insights, users can systematically **improve their website’s ranking and user experience**, ultimately increasing traffic and conversions.

## How I Built This - Step-by-Step

### **1. Setting Up the Environment**
- Initialized the project:
  ```sh
  npm init -y
  ```
- Installed dependencies:
  ```sh
  npm install express puppeteer cheerio
  ```
- Added **Java integration** for page speed analysis.

### **2. Creating the Backend**
- Built an **Express.js server** to handle API requests.
- Implemented **Puppeteer & Cheerio** to scrape SEO data.
- Integrated **Java (PageSpeedAnalyser.jar)** for speed testing.

### **3. Structuring the Project**
```
seo-analyser-tool/
│── src/
│   ├── analyser.js       # Extracts metadata, headings, and image alt tags
│   ├── speedChecker.js   # Runs page speed analysis via Java
│   ├── server.js         # Express.js API
│── tests/
│   ├── seoAnalyser.test.js  # Unit tests
│── config/
│   ├── settings.json     # Configuration file
│── .gitignore            # Ignore node_modules & Java JAR file
│── README.md             # Documentation
│── package.json          # Node.js dependencies
```

### **4. Implementing API Endpoints**
- `/analyse?url=<website>` → Extracts SEO details.
- `/speed?url=<website>` → Runs page speed analysis.

### **5. Running the Tests**
- Installed Jest for testing:
  ```sh
  npm install --save-dev jest
  ```
- Created unit tests to verify **metadata extraction & API responses**.
- Ran tests using:
  ```sh
  npm test
  ```

## How to Run the Program
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/edojadan/seo-analyser-tool.git
   cd seo-analyser-tool
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Run the Server**:
   ```sh
   node src/server.js
   ```

4. **Use the API**:
   - SEO Analysis: `http://localhost:3000/analyse?url=https://example.com`
   - Page Speed: `http://localhost:3000/speed?url=https://example.com`

### **Using Any Website**
This tool is designed to analyse **any publicly accessible website**, not just `example.com`. To test different websites, replace `example.com` in the request URL:
```sh
http://localhost:3000/analyse?url=https://yourwebsite.com
```
#### **Example Websites to Try:**
- `https://bbc.com` (News Website)
- `https://wikipedia.org` (Informational Content)
- `https://nytimes.com` (Media & Articles)
- `https://github.com` (Code Repository)
- `https://shopify.com` (E-commerce Platform)
- `https://mozilla.org` (Tech & Open Source Community)

#### **Limitations:**
This tool is designed to analyse **any publicly accessible website**, not just `example.com`. To test different websites, replace `example.com` in the request URL:
```sh
http://localhost:3000/analyse?url=https://yourwebsite.com
```
#### **Limitations:**
- **Blocked Sites:** Some websites block automated scraping tools like Puppeteer.
- **Login-Protected Pages:** Cannot analyse pages that require authentication.
- **JavaScript-Heavy Sites:** May need extra wait time to fully load dynamic content.

### **Troubleshooting: Port 3000 Already in Use**
If you see the error `EADDRINUSE: address already in use :::3000`, it means port **3000 is already occupied**. Fix it using:

#### **Option 1: Kill the Process Using Port 3000**
##### **For macOS/Linux:**
```sh
lsof -i :3000
kill -9 <PID>
```
##### **For Windows (PowerShell):**
```sh
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### **Option 2: Use a Different Port**
Modify `src/server.js` to dynamically use an available port:
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SEO Analyser running on http://localhost:${PORT}`);
});
```

After making changes, restart the server:
```sh
node src/server.js
```

## Future Enhancements
- **Improve Page Speed Analysis** by integrating Google Lighthouse API.
- **Add Frontend Dashboard** for interactive results.
- **Expand SEO Checks** to include schema markup and broken links.

This project was an attempt at a **hands-on experience** in web automation and API development, providing a nice introduction to the technical skills involved. 🚀


