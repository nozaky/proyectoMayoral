import * as PrincipalPage from '../../src/bostonPageObjects/PrincipalPage.page.ts';
import * as AllureFunctions from '../../src/utils/AllureFunctions.ts';
import * as GlobalFunctions from '../../src/utils/GlobalFunctions.ts';
import { Lang } from '../../src/interfaces/langInterface.interface.ts';
import { MenuLang } from '../../src/interfaces/menuInterface.interface.ts';

let commonLang: Lang;
let menu: MenuLang;

before(async () => {
  commonLang = await GlobalFunctions.loadLangFile<Lang>(process.env.LANG_FILE!, 'common');
  menu = await GlobalFunctions.loadLangFile<MenuLang>(process.env.LANG_FILE!, 'menu');
});

describe('Navegar a diferentes apartados del menú principal', () => {
  it('Acceso a Colección', async () => {
    AllureFunctions.addTagName('TC03');

    AllureFunctions.startTestStep('Step 1 - Navegar a la url');
    await GlobalFunctions.goToUrl(process.env.BASE_URL!);
    AllureFunctions.addTestStep(`Se ha navegado a la url: ${process.env.BASE_URL}`);
    await AllureFunctions.addScreenshotToAllure('1', 'Navegar a la url');
    AllureFunctions.endTestStep();

    AllureFunctions.startTestStep('Step 2 - Validar botón de login');
    await PrincipalPage.checkLoginButton();
    AllureFunctions.addTestStep(`Se valida el botón de login`);
    await AllureFunctions.addScreenshotToAllure('2', 'Validacion del botón login');
    AllureFunctions.endTestStep();

    AllureFunctions.startTestStep('Step 3 - Acceder a Colección - Nuevo');
    await PrincipalPage.accederApartadoMenu(menu.coleccion.nombre);
    AllureFunctions.addTestStep(`Se accede al apartado ${menu.coleccion.nombre}`);
    await PrincipalPage.accederApartadoSubmenu(menu.coleccion.nuevo);
    AllureFunctions.addTestStep(`Se accede al subapartado ${menu.coleccion.nuevo}`);
    await PrincipalPage.validarNombreSeccion(menu.coleccion.nuevo);
    AllureFunctions.addTestStep(`Se valida la sección ${menu.coleccion.nuevo}`);
    await AllureFunctions.addScreenshotToAllure('3', `Validacion de la sección ${menu.coleccion.nuevo}`);
    AllureFunctions.endTestStep();

    AllureFunctions.startTestStep('Step 4 - Acceder a Colección - Idea de regalo');
    await PrincipalPage.accederApartadoMenu(menu.coleccion.nombre);
    AllureFunctions.addTestStep(`Se accede al apartado ${menu.coleccion.nombre}`);
    await PrincipalPage.accederApartadoSubmenu(menu.coleccion.ideaRegalo);
    AllureFunctions.addTestStep(`Se accede al subapartado ${menu.coleccion.ideaRegalo}`);
    await PrincipalPage.validarNombreSeccion(menu.coleccion.ideaRegalo);
    AllureFunctions.addTestStep(`Se valida la sección ${menu.coleccion.ideaRegalo}`);
    await AllureFunctions.addScreenshotToAllure('4', `Validacion de la sección ${menu.coleccion.ideaRegalo}`);
    AllureFunctions.endTestStep();

    AllureFunctions.startTestStep('Step 5 - Acceder a Sastrería - Corbatas');
    await PrincipalPage.accederApartadoMenu(menu.sastreria.nombre);
    AllureFunctions.addTestStep(`Se accede al apartado ${menu.sastreria.nombre}`);
    await PrincipalPage.accederApartadoSubmenu(menu.sastreria.corbatas);
    AllureFunctions.addTestStep(`Se accede al subapartado ${menu.sastreria.corbatas}`);
    await PrincipalPage.validarNombreSeccion(menu.sastreria.corbatas);
    AllureFunctions.addTestStep(`Se valida la sección ${menu.sastreria.corbatas}`);
    await AllureFunctions.addScreenshotToAllure('5', `Validacion de la sección ${menu.sastreria.corbatas}`);
    AllureFunctions.endTestStep();
  });
});
