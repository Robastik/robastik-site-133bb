---
title: Главная
sections:
  - section_id: hero
    type: section_hero
    image: images/magenta-celery.png
    image_alt: Меню надстройки Excel Робастик
    title: Автоматизация в Excel и Word
    content: >
      Добавьте в Excel:


      1. готовый парсинг недвижимости


      2. автозаполнение Word из Excel


      3. вывод данных на геокарте
    actions:
      - label: Скачать Робастик
        style: primary
        onClick: >-
          ym(72915511, "reachGoal", "Скачивание на главной вверху"); return
          true;
        url: >-
          https://github.com/Robastik/Robastik/releases/latest/download/Robastik.for.Excel.64-bit.zip
  - section_id: features
    type: section_features
    background: white
    features:
      - title: Парсинг недвижимости в Excel
        image: images/MenuParser.png
        image_alt: Парсинг недвижимости Авито ЦИАН в Excel
        content: >
          *   Скопировать ссылку из браузера в Excel и кликнуть "Старт". Данные
          начнут загружаться на лист Excel.


          *   Авито, ЦИАН и любой сайт на заказ.
        actions:
          - label: Подробнее
            url: /features-parsing
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - title: Заполнить документ Word по шаблону
        image: images/MenuWord-2496f53a.png
        image_alt: АвтоЗаполнение шаблона Word данными из Excel
        content: >
          *   [Перенос данных из ячеек](/blog/fill-report-doc-data-from-excel/) Excel в поля документа Word

          *   Импорт в Word [целых таблиц](/fill-report-doc-data-from-excel#hole-table) Excel с форматированием

          *   [Вставка изображений](/blog/create-image-tables-word-merge-excel/) в шаблон Word

          *   [Контроль результата](/blog/merge-word-excel-template-control-errors/) автозаполнения по шаблону

          *   [Демонстрационные примеры](/blog/demo-files-fill-template-word-excel-vba/) прилагаются
        actions:
          - label: Подробнее
            url: /features-filling
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - title: Метки на географической карте
        image_alt: Тепловая карта heatmap недвижимости Авито ЦИАН
        content: |
          *   Любое количество меток в несколько слоев

          *   Индивидуальная настройка цвета, размера и подписи меток

          *   Географическая карта с метками в Excel для вставки в Word

          *   Тепловая карта, карта цен, HeatMap на географической карте
        actions:
          - label: Подробнее
            url: /features-plotting
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        image: images/MapMenu.png
  - section_id: more
    type: section_reviews
    background: white
    title: ..и другие функции
    subtitle: >-
      для подготовки данных Excel к заполнению ими справок, сводок, отчетов и
      других документов Word
    reviews:
      - author: Число прописью
        content: >-
          Функция <b><i>=Прописью()</i></b> напишет число словами и добавит
          <b>руб. коп.</b> в соответствии с заданными настройками.
      - author: Склонение по падежам
        content: "Функция <b><i>=ФИО()</i></b> просклоняет Иванов\_❯ Иванову\_❯ Иванова, сократит инициалы\_и обратится <i>уважаем<b>ый -ая</b></i>."
      - author: Другие функции
        content: "Вставить фототаблицу, определить расстояние на карте и другие возможности подготовки данных для заполнения ими документов по шаблону"
  - section_id: call-to-action
    type: section_cta
    title: Ускорьте Excel и Word
    subtitle: >-
      Успевайте быстрее и без ошибок
    actions:
      - label: Скачать Робастик
        style: primary
        url: >-
          https://github.com/Robastik/Robastik/releases/latest/download/Robastik.for.Excel.64-bit.zip
  - section_id: recent-posts
    type: section_posts
    background: gray
    title: С чего начать
meta_title: Робастик | Автоматизация в Excel
meta_description: >-
  Парсинг недвижимости, автозаполнение Word и тепловая географическая карта цен
template: landing
canonical_url: ' '
---
