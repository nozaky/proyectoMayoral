import * as PrincipalPage from '../../src/bostonPageObjects/PrincipalPage.page.ts';
import * as AllureFunctions from '../../src/utils/AllureFunctions.ts';
import * as GlobalFunctions from '../../src/utils/GlobalFunctions.ts';

describe('Navegar a bostom y comprobar página de inicio', () => {
  it('Prueba de acceso', async () => {
    AllureFunctions.addTagName('TC01');
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
  });
});
