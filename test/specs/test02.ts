import * as LoginPage from '../../src/bostonPageObjects/LoginPage.page.ts';
import * as PrincipalPage from '../../src/bostonPageObjects/PrincipalPage.page.ts';
import * as AllureFunctions from '../../src/utils/AllureFunctions.ts';
import * as GlobalFunctions from '../../src/utils/GlobalFunctions.ts';
import { Lang } from '../../src/interfaces/langInterface.interface.ts';
let comonLang: Lang;

before(async () => {
  comonLang = await GlobalFunctions.loadLangFile<Lang>(process.env.LANG_FILE!, 'common');
});

describe('Boston - Login', () => {
  it('Login incorrecto', async () => {
    let user: string = 'Prueba@gmail.com';
    let password: string = 'Prueba';
    AllureFunctions.addTagName('TC02');
    AllureFunctions.startTestStep('Step 1 - Navegar a la url');
    await GlobalFunctions.goToUrl(process.env.BASE_URL!);
    AllureFunctions.addTestStep(`Se ha navegado a la url: ${process.env.BASE_URL}`);
    await AllureFunctions.addScreenshotToAllure('1', 'Navegar a la url');
    AllureFunctions.endTestStep();
    AllureFunctions.startTestStep('Step 2 - Validar botón de login');
    await PrincipalPage.checkLoginButton();
    AllureFunctions.addTestStep(`Se valida el botón de login`);
    await PrincipalPage.goToLogin();
    AllureFunctions.addTestStep(`Se navega a la pantalla de login`);
    await LoginPage.doLogin(user, password);
    AllureFunctions.addTestStep(`Se intenta acceder con un usuario y contraseña incorrectos`);
    await LoginPage.validateErrorLoginMessage(comonLang.errorLogin);
    AllureFunctions.addTestStep(`Se valida el mensaje de error`);
    await AllureFunctions.addScreenshotToAllure('2', 'Validacion de login incorrecto');
    AllureFunctions.endTestStep();
  });
});
