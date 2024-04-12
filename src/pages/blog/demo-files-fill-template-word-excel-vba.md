---
title: Как работает автозаполнение - разбор примеров шаг за шагом
subtitle: >-
   Автозаполнение любых форм из Excel на VBA без программирования
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
  На примерах демонстрационных файлов Робастика рассматриваем как работает автоматическое заполнение бланков, форм и любых типовых документов данными из таблиц Excel. Демонстрационные файлы можно скачать и повторить показанные на видео действия своими руками для автозаполнения шаблона Word данными из Excel.
author: src/data/authors/jane-doe.yaml
date: '2023-08-08'
thumb_image: images/demo-files-thumb-image.png
thumb_image_alt: Файлы примеров автозаполнения полей документа Word данными из Excel в надстройке VBA
image: images/demo-files-main-image.png
image_alt: Автозаполнение полей договора из таблицы Эксель макросом VBA
template: postVideoCTA
meta_title: Автозаполнение Word в примерах
meta_description: >-
  Заполняем договора, акты и другие шаблоны Word данными из Excel
youtube: https://www.youtube.com/embed/W_tx9VaFF4g
part1: >-
  **Демонстрационные файлы** Робастика разработаны для бысторого знакомства с настройкой автозаполнения шаблонов Word данными из Excel. Что это за файлы, как они устроены, как ими пользоваться для настройки заполнения своих шаблонов - здесь показываем с картинками и видео. 
  
  ### Как настроить заполнение своего шаблонного документа: 
  
  1.  Разбираем как сделано в примере. 
  
  2.  Выбираем  в примере функции, которые подходят для вашего шаблона - вставка ячеек,  целых таблиц или таблиц из фотографий, скриншотов или иллюстраций.

  3. Повторяем настройку нужной функции в своем шаблоне и проверяем ее работу. Если не получилось - смотрим как это сделано в примере, находим что скопировано не точно и повторяем без ошибок. В крайнем случае не стесняемся обратиться в техподдержку, отправляем туда свои файлы Excel и Word, а также максимально подробное объяснение того, что надо сделать и что не получается.
  

  Перейдем к демонстрационным примерам:

  
  они идут в комплекте с установочным файлом Робастика и подробным руководством пользователя. После разархивирования установочного комплекта Робастика в папке **Демонстрационные примеры** находятся файлы, демонстрирующие использование разных функций Робастика:


  ![Автозаполнение таблиц в Word из Excel](/images/demo-folder-content.png)
  
  
  Функция заполнения документов Word по шаблону демонстрируется файлами:
  
  1. Демо Расчет 18.**xlsx**

  2. Демо Расчет 18.**doc**

  3. Шаблон **Отчета**.doc

  4. Шаблон **Договора**.doc

  5. Шаблон **Акта приемки-передачи**.doc

  6. Папка **фото**
  

  Файл Excel **Демо Расчет 18.xlsx** служит источником данных для заполнения шаблонов. В этом файле находятся ячейки и целые таблицы, которые нужно вставить в поля заполняемой формы, которой могут быть файлы **Шаблон Отчета.doc**, **Шаблон Договора.doc** и **Шаблон Акта приемки-передачи.doc**. 
  
  
  Также в этом файле использованы функции для склонения и сокращения ФИО. Здесь можно увидеть как эти функции используются для формирования обращений в разных контекстах:


  ![](/images/function-fill-template-demo-value.png)


  А также - понять с помощью каких комбинаций функций Excel получается нужный результат:


  ![](/images/function-fill-template-demo-formula.png)


  Эти формулы можно скопировать и вставить в любой другой файл Excel для автозаполнения каких угодно бланков Word.
  
  
  Чтобы формулы работали на другом компьютере, на нем должен быть установлен Робастик и в настройках включены нужные функции:


  ![](/images/demo-functions-turn-options.png)


  Файл Word **Демо Расчет 18.doc** демонстрирует результат заполнения шаблона с названием **Шаблон Отчета.doc**. Процедура заполнения файла Word данными из Excel всегда выполняется в три шага:


  1. Открыть файл Excel, из которого надо вставить данные. В данном случае это демонстрационный файл **Демо Расчет 18.xlsx**
  
  2. В меню Робастика выбрать шаблон Word, который будет заполняться данными из Excel. В данном случае это файл **Шаблон Отчета.doc**

  3. В меню Робастика нажать кнопку **Заполнить**.


  Выделенные **{**фигурными скобками**}** в тексте шаблона Word названия ячеек и листов Excel будут заполнены содержащимися в них данными.


  Таким же порядком из файла **Демо Расчет 18.xlsx** можно заполнить форму **Шаблон Договора.doc**, бланк **Шаблон Акта приемки-передачи.doc** и другие типичные документы. Один источник данных может быть использован для заполнения неограниченного количества шаблонов.


  В папке **фото** находятся файлы иллюстраций для вставки фототаблиц. Название папки можно изменить в настройках Робастика. Результат вставки фототаблицы можно увидеть в файле **Демо Расчет 18.doc**.

 
  В следующей видеоинструкции показано все вышесказанное:

canonical_url: ' '
---
  ### Дополнительная информация 
  Другие материалы об автозаполнении документов Word данными из Excel:


  1.  **Как устроено автозаполненние** читайте в статье [Заполнить из Excel любые документы по шаблону в один клик](/blog/fill-report-doc-data-from-excel/).


  1. Робастик вставляет в шаблон Word также изображения: фотографии, схемы и графики, сканы и скриншоты, рисунки и прочие иллюстрации. **Как организовать автозаполнение таблиц изображениями** и формирование фототаблиц в шаблоне Word читайте в статье [Автоматически добавляем фототаблицы с изображениями и рисунками в шаблонные документы](/blog/create-image-tables-word-merge-excel/)


  1. Хотя в целом макрос формирует документы безошибочно, его настройка и исходные данные для вставки в поля формы все еще требуют контроля. Для решения этой задачи в Робастике предусмотрены специальные возможности, позволяющие **свести к минимуму ошибки из-за человеческого фактора** при автоматической загрузке данных из таблицы Excel в поля формы Word.
  Смотрите разбор этих возможностей в статье [Инструменты для контроля ошибок автозаполнения шаблона Word](/blog/merge-word-excel-template-control-errors/)


  2.  В составе установочного комплекта Робастика, который скачивается с этого сайта, включено **Руководство пользователя.pdf**. В руководстве подробно изложен порядок использования всех функций Робастика.


  3.  С вопросами использования Робастика можно обращаться в техподдержку.


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