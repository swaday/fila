let header = document.querySelector('header');
let mainMenuLis = document.querySelectorAll('.main_menu > li');

for (let i = 0; i < mainMenuLis.length; i++) {
    mainMenuLis[i].onmouseenter = () => {
        // 모든 submenu_container를 먼저 숨김
        let allSubMenus = document.querySelectorAll('.submenu_container');
        for (let j = 0; j < allSubMenus.length; j++) {
            allSubMenus[j].style.display = 'none';
        }

        // 현재 hover된 항목의 submenu만 표시
        let subMenuContainer = mainMenuLis[i].querySelector('.submenu_container');
        if (subMenuContainer) {
            subMenuContainer.style.display = 'flex';
        }
    };
}

header.onmouseleave = () => {
    let subMenuContainers = document.querySelectorAll('.submenu_container');
    for (let i = 0; i < subMenuContainers.length; i++) {
        subMenuContainers[i].style.display = 'none';
    }
};
