import * as Allure from '@wdio/allure-reporter';
import * as path from 'path';
import * as fso from 'fs';
import { fileURLToPath } from 'url';
import { Status } from 'allure-js-commons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function addScreenshotToAllure(step: string, description: string): Promise<void> {
  const screenshot = await browser.takeScreenshot();
  const screenshotDir = path.join(__dirname, '../../screenshots');
  try {
    await fso.promises.access(screenshotDir);
  } catch {
    await fso.promises.mkdir(screenshotDir, { recursive: true });
    console.log('Carpeta de screenshots creada.');
  }
  const timestamp = Date.now();
  try {
    const screenshotPath = path.join(screenshotDir, `screenshot-${timestamp}.png`);
    await fso.promises.writeFile(screenshotPath, screenshot, { flag: 'wx', encoding: 'base64' });
    const screenshotData = fso.readFileSync(screenshotPath);

    Allure.addAttachment(`Step ${step}`, description, 'text/plain');
    Allure.addAttachment(`Captura de Pantalla del step ${step}`, screenshotData, 'image/png');
  } catch (error) {
    console.log('No se generó la captura correctamente');
  }
}

export async function addTagName(tag: string): Promise<void> {
  Allure.addTag(tag);
}

export async function startTestStep(step: string): Promise<void> {
  Allure.startStep(step);
}

export async function addTestStep(step: string): Promise<void> {
  Allure.addStep(step);
}

export async function endTestStep(status?: string): Promise<void> {
  if (status) {
    switch (status) {
      case 'failed':
        Allure.endStep(Status.FAILED);
        break;

      default:
        Allure.endStep();
        break;
    }
  } else {
    Allure.endStep();
  }
}
