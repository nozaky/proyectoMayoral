import { CartElements } from '../bostonElements/CartElements.element.ts';
import * as GlobalFunctions from '../utils/GlobalFunctions.ts';

export async function tramitarPedido() {
  await GlobalFunctions.clickOnElement(CartElements.processOrderButton);
}

export async function informarDatosPersonales(userType: string, name: string, surname: string, birthdate: string) {
  switch (userType) {
    case 'Particular':
      GlobalFunctions.clickOnElementByIndex(CartElements.userTypeButton, 0);
      break;
    case 'Empresa':
      GlobalFunctions.clickOnElementByIndex(CartElements.userTypeButton, 1);
      break;
    default:
      GlobalFunctions.clickOnElementByIndex(CartElements.userTypeButton, 0);
      break;
  }
  await GlobalFunctions.writeOnElement(CartElements.userNameInput, name);
  await GlobalFunctions.writeOnElement(CartElements.userSurameInput, surname);
  await GlobalFunctions.writeOnElement(CartElements.userBirthdayInput, birthdate);
  await GlobalFunctions.clickOnElement(CartElements.gdprButton);
}
