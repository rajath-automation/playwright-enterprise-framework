import { test } from '../fixtures/baseFixtures';
import credentials from '../test-data/credentials.json';

test.describe('Shopping Cart Suite @regression', () => {
  test('User can add products to cart', async ({ loginPage, inventoryPage }) => {
    await loginPage.navigateTo('/');
    await loginPage.login(
      credentials.validUser.username,
      credentials.validUser.password
    );
    await inventoryPage.assertLoaded();
    await inventoryPage.addItemToCartBySlug('sauce-labs-backpack');
    await inventoryPage.addItemToCartBySlug('sauce-labs-bike-light');
    await inventoryPage.assertCartCount('2');
  });
});