---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: Обратная связь
    content: >
      По всем вопросам использования Робастика ждем ваши сообщения в
      [соцсетях](https://www.facebook.com/groups/excelword), по [электронной
      почте](denis@robastik.ru), в
      [Вики](https://www.notion.so/ebc43e94f3284cbab017c841b37ce881) или через
      форму ниже.


      ##### Ваша обратная связь очень нужна!
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Имя
        is_required: true
      - input_type: email
        name: email
        label: Email
        is_required: true
      - input_type: select
        name: Subject
        label: Тема
        default_value: Пожалуйста выберите
        options:
          - Ошибка на сайте Робастика
          - Предложения и замечания о Робастике
          - Предложение сотрудничества
      - input_type: textarea
        name: message
        label: Текст сообщения
      - input_type: checkbox
        name: consent
        label: 'Я понимаю, что отправляю свои контактные данные для связи со мной.'
        is_required: true
    submit_label: Отправить
template: landing
meta_title: Робастик | Контакты
meta_description: >-
  По всем вопросам использования Робастика ждем ваши сообщения в соцсетях, по
  электронной почте. В Вики Робастика находятся все контакты для связи.
canonical_url: ' '
---
