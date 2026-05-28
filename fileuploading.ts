

import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.locator('input[type="file"]').setInputFiles('./utility/Data/Task_Management_Data (11).xlsx');
  await browser.close();
})();
