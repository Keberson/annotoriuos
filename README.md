# Проект Анноториус

Данный проект направлен на изучение библиотеки `annotorious` с использованием `open-sea-dragon`.

Клиентская часть приложения взаимодействует с серверной по средству REST API. 
Адрес к серверной части указаны в файлах папки ```services```. 
Для взаимодействия использовалась библиотека ```RTK```, которая позволяла упростить работу с запросами.

### Используемые API:
```
GET /api/annotations
POST /api/annotations/{id}?multiSave=true/false
PUT /api/annotations/{id}
DELETE /api/annotations/{id}

GET /api/images
```

Аннотации получаются и отправляются в качестве _JSON_.
Изображения получаются с сервера в формате _base64 строки_. 

### Возможности:
- подгружать полученное изображение,
- подгружать уже имеющиеся аннотации,
- создавать новые аннотации в различных формах - прямоугольник и полигон,
- удалять аннотации,
- комментировать аннотации,
- изменять аннотации.

### Проблемы
#### _Проблема с комментариями к аннотациям_
_Описание проблемы:_ при нажатии на аннотацию появлялась ошибка из-за множественного рендера

_Решение проблемы:_ из-за неправильной документации неправильно использовался компонент, 
разработчик согласился с тем, что была проблема с документацией ([Ссылка на дискуссию](https://github.com/orgs/annotorious/discussions/453))

### _Проблема с автоматическим отправлением аннотаций после её добавления_
_Описание проблемы:_ сразу после добавления аннотации была попытка добавить отправку аннотации на сервер, 
в базе данных создавалось несколько копий одной и той же аннотации

_Решение проблемы:_ из-за множественного рендера данная проблема была решена обходным путем -
добавил кнопку сохранить, которая отправляет текущий список аннотаций с комментариями на сервер, 
сервер в свою очередь обрабатывает их и проверяет на существование в базе данных, и решает добавлять или изменять аннотацию

### _Проблема с автоматическим сохранением комментария после_
_Описание проблемы:_ при изменении комментария и нажатия кнопки "Сохранить" на сервере не изменялся комментарий

_Решение проблемы:_ проблема была решена обходным путем - добавление общей кнопки сохранить, описанная в прошлом пункте

### Схема компонентов

![Схема компонентов](/docs/schema.png)

### Видео демонстрация

<img src='https://github.com/Keberson/annotoriuos/blob/master/docs/video.gif?raw=true' alt="Демонстрация работы"/>
