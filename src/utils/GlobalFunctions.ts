import { resolve } from 'path';
import { promises as fs } from 'fs';

export async function goToUrl(url: string): Promise<void> {
  await browser.navigateTo(url);
}

export async function writeOnElement(selector: string, text: string): Promise<void> {
  await browser
    .$(selector)
    .waitForExist()
    .then(() => {
      browser.$(selector).setValue(text);
    });
}

export async function clickOnElement(selector: string): Promise<void> {
  try {
    await browser.$(selector).waitForDisplayed();
    await browser.$(selector).click();
  } catch (error: any) {
    throw new Error(`El elemento con selector ${selector} no es clicable. Se muestra el siguiente error:`, error);
  }
}

export async function clickOnElementByIndex(selector: string, index: number): Promise<void> {
  try {
    await browser.$$(selector)[index].waitForDisplayed();
    await browser.$$(selector)[index].click();
  } catch (error: any) {
    throw new Error(`El elemento con selector ${selector} no es clicable. Se muestra el siguiente error:`, error);
  }
}

export async function clickOnParentElement(selector: string): Promise<void> {
  try {
    await browser.$(selector).parentElement().waitForDisplayed();
    await browser.$(selector).parentElement().click();
  } catch (error: any) {
    throw new Error(`El elemento con selector ${selector} no es clicable. Se muestra el siguiente error:`, error);
  }
}

export async function getTextFromElement(selector: string): Promise<string> {
  try {
    await browser.$(selector).waitForDisplayed();
    const text = await browser.$(selector).getText();
    console.log('El texto mostrado es:', text);
    return text;
  } catch (error: any) {
    throw new Error(`El elemento con selector ${selector} no se ha mostrado. Se muestra el siguiente error:`, error);
  }
}

export async function scrollToElement(selector: string) {
  const element = browser.$(selector);
  await scrollToElementByElement(element);
}

export async function scrollToElementByElement(element: ChainablePromiseElement) {
  try {
    await element.waitForExist();
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(1000);
  } catch (error) {
    throw new Error(`Se ha producido un error al intentar hacer scroll: ${error}`);
  }
}

export async function loadLangFile<T>(languaje: string, fileName: string): Promise<T> {
  const filePath: string = resolve(process.cwd() + '/src/lang/' + languaje + '/' + fileName + '.json');
  const fileData: string = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileData) as T;
}
