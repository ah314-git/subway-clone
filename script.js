$(document).ready(function () {

    /* 내비게이션 */
    const $nav = $('.nav');
    const $subnav = $('.subnav');
    let navTimer;

    $nav.add($subnav).on('mouseenter', function () {
        clearTimeout(navTimer);
        $subnav.stop().slideDown(200);
    });

    $nav.add($subnav).on('mouseleave', function () {
        navTimer = setTimeout(() => {
            if (!$nav.is(':hover') && !$subnav.is(':hover')) {
                $subnav.stop().slideUp(200);
            }
        }, 10);
    });


    /* 메뉴 */
    const menuList = document.querySelector('.menu_list');
    const allCards = document.querySelectorAll('.menu_card');
    const tabs = document.querySelectorAll('.menu_tabs li');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');

    if (menuList && allCards.length > 0) {
        const gap = 30;
        const count = 4;
        const cardWidth = allCards[0].offsetWidth + gap;
        const cardMove = cardWidth * count;

        let currentPage = 0;
        let visibleCards = [];
        let cardMax = 0;

        function updateCards(category) {
            visibleCards = [...allCards].filter(
                card => card.dataset.category === category
            );

            allCards.forEach(card => card.style.display = 'none');
            visibleCards.forEach(card => card.style.display = 'block');

            currentPage = 0;
            cardMax = Math.ceil(visibleCards.length / count) - 1;

            const slideDistance = cardWidth * 4;

            menuList.style.transition = 'none';
            menuList.style.transform = `translateX(${slideDistance}px)`;

            requestAnimationFrame(() => {
                menuList.style.transition = 'transform 0.55s ease';
                menuList.style.transform = 'translateX(0)';
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const category = tab.dataset.category;
                updateCards(category);
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPage >= cardMax) return;
                currentPage++;
                menuList.style.transform = `translateX(-${cardMove * currentPage}px)`;
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage <= 0) return;
                currentPage--;
                menuList.style.transform = `translateX(-${cardMove * currentPage}px)`;
            });
        }

        updateCards('classic');
    }


    /* 캐러셀 */
    if ($('.banner_wrap').length > 0) {
        $('.banner_wrap').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }

    if ($('.notice_ad').length > 0) {
        $('.notice_ad').slick({
            arrows: false,
            dots: true
        });
    }

    /* 스티키 헤더 */
    const filterBar = document.querySelector('.filter_wrap');
    window.addEventListener('scroll', () => {
        if (!filterBar) return;
        if (window.scrollY > 172) {
            filterBar.classList.add('fixed');
        } else {
            filterBar.classList.remove('fixed');
        }
    });


    /* 상품 목록 */
    $('.product_tabs li').on('click', function () {
        const category = $(this).data('category');

        $('.product_tabs li').removeClass('active');
        $(this).addClass('active');

        $('.product_menu_item').hide();
        $('.product_menu_item').each(function () {
            const itemCategory = $(this).data('category').toString().split(',');
            if (itemCategory.includes(category.toString())) {
                $(this).show();
            }
        });
    });

});