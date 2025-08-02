document.addEventListener("DOMContentLoaded", function () {

    const galleryData = [{
        image: "images/15.png",
        title: "Chili Crab",
        description: "Sweet & spicy with rich sauce",
    }, {
        image: "images/16.png",
        title: "Hainanese Chicken Rice",
        description: "Tender chicken, fragrant rice",
    }, {
        image: "images/17.png",
        title: "Laksa",
        description: "Creamy coconut, mildly spicy",
    }, {
        image: "images/18.png",
        title: "Bak Kut Teh",
        description: "Herbal broth, flavorful pork",
    }, {
        image: "images/19.png",
        title: "Satay",
        description: "Grilled skewers, peanut sauce",
    }, {
        image: "images/20.png",
        title: "Kaya Toast",
        description: "Crispy toast, coconut jam",
    }, {
        image: "images/21.png",
        title: "Rojak",
        description: "Sweet & sour fruit salad",
    }, {
        image: "images/22.png",
        title: "Hokkien Prawn Mee",
        description: "Springy noodles, fresh prawns",
    }, {
        image: "images/23.png",
        title: "Ayam Buah Keluak",
        description: "Unique black nut chicken",
    }];
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicator = document.querySelector(".gallery-indicator");

    let currentIndex = 0;
    let itemsPerView = calculateItemsPerView();
    let totalItems = galleryData.length;
    let autoPlayInterval;
    const autoPlayDelay = 3000;

    function calculateItemsPerView() {
        return window.innerWidth >= 768 ? 4 : 2;
    }

    function initGallery() {
        gallery.innerHTML = "";

        // 添加前后克隆项目实现无缝循环
        const cloneCount = itemsPerView;
        const clonedItems = [
            ...galleryData.slice(-cloneCount),
            ...galleryData,
            ...galleryData.slice(0, cloneCount),
        ];

        clonedItems.forEach((item) => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            galleryItem.innerHTML = `
                        <div class="gallery-img-container">
                            <img src="${item.image}" alt="${item.title}" class="gallery-img">
                        </div>
                        <div class="gallery-caption">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
            gallery.appendChild(galleryItem);
        });

        // 初始位置设置为第一个真实项目
        currentIndex = cloneCount;
        updateGallery(false);

        // 初始化指示点
        indicator.innerHTML = "";
        const totalSlides = Math.ceil(totalItems / itemsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.className = "indicator-dot";
            if (i === 0) dot.classList.add("active");
            dot.dataset.index = i;
            dot.addEventListener("click", () => goToSlide(i));
            indicator.appendChild(dot);
        }

        startAutoPlay();
    }

    function updateGallery(animate = true) {
        const itemWidth = 100 / itemsPerView;
        const translateValue = -currentIndex * itemWidth;

        gallery.style.transition = animate ? "transform 0.5s ease" : "none";
        gallery.style.transform = `translateX(${translateValue}%)`;

        // 无缝循环处理
        setTimeout(() => {
            const realStart = itemsPerView;
            const realEnd = realStart + totalItems;

            if (currentIndex < realStart) {
                currentIndex = realEnd - itemsPerView;
                updateGallery(false);
            } else if (currentIndex > realEnd - itemsPerView) {
                currentIndex = realStart;
                updateGallery(false);
            }
        }, 500);

        // 更新指示点
        const activeDot = Math.floor(
            (currentIndex - itemsPerView) / itemsPerView
        );
        document.querySelectorAll(".indicator-dot").forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === (activeDot < 0 ? 0 : activeDot)
            );
        });
    }

    function goToSlide(slideIndex) {
        currentIndex = itemsPerView + slideIndex * itemsPerView;
        updateGallery();
    }

    function nextSlide() {
        currentIndex += itemsPerView;
        updateGallery();
    }

    function prevSlide() {
        currentIndex -= itemsPerView;
        updateGallery();
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    window.addEventListener("resize", () => {
        const newItemsPerView = calculateItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            initGallery();
        }
    });

    gallery.addEventListener("mouseenter", stopAutoPlay);
    gallery.addEventListener("mouseleave", startAutoPlay);

    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    });

    initGallery();
});