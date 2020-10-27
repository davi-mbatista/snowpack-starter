test('should display "app" in the page', async () => {
    await page.goto('http://localhost:5000');
    await expect(page).toHaveText('app');
});
