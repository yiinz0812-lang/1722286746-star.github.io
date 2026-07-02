const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "关闭" : "菜单";
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "菜单";
}));

const aiToggle = document.querySelector(".js-ai-toggle");
const aiMethod = document.querySelector(".ai-method");
aiToggle.addEventListener("click", () => {
  const open = aiMethod.classList.toggle("open");
  aiMethod.setAttribute("aria-hidden", String(!open));
  aiToggle.setAttribute("aria-expanded", String(open));
  aiToggle.innerHTML = open ? "收起共创方法 <span>－</span>" : "展开我的共创方法 <span>＋</span>";
});

const particleCanvas = document.querySelector("#particleCanvas");
const particleContext = particleCanvas?.getContext("2d");
const nameTrigger = document.querySelector("#nameTrigger");
const selfIntro = document.querySelector("#selfIntro");
const hero = document.querySelector(".hero");
let particleWidth = 0;
let particleHeight = 0;
let particles = [];

function resizeParticleCanvas() {
  if (!particleCanvas || !particleContext || !hero) return;
  const rect = hero.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  particleWidth = Math.max(1, Math.floor(rect.width));
  particleHeight = Math.max(1, Math.floor(rect.height));
  particleCanvas.width = Math.floor(particleWidth * dpr);
  particleCanvas.height = Math.floor(particleHeight * dpr);
  particleContext.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function emitBabyBlueParticles(x, y, count = 54) {
  for (let index = 0; index < count; index += 1) {
    const angle = (Math.PI * 2 * index) / count + (Math.random() - .5) * .8;
    const speed = 1.7 + Math.random() * 5.4;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - .7,
      radius: 1.2 + Math.random() * 3.4,
      life: 1,
      decay: .012 + Math.random() * .018,
      hue: 194 + Math.random() * 15
    });
  }
}

function drawBabyBlueParticles() {
  if (!particleContext) return;
  particleContext.clearRect(0, 0, particleWidth, particleHeight);
  particles = particles.filter((particle) => particle.life > 0);
  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vx *= .982;
    particle.vy = particle.vy * .982 + .018;
    particle.life -= particle.decay;
    const alpha = Math.max(0, particle.life);
    particleContext.beginPath();
    particleContext.fillStyle = `hsla(${particle.hue}, 100%, 79%, ${alpha})`;
    particleContext.shadowColor = `hsla(${particle.hue}, 100%, 82%, ${alpha})`;
    particleContext.shadowBlur = 18;
    particleContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    particleContext.fill();
  });
  particleContext.shadowBlur = 0;
  requestAnimationFrame(drawBabyBlueParticles);
}

nameTrigger?.addEventListener("click", () => {
  const open = selfIntro.classList.toggle("open");
  nameTrigger.classList.toggle("active", open);
  nameTrigger.setAttribute("aria-expanded", String(open));
  selfIntro.setAttribute("aria-hidden", String(!open));
  const buttonRect = nameTrigger.getBoundingClientRect();
  const heroRect = hero.getBoundingClientRect();
  const centerX = buttonRect.left + buttonRect.width / 2 - heroRect.left;
  const centerY = buttonRect.top + buttonRect.height / 2 - heroRect.top;
  emitBabyBlueParticles(centerX, centerY, open ? 72 : 36);
});

window.addEventListener("resize", resizeParticleCanvas);
resizeParticleCanvas();
drawBabyBlueParticles();

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".project, .ai-card, .skill-grid article").forEach((surface) => {
    surface.classList.add("tilt-surface");
    surface.addEventListener("pointermove", (event) => {
      const rect = surface.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      surface.style.transform = `perspective(1200px) rotateX(${-y * 3.2}deg) rotateY(${x * 4.2}deg) translateY(-3px)`;
    });
    surface.addEventListener("pointerleave", () => {
      surface.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

const spatialScroll = document.querySelector("#spatialScroll");
const spatialViewport = spatialScroll?.querySelector(".spatial-viewport");
const spatialCamera = document.querySelector("#spatialCamera");
const spatialProgress = spatialScroll?.querySelector(".spatial-progress span");
const spatialCards = [...document.querySelectorAll(".spatial-card")];
let spatialPointerX = 0;
let spatialPointerY = 0;
let spatialTicking = false;

function updateSpatialRoom() {
  spatialTicking = false;
  if (!spatialScroll || !spatialCamera || window.innerWidth <= 720 || reducedMotion) return;
  const rect = spatialScroll.getBoundingClientRect();
  const travel = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / travel));
  const rotateX = 7 - progress * 14 + spatialPointerY * 4;
  const rotateY = -16 + progress * 32 + spatialPointerX * 7;
  const zoom = -170 + Math.sin(progress * Math.PI) * 260;
  const drift = (progress - .5) * -46;
  spatialCamera.style.transform = `translate(-50%, calc(-50% + ${drift}px)) perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${zoom}px)`;
  spatialCards.forEach((card, index) => {
    const float = Math.sin((progress * 2.3 + index * .24) * Math.PI * 2) * (7 + index % 3 * 2);
    card.style.setProperty("--float", `${float}px`);
  });
  if (spatialProgress) spatialProgress.style.width = `${progress * 100}%`;
}

function requestSpatialUpdate() {
  if (spatialTicking) return;
  spatialTicking = true;
  requestAnimationFrame(updateSpatialRoom);
}

spatialViewport?.addEventListener("pointermove", (event) => {
  if (window.innerWidth <= 720) return;
  const rect = spatialViewport.getBoundingClientRect();
  spatialPointerX = (event.clientX - rect.left) / rect.width - .5;
  spatialPointerY = (event.clientY - rect.top) / rect.height - .5;
  requestSpatialUpdate();
});
spatialViewport?.addEventListener("pointerleave", () => {
  spatialPointerX = 0;
  spatialPointerY = 0;
  requestSpatialUpdate();
});
window.addEventListener("scroll", requestSpatialUpdate, { passive: true });
window.addEventListener("resize", requestSpatialUpdate);
requestSpatialUpdate();

const filters = [...document.querySelectorAll(".filter")];
const works = [...document.querySelectorAll(".work")];
filters.forEach((filter) => filter.addEventListener("click", () => {
  filters.forEach((item) => item.classList.toggle("active", item === filter));
  const category = filter.dataset.filter;
  works.forEach((work) => {
    const show = category === "all" || work.dataset.category === category;
    work.classList.toggle("hidden", !show);
  });
}));

const proseDescriptions = {
  "hero-wave.webp": "海浪一次次扑向礁石，像生活在重复里仍不肯放弃的热望；白色浪花退去以后，石头记住了光。",
  "hero-city.webp": "天色把城市慢慢染成橙红，楼宇退成安静的剪影；喧闹还没有停止，黄昏却先替所有人按下片刻的静音。",
  "hero-jewelry.webp": "银色线条在暗处彼此牵引，冷冽的材质也有了柔软关系；光落在扣环上，像一封没有署名的承诺。",
  "city-sea-sunset.webp": "夕阳沿着海面铺出一条金色小径，潮声把远方一点点推近；站在岸边的人，也被暮色轻轻收藏。",
  "city-glow.webp": "城市在日落之后亮起第一层灯，天空仍留着没有散尽的余温；高楼之间，每一扇窗都藏着不同的归途。",
  "city-silhouette.webp": "远处的楼群沉入暮色，只剩轮廓与天光交谈；这一刻，城市不再庞大，只像手心里一枚安静的剪影。",
  "city-pink-night.webp": "粉紫色的夜幕缓缓落下，灯火从建筑缝隙里醒来；城市像一封写到一半的信，等待晚风继续。",
  "city-orange-skyline.webp": "太阳停在楼群上方，把平常的天际线烧成一条明亮边界；匆忙的一天，也终于拥有了隆重的落款。",
  "city-window-view.webp": "隔着窗望向入夜的城市，玻璃叠住室内与远方；熟悉的街景因此多了一层梦境，近在眼前，也遥不可及。",
  "city-cloud-light.webp": "云层暂时让出一道缝隙，光便毫不犹豫地落下来；阴天不是终点，它只是让明亮显得更有分量。",
  "city-blue-hour.webp": "蓝调时刻把河岸和建筑揉进同一种呼吸里，灯光尚未喧哗；白昼离开以后，城市显露出更柔软的一面。",
  "city-bridge.webp": "桥的白色线条划过夜色，倒影在水面重新搭建另一座城；人从岸上经过，光却在水里停留得更久。",
  "city-window.webp": "一扇旧窗替天空做了取景框，晚霞被分成几格温柔的颜色；世界很大，也可以只从一扇窗开始观看。",
  "city-temple.webp": "屋檐伸向晴朗的蓝，风铃没有响，时间却从瓦片之间经过；古老建筑用沉默守住自己的节奏。",
  "city-eaves.webp": "飞檐从墙角探向天空，像一句尚未写完的古诗；蓝色越纯粹，砖瓦留下的岁月便越清晰。",
  "city-ocean-sunrise.webp": "太阳从海平线缓慢升起，水面托住一团温热的光；新的一天没有宣言，只用潮汐重新开始。",
  "city-street.webp": "旧街在黑白里褪去喧闹，车辆与招牌仍指向各自的生活；所谓归途，也许只是认得这条街的每一次转弯。",
  "city-reflection.webp": "暮色落进水中，云与树交换了上下的位置；真实和倒影彼此依靠，让普通的傍晚有了第二重世界。",
  "human-teahouse.webp": "茶馆里的人围坐在各自的故事旁，热气、谈笑和目光交错；一碗茶的时间，足够让陌生生活短暂相遇。",
  "human-teaware.webp": "杯盏在木桌上留下细碎秩序，茶香看不见，却仿佛停在画面里；器物安静，人间因此显得丰盛。",
  "human-notice-board.webp": "人们站在密密的纸页前寻找一条与自己有关的信息；城市的愿望被钉在墙上，等待某一次偶然的回应。",
  "human-reading.webp": "他在告示墙前停下脚步，手指沿着文字缓慢移动；周围的人来来去去，只有这一段阅读暂时与时间无关。",
  "human-ear-cleaning.webp": "手艺人的动作专注而轻，细小工具连接起信任与经验；喧闹街巷之中，耐心本身就是一门技艺。",
  "human-artisan.webp": "工作台旁的身影被器具与人群包围，双手仍保持稳定；每一件看似寻常的完成，都来自无数次熟练的重复。",
  "human-chess.webp": "棋子落下以前，围观的人都屏住了自己的答案；一方小小棋盘，把街边的午后变成没有硝烟的战场。",
  "human-bell.webp": "黄色铃铛立在人群与旗帜之间，像为热闹留出的一个明亮标点；它还没有被敲响，期待已经先聚拢过来。",
  "human-lantern.webp": "红灯笼悬在老街上方，旧建筑接住来自现代的脚步；传统没有远去，它只是换一种方式继续发光。",
  "still-pottery.webp": "陶器被岁月磨出温润的表面，静静站在木架之上；它们不诉说来处，却让时间拥有可以触摸的形状。",
  "still-kettles.webp": "蓝白水壶整齐排开，重复的形状里藏着细微差别；日常器物一旦被认真凝视，也会形成自己的队伍。",
  "nature-pigeon.webp": "白鸽停在光与阴影的交界，羽毛接住树叶漏下的亮色；它并不急着飞走，像是替午后守住片刻安宁。",
  "nature-night-bird.webp": "小鸟立在深蓝色天空之下，身影微小却清楚；夜色很宽，它仍拥有属于自己的位置。",
  "nature-white-bird.webp": "白鸟站在石面上，阳光为羽毛镀上一层柔亮边缘；它侧身望向远处，仿佛已经听见风的方向。",
  "nature-circle-bird.webp": "鸟的轮廓恰好落在圆形光面前，偶然完成一幅安静的剪影；自然常常不经意，却比设计更准确。",
  "nature-sculpture.webp": "石刻的纹路在侧光里一层层浮起，阴影替古老面孔重新塑形；坚硬的材料，也保存着细腻的情绪。",
  "nature-boat.webp": "橙色救生衣在水边格外明亮，两个人把船划向树影深处；旅程并不遥远，但共同出发已经足够动人。",
  "theatre-stage.webp": "水袖与盔头在舞台灯下展开，角色从一个姿态里苏醒；锣鼓之外，所有目光都被这一瞬牢牢牵住。",
  "theatre-costume.webp": "黑金戏服顺着演员的动作流动，刺绣把身份与命运穿在身上；转身之间，历史重新拥有温度。",
  "theatre-performance.webp": "人物俯身的一刻，舞台上的权力、情感与故事同时改变方向；戏剧不只发生在台词里，也藏在身体的分寸中。",
  "theatre-makeup.webp": "镜前的妆容尚未完成，演员在真实与角色之间短暂停留；一笔颜色落下，另一个人生便靠近了一点。",
  "theatre-mirror.webp": "镜子映出专注的眼睛，也映出等待登场的紧张；后台没有掌声，却孕育了台上所有被看见的光。",
  "theatre-backstage.webp": "演员们在狭窄后台交换眼神与话语，华丽服饰挤在生活化的空间里；舞台的梦，从这些真实片刻开始。",
  "product-necklace.webp": "金属在黑色背景中收住光线，圆环与棱角彼此靠近；一件饰品因此不只是物件，也像关系的隐喻。",
  "product-ring-heart.webp": "戒指被安放在心形光影中央，克制的银色与柔软象征相遇；爱有时无需语言，只需要一道准确的光。",
  "product-ring-screen.webp": "屏幕上的字与现实中的戒指重叠，虚拟故事被一束光带回手边；媒介不断变化，情感仍需要具体的证明。",
  "ai-coconut.webp": "椰子被潮水推到想象之外，熟悉事物长出陌生表情；AI 让荒诞成为入口，而人的选择决定故事停在哪里。",
  "project-pet.webp": "一只小狗望向画面之外，温暖颜色包裹着告别的议题；我们谈论离开，也是为了更认真地理解陪伴。",
  "project-dog.webp": "衰老的生命不再轻盈，却依然渴望被看见、被接住；这张招募封面把同情变成一次可以参与的行动。",
  "design-tea.webp": "茶叶、器皿与深色留白构成东方气息，视觉在浓与淡之间慢慢展开；一杯茶，也可以是一场关于时间的设计。",
  "design-poster-blue.webp": "蓝色弧线与校园建筑相遇，信息沿着清晰层级向读者靠近；招新不只是通知，也是一份对同行者的邀请。",
  "design-poster-campus.webp": "校园被放进明亮色块和文字节奏里，青春因此有了具体形状；海报打开的，是加入集体的第一扇门。",
  "design-illustration.webp": "城市、山川与人物被压缩进一枚轻盈图形，明快色彩让复杂信息变得亲近；设计把远方折叠成可阅读的风景。",
  "ui-food-1.webp": "功能入口被整理成清楚的路径，让用户不用犹豫便能继续前进；好的界面安静地出现，也安静地解决问题。",
  "ui-food-2.webp": "个人页面收拢订单、地址与使用记录，把零散需求放回熟悉的位置；秩序感，是交互给予人的小小安心。",
  "ui-food-home.webp": "橙色像刚出炉食物的温度，首页用轻快节奏连接商品与需求；减少浪费，也可以从一次愉快的选择开始。",
  "ui-food-detail.webp": "图片、价格与行动按钮依次展开，让购买判断变得简单；信息不争抢目光，而是陪用户走完一次决定。",
  "data-story.webp": "数字从冷静表格走进一条关于未来的长路，养老不再只是遥远焦虑；当信息被讲成故事，行动便有了可以抵达的起点。",
  "data-story-part-1.webp": "从三十岁出发，数字把漫长未来折成一段段可以理解的路程；焦虑被拆开之后，第一次拥有了清晰的轮廓。",
  "data-story-part-2.webp": "地图、图表与行动建议继续向下生长，像为未来点亮一串路标；复杂的养老命题，也因此落回今天能做的小事。",
  "hainan-cover.webp": "海风、骑楼与明亮天空共同写下家乡的第一印象；网页不是旅游清单，而是一封从海南寄出的视觉家书。",
  "hainan-sunset.webp": "夕阳在人群身后慢慢沉下，所有举起手机的人都想留住同一刻；故乡有时就是这样一片反复想起的光。"
};

function imageFilename(item) {
  return item.dataset.src?.split("/").pop() || "";
}

document.querySelectorAll(".js-lightbox").forEach((item) => {
  const description = proseDescriptions[imageFilename(item)];
  if (!description) return;
  item.dataset.caption = description;
  if (item.classList.contains("work")) {
    const paragraph = document.createElement("p");
    paragraph.className = "work-description";
    paragraph.textContent = description;
    item.append(paragraph);
  }
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxTitle = lightbox.querySelector("figcaption b");
const lightboxCaption = lightbox.querySelector("figcaption span");
const lightboxCount = lightbox.querySelector(".lightbox-count");
let activeItems = [];
let activeIndex = 0;
let lastLightboxTrigger = null;

function renderLightbox(index) {
  if (!activeItems.length) return;
  activeIndex = (index + activeItems.length) % activeItems.length;
  const item = activeItems[activeIndex];
  lightbox.classList.toggle("long-image", item.dataset.long === "true");
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.querySelector("img")?.alt || item.dataset.title || "作品大图";
  lightboxTitle.textContent = item.dataset.title || "作品";
  lightboxCaption.textContent = item.dataset.caption || "";
  lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(activeItems.length).padStart(2, "0")}`;
}

function openLightbox(trigger) {
  lastLightboxTrigger = trigger;
  if (trigger.closest("#gallery-grid")) {
    activeItems = [...document.querySelectorAll("#gallery-grid .js-lightbox")].filter((item) => !item.classList.contains("hidden"));
  } else if (trigger.closest(".project")) {
    activeItems = [...trigger.closest(".project").querySelectorAll(".js-lightbox")];
  } else {
    activeItems = [trigger];
  }
  const found = activeItems.indexOf(trigger);
  renderLightbox(found >= 0 ? found : 0);
  lightbox.showModal();
  document.body.classList.add("modal-open");
}

document.querySelectorAll(".js-lightbox").forEach((item) => item.addEventListener("click", () => openLightbox(item)));
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => renderLightbox(activeIndex - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => renderLightbox(activeIndex + 1));
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  lightboxImage.src = "";
  lightbox.classList.remove("long-image");
  lastLightboxTrigger?.focus();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") renderLightbox(activeIndex - 1);
  if (event.key === "ArrowRight") renderLightbox(activeIndex + 1);
});

const resumeModal = document.querySelector("#resume-modal");
const resumeImage = resumeModal.querySelector("img");
const resumeTabs = [...resumeModal.querySelectorAll(".resume-tabs button")];
document.querySelectorAll(".js-open-resume").forEach((button) => button.addEventListener("click", () => {
  resumeModal.showModal();
  document.body.classList.add("modal-open");
}));
resumeModal.querySelector(".resume-close").addEventListener("click", () => resumeModal.close());
resumeModal.addEventListener("close", () => document.body.classList.remove("modal-open"));
resumeTabs.forEach((tab) => tab.addEventListener("click", () => {
  const language = tab.dataset.resume;
  resumeTabs.forEach((item) => item.classList.toggle("active", item === tab));
  resumeImage.src = language === "en" ? "assets/images/resume-en.webp" : "assets/images/resume-cn.webp";
  resumeImage.alt = language === "en" ? "Aria Zhang English resume" : "张译尹中文简历";
}));

if (!reducedMotion) {
  const heroArt = document.querySelector(".hero-art");
  const heroPhotos = [...document.querySelectorAll(".hero-photo")];
  heroArt.addEventListener("pointermove", (event) => {
    const rect = heroArt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroPhotos.forEach((photo, index) => {
      const depth = 5 + index * 4;
      photo.style.translate = `${x * depth}px ${y * depth}px`;
    });
  });
  heroArt.addEventListener("pointerleave", () => heroPhotos.forEach((photo) => { photo.style.translate = "0 0"; }));
}

document.querySelector("#year").textContent = new Date().getFullYear();
