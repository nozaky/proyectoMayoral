export interface MenuLang {
  [key: string]: {
    nombre: string;
    [additionalKey: string]: string; // Permite cualquier clave adicional con valor de tipo string
  };
}
