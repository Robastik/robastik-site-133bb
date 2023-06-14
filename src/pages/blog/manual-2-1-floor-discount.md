---
title: Корректировка на этаж 
subtitle: Часть 1. Сбор и подготовка данных
date: '2023-04-27'
excerpt: Пошаговая иллюстрированная инструкция о сборе, подготовке данных и проведении расчета. Часть 1. Сбор и подготовка данных
image_alt: анализ этажности
thumb_image_alt: Кластеры застройки по этажности
meta_title: Корректировка на этаж
meta_description: Подготовка данных
canonical_url: ' '
no_index: false
template: post
author: src/data/authors/jane-doe.yaml
thumb_image: images/manual-2-1-floor-discount/0.png
image: images/manual-2-1-floor-discount/0.png
---
Пошаговая иллюстрированная инструкция по решению задачи анализа этажности городской застройки, в т.ч. расчет скидок за первый и последний этажи. В качестве модельного города принят Брянск. Расчетный файл прилагается и его листы пронумерованы в последовательности выполненных операций. Шаблон расчета легко адаптировать для другого города и вида недвижимости.

Инструкция состоит из двух частей. В первой части изложен порядок подготовки, первичного ознакомления с данными и уточнения цели исследования. Во второй части будет сделан расчет скидки за этаж.

# 1. Что потребуется

Для _построения инфраструктуры работы с большими данными_ в данном случае потребуется только Excel. Excel соберет данные с досок объявлений, Excel их подготовит для использования, Excel их визуализирует и преобразует в знания. Вы знакомы с Excel? → если да, то вы уже не офисный планктон, а _опытный дата-инженер_ и _дата-аналитик_!

_Настройка инфраструктуры_ для нашего _кейса_ заключается в _конфигурировании_ Excel двумя надстройками. Надстройка _[Power Query](https://en.wikipedia.org/wiki/Power_Query)_ предоставляет средства _[ETL](https://ru.wikipedia.org/wiki/ETL)_. Надстройка _[Робастик](https://robastik.ru/)_ предоставляет средства автоматизации.

# 2. Данные

Исходный _набор данных_ собран с досок объявлений. _Датасет_ состоит из 15 файлов в одной папке, в каждом из которых находятся собранные в течение календарного месяца объявления (ежемесячный срез рынка). Инструкция для парсинга объявлений недвижимости изложена в одной из [предыдущих публикаций](https://robastik.ru/blog/manual-1-simple-map-and-data-clearing/).

# 3. Получение данных

Для извлечения данных из датасета используем Power Query. В разных версиях Excel меню Power Query выглядит по-разному. В версиях 2010 и 2013 ее надо устанавливать дополнительно, а с 2016 она идет в составе Excel.

Для объединения данных из 15 файлов и вставки в лист новой книги нужно сделать несколько кликов.

В версии 2019 это меню находится здесь:

![](/images/manual-2-1-floor-discount/1.png)

В версии 2013 это меню находится здесь:

![](/images/manual-2-1-floor-discount/2.png)

Затем объединяем и загружаем:

![](/images/manual-2-1-floor-discount/3.png)

После чего остается выбрать лист с данными:

![](/images/manual-2-1-floor-discount/4.png)

Поскольку парсер автоматически формирует названия листов, названия листов с данными по квартирам в Брянске будут одинаковыми во всех файлах. В результате на одном листе №1 будут объединены в одну таблицу все имеющиеся данные из всех файлов в папке с листов, имеющих одинаковое название.

Всего таким образом извлечено порядка 150 тысяч записей.

# 4. Очистка данных

## 4.1. Удаление лишних колонок

Исходные данные расположены в 49 колонках. Данные из большинства колонок не потребуются. Удаляем лишние колонки данных.

В версии 2019 это выглядит так:

![](/images/manual-2-1-floor-discount/5.png)

В версии 2013 это выглядит так:

![](/images/manual-2-1-floor-discount/6.png)

И затем либо удаляем лишние столбы, либо выбираем те, которые надо оставить.

![](/images/manual-2-1-floor-discount/7.png)

В завершение размещаем результат на новый лист №2:

![](/images/manual-2-1-floor-discount/8.jpg)

Теперь переходим к работе со строками.

## 4.2. Удаление дубликатов

Поскольку в задаче не предполагается сопоставление помесячных срезов, дубликаты нам не потребуются.

Для удаления дубликатов делаем активным лист №2 → из таблицы → выделить колонку itemID →

![](/images/manual-2-1-floor-discount/9.jpg)

удалить строки → удалить дубликаты:

![](/images/manual-2-1-floor-discount/10.jpg)

itemID  - это номера объявлений. Удаление строк с дублирующимися номерами объявлений означает, что будут удалены записи одного и того же объявления, опубликованного в течение разных месяцев.

В завершение размещаем результат на новый лист №3 → закрыть и загрузить.

## 4.3. Удаление лишних категорий

В исходных данных собрана продажа, покупка и аренда. Ограничимся данными о продаже.

Также не станем рассматривать специфику новостроек, оставим только вторичный рынок.

Для этой операции делаем активным лист №3 → из таблицы → открыть фильтр колонки **Офер** → оставить галку **Продам** :

![](/images/manual-2-1-floor-discount/11.jpg)

Аналогично в колонке Рынок снять галку Новостройка:

![](/images/manual-2-1-floor-discount/12.jpg)

В завершение размещаем результат на новый лист №4: закрыть и загрузить.

На этом данные считаем подготовленными для анализа.

Отметим, что для подготовки данных потребовалось только немного пощелкать мышкой. Формулы не использовались совсем.

# 5. Анализ

## 5.1. Группы этажности

Для общего понимания города в аспекте этажности рассмотрим распределение зданий по этажности и размещение этажности на территории.

Делаем активным лист №4 → из таблицы → выделяем столбец **Этажность** → группировать:

![](/images/manual-2-1-floor-discount/13.png)

→ В таблице после группировки выбираем столбец Этажность → сортировать:

![](/images/manual-2-1-floor-discount/14.jpg)

В завершение размещаем результат на новый лист №5: закрыть и загрузить.

На листе №5 теперь расположена таблица:

![](/images/manual-2-1-floor-discount/15.jpg)

Для наглядного представления построим на этих данных график:

![](/images/manual-2-1-floor-discount/16.png)

Как видим из графика, город преимущественно пятиэтажный. Помня о том, что данные парсились по запросу для Брянской области, можно предположить, что малоэтажки в значительной степени размазаны по территории всей области.

Следующую по численности группу составляют 9 – 10 –этажки. Последняя по количеству группа состоит из 14 – 17 –этажек.

Из визуальной оценки можно отметить, что каждой группе этажности соответствует свой исторический период. Каждый период характеризуется не только преобладающими нормами и технологией строительства, но и отношениями между властью и обществом (насколько можно уплотнить граждан на квадратном метре застройки), и преобладающим контингентом (пенсионеры, потомки тружеников промышленности, баловни периода «до», гетто времен «после», и т.д.).

Исходя из первичной оценки групп этажности сформируем внутри них территориальные кластеры. Благодаря этому будут получены однородные группы объектов с минимальным разбросом характеристик. Это позволит лучше выделить влияние фактора первого/последнего этажа благодаря низкому уровню шума от факторов местонахождения и этажности.

Разделим данные на группы этажности:

![](/images/manual-2-1-floor-discount/17.jpg)

На графике:

![](/images/manual-2-1-floor-discount/18.png)

## 5.2. Кластеры по территории

Подготовим данные для построения графика кластера для группы этажности 1 - 3.

Делаем активным лист №4 → из таблицы → выбрать столбцы → (удерживая Ctrl) широта, долгота, этажность.

В завершение размещаем результат на новый лист №6: закрыть и загрузить.

Делаем активным лист №6 → из таблицы → открыть фильтр колонки Этажность → оставить галки 1,2 и 3 → закрыть и загрузить в лист 7.1-3:

![](/images/manual-2-1-floor-discount/19.png)

Аналогично загружаем данные для группы 4 – 7 на лист 7.4-7, группы 8 – 12 на лист 7.8-12 и группы 13 – 19 на лист 7.13-19.

Далее создаем лист №8.1-3 и добавляем в него шаблон карты. Работа с картой подробно разобрана в [предыдущей публикации](https://robastik.ru/blog/manual-1-simple-map-and-data-clearing/).

В шаблон карты вставляем ссылку на столбцы А:В в листе №7.1-3, синий цвет RGB имеет код 0,0,255.

![](/images/manual-2-1-floor-discount/20.png)

В результате получаем пустую карту где-то в Белоруссии:

![](/images/manual-2-1-floor-discount/21.png)

Это произошло оттого, что не стали чистить данные в колонках **Широта** и **Долгота**. Пустая карта не является проблемой → нужно позумить карту колесом мышки до тех пор, пока на ней не появятся отметки:

![](/images/manual-2-1-floor-discount/22.png)

Затем перетащить мышкой Брянск в центр карты и отзумить масштаб обратно:

![](/images/manual-2-1-floor-discount/23.png)

Как и предполагалось, малоэтажные здания не формируют кварталы сплошной застройки.

Аналогично построим график на карте для остальных групп этажности.

Этажность 4 – 7 за пределами города сконцентрирована в районных центрах:

![](/images/manual-2-1-floor-discount/24.jpg)

В городе этажность 4 - 7 расположена кварталами сплошной застройки:

![](/images/manual-2-1-floor-discount/25.png)

Определим территориальный кластер на перекрестке улиц Литейная и Ново-Советская:

![](/images/manual-2-1-floor-discount/26.png)

Откроем это место на сайте 2gis.ru и определим координаты центра кластера:

![](/images/manual-2-1-floor-discount/27.png)

Там же воспользуемся инструментом **Линейка** и измерим размер кластера (радиус окружности, вмещающей жилые строения):

![](/images/manual-2-1-floor-discount/28.png)

С помощью этих данных можно определить окружность, включающую в себя объекты территориального кластера. Окружность используется для отбора входящих в кластер данных.

Аналогично повторим с территориальным кластером между улицами Костычева и Красноармейская – Авиационная:

![](/images/manual-2-1-floor-discount/29.png)

Поскольку кластер очень вытянутый, для его определения используем две окружности: 1) с центром 53.261924° 34.32897° и радиусом 700 метров, 2) с центром 53.253313° 34.334564° и радиусом 650 метров.

Построим выбранные территориальные кластеры на карте.

Воспользуемся функцией **Дистанция** :

![](/images/manual-2-1-floor-discount/30.png)

В кластер войдут те точки, дистанция от которых до центра кластера меньше радиуса окружности.

На листе №9.4-7 запишем сводку определяющих кластеры окружностей:

![](/images/manual-2-1-floor-discount/31.png)

По этим данным добавим на листе №7.4-7 новые столбцы с формулой для расчета. Если дистанция от точки до центра окружности меньше радиуса, то точка входит в кластер:

![](/images/manual-2-1-floor-discount/32.png)

Для формирования выборок точек, входящих и не входящих в территориальные кластеры делаем активным лист №7.4-7 →  из таблицы → в фильтре колонки Кластер 1 снять галку FALSE → удалить все столбцы, кроме широты и долготы → закрыть и загрузить → назвать новый лист 10.4-7.1.

Аналогично из кластера 2-1 загружаем в лист №10.4-7.21 и из кластера 2-2 загружаем в лист №10.4-7.22. Затем объединяем их в лист №10.4-7.2.

Чтобы получить выборку данных, не вошедших в территориальные кластеры, из таблицы на листе 7.4-7 вычитаем таблицы 10.4-7.1, 10.4-7.21 и 10.4-7.22 и загружаем в лист 10.4-7.0.

Заполняем шаблон карты:

![](/images/manual-2-1-floor-discount/33.png)

Отображаем результат:

![](/images/manual-2-1-floor-discount/34.png)

Аналогично для этажности 8 – 12:

![](/images/manual-2-1-floor-discount/35.png)

И для 13 – 19:

![](/images/manual-2-1-floor-discount/36.png)

В заключение – все кластеры вместе:

![](/images/manual-2-1-floor-discount/0.png)

Все использованные данные:

![](/images/manual-2-1-floor-discount/37.png)

Стоит обратить внимание на то, что для подготовки данных потребовалась только одна формула.

Подготовленные данные далее будут использованы для расчета скидки на этаж во второй части инструкции.

***

Файл с данными и с расчетами (в следующей части также скидки для первого и последнего этажа) можно скачать [здесь](https://github.com/Robastik/Habr/releases/download/1/Floor.discount.xlsx).