import * as PrincipalPage from '../../src/bostonPageObjects/PrincipalPage.page.ts';
import * as ProductListPage from '../../src/bostonPageObjects/ProductListPage.page.ts';
import * as AllureFunctions from '../../src/utils/AllureFunctions.ts';
import * as GlobalFunctions from '../../src/utils/GlobalFunctions.ts';
import * as ProductPage from '../../src/bostonPageObjects/ProductPage.page.ts';
import * as CartPage from '../../src/bostonPageObjects/CartPage.page.ts';
import { Lang } from '../../src/interfaces/langInterface.interface.ts';
import { MenuLang } from '../../src/interfaces/menuInterface.interface.ts';
import * as userData from '../../src/data/basicUser.json';

let commonLang: Lang;
let menu: MenuLang;

before(async () => {
  commonLang = await GlobalFunctions.loadLangFile<Lang>(process.env.LANG_FILE!, 'common');
  menu = await GlobalFunctions.loadLangFile<MenuLang>(process.env.LANG_FILE!, 'menu');
});

describe('Realizar la compra de un producto', () => {
  it('Compra de un artículo', async () => {
    AllureFunctions.addTagName('TC04');

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

    AllureFunctions.startTestStep('Step 4 - Seleccionar producto');
    await ProductListPage.selectProductByIndex(4);
    AllureFunctions.addTestStep(`Se selecciona el sexto producto del listado`);
    await ProductPage.addToCart();
    AllureFunctions.addTestStep(`Se agrega el producto al carrito`);
    await PrincipalPage.validarModalCompra();
    AllureFunctions.addTestStep(`Se muestra el modal del carrito`);
    await PrincipalPage.accederACompra(commonLang.carrito);
    AllureFunctions.addTestStep(`Se accede al apartado de Carrito correctamente`);
    await AllureFunctions.addScreenshotToAllure('4', 'Se ha agregado el producto al carrito');
    AllureFunctions.endTestStep();

    AllureFunctions.startTestStep('Step 5 - Informar datos de usuario');
    await CartPage.tramitarPedido();
    AllureFunctions.addTestStep(`Se accede al formulario de datos`);
    await CartPage.informarDatosPersonales(userData.tipoUsuario, userData.nombre, userData.apellidos, userData.fechaNacimiento);
    AllureFunctions.addTestStep(`Se rellena el formulario con los datos básicos`);
    await AllureFunctions.addScreenshotToAllure('5', 'Se ha informado de los datos básicos del usuario');
    AllureFunctions.endTestStep();
  });
});
