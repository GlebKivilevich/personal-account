const monthName = ['январь','февраль','март','апрель','май','июнь','июль','август',
                'сентябрь','октябрь','ноябрь','декабрь'],
    container = document.querySelector(".calendar__block"),
    monthContainer = document.querySelector('.name__month'),
    yearContainer = document.querySelector('.name__year'),
    daysContainer = document.querySelector('.days'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev');
    
let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear();


let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
// console.log(nowDate.getFullYear());

let infoAboutDay = "Введение в мир экономики",
    infoAboutTime = "19:00",
    linkInfo = "Подключиться",
    dayInfo = [11, 13, 18, 20, 25, 27];

function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';
        monthDaysText.toUpperCase();
    

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';    

    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';            
        }
    }
    for (let i = 1; i <= monthDays; i++){      

        dayInfo.map((item) => {
           if (i === item) {            
            monthDaysText += `
            <li class="blue__info fz-14"> 
                <h3 class="h3__info__day">${i}</h3>               
                <div class="info__about__day">
                    <p class="info__time">
                        ${infoAboutDay}
                    </p>
                    <p class="info__time">
                        ${infoAboutTime}
                    </p>
                    <a class="info__about__link" href="#">${linkInfo} </a>                                
                </div>
            </li>`;

            }               
        });  
            if (i !== dayInfo[0] && i !== dayInfo[1] && i !== dayInfo[2] && 
                i !== dayInfo[3]&& i !== dayInfo[4] && i !== dayInfo[5]) {
            monthDaysText +=
            `
            <li class="grey__info fz-14"> 
                <h3 class="h3__info__day">${i}</h3>    
            </li>
            `;
        }             
        
    }
    

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.addEventListener("click", () => {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);    

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    
    dayInfo = [];
    
    setMonthCalendar(curYear,curMonth);
    
});

next.addEventListener("click", () => {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    
    dayInfo = [];
    
    setMonthCalendar(curYear,curMonth);
    
});

// Burger
const BGMenu = document.querySelector(".burger__menu"),
    modal = document.querySelector(".modal"),
    closeModal = document.querySelector("[data-close]");

BGMenu.addEventListener("click", () => {
    if (modal.classList.contains("hide")){
        modal.classList.remove("hide");
        modal.classList.add("show");
    } else {
        modal.classList.add("hide");
        modal.classList.remove("show");
    }
    
});
closeModal.addEventListener("click", () => {
    if (modal.classList.contains("show")){
        modal.classList.add("hide");
        modal.classList.remove("show");
    }
});

function showBurger(burger) {
    if (window.outerWidth <= 1155 ){
        burger.classList.remove("hide");
        burger.classList.add("show");
        // console.log(1);
    } 
    if (window.outerWidth >= 1158) {
        burger.classList.remove("show");
        burger.classList.add("hide");
        // console.log(2);
    } 
}

showBurger(BGMenu);
// Burger


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    const blockID = anchor.getAttribute("href");
    
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
// Scroll

// Edit your personal account

const btnSave = document.querySelector(".btn__save__info"),
    btnEdit = document.querySelector(".btn__edit__info "),
    inputName = document.querySelector(".name__info"),
    inputEmail = document.querySelector(".email__info"),
    inputPhone = document.querySelector(".phone__info"),
    inputDate = document.querySelector(".date__info"),
    inputCity = document.querySelector(".city__info"),
    inputSchool = document.querySelector(".school__info"),
    inputSchoolClassNum = document.querySelector(".school__class__info"),
    allInputBlock = document.querySelectorAll(".input__info");
    // blockInfoAccInput = document.querySelectorAll(".right__block__info__user input");

const FIOUser = document.querySelector(".FIO__user__right"),
    emailUser = document.querySelector(".email__user__right"),
    phoneUser = document.querySelector(".phone__user__right"),
    dateAgeUser = document.querySelector(".data__age__user__right"),
    cityUser = document.querySelector(".city__user__right"),
    schoolUser = document.querySelector(".school__user__right"),
    schoolClassUser = document.querySelector(".school__class__user__right"),
    blockInfoAccSpan = document.querySelectorAll(".right__block__info__user span");

const contentModal = document.querySelector(".right__block__info__user");
    
    
// Скрыть Кнопку "Сохранить" и все input 
const hideInputBlock = function(input, btn) {
    input.forEach((item) => {
        item.style.display = "none";
    }); 

    btn.style.display = "none";
};

// Показать скрытые input и кнопку
const showInfoBlockInput = function(input, btn) {
    input.forEach((item) => {
        item.style.display = "block";
    });    

    btn.style.display = "block";
};

// Скрыть текст
const hideInfoBlockSpan = function(span, btn) {
    span.forEach((item) => {
        item.style.display = "none";
    }); 
};
const showInfoBloockSpan = function(span, btn) {
    span.forEach((item) => {
        item.style.display = "block";
    });  
};


// Валидация форм

const emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const phoneVal = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

let objData = {};
let objReverseData = {};

// console.log(objData);

const arrMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    "Декабрь"
];


const newData = function () {   
    let str = objData[3];
    let arr = str.split(['-']);    
    let dateTime = new Date(arr[1]).getMonth(arr[1]);
    let dateYears = new Date(arr[0]).getFullYear(arr[0]);

    
    if (dateTime === 0) {
        dateTime = arrMonth[0];
    } 
    if (dateTime === 1) {
        dateTime = arrMonth[1];
    }
    if (dateTime === 2) {
        dateTime = arrMonth[2];
    }
    if (dateTime === 3) {
        dateTime = arrMonth[3];
    }
    if (dateTime === 4) {
        dateTime = arrMonth[4];
    }
    if (dateTime === 5) {
        dateTime = arrMonth[5];
    }
    if (dateTime === 6) {
        dateTime = arrMonth[6];
    }
    if (dateTime === 7) {
        dateTime = arrMonth[7];
    }
    if (dateTime === 8) {
        dateTime = arrMonth[8];
    }
    if (dateTime === 9) {
        dateTime = arrMonth[9];
    }
    if (dateTime === 10) {
        dateTime = arrMonth[10];
    }
    if (dateTime === 11) {
        dateTime = arrMonth[11];
    }

    if (validate(emailVal, emailUser.value)) {
        console.log(1);
        return false;
    } else {
        console.log(2);
    }
     
    function validate(regex, inp) {
        return regex.test(inp);
    }
    FIOUser.innerHTML = `
    <span>${objData[0]}</span>`;
    emailUser.innerHTML = `
    <span>${objData[1]}</span>`;
    phoneUser.innerHTML = `
    <span>${objData[2]}</span>`;         
    dateAgeUser.innerHTML = `
    <span>${arr[2]} ${dateTime} ${dateYears}</span>`;
    cityUser.innerHTML = `
    <span>${objData[4]}</span>`;  
    schoolUser.innerHTML = `
    <span>${objData[5]}</span>`;
    schoolClassUser.innerHTML = `
    <span>${objData[6]}</span>`;

};

btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    
    btnEdit.style.overflow = "hidden";
    showInfoBlockInput(allInputBlock, btnSave); 
    hideInfoBlockSpan(blockInfoAccSpan);    
    
    FIOUser.innerHTML = ``;
    emailUser.innerHTML = ``;
    phoneUser.innerHTML = ``;         
    dateAgeUser.innerHTML = ``;
    cityUser.innerHTML = ``;  
    schoolUser.innerHTML = ``;
    schoolClassUser.innerHTML = ``;
});



btnSave.addEventListener("click", (e) => {
    e.preventDefault();
    
    allInputBlock.forEach((item, i) => {
        if (item.value == "") { 
            item.style.border = "2px solid red"; 
            hideInfoBlockSpan(blockInfoAccSpan);            
            return true;
        } else {            
            showInfoBloockSpan(blockInfoAccSpan);
            hideInputBlock(allInputBlock, btnSave);
            
            
            objData[i] = item.value;
            item.style.border = "2px solid #6b68ff";             
        }    
                       
    }); 
    newData(); 
});

hideInputBlock(allInputBlock, btnSave);



// Edit your personal account