# щоб скористуватись svg іконками:

- Імпортуйте об'єкт "ICONS" з файлу "icons.const.ts", який згаходиться в папці "components";
- Звертатися до необхідної вам іконки треба по назві об'єкта, та назві іконки через крапку "ICONS.ICON_NAME";
- Відображення іконки на сторінці проходить в стандартному тезі <svg>;
- Для зміни стилів в іконці використовуйте scss класи;

# приклад:

import {ICONS} from './icons.const.tsx'

<ICONS.USER className="iconUser"/>
