import { LoginElements } from '../bostonElements/LoginElements.element.ts';
import * as GlobalFunctions from '../utils/GlobalFunctions.ts';

export async function doLogin(user: string, password: string) {
  await enterUserPassword(user, password);
  await GlobalFunctions.clickOnElement(LoginElements.loginButton);
}

export async function enterUserPassword(user: string, password: string) {
  await GlobalFunctions.writeOnElement(LoginElements.userInput, user);
  await GlobalFunctions.writeOnElement(LoginElements.passwordInput, password);
}

export async function validateErrorLoginMessage(text?: string) {
  if (text) {
    const textElement = await GlobalFunctions.getTextFromElement(LoginElements.loginErrorText);
    await expect(textElement).toContain(text);
  } else {
    throw new Error(`No se ha recibido ningún texto a validar`);
  }
}
