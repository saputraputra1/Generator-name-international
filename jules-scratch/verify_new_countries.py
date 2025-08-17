import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        html_file_path = os.path.abspath('index.html')
        await page.goto(f'file://{html_file_path}')

        # Give the page plenty of time to load everything initially
        await page.wait_for_load_state('networkidle')
        await page.wait_for_timeout(1000)

        await page.get_by_placeholder("Enter your name here...").fill("Jules")

        # --- Test Italy ---
        await page.get_by_text("🇮🇹 Italy").click()
        await page.get_by_text("G Generate Name").click()

        # Wait for visibility and content
        await expect(page.locator("#result-card.visible")).to_be_visible(timeout=5000)
        await expect(page.locator("#latin-name")).not_to_be_empty(timeout=5000)

        # Add a hard delay for rendering
        await page.wait_for_timeout(1000)
        await page.screenshot(path="jules-scratch/verification/02_italian_name.png", full_page=True)

        # --- Test India ---
        # Get the first generated name to compare against
        italian_name = await page.locator("#latin-name").text_content()

        await page.get_by_text("🇮🇳 India").click()
        await page.get_by_text("G Generate Name").click()

        # Wait for the name to be different
        await page.wait_for_function(f"document.querySelector('#latin-name').textContent !== '{italian_name}'", timeout=5000)

        # Add another hard delay for rendering
        await page.wait_for_timeout(1000)

        await page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
  
