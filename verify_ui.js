import { spawn } from 'child_process';
import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const ARTIFACT_DIR = 'C:\\Users\\עוז שורקי\\.gemini\\antigravity\\brain\\c82f2d95-e2f9-4283-8c61-dfa9232c495b';
const PORT = 5173;
const URL = `http://localhost:${PORT}`;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('Starting UI/UX Verification Script...');
  
  // 1. Ensure artifact directory exists
  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  // 2. Start Vite server
  console.log('Spawning Vite dev server...');
  const viteProcess = spawn('npx.cmd', ['vite', '--port', String(PORT), '--strictPort'], {
    cwd: process.cwd(),
    shell: true,
  });

  let serverReady = false;

  // Listen to output to detect when server is ready
  viteProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[Vite]: ${output.trim()}`);
    if (output.includes('Local:') || output.includes('localhost:') || output.includes('ready in')) {
      serverReady = true;
    }
  });

  viteProcess.stderr.on('data', (data) => {
    console.error(`[Vite Error]: ${data.toString()}`);
  });

  // Wait for server to start (timeout 8s)
  for (let i = 0; i < 16; i++) {
    if (serverReady) break;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  if (!serverReady) {
    console.error('Failed to detect Vite server start. Proceeding anyway...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  let browser;
  let testFailed = false;
  const report = {
    timestamp: new Date().toISOString(),
    viewports: {},
    errors: []
  };

  try {
    // 3. Launch Chrome
    console.log(`Launching Chrome from: ${CHROME_PATH}`);
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    console.log(`Navigating to ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 15000 });

    const viewports = [
      { name: 'mobile', width: 375, height: 812 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1440, height: 900 }
    ];

    for (const vp of viewports) {
      console.log(`Testing viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      await page.setViewport({ width: vp.width, height: vp.height });
      
      // Allow animations/renders to settle
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Programmatic layout check
      const layoutStats = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const hasOverflow = docWidth > winWidth;
        
        const htmlDir = document.documentElement.getAttribute('dir');
        const htmlLang = document.documentElement.getAttribute('lang');

        // Check if container margins are okay (e.g. elements not clipping outer screen)
        const app = document.querySelector('#app') || document.body;
        const appRect = app.getBoundingClientRect();
        const outerPaddingOk = appRect.left >= 0 && appRect.right <= winWidth;

        // Check for specific common elements clipping
        const textElements = Array.from(document.querySelectorAll('h1, h2, h3, p'));
        let overflowElementsCount = 0;
        textElements.forEach(el => {
          if (el.scrollWidth > el.clientWidth) {
            overflowElementsCount++;
          }
        });

        return {
          windowWidth: winWidth,
          documentWidth: docWidth,
          hasOverflow,
          htmlDir,
          htmlLang,
          outerPaddingOk,
          overflowElementsCount
        };
      });

      console.log(`Results for ${vp.name}:`, layoutStats);

      // Verify layout requirements
      const vpReport = {
        viewport: `${vp.width}x${vp.height}`,
        rtlDirOk: layoutStats.htmlDir === 'rtl',
        langHeOk: layoutStats.htmlLang === 'he',
        noHorizontalScroll: !layoutStats.hasOverflow,
        noTextOverflow: layoutStats.overflowElementsCount === 0,
        paddingOk: layoutStats.outerPaddingOk,
      };

      report.viewports[vp.name] = vpReport;

      // Assertions
      if (!vpReport.rtlDirOk) {
        const errMsg = `${vp.name}: HTML direction is not RTL (got ${layoutStats.htmlDir})`;
        report.errors.push(errMsg);
        testFailed = true;
      }
      if (!vpReport.langHeOk) {
        const errMsg = `${vp.name}: HTML language is not Hebrew (got ${layoutStats.htmlLang})`;
        report.errors.push(errMsg);
        testFailed = true;
      }
      if (!vpReport.noHorizontalScroll) {
        const overflowPixels = layoutStats.documentWidth - layoutStats.windowWidth;
        const errMsg = `${vp.name}: Horizontal scroll detected! Document width is ${layoutStats.documentWidth}px but viewport is ${layoutStats.windowWidth}px (overflows by ${overflowPixels}px).`;
        report.errors.push(errMsg);
        testFailed = true;
      }

      // Take screenshot
      const screenshotPath = path.join(ARTIFACT_DIR, `screenshot_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot to: ${screenshotPath}`);
    }

  } catch (err) {
    console.error('An error occurred during verification:', err);
    report.errors.push(`Test runner exception: ${err.message}`);
    testFailed = true;
  } finally {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }

    console.log('Stopping Vite server...');
    viteProcess.kill('SIGINT');
    
    // Save report to artifacts
    const reportPath = path.join(ARTIFACT_DIR, 'verification_report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Saved verification report to: ${reportPath}`);

    console.log('Verification process complete.');
    process.exit(testFailed ? 1 : 0);
  }
}

runTests();
