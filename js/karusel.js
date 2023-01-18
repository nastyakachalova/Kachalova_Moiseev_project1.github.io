function karusel(){
    wrapper = document.querySelector(".row1");// переменная-обёртка, querySelector - оператор, который создаёт ссылку по названию селектора
    wrapper.style.marginLeft="calc(-20vw - 10px)";// функция, которая будет двигать картинки влево
    // 20vw -> px - 10px (у нас картинки в vw)
    setTimeout("rimg=wrapper.removeChild(wrapper.children[0]);wrapper.insertBefore(rimg,wrapper.lastChild)",1000){// 1000 - 1сек
        // удаление 1-ый картинки (нулевой), которая вышла за границы экрана
        // rimg - remove img
        // insertBefore - вставить в конец(rimg - что, wrapper.lastCHild - после чего)


    }
}
