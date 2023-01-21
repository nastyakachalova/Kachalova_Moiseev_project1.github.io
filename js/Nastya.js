function karusel(){// движение только одной картинки
    wrapper = document.querySelector(".row1");// переменная-обёртка, querySelector - оператор, который создаёт ссылку по названию селектора
    wrapper.style.marginLeft="calc(-20vw - 10px)";// функция, которая будет двигать картинки влево
    // 20vw -> px - 10px (у нас картинки в vw)
    setTimeout("rimg=wrapper.removeChild(wrapper.children[0]);wrapper.insertBefore(rimg,wrapper.lastChild); wrapper.style.transition='none';wrapper.style.marginLeft='0'",1000);// 1000 - 1сек
        // удаление 1-ый картинки (нулевой), которая вышла за границы экрана
        // rimg - remove img
        // insertBefore - вставить в конец(rimg - что, wrapper.lastCHild - после чего)
        // wrapper.style.transition='none' - плавность
        // wrapper.style.marginLeft='0' - обнуление отступа слева после удаления одной картинки слева
    setTimeout("wrapper.style.transition='all 1s'",1500);
}
//setTimeout - задержка по времени для каждого оператора 
function karusel_start(){
    setInterval("karusel()",2000);

}
// оператор, который навешивает на блок wrapper стиль transition (плавный переход)