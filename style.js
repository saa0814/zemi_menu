document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function() {
        // メニューの表示状態をトグルする
        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
            navMenu.style.height = "0"; // メニューを非表示にするとき高さを0に
        } else {
            navMenu.classList.add("show");
            navMenu.style.height = navMenu.scrollHeight + "px"; // メニューの高さを内容に合わせて設定
        }
    });
});


