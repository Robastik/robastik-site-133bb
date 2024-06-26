---
title: Как загрузить данные с Авито и ЦИАН прямо сейчас
excerpt: >-
  Робастик полностью готов к загрузке данных с Авито и ЦИАН после установки.
  Просто нажмите "Старт" и загрузка начнется.
author: src/data/authors/jane-doe.yaml
date: '2100-01-02'
thumb_image: images/man-exploring-globe-purple.png
thumb_image_alt: Парсить Авито и ЦИАН без регистрации и СМС
image: images/blue-whale.png
image_alt: Парсинг любого сайта из меню Excel
template: post
subtitle: 'Выбери ссылку на сайте недвижимости, а остальное сделает Excel'
meta_title: Робастик | Парсинг
meta_description: 'Робастик - VBA надстройка Excel для парсинга Авито, ЦИАН и любых других сайтов'
canonical_url: 'https://robastik.ru/blog/start-parsing-avito-cian-now/'
---
**Парсить Авито, ЦИАН и другие сайты Робастиком** действительно очень просто. Просто – потому что не требуется изучать новую программу для парсинга, ведь все сделает сам Excel.

## 1 Демонстрационный режим

Можно скачать и установить Робастик прямо сейчас, чтобы протестировать парсинг в демонстрационном режиме. По изложенной здесь инструкции можно быстро разобраться с запуском и настройкой парсинга недвижимости. В демонстрационном режиме некоторые случайно выбранные данные заменяются ссылкой на оформление подписки. Других ограничений нет.

![Демо режим парсинга Авито и ЦИАН](/images/start-parsing-avito-cian-now/demo-mode-parsing.PNG)

Ссылка **Отключение демонстрационного режима** ведет на страницу оформления подписки.  

>Оформить оплату на сайте нельзя!
Переход на страницу оформления подписки возможен только из Excel с установленным Робастиком.

Другой способ для оформления оплаты → кнопка **ОПЛАТА** в меню **Настройки** Робастика:

![Меню оплаты парсинга](/images/start-parsing-avito-cian-now/payment-parsing.PNG)

На странице оплаты можно выбрать галочками необходимые функции парсинга аналогично калькулятору на странице [Цены](/price-message?mode=price), указать реквизиты заказчика и получить автоматически сформированный счет и договор.

## 2 Перечень собираемых данных

Парсер выгружает все данные, которые есть на странице в видимом или скрытом виде. В основном состав данных стабилен. Точный состав данных иногда меняется. Для ознакомления с актуальным составом данных по конкретным разделам сайтов установите Робастик и протестируйте парсинг в демонстрационном режиме.

### 2.1 ЦИАН

Примерный состав данных **раздела коммерческой недвижимости**:
<a name="data_fullness"></a>
`Фото,  Ссылка,  Категория,  Статус,  ТипСделки,  offerType,  address.address0,  address.address1,  address.address2,  address.address3,  address.address4,  address.address5,  широта,  долгота,  id,  objectGuid,  cianId,  userId,  publishedUserId,  cianUserId,  Описание,  phones.countryCode,  Телефон,  terms.days,  terms.type,  tariffIdentificator.tariffId,  tariffIdentificator.tariffGridType,  publishTerms.autoprolong,  cadastralNumber,  Общая,  Этаж,  Цена,  bargainTerms.priceType,  bargainTerms.currency,  bargainTerms.vatIncluded,  bargainTerms.vatType,  prices.rur,  prices.usd,  prices.eur,  vatPrices.rur,  vatPrices.usd,  vatPrices.eur,  Этажность,  building.totalArea,  ДатаРедактирования,  pricePerUnitArea,  pricePerUnitAreaRur,  pricePerUnitAreaUsd,  pricePerUnitAreaEur,  priceTotal,  priceTotalRur,  priceTotalUsd,  priceTotalEur,  vatPriceTotalRur,  pricesPerSquareMeter.rur,  pricesPerSquareMeter.usd,  pricesPerSquareMeter.eur,  exportLinks.pdfUrl,  exportLinks.docxUrl,  Добавлено,  valueAddedServices.isStandard,  Опубликовано,  trackingData.oblId,  trackingData.cityId,  trackingData.fbRegion,  trackingData.fbCity,  isImported,  timezone,  isEnabledCallTracking,  callTrackingProvider,  userTrust,  userTrustLevel,  isUniqueCheckDate,  externalId,  bestPlaceAnalyticsAvailable,  Загружено,  address.full,  businessShoppingCenter.buildingType,  businessShoppingCenter.id,  businessShoppingCenter.name,  businessShoppingCenter.type,  businessShoppingCenter.url,  land.area,  land.areaUnitType,  Материал,  Строительство,  Парковка,  building.name,  Потолок,  building.type,  building.statusType,  liftTypes.type,  liftTypes.count,  building.houseMaterialType,  isUniqueForCian,  businessShoppingCenter.buildingClassType,  land.type,  parking.placesCount,  parking.isFree,  building.accessType,  building.classType,  building.ventilationType,  building.conditioningType,  building.heatingType,  building.extinguishingSystemType,  isUnique,  hasInternet,  building.shoppingCenterScaleType,  building.tenants,  valueAddedServices.isPremium,  jk.id,  jk.name,  house.id,  house.name,  gaGeo.oblId,  gaGeo.cityId,  jk.fullUrl,  newbuilding.id,  newbuilding.name,  house.isFinished,  finishDate.quarter,  finishDate.year,  newbuildingFeatures.imagesCount,  newbuildingFeatures.firstImageUrl,  newbuildingFeatures.deadlineInfo,  title,  conditionType,  valueAddedServices.isTop3`

Для ознакомления с составом данных других разделов ЦИАН запустите их парсинг в демонстрационном режиме.

### 2.2 Авито

Меню парсинга Авито включает возможность управления полнотой сохраняемых данных. 

![Опция полного набора данных](/images/start-parsing-avito-cian-now/avito-menu-full-dataset.PNG)

При отключенной настройке **Полный набор данных** сохраняется минимальный жестко закрепленный набор данных. Примерный состав закрепленного набора данных в разделе аренды коммерческой недвижимости:

`Фото, Ссылка, itemID, Общая_площадь, Этаж, Отделка, Планировка, Тип_аренды, Арендные_каникулы, Право, Офер, Продавец_стаж, Цена, Цена_назначена, Цена_база, Цена_валюта, КатегорияID, Локация, ЛокацияID, Адрес, Долгота, Широта, Активные, Завершенные, Подменный, Описание, Опубликовано, Тип_здания, Класс_здания, Парковка, Назначение, Загружено, Высота_потолков, Аренда_части, Минимальный_срок_аренды, Продавец_ачивка, Вход, Отдельный_вход, Отопление, Удалённость_от_дороги, Количество_парковочных_мест, Юрлицо, Платежи_включены`

Для ознакомления с составом данных других разделов __Авито__ запустите их парсинг в демонстрационном режиме.

Полный набор данных очень велик (350 полей в данном случае), что может затруднять работу с данными. Полный набор данных не закреплен жестко, а формируется динамически на основе фактически имеющихся на странице данных. Динамический характер формирования полного набора данных позволяет избежать потери данных в случае изменения структуры представленных на странице данных. Жестко закрепленный минимальный набор потребует в таком случае ручного исправления. 

> При использовании минимального набора данных в случае отсутствия необходимых полей обращайтесь в техподдержку для внесения своевременных исправлений.

Обычно исправления делаются в течение 1 - 5 дней.

## 3 Техническая поддержка пользователей

Изменения на сайтах недвижимости происходят постоянно и это сказывается на работе парсеров. Изменения структуры данных, настройка прав доступа, оптимизация нагрузки, защита от деструктивных действий и многие другие незаметные внешне изменения сайтов - это обычная каждодневная жизнь IT-сервисов.

Часто эти изменения приводят к отсутствию некоторых данных в скачиваемой информации, нарушают действия на странице (например, открытие номера телефона) или выводят мешающее на скриншоте всплывающее окно.

По этой причине к сбоям парсинга надо относиться как к нормальному явлению. При обнаружении сбоя надо сразу сообщать о нем с указанием:
- версии Excel,
- версии Робастика,
- ссылок, на которых наблюдается сбой,
- скриншота окна Excel при сбое,
- описанием сбоя (отсутствуют или неверные данные, не сохраняются фото и т.п.).
<a name="link_parsing"></a>
С любым вопросом о технической поддержке можно обращаться в **[Ватсап](https://wa.me/message/YRGCZNRS7UEAM1)** и **[Телеграм](https://t.me/RobastikRu)**.

Другие ресурсы Робастика:
- [Фейсбук](https://www.facebook.com/groups/excelword/)
- [ВКонтакте](https://vk.com/exceltoword)
- [Дзен](https://zen.yandex.ru/robastik)
- [Аппрайзер](http://appraiser.ru/default.aspx?SectionId=32&g=posts&t=14905)
- [Почта](mailto:tech@robastik.ru).

*Cообщайте о неполадках Робастика и это поможет сделать его лучше для вас!*

## 4 Ссылки для парсинга

Ссылки можно добавлять в парсер в ручном и в автоматическом режиме. Ознакомьтесь с ручным вариантом ниже и перейдите к автоматическому, который описан в [специальном разделе](/blog/auto-add-links/).

После установки Робастика в меню Excel появляются новые кнопки: **Добавить ссылку**, **Браузер** и **Старт**.

![Меню парсинга Авито и ЦИАН](/images/start-parsing-avito-cian-now/initial-menu-parsing.PNG)

Ссылку для парсинга можно сформировать самостоятельно или с помощью фильтров на сайте недвижимости. Как получить ссылку с помощью фильтров смотрите в постах про [телеграм-бота](/blog/telegram-bot-full-manual/) и про [тепловую карту цен](/blog/manual-1-simple-map-and-data-clearing/).

Робастик добавляет в меню Excel кнопку для добавления ссылок, которые надо спарсить. Там же рядом и кнопка «Старт», которая запускает сам процесс.

Перед добавлением ссылки в парсер ее сначала нужно скопировать в буфер обмена из адресной строки браузера. Чтобы скопировать ссылку нужно установить курсор мышкой в адресную строку, нажать одновременно клавиши Ctrl + A(Ф) для выделения всей ссылки полностью и затем нажать одновременно Ctrl + C для копирования выделенной ссылки в буфер обмена.

![поиск объектов недвижимости в режиме онлайн](/images/telegram-bot-full-manual/Avito_Link.PNG)

После этого в меню Робастика нажимаем **Добавить ссылку**:

![самые свежие объявления о продаже квартир вторичка](/images/telegram-bot-full-manual/Add_Link.PNG)

В открывшемся окне кликаем курсором мышки и нажимаем одновременно Ctrl + V(М) для вставки ссылки из буфера обмена:

![самые свежие объявления +о продаже квартир авито](/images/telegram-bot-full-manual/Insert_Link.PNG)

Нажимаем **ОК**, в открывшемся диалоге выбираем файл Excel (в который будут сохраняться объявления) и в меню Робастика видим название добавленной ссылки → на той кнопке **Добавить ..**, которую только что нажимали, и слева в поле уведомлений → с названием файла Excel для сохранения.

![договор поиска объекта недвижимости](/images/telegram-bot-full-manual/Link_Added.PNG)

Каждой добавленной в меню парсинга ссылки присваивается название. Такое же название дается вкладке (листу) Excel с данными из этой ссылки. То есть каждой ссылке соответтствует своя вкладка Excel и это соответствие никогда не меняется.

Для каждой добавленной в парсер ссылки создается своя вкладка (лист) в книге Excel, на которую сохраняются данные по этой ссылке. Название вкладки соответствует названию ссылки. Например, в примере выше название **ЦИАН.Кв.5073** указывает на то, что это ссылка на **ЦИАН**, на раздел **Квартиры** и данные ограничены регионом **5073**. Таким же образом формируется название для Авито, за исключением того, что Авито указывает регион транслитерацией, а не номером региона.

## 5 Визуальный контроль парсинга

Во время установки Робастик встраивает в Excel браузер Chrome. Поэтому весь процесс парсинга можно видеть непосредственно в окне браузера.

Каждая добавленная в парсер ссылка загружается отдельным экземпляром браузера. То есть все добавленные в парсер ссылки загружаются параллельно и независимо друг от друга.

По умолчанию окна Excel с браузерами для ссылок сделаны невидимыми. Чтобы сделать видимым окно браузера нужно активировать вкладку (лист) Excel с названием соответствующей ссылки и нажать в меню Робастика кнопку **Браузер**. Если название вкладки Excel не соответствует ни одной ссылке в меню парсинга, появится сообщение с предложением выбрать вкладку с названием ссылки.

Чтобы снова сделать окно браузера невидимым нужно повторно нажать кнопку **Браузер** при активной вкладке Excel, соответствующей названию загружаемой ссылки. 

Кнопка **Браузер** неактивна до начала парсинга. Она становится активной после нажатия кнопки **Старт**.

В баузере можно не только видеть как последовательно загружаются объявления, но и разного рода сбои, такие, как **404 Нет страницы**, капча, **504 Gateway Time Out** и т.п. В браузере также можно выполнить действия для выхода из бана, например, решить капчу.

## 6 Последовательность парсинга

Робастик автоматизирует работу по сбору данных, т.е. делает те же действия, которые делает человек:

1. Открывает первую страницу со списком объявлений и запоминает ссылки на все объявления в этом списке.

2. По очереди открывает все объявления из сохраненного списка ссылок и записывает полученные из объявлений данные на лист Excel, сохраняет фотографии из объявления, делает скриншоты объявления и другие действия в соответствии с **Настройками** парсера.

3. Повторяет пункты **1** и **2** до тех пор, пока остаются незагруженные объявления.

4. после загрузки всех объявлений от начала до конца - делает перерыв на 1 час и начинает все с начала.

Некоторые объявления иногда могут не открываться с первого раза. Такое происходит по разным причинам. Например, вследствие окончания оплаченного срока объявления, модерации объявления, технического сбоя в датацентре или в ПО сайта, DDOS атаки на магистральных сетях связи, скачках напряжения на оборудовании провайдера в вашем подъезде, действия нейросети по защите от ботов и т.д.

Если объявление не было открыто при первом проходе по причине любой ошибки, оно будет загружено при втором или последующем проходе. 

После начала известных событий технические сбои на сетях передачи данных стали обычным явлением. Поэтому практика парсинга за 2 - 3 прохода позволяет гарантировать полноту загружаемых данных.

При регулярном парсинге одних и тех же ссылок часто используют один файл для сохранения данных в течение месяца. В результате получается архив файлов для каждого месяца, который удобно открывать целиком в Excel в меню **Данные** → **Получить данные** → **Из файла** → **Из папки**.

## 7 Индикация состояния парсинга

Конкретные действия с каждой добавленной в парсер ссылкой отображаются в меню парсинга:

\n\ - запрос страницы-списка №n со ссылками на страницы объявлений

/n/ - получение страницы-списка №n со ссылками на страницы объявлений

< - запрос страницы объявления из списка

\> - получение страницы объявления

\* - действия на странице

! - страница недоступна и другие ошибки

^ - инициализация браузера

х - страница заблокирована (бан)

_ - перерыв после загрузки всех доступных объявлений

Например: 

**\15\ЦИАН.Кв.5073** - парсер запрашивает 15-ю страницу со списком объявлений, 

**/15/ЦИАН.Кв.5073** - ожидается получение запрошенной 15-й страницы со списком объявлений,

**61<ЦИАН.Кв.5073** - получено 61 объявление и запрашивается следующее,

**62>ЦИАН.Кв.5073** - ожидается получение 62-го объявления,

**89*ЦИАН.Кв.5073** - открывается номер телефона, закрываются всплывшие окна и т.п.,

**61!ЦИАН.Кв.5073** - страница будет пропущена вследствие ошибки ее получения,

**61хЦИАН.Кв.5073** - сервис заблокирован, необходимо увеличить интервал получения данных, решить капчу в браузере и на 2-3 дня приостановить парсинг для исключения IP из черного списка,

**61_ЦИАН.Кв.5073** - парсер прошел по всем объявлениям от первого до последнего и сделал перерыв, после которого снова начнет с первого объявления на первой странице.

## 8 Настройки парсинга

По умолчанию одновременно можно парсить до 11 разных ссылок. 

Одновременно можно сохранять данные как в разные вкладки одного файла, так и в разные файлы. Одновременное сохранение в разные файлы требует больше ресурсов компьютера и может быть причиной большего количества сбоев, поэтому рекомендуется для всех одновременно загружаемых ссылок указывать один файл для сохранения данных.

Количество загружаемых записей ограничивается только доступным количеством строк на листе Excel (1 048 576 строк).

Парсинг требует много ресурсов компьютера. Выбирайте количество одновременно загружаемых ссылок в соответствии с тем, насколько хорошо с ними справляется компьютер.

## 8.1 Общие настройки парсинга

Общие настройки парсинга распространяются на все парсеры.

![Общие настройки парсинга Авито и ЦИАН](/images/start-parsing-avito-cian-now/general-options-parsing.PNG)

При отключенной настройке **Только уникальные** парсер сохраняет данные всех объявлений без учета проверки были они уже загружены на вкладку Excel или нет. В этом случае при каждом проходе парсера от первого до последнего объявления они будут сохранены на вкладку Excel все без исключения при каждом очередном проходе. В результате одно и то же объявление будет загружено несколько раз.

При включенной настройке  **Только уникальные** парсер проверяет наличие на вкладке Excel загруженной ссылки на объявление и при наличии сохраненного объявления пропустит его. Сколько бы проходов не сделал парсер от первого до последнего объявления, каждое объявление будет загружено не более одного раза, то есть будет уникальным в этом файле Excel.

Настройка **Отправлять по условию в телеграм** переводит парсер в режим [Telegram-бота](/blog/telegram-bot-full-manual/).

## 8.2 Индивидуальные настройки парсеров

В настройках парсера можно выбрать раздел недвижимости для парсинга. Например, если при отключенной настройке раздела **Квартиры** попытаться добавить в парсер ссылку на раздел квартир, то такая ссылка не будет принята с уведомлением **__невалидной__** ссылки.

![настройки парсинга Авито и ЦИАН](/images/start-parsing-avito-cian-now/avito-options-scraping.PNG)

**Интервал между запросами** определяет как быстро будут сохраняться объявления: чем меньше интервал между запросами, тем быстрее будут загружены все объявления. Если интервал будет слишком мал, защита Авито и ЦИАН сначала выдаст 2 - 3 капчи, а если их сразу не решить, то забанит парсер по IP. То есть быстрая загрузка объявлений может привести к остановке парсинга, потребовать действия для выхода из бана, вынужденный перерыв в сборе объявлений.

Допустимая скорость объявлений устанавливается динамически: она может отличаться в разное время суток, в разных разделах сайтов и регионах парсинга.

Как правило, практикующие оценщики и риелторы собирают данные о рынке в географических границах территории своего присутствия. Эта территоррия редко превышает 2 - 3 субъекта РФ. Для подавляющего числа субъектов РФ интервал 15 - 25 секунд позволяет скачивать все новые объявления каждый день. Для охвата крупнейших субъектов данные необходимо скачивать частями (установить фильтры по округам и т.д.) с разных IP.

Настройка **Показать номер телефона** позволяет парсеру сделать клик на кнопке показа номера телефона для его сохранения на скриншоте объявления и на его копии в pdf. Открытый номер телефона не будет сохраняться в Excel, если он отсутствует в данных на странице объявления в явном виде.

Настройка **С датой и ссылкой** добавляет дату и ссылку на объявление в колонтитул скриншота объявления и его копии в pdf.

Настройка **Полный набор данных** влияет на полноту сохраняемых данных, как было указано [выше](/blog/start-parsing-avito-cian-now#data_fullness).

## 9 Сохранение данных парсинга

Парсер Робастик сохраняет данные объявлений в файл Excel, фотографии объявлений, скриншоты страниц с объявлениями, копии объявлений в **pdf** и **doc**.

## 9.1 Сохранение данных объявлений

При добавлении [ссылки для парсинга](/blog/start-parsing-avito-cian-now#link_parsing) в меню Робастика открывается диалог для указания файла Excel, в который будут сохраняться данные.

![Файл для сохранения парсинга Авито и ЦИАН](/images/start-parsing-avito-cian-now/file-output-parsing.PNG)

Если указанный файл затем переименовать или переместить в другую папку, парсер его не найдет. Чтобы это сделать - повторно добавьте ту же самую ссылку парсинга в ту же самую кнопку, где она была добавлена раньше, и укажите новый файл для сохранения резьтатов.

При автоматическом добавлении ссылки парсинга из вкладки (листа) **Робастик** данные всегда сохраняются в этот же файл Excel, в котором находится эта вкладка. Перемещение и переименование такого файла не мешает сохранению данных.

## 9.2 Сохранение изображений

Фотографии и скриншоты сохраняются в папках, расположенных рядом с тем файлом Excel, в который сохраняются данные объявлений. Например, если файл Excel находится в папке **C:\пример\\**, то и папки с изображениями тоже будут находиться в этой же папке.

![Папки для сохранения фотографий Авито и ЦИАН](/images/start-parsing-avito-cian-now/folders-parsing.PNG)

Каждому парсеру в Excel соответствует своя папка с изображениями. 

В данном случае ссылку `https://ufa.cian.ru/cat.php?deal_type=sale&engine_version=2&minarea=300&offer_type=offices&office_type%5B0%5D=1&office_type%5B1%5D=2&office_type%5B2%5D=3&office_type%5B3%5D=4&office_type%5B4%5D=5&office_type%5B5%5D=7&office_type%5B6%5D=9&office_type%5B7%5D=10&office_type%5B8%5D=11&office_type%5B9%5D=12&ready_business_types%5B0%5D=1&ready_business_types%5B1%5D=2&region=4560&totime=2592000&p=1` 

загружает парсер **ЦИАН.Комм.4560** и результаты парсинга загружаются в папку **C:\пример\ЦИАН.Комм.4560\\**.

Здесь для каждого объявления создается отдельная папка. Название папки формируется из 4 частей, например:
1. Раздела → **comm** → коммерческая недвижимость,

2. Площади → **100_м**,

3. Этажа → **2_et**,

4. Номера объявления → **273801423**.

![Папки для сохранения изображений ЦИАН](/images/start-parsing-avito-cian-now/cian-folders-parsing.PNG)

В папке объявления сохраняются опубликованные в нем фотографии, скриншот объявления и копия объявления в **pdf**.

Ссылка для перехода в соотвествующую объявлению папку с изображениями находится в колонке **Фото**:

![Ссылка на папку для сохранения изображений](/images/start-parsing-avito-cian-now/photo-link.PNG)

Другой пример: ссылку `https://www.avito.ru/bryanskaya_oblast/kvartiry` загружает парсер **Авито.Кварт.bryanskaya_oblast** и результаты парсинга загружаются в папку **C:\пример\Авито.Кварт.bryanskaya_oblast\\**.

Название папки `2-k._kvartira_64_m_816_et._3826892323` состоит из количества комнат (`2-k`), раздела (`kvartira`), площади (`64_m`), этажа и этажности (`816_et`), номера объявления (`3826892323`).

## 10 Стабильность парсинга

Возможности автоматизации MS Office предоставляют ограниченные средства для обеспечения макроса необходимыми для работы ресурсами. В стабильной системе парсинг работает без сбоев сутками. Для стабильноой работы парсера помогут следующие рекомендации:

1. Робастик - это не отдельная программа, а автоматизация Excel. То есть работать вместе с Робастиком - это все равно что работать в Excel вдвоем в четыре руки. Активная работа в Excel во время парсинга вызывает конфликт, который система решает всегда не в пользу автоматизации. Даже если работать в другом окне Excel, это будет все тот же экземпляр Excel. Поэтому после запуска парсинга можно только переключать вкладки в Excel. 
2. Современные требования энергоэффективности распространяются и на компьютеры. Если свернуть окно Excel, полностью перекрыть его окном другого приложения или другим способом сделать окно Excel  неактивным, Windows принудительно усыпит парсер. То есть окно Excel должно оставаться активным. 
3. Слабенький компьютер. Мало памяти, медленный диск, неустойчивый вайфай и т.п. Ресурсов на все не хватает и не все процессы способны стабильно работать в таких условиях. Если во время парсинга какой-либо ресурс компьютера используется более чем на 30%, существует риск аварийной остановки парсинга. 
4. Избыточные фоновые процессы. 20 вкладок в браузере способны занять всю имеющуюся память и перегрузить канал связи. Любое из висящих в трее приложений, таких как Telegram, Torrent, игры, редакторы и т.п., каждую секунду отправляет и получает данные о поведении пользователя и состоянии компьютера. Эти данные всегда фильтруются и анализируются встроенным и сторонним антивирусами. Чем больше трафика - тем больше нагрузки от антивирусов. Разные компоненты системы периодически получают обновления и переустанавливаются, делают это далеко не всегда без последствий для устойчивости системы. Поэтому желательно выключать все фоновые процессы.
5. Сон и гибернация. Это ненадежные механизмы, они не гарантируют восстановление усыпленных служб и приложений в работоспособное состояние. Чем больше циклов входа и выхода в состояние сна или гибернации, тем больше ошибок накапливается в системе. Желательно почаще делать полноценное выключение или полную перезагрузку компьютера.
6. Жалобы от продвинутых пользователей регулярно возникают после их вмешательства в систему. Даже если ваш опыт подсказывает, что такое вмешательство не должно влиять на работу надстройки, для восстановления работоспособности следует удалить надстройку штатным средством из папки Windows **Удалить Робастик с компьютера** (или Uninstall Robastik в английской локали) и установить его заново.

Основным индикатором работы парсера является таймер. Если таймер замер больше чем на 10 секунд - это означает аварийную остановку процесса. Для возобновления парсинга нужно сохранить загруженные данные, закрыть все окна Excel, заново открыть Excel и нажать **Старт**.

## 11 Этичный парсинг

Некоторые считают, что у парсинга плохая репутация. Однако здесь, как и в любой деятельности, важны детали: одно дело - резать людей в подворотне и другое - в операционной лицензированного медицинского учреждения.

Робастик автоматизирует действия человека: открывает браузер, заходит на сайт, кликает туда, кликает сюда. Он не использует хакерские приемы и технологии, не прячется за прокси, не подделывает отпечаток браузера. Другими словами, можно либо нанять работника, который будет собирать объявления в Excel, либо нанять Робастика для того же самого. Разница только в том, что Робастик может работать 24/7 легально.

В тех случаях, когда рыночные данные нужно использовать регулярно, собирать их также лучше регулярно. Если запускать парсинг свежих объявлений каждые 1 - 2 - 3 дня, то нет никакого смысла гнаться за скоростью, чтобы закончить загрузку за 5 минут. 

Наоборот, есть смысл продолжать парсинг 24/7, так как не все объявления в категории недвижимости постоянно присутствуют в выдаче:

- Оплата за показ объявления может закончиться и оно будет снято с публикации. Дополнительная оплата может поступить через несколько часов или дней, и объявление снова появится в выдаче.

- Система антифрода может снять объявление с показа по самым разным причинам. В сети много жалоб риелторов на ошибки антифрода сайтов недвижимости. Рано или поздно, так или иначе - объявления будут восстановлены. 

- Иногда продавцам может показаться, что объявление выполнило свою задачу и больше не нужно. Но через некоторое время меняют свое решение и снова включают его показ. 

>Рынок изменчив и для качественного сбора данных единственной надежной стратегией является регулярный парсинг, в идеале - 24/7.

С другой стороны, защита от парсинга требует затрат и эти вынужденные расходы делаются в расчете на защиту от еще больших убытков.

Поэтому обход капчи в общем случае считается неэтичным. Если сайт отдает данные без капчи с определенной скоростью, следует пользоваться
предоставленной возможностью и не прибегать к техническим трюкам, вследствие которых сайт может испытывать перегрузки или дестабилизацию
модели монетизации. Стоит иметь в виду, что для коммерческого сайта парсинг является бесполезной нагрузкой и злоупотребление скоростью парсинга
может значительно осложнить его работу.

Регулярный парсинг решает и эту проблему. Парсинг по каждой ссылке 1 – 2 тысяч объявлений обычно покрывает потребность сбора всех новых объявлений. Такой парсинг сглаживает связанную с ним нагрузку на сайт.


 
