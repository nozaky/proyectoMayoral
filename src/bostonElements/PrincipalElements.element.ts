export class PrincipalElements {
  static readonly acceptCookiesButton = "(//*[@name='saveCookiesPlusPreferences']//span[text()='Aceptar cookies'])[last()]";
  static readonly loginIcon = '[class*=mobile-btn-account]';
  static readonly menuButton = '[class*="btn-menu"]';
  static optionMenuButton(apartado: string) {
    return `//*[@id="iqitmegamenu-mobile"]//a[text()="${apartado}"]`;
  }
  static optionSubmenuButton(apartado: string) {
    return `//*[@id="iqitmegamenu-mobile"]//a[text()="${apartado}" and @href]`;
  }
  static readonly sectionLabel = '#main .page-title';
  static readonly cartContentModal = '#mobile-cart-wrapper .blockcart-content';
  static readonly checkCartButton = '#mobile-cart-wrapper .cart-buttons a';
}
