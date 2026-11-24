// Anna Catherine Smith — site data and interactions.
// To add a video: copy a line in VIDEOS, change the id (the number in the Vimeo link), title and seconds.
// To add a show: copy a block in PRODUCTIONS and list its photo files from the images folder.

const thumb = (code) => `https://i.vimeocdn.com/video/${code}-d_640?region=us`;

const VIDEOS = [
  // On camera (booked work first)
  { id: "1202221704", title: "Pepsi Drips, national commercial", secs: 15, cat: "screen", t: "2169794326-32e854cb8e5a09128905cb69aff07a4522020cf94b23f61dc93a491ff51fa63a" },
  { id: "1211539380", title: "On-camera clip: dramedy", secs: 76, cat: "screen", t: "2181738192-cdbe94a83288e0cb710f1048e17f43bf1af5fc45179f22c08a1147b6fd97d30d", featured: "On camera" },
  { id: "1202637002", title: "Mockumentary comedy clips", secs: 55, cat: "screen", t: "2170382830-78599b076d4243ab3a91228199dc941cbd8da5ceee0440436aa5a4cd3e7a832e" },
  { id: "1202637359", title: "“Back Home,” horror short", secs: 302, cat: "screen", t: "2170385257-73bd12e72c9668b097e479dead82d9046ba27c8c54dc8b7cfd92413669aab27d" },

  // Self-tapes
  { id: "1201871193", title: "Scary Movie 6, comedy scene", secs: 84, cat: "selftape", t: "2169319018-0eea8d77bca8dd81fb28c5446ae9dde98eebeb9bfb25419e2d70f85f91f8be1c" },
  { id: "1202220198", title: "“Pizza Girl”", secs: 20, cat: "selftape", t: "2169794512-8a699cc3d4d76fcf86b846a68c67a1fe82058d64765f146d0b23f363db23746e" },
  { id: "1201870585", title: "Whole Moon Milk", secs: 8, cat: "selftape", t: "2169315868-794f8c7d4e8873bbdfb3229e1bee0950da2b675c379d12739ae0a32d4a7c9ed8" },

  // Singing and stage
  { id: "1246706648", title: "The Last Five Years reel", secs: 60, cat: "stage", t: "2226202238-c8d32bc0e039ac37893155f7aef1f495db923365d4cbf85d3a271cebd19eaf9f", featured: "Stage" },
  { id: "1246704928", title: "Performance reel", secs: 60, cat: "stage", t: "2226200155-48234dbe6cac02c0c44da2d111709c57b7622401a8ddd786a2e497a8d4ed3021" },
  { id: "1201867868", title: "Vocal reel", secs: 106, cat: "stage", t: "2169317882-745e95aa59565127860ca277af2a3f270d91b862baf3d25f0856b8b2560ee22a" },
  { id: "1201881320", title: "“Bring Me to Life,” 54 Below", secs: 71, cat: "stage", t: "2169335323-76b34aee06df305c52297ac969ed6bc8e02149ccac9f64470b4b917c63af2bf6" },
  { id: "1201866295", title: "“If I Loved You”", secs: 111, cat: "stage", t: "2169312052-537dad6b644a9b63b8c2e2aa030e371d538ddba9608e7e266d6cf6aabc8492f2" },
  { id: "1201823069", title: "“Being Alive”", secs: 96, cat: "stage", t: "2169253109-c55a3401b2b1e6f172f264face18df594966277331ebe8afa5bf67272a61f738" },
  { id: "1201834813", title: "“Johanna,” Sweeney Todd", secs: 108, cat: "stage", t: "2169268187-6e8c2d330b6a2fcaa2a6d57282f0a97ea7572e2fd56b655fb6aa14b4ee919066" },
  { id: "1201831555", title: "“Bad Idea”", secs: 78, cat: "stage", t: "2169264054-4a3c4797aab9aff570c3d2f7a01fa1c16e12e28818c180a029ef124a85c1ebf6" },
  { id: "1201835943", title: "“Love Is an Open Door,” Frozen", secs: 70, cat: "stage", t: "2169318765-790bfa81ac8f3ae3b8fb2a2a303ad1bb2e85c862fd4cf29788216cb2d7a4cf50" },
];

const PRODUCTIONS = [
  // On camera
  { show: "Pepsi Drips", role: "Hero", where: "National commercial, Regal Cinemas", year: "",
    video: "1202221704", photos: [] },
  { show: "Golden Corral", role: "Principal", where: "National commercial, on set", year: "",
    photos: ["bts-1", "bts-2"] },
  // Stage
  { show: "The Last Five Years", role: "Cathy Hiatt", where: "River & Rail Theatre", year: 2026,
    photos: ["2026-last-five-years-3", "2026-last-five-years-4", "2026-last-five-years-1", "2026-last-five-years-6", "2026-last-five-years-5", "2026-last-five-years-8", "2026-last-five-years-2", "2026-last-five-years-11", "2026-last-five-years-7", "2026-last-five-years-10"] },
  { show: "Fun Home", role: "Medium Alison", where: "River & Rail Theatre", year: 2023,
    photos: ["2023-fun-home-3", "2023-fun-home-2", "2023-fun-home-1"] },
  { show: "Scarlet Pimpernel", role: "Ensemble, u/s Marie", where: "Engeman Theater", year: 2023,
    photos: ["2023-scarlet-pimpernel-1"] },
  { show: "Mamma Mia!", role: "Sophie", where: "Argyle Theatre", year: 2022,
    photos: ["2022-mamma-mia-2", "2022-mamma-mia-3", "2022-mamma-mia-4", "2022-mamma-mia-1"] },
  { show: "The Little Mermaid", role: "Ariel", where: "Timber Lake Playhouse", year: 2019,
    photos: ["2019-the-little-mermaid-1", "2019-the-little-mermaid-2"] },
  { show: "Into the Woods", role: "", where: "Timber Lake Playhouse", year: 2019,
    photos: ["2019-into-the-woods-2", "2019-into-the-woods-1"] },
  { show: "Beauty and the Beast", role: "Belle", where: "Timber Lake Playhouse", year: 2018,
    photos: ["2018-beauty-and-the-beast-2", "2018-beauty-and-the-beast-1"] },
  { show: "The Full Monty", role: "", where: "Timber Lake Playhouse", year: 2018,
    photos: ["2018-the-full-monty-1", "2018-the-full-monty-3", "2018-the-full-monty-2"] },
  // Television
  { show: "Saturday Night Live", role: "Stand-in, featured background", where: "NBC", year: "",
    photos: ["snl-1", "snl-2", "snl-3", "snl-4"] },
];

// Photo sizes (width, height), used to lay out photos before they load.
const SIZES = {"2018-beauty-and-the-beast-1": [960, 638], "2018-beauty-and-the-beast-2": [1600, 1066], "2018-the-full-monty-1": [750, 500], "2018-the-full-monty-2": [750, 422], "2018-the-full-monty-3": [750, 500], "2019-into-the-woods-1": [646, 431], "2019-into-the-woods-2": [750, 496], "2019-the-little-mermaid-1": [750, 1034], "2019-the-little-mermaid-2": [750, 492], "2022-mamma-mia-1": [1280, 1600], "2022-mamma-mia-2": [1760, 990], "2022-mamma-mia-3": [1376, 1080], "2022-mamma-mia-4": [1500, 2000], "2023-fun-home-1": [2000, 1504], "2023-fun-home-2": [2000, 1622], "2023-fun-home-3": [2000, 1285], "2023-scarlet-pimpernel-1": [1125, 1407], "2026-last-five-years-1": [1333, 2000], "2026-last-five-years-10": [1333, 2000], "2026-last-five-years-11": [1067, 1600], "2026-last-five-years-2": [1067, 1600], "2026-last-five-years-3": [2000, 1333], "2026-last-five-years-4": [1333, 2000], "2026-last-five-years-5": [1067, 1600], "2026-last-five-years-6": [1067, 1600], "2026-last-five-years-7": [1067, 1600], "2026-last-five-years-8": [1333, 2000], "2026-last-five-years-9": [1290, 1590], "bts-1": [1500, 2000], "bts-2": [720, 540], "headshot-1": [1333, 2000], "headshot-2": [1544, 2000], "headshot-3": [1084, 1376], "headshot-4": [1333, 2000], "headshot-5": [1333, 2000], "snl-1": [2000, 836], "snl-2": [2000, 1122], "snl-3": [2000, 838], "snl-4": [1472, 795]};

const PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3 1.5v13l11-6.5z"/></svg>';
const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function videoButton(v) {
  return `<button class="vid" data-video="${v.id}" data-title="${esc(v.title)}">
    <span class="vid-thumb"><img src="${thumb(v.t)}" alt="" loading="lazy" width="640" height="360"><span class="play">${PLAY}</span></span>
    <span class="vid-title">${esc(v.title)}</span><span class="vid-len">${fmt(v.secs)}</span>
  </button>`;
}

// Featured reels
document.getElementById("featured").innerHTML = VIDEOS.filter((v) => v.featured)
  .map((v) => `<div><p class="feature-label">${v.featured}</p>${videoButton(v)}</div>`).join("");

// Video grid with tabs
const grid = document.getElementById("video-grid");
function showCat(cat) {
  grid.innerHTML = VIDEOS.filter((v) => v.cat === cat && !v.featured).map(videoButton).join("");
}
document.querySelectorAll(".tabs button").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((x) => x.setAttribute("aria-selected", x === b));
    showCat(b.dataset.filter);
  });
});
showCat("screen");

// A commercial's spot plays from its photo row
function stripVideo(p) {
  const v = VIDEOS.find((x) => x.id === p.video);
  return `<button class="vid" data-video="${v.id}" data-title="${esc(v.title)}">
    <span class="vid-thumb"><img src="${thumb(v.t)}" alt="" loading="lazy" width="640" height="360"><span class="play">${PLAY}</span></span>
    <span class="vid-tag">Watch the spot</span>
  </button>`;
}

// Production photos
document.getElementById("productions").innerHTML = PRODUCTIONS.map((p) => `
  <div class="production">
    <div class="production-info">
      <h3>${esc(p.show)}</h3>
      ${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}
      <p>${esc(p.where)}${p.year ? `, ${p.year}` : ""}</p>
    </div>
    <div class="strip" data-gallery>
      ${p.video ? stripVideo(p) : ""}
      ${p.photos.map((f, i) => `<button class="ph"><img src="images/${f}.jpg" width="${SIZES[f][0]}" height="${SIZES[f][1]}" alt="${esc(p.show)}${p.year ? ` (${p.year})` : ""}, photo ${i + 1}" loading="lazy"></button>`).join("")}
    </div>
  </div>`).join("");

// Lightbox (photos and video)
const lb = document.getElementById("lightbox");
const stage = lb.querySelector(".lb-stage");
const caption = lb.querySelector(".lb-caption");
let set = [], idx = 0;

function showPhoto() {
  const img = set[idx];
  stage.innerHTML = `<img src="${img.src}" alt="${esc(img.alt)}">`;
  caption.textContent = img.alt;
}
document.addEventListener("click", (e) => {
  const ph = e.target.closest(".ph");
  if (ph) {
    const gallery = ph.closest("[data-gallery]");
    set = [...gallery.querySelectorAll(".ph img")];
    idx = set.indexOf(ph.querySelector("img"));
    lb.classList.remove("video");
    showPhoto();
    lb.showModal();
    return;
  }
  const vid = e.target.closest(".vid");
  if (vid) {
    lb.classList.add("video");
    stage.innerHTML = `<iframe src="https://player.vimeo.com/video/${vid.dataset.video}?autoplay=1&title=0&byline=0&portrait=0&color=C3AED0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${vid.dataset.title}"></iframe>`;
    caption.textContent = vid.dataset.title;
    lb.showModal();
  }
});
const step = (d) => { if (!lb.classList.contains("video") && set.length) { idx = (idx + d + set.length) % set.length; showPhoto(); } };
lb.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lb.querySelector(".lb-next").addEventListener("click", () => step(1));
lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) lb.close(); });
lb.addEventListener("close", () => { stage.innerHTML = ""; });
document.addEventListener("keydown", (e) => {
  if (!lb.open) return;
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Header border once scrolled
const header = document.querySelector(".site-header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });

document.getElementById("yr").textContent = new Date().getFullYear();
