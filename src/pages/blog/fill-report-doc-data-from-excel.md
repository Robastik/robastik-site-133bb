---
title: Заполнить из Excel любые документы по шаблону в один клик
subtitle: >-
  Автоматически вставляйте данные из Excel в поля типовых бланков Word
sections:
  - section_id: call-to-action
    type: section_cta
    title: Автозаполнение из Excel в один клик
    subtitle: для типовых документов, форм, бланков и шаблонов Word
    actions:
      - label: Скачать Робастик
        url: >-
          https://github.com/Robastik/Robastik/releases/latest/download/Robastik.for.Excel.64-bit.zip
        style: secondary
excerpt: >-
  Договора, отчеты, спецификации, заявки, коммерческие предложения и любые формы документов .doc автоматически заполняйте по шаблону данными из таблиц Excel с помощью готового макроса VBA. Любые бланки в Word можно заполнять по образцу вставляя содержимое ячеек Excel без программирования вообще.
author: src/data/authors/jane-doe.yaml
date: '2100-01-01'
thumb_image: images/marketing-employee-working-on-marketing-strategy-purple.png
thumb_image_alt: Автоматически заполнить поля документа Word данными из Excel в надстройке VBA
image: images/fierce-broccoli.png
image_alt: Автозаполнение полей договора из таблицы Эксель макросом VBA
template: postVideoCTA
meta_title: Автозаполнение документов по шаблону данными из Excel
meta_description: >-
  Заполняйте любые формы типовых документов Word данными из таблиц Excel с помощью готового макроса VBA автоматически
youtube: https://www.youtube.com/embed/wAaUBo_rXaQ?start=20
part1: >-
  **Заполнение документов по шаблону** знакомо всем. Справки, счета, договора, декларации, отчеты и т.д. – сопровождают любой рабочий процесс. Если это часть вашей работы и вы заполняете документы данными из Excel, то вы попали куда нужно. 
  
  ### Все делается в два шага: 
  
  1.  Ячейкам в Excel даются названия. 
  
  2.  Эти названия вставляются в нужные места в документе Word.
  

  Теперь подробнее:

  
  Во-первых, что такое **название ячейки**?


  Вот это поле слева от строки формул дает ячейке название:


  ![](/images/Name-field.png)
  
  
  Сейчас в этом поле написано **В3**. 
  
  
  Если в этом поле написать **Цена\_товара**, то ячейка **В3** получит название **Цена\_товара**. 
  
  Вот так:


  ![](/images/Name-field-example.png)


  Теперь, например, формулу **=В3\*1,2** можно написать так: **= Цена\_товара\*1,2** и результат будет одинаковый. 
  
  
  Попробуйте и сразу все поймете. 
  
  
  Со вторым шагом еще проще. 

  
  Например, содержимое нашей ячейки **Цена\_товара** (в нашем примере это **45**) нужно вставить вместо подчеркивания в текст: 
  
  
  *«В договоре указан товар по цене* **\__** *руб. в необходимом количестве»*.

  
  Для этого просто надо заменить подчеркивание на название ячейки в фигурных скобках. Вот так:

  
  *«В договоре указан товар по цене* **{Цена\_товара}** *руб. в необходимом количестве»*.

  
  Все, теперь кликнуть кнопку **Заполнить** и создается новый документ Word с текстом:

  
  *«В договоре указан товар по цене* **45** *руб. в необходимом количестве»*.

  
  Кнопка **Заполнить** находится в меню [Робастика](https://robastik.ru/features-filling) на вкладке **Надстройки** в Excel:

  
  ![](/images/MenuWord-2496f53a.png)
  

  ### Еще раз поясним весь процесс от начала до конца:

  
  1.  В файле Excel находятся данные, которыми надо заполнить поля в документе Word.
  
  2.  Даем название каждой ячейке Excel, которую надо подставлять в Word.
  
  3.  В документе Word названия ячеек вставляем в фигурных скобках в те места, куда надо подставлять содержимое этих ячеек. Этот документ Word теперь будем называть **шаблоном**.
  
  4.  Нажать кнопку **Шаблон** и в появившемся окне выбрать нужный файл .docx, в котором вставлены названия ячеек в фигурных скобках.
  
  5.  Нажать кнопку **Заполнить**. После этого будет открыт **шаблон** и в него вместо фигурных скобок будут подставлены данные из Excel. Затем заполненный документ будет сохранен **с именем файла Excel** и в ту же папку, где находится этот файл Excel. Если файл Excel называется **Справка.xlsx**, то заполненный шаблон сохранится рядом с ним под именем **Справка.docx**.

  
  > Не стоит называть **шаблон** одинаково с файлом Excel: ~**Справка.docx** и **Справка.xlsx**~.

  
  Если **шаблон** назвать **Справка.docx**, то после заполнения данными из **Справка.xlsx** заполненный файл сохранится под тем же именем **Справка.docx** вместо **шаблона**, т.е. **шаблон** пропадет. В данном случае шаблон можно назвать **Шаблон справки.docx**.


  Посмотрите наглядное объяснение в видео немного другими словами:

canonical_url: ' '
---
  Откройте демонстрационные файлы Excel и Word, на примере которых можно "вживую потрогать" работу автозаполнения. Подробнее в блоге Робастика: [Как работает автозаполнение - разбор примеров шаг за шагом](/blog/demo-files-fill-template-word-excel-vba/)<a id="hole-table"></a>
  
  ## Как вставить целую таблицу

  Например, для вставки таблицы с листа **Экспликация** название этого листа нужно вставлять как **{Экспликация}**. Т.е. чтобы указать лист Excel, с которого надо вставить таблицу в документ, <u>в название этого листа **на ярлыке** нужно добавить фигурные скобки</u>. Вот так:![](/images/Table-check.png)

  И в документе Word также указать название листа в фигурных скобках:![](/images/Table-into-document.png)

  Это все, что нужно для вставки таблицы. 

  Теперь при нажатии кнопки **Заполнить** вся таблица целиком со вкладки Excel с названием **{Экспликация}** будет вставлена в **шаблон** Word вместо **{Экспликация}** точно с тем форматированием, которое сделано в Excel. 

  Обратите внимание, что форматирование используется разное при вставке ячеек и таблиц:
  >При вставке <u>ячеек</u> используется форматирование в Word для **{Названия_ячейки}**<br>При вставке <u>таблиц</u> таблица вставляется вместе со своим форматированием - как оно сделано в Excel.

  ## Вставка изображений

  Робастик вставляет в шаблон Word также изображения: фотографии, схемы и графики, сканы и скриншоты, рисунки и прочие иллюстрации. Как организовать автозаполнение таблиц изображениями и формирование фототаблиц в шаблоне Word читайте в статье [Автоматически добавляем фототаблицы с изображениями и рисунками в шаблонные документы](/blog/create-image-tables-word-merge-excel/)

  ## Как избежать ошибок при заполнении шаблона Word из Excel

  Хотя в целом макрос формирует документы безошибочно, его настройка и исходные данные для вставки в поля формы все еще требуют контроля. Для решения этой задачи в Робастике предусмотрены специальные возможности, позволяющие свести к минимуму ошибки из-за человеческого фактора при автоматической загрузке данных из таблицы Excel в поля формы Word.

  Смотрите разбор этих возможностей в статье [Инструменты для контроля ошибок автозаполнения шаблона Word](/blog/merge-word-excel-template-control-errors/)

  ## Демонстрационные примеры

  Демонстрационные файлы Робастика разработаны для бысторого знакомства с настройкой автозаполнения шаблонов Word данными из Excel. Что это за файлы, как они устроены, как ими пользоваться для настройки заполнения своих шаблонов - наглядно показано в статье [Разбор примеров шаг за шагом](/blog/demo-files-fill-template-word-excel-vba/).

  ### Дополнительные функции

  1.  Для работы с ФИО есть функции склонения (кому, кого), определения пола (-ый, -ая) и сокращения инициалов. Например: **директор Иванов Иван Иванович** можно изменить на **директору Иванову И.И.**

  2.  Несколько вариантов написания чисел словами (суммы прописью), например: **3,33** → **Три рубля 33 коп.**

  3.  Определение расстояния в метрах между географическими точками по долготе и широте.

  Примеры использования функций находятся: 

  1. в демонстрационных примерах в файлах .xlsx (идут в комплекте с Робастиком), 

  2. в инструкции *Руководство пользователя в.14.pdf* (тоже в комплекте), 

  3. в **Настройки** → **Функции** → **Сумма прописью** → знак **?** справа в пункте меню. (также в других функциях)

  ### Техподдержка

  Вопросы по использованию Робастика можно обсудить здесь:
  - [Фейсбук](https://www.facebook.com/groups/excelword/)
  - [ВКонтакте](https://vk.com/exceltoword)
  - [Телеграм](https://t.me/RobastikRu)
  - [Дзен](https://zen.yandex.ru/robastik)
  - [Аппрайзер](http://appraiser.ru/default.aspx?SectionId=32&g=posts&t=14905)
  - [Ватсап](https://wa.me/message/YRGCZNRS7UEAM1)
  - [Ютуб](https://youtu.be/wAaUBo_rXaQ) Видеоинструкция
  - [Ношн](https://wiggly-albatross-82f.notion.site/ebc43e94f3284cbab017c841b37ce881) Вики Робастика
  - [Email](mailto:tech@robastik.ru) по вопросам техподдержки
