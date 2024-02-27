const skills = document.querySelector('.skills')
const hard_skills_list = document.querySelector('.hard-skills-list')
const soft_skills_list = document.querySelector('.soft-skills-list')
const hard_skills_button = document.querySelector('.hard_skills_button')
const soft_skills_button = document.querySelector('.soft_skills_button')

let state_open = false
let slide_show = 'photo'
function set_default_hard_skills () {
    soft_skills_button.style.opacity = 1
    hard_skills_button.style.opacity = 0
    skills.style.gridTemplateColumns = `80% 1px 19%`
    soft_skills_list.style.opacity = '0'

    hard_skills_list.style.display = 'grid'
    setTimeout(()=>{
        soft_skills_list.style.display = 'none'
        hard_skills_list.style.opacity = 1

    },300)
}

set_default_hard_skills()

const soft_skills_button_fn = (event) => {
    hard_skills_button.style.opacity = 1
    soft_skills_button.style.opacity = 0
    skills.style.gridTemplateColumns = `19% 1px 80%`
    hard_skills_list.style.opacity = '0'
    setTimeout(()=>{
        hard_skills_list.style.display = 'none'
        soft_skills_list.style.opacity = 1

    },300)
    soft_skills_list.style.display = 'grid'

}


function change_slide(slide) {
    const move_slider = document.querySelector('.move-slider')
    if (slide === 'photo') {
        slide_show = slide
        move_slider.style.left = 0
    }
    else if(slide === 'landing') {
        slide_show = slide
        move_slider.style.left = `-${innerWidth-20}px`
    }
    else if(slide === 'calendar') {
        slide_show = slide
        move_slider.style.left = `-${innerWidth * 2 - 20}px`
    }

    console.log(slide_show)
    if (state_open){
        console.log('slide show fn')
        state_open = true
        open_info()
    }
}
function open_info (){
    const more_info = document.querySelector('.more-info')
    const show_info = document.querySelector('.show-info')
    const open_info = document.querySelector('.open-info')
    const open_info_img = document.querySelector('.open-info_img')

    if (state_open === false) {
        more_info.style.width = `100%`
        show_info.style.display = 'flex'
        open_info.style.width = '10%'
        setTimeout(()=>{
            show_info.children[0].style.opacity = 1
        },400)
        show_info.style.opacity = `1`
        open_info_img.style.transform = 'rotate(0deg)'
        state_open = true
        show_info.innerHTML = set_info(slide_show)
    }
    else {
        more_info.style.width = `10%`
        show_info.style.display = 'none'
        open_info.style.width = '100%'
        open_info_img.style.transform = 'rotate(180deg)'
        show_info.style.opacity = `0`
        state_open = false
    }
}

function set_info(slide) {
    switch (slide) {
        case 'photo':
            return `<div>
<h3>Фотостудия</h3>
            <h4>React, Node, PostgreSQL</h4>
            <p>Проект "Фотостудия" представляет собой веб-приложение, разработанное с использованием технологий React, Node и PostgreSQL, предназначенное для управления фотосессиями и фотографиями, сделанными в фотостудии.</p>
    <ol>
        <li>Запись на фотосессию: Посетители сайта могут записаться на фотосессию через онлайн-форму. Они могут выбирать дату, время и тип фотосессии, а также оставлять контактные данные для связи.</li>
        <li>Просмотр личных фотографий: Клиенты, которые уже посетили фотостудию, могут авторизоваться на сайте и просматривать свои личные фотографии. Они могут фильтровать фотографии по дате или типу фотосессии.</li>
        <li>Административная панель: Администраторы фотостудии могут управлять записями на фотосессии, просматривать данные клиентов, добавлять новые фотографии и управлять контентом сайта через специальную административную панель.</li>
        <li>Аутентификация и безопасность: Для защиты данных пользователей используется система аутентификации, а доступ к различным функциям сайта ограничивается в зависимости от роли пользователя.</li>
    </ol>
</div>`

        case 'landing':
            return `<div><h3>Лендинг аренды специальной техники СЕМИКАТ</h3>
                    <h4>HTML,CSS, JS</h4>
                    <p>Лендинг "Аренда специализированной техники СЕМИКАТ" представляет собой веб-страницу, разработанную для представления услуг по аренде высококачественной специализированной техники. Проект основан на HTML, CSS и JavaScript, обеспечивая плавное и удобное взаимодействие пользователей с предлагаемыми услугами.</p>
    <ol>
        <li>Информативный дизайн: Лендинг имеет четкую структуру, позволяющую пользователям легко ознакомиться с предоставляемой техникой, условиями аренды и преимуществами компании СЕМИКАТ.</li>
        <li>Динамичные элементы: Использование JavaScript позволяет создавать интерактивные элементы, такие как карусели с изображениями техники, интерактивные формы для запроса аренды и дополнительные анимации для улучшения пользовательского опыта.</li>
        <li>Отзывчивый дизайн: Лендинг адаптирован для работы на различных устройствах, включая компьютеры, планшеты и смартфоны, обеспечивая одинаково удобное взаимодействие с контентом независимо от типа устройства.</li>
        <li>Высокая конверсионность: Лендинг создан с учетом лучших практик веб-дизайна и маркетинга с целью максимизации конверсии и привлечения потенциальных клиентов</li>
    </ol>
    <a href="http://semandcat.ru/">СЕМИКАТ</a>
</div>`
        case 'calendar':
            return `<div>
    <h3>Календарь-ежедневник</h3>
            <h4>Angular, Node, MongoDB</h4>
            <p>Это личный проект, разработанный на основе фреймворка Angular, с использованием серверной части на Node.js и базы данных MongoDB. Этот проект представляет собой удобный календарь-ежедневник, который помогает пользователям планировать свой день по минутам и эффективно управлять своими задачами.</p>
    <ol>
            <li>Календарь: Пользователи могут просматривать свой расписание на определенную дату, что позволяет им легко планировать свои будущие дела и встречи.</li>
        <li>Ежедневник: Пользователи могут создавать, просматривать, редактировать и удалять записи в своем ежедневнике. Здесь они могут вести подробные заметки о важных событиях, идеях или задачах.</li>
        <li>Todo-список: Функционал позволяет пользователям создавать список дел (todo) на каждый день, чтобы иметь четкий план действий и не забывать о важных задачах.</li>
        <li>Управление задачами: Пользователи могут отмечать выполненные задачи, устанавливать приоритеты и дедлайны, что помогает им эффективно распределять свое время и достигать поставленных целей.</li>
    </ol>
    <a href="http://109.68.215.157:4200">Календарь-ежедневник</a>
</div>`
    }

}
