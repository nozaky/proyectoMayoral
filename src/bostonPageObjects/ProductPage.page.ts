import { ProductElements } from '../bostonElements/ProductElements.element.ts';
import * as GlobalFunctions from '../utils/GlobalFunctions.ts';

export async function addToCart() {
  await browser.$(ProductElements.addToCartButton).waitForExist();
  await GlobalFunctions.scrollToElement(ProductElements.addToCartButton);
  await GlobalFunctions.clickOnElement(ProductElements.addToCartButton);
}
