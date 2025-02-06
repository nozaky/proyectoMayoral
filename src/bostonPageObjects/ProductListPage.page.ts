import { ProductListElements } from '../bostonElements/ProductListElements.element.ts';
import * as GlobalFunctions from '../utils/GlobalFunctions.ts';

export async function selectProductByIndex(index: number) {
  try {
    await GlobalFunctions.scrollToElementByElement(browser.$$(ProductListElements.allProductsLink)[index]);
    await GlobalFunctions.clickOnElementByIndex(ProductListElements.allProductsLink, index);
  } catch (error) {
    throw new Error(`Se ha producido el siguiente error: ${error}`);
  }
}
