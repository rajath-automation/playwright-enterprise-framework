import { test } from '../fixtures/baseFixtures';
import credentials from '../test-data/credentials.json';

test.describe('Authentication Suite @smoke', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo('/');
  });

  test('Valid user can log in successfully', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(
      credentials.validUser.username,
      credentials.validUser.password
    );
    await inventoryPage.assertLoaded();
  });

  test('Locked out user receives validation error', async ({ loginPage }) => {
    await loginPage.login(
      credentials.lockedUser.username,
      credentials.lockedUser.password
    );
    await loginPage.assertErrorVisible(credentials.lockedUser.expectedError);
  });
});