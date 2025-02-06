import { PrincipalElements } from '../bostonElements/PrincipalElements.element.ts';
import * as GlobalFunctions from '../utils/GlobalFunctions.ts';

export async function checkLoginButton() {
  const acceptCookies = browser.$(PrincipalElements.acceptCookiesButton);
  await acceptCookies.waitForDisplayed().then(() => {
    acceptCookies.click();
    console.log('Se muestra el botón de cookies y se acepta');
  });
  const loginButton = browser.$(PrincipalElements.loginIcon);
  await expect(loginButton).toBeDisplayed();
}

export async function goToLogin() {
  await GlobalFunctions.clickOnElement(PrincipalElements.loginIcon);
}

export async function accederApartadoMenu(apartado: string) {
  await GlobalFunctions.clickOnElement(PrincipalElements.menuButton);
  await GlobalFunctions.clickOnElement(PrincipalElements.optionMenuButton(apartado));
}

export async function accederApartadoSubmenu(apartado: string) {
  await GlobalFunctions.clickOnElement(PrincipalElements.optionSubmenuButton(apartado));
}

export async function validarNombreSeccion(seccion: string) {
  const nombreSeccion = await GlobalFunctions.getTextFromElement(PrincipalElements.sectionLabel);
  await expect(nombreSeccion).toEqual(seccion.toUpperCase());
}

export async function validarModalCompra() {
  await browser.pause(3000);
  const modal = browser.$(PrincipalElements.cartContentModal);
  await expect(modal).toBeDisplayed();
}

export async function accederACompra(apartado: string) {
  await GlobalFunctions.clickOnElement(PrincipalElements.checkCartButton);
  await validarNombreSeccion(apartado);
}
