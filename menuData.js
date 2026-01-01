const menuData = [
    { title: "랍스터&쉬림프", engTitle: "Labster&Shrimp", category: "premium", labels: ["new"], desc: "랍스터와 쉬림프 2가지 맛을 모두, 풍미 가득 맛도 가득", img: "assets/sandwich.jpg" },
    { title: "랍스터", engTitle: "Labster", category: "premium", labels: ["new"], desc: "허브버터 소스에 마리네이드 된 랍스터 통살이 입안 가득 풍미 가득", img: "assets/sandwich.jpg" },
    { title: "New머쉬룸", engTitle: "New Mushroom", category: "fresh", labels: ["subpick"], desc: "버섯의 건강함을 그대로 담아 신선한 야채와 함께 담백하게 즐기는 샌드위치", img: "assets/sandwich.jpg" },
    { title: "안창 비프&New머쉬룸", engTitle: "Beef&New Mushroom", category: "premium", labels: ["subpick"], desc: "부드럽고 풍미 넘치는 안창살과 담백하고 건강한 머쉬룸이 함께 어우러져 이루는 맛있는 조합의 샌드위치", img: "assets/sandwich.jpg" },
    { title: "스테이크&치즈", engTitle: "Steak&Cheese", category: "premium", labels: ["subpick", "best"], desc: "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득", img: "assets/sandwich.jpg" },
    { title: "에그마요", engTitle: "Egg Mayo", category: "classic", labels: ["subpick"], desc: "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러", img: "assets/sandwich.jpg" },
    { title: "이탈리안 비엠티", engTitle: "Italian B.M.T.", category: "classic", labels: ["subpick", "best"], desc: "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T.", img: "assets/sandwich.jpg" },
    { title: "로티세리 바비큐 치킨", engTitle: "Rotisserie Barbecue Chicken", category: "fresh", labels: ["subpick"], desc: "촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨의 혁명", img: "assets/sandwich.jpg" },
    { title: "안창 비프", engTitle: "Beef", category: "premium", labels: ["subpick"], desc: "안창살을 써브웨의만의 이국적인 특제 시즈닝을 더해 더 부드럽고, 더 풍미있게 즐기는 프리미엄 샌드위치", img: "assets/sandwich.jpg" },
    { title: "터키 베이컨 아보카도", engTitle: "Turkey Bacon Avocado", category: "fresh", labels: ["subpick"], desc: "건강하고 담백한 오리지날 터키에 베이컨과 아보카도로 풍미가득 맛도 가득", img: "assets/sandwich.jpg" },
    { title: "스파이시 쉬림프", engTitle: "Spicy Shrimp", category: "premium", labels: ["subpick"], desc: "탱글한 쉬림프에 이국적인 시즈닝을 더해 색다른 매콤함을 만나보세요!", img: "assets/sandwich.jpg" },
    { title: "쉬림프", engTitle: "Shrimp", category: "premium", labels: ["subpick"], desc: "탱글한 쉬림프 5마리가 그대로, 신선하고 담백한 쉬림프의 맛 그대로 즐겨보세요!", img: "assets/sandwich.jpg" },
    { title: "로스트 치킨", engTitle: "Roasted Chicken", category: "fresh", labels: ["subpick", "best"], desc: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미", img: "assets/sandwich.jpg" },
    { title: "풀드포크 바비큐", engTitle: "Pulled Pork Barbecue", category: "premium", labels: ["subpick"], desc: "미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치", img: "assets/sandwich.jpg" },
    { title: "써브웨이 클럽", engTitle: "Subway Club", category: "premium", labels: ["subpick"], desc: "고소한 베이컨, 담백한 터키에 햄까지 더해 완벽해진 조화를 즐겨보세요.", img: "assets/sandwich.jpg" },
    { title: "치킨 데리야끼", engTitle: "Chicken Teryaki", category: "premium", labels: ["subpick"], desc: "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남", img: "assets/sandwich.jpg" },
    { title: "스파이시 이탈리안", engTitle: "Spicy Italian", category: "premium", labels: ["subpick"], desc: "페퍼로니 & 살라미가 입안 가득, 페퍼로니의 부드러운 매콤함을 만나보세요!", img: "assets/sandwich.jpg" },
    { title: "비엘티", engTitle: "B.L.T.", category: "classic", labels: ["subpick"], desc: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~", img: "assets/sandwich.jpg" },
    { title: "터키", engTitle: "Turkey", category: "fresh", labels: ["subpick"], desc: "건강하고 담백한 오리지날 터키 샌드위치", img: "assets/sandwich.jpg" },
    { title: "참치", engTitle: "Tuna", category: "classic", labels: ["subpick"], desc: "남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화", img: "assets/sandwich.jpg" },
    { title: "햄", engTitle: "Ham", category: "classic", labels: ["subpick"], desc: "풍부한 햄이 만들어내는 담백함을 입 안 가득 즐겨보세요!", img: "assets/sandwich.jpg" },
    { title: "에그 슬라이스", engTitle: "Egg Slice", category: "fresh", labels: ["subpick"], desc: "달걀의 신선함과 담백함을 그대로 담아 맛도, 영양도 사로잡은 샌드위치를 만나보세요.", img: "assets/sandwich.jpg" },
    { title: "베지", engTitle: "Veggie Delite", category: "fresh", labels: ["subpick"], desc: "갓 구운 빵과 신선한 8가지 야채로 즐기는 깔끔한 한끼", img: "assets/sandwich.jpg" },
    { title: "햄, 에그&치즈", engTitle: "Ham, Egg & Cheese", category: "morning", labels: [], desc: "푹신한 오믈렛과 햄의 가장 클래식한 조화", img: "assets/sandwich.jpg", hideOnB: true },
    { title: "웨스턴, 에그&치즈", engTitle: "Western, Egg & Cheese", category: "morning", labels: [], desc: "토마토, 피망, 양파 세가지 야채가 더해져 더욱 신선한 하루 시작", img: "assets/sandwich.jpg", hideOnB: true },
    // 추가 메뉴 (Add 카테고리)
    { title: "미트 추가", engTitle: "Meat", category: "add", labels: [], desc: "주 재료를 2배로 더 푸짐하게 즐기세요", img: "assets/sandwich.jpg" },
    { title: "에그마요", engTitle: "Egg Mayo", category: "add", labels: [], desc: "신선한 달걀과 고소한 마요네즈의 만남", img: "assets/sandwich.jpg" },
    { title: "베이컨", engTitle: "Bacon", category: "add", labels: [], desc: "진한 풍미와 바삭한 베이컨으로 특별한 나만의 써브웨이~", img: "assets/sandwich.jpg" },
    { title: "치즈 추가", engTitle: "Cheese", category: "add", labels: [], desc: "고소한 치즈를 2배로!", img: "assets/sandwich.jpg" },
    { title: "에그 슬라이스", engTitle: "Egg Slice", category: "add", labels: [], desc: "신선한 달걀의 담백함을 추가해, 더 든든하게 즐겨보세요.", img: "assets/sandwich.jpg" },
    { title: "아보카도", engTitle: "Avocado", category: "add", labels: [], desc: "숲속의 버터 아보카도로 영양 UP", img: "assets/sandwich.jpg" },
    { title: "오믈렛", engTitle: "Omelet", category: "add", labels: [], desc: "더 부드럽게, 더 고소하게", img: "assets/sandwich.jpg" },
    { title: "페퍼로니", engTitle: "Pepperoni", category: "add", labels: [], desc: "입맛 당기는 페퍼로니로 써브웨이를 더 맛있게!", img: "assets/sandwich.jpg" },
    
];


//메뉴 리스트(index.html/menu_list)
const menuContainer = document.getElementById('menu_list');
if (menuContainer) {
    const menuHTML = menuData.map(menu => `
        <li class="menu_card" data-category="${menu.category}">
            <a href="#">
                <div class="menu_img">
                    <img src="${menu.img}" alt="${menu.title}">
                    <span class="zoom_icon"></span>
                </div>
                <div class="menu_text">
                    <strong>${menu.title}</strong>
                    <p>${menu.desc}</p>
                </div>
            </a>
        </li>
    `).join('');
    menuContainer.innerHTML = menuHTML;
}

//상품 목록 리스트(menu.html/product_menu_list)
const productContainer = document.querySelector('.product_menu_list');
if (productContainer) {
    const filteredData = menuData.filter(menu => menu.hideOnB !== true);
    const productHTML = filteredData.map(menu => {
        const labelsHTML = menu.labels.map(l => {
            const labelText = (l === 'best') ? '추천' : l.toUpperCase();
            return `<div class="label ${l}"><span>${labelText}</span></div>`;
        }).join('');

        return `
            <li class="product_menu_item" data-category="all,${menu.category}">
                <a href="#">
                    ${labelsHTML}
                    <div class="menu_img"><img src="${menu.img}" alt="${menu.title}"></div>
                    <div class="menu_text">
                        <strong>${menu.title}</strong>
                        <p>${menu.engTitle}</p>
                        <p class="menu_desc">${menu.desc}</p>
                        <span class="zoom_icon"></span>
                    </div>
                </a>
            </li>
        `;
    }).join('');
    productContainer.innerHTML = productHTML;
}