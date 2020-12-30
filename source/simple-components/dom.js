import { resolve } from 'app-root-path';

export default ( text = 'Hello😎!!!' ) => {
    const element = document.createElement('div');

    // импорт внутри блока НЕ СТАНДАРТ - нужен плагин
    element.addEventListener('click', async () => {
      element.innerHTML = 'Loading ...';

      const result = await import(/* webpackChunkName: "lazyloadedText" */ './lazyLoadedText');

      await new Promise((resolve) => setTimeout(resolve, 2000));

      element.innerHTML = result.default;
    });


    element.innerHTML = text;

    return element;
}
