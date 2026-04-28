const mediaItems = [
  {
    title: "Kisu",
    image: "images/kisssa.jpg"
  },
  {

    title: "Pörri",
    image: "images/kisu.jpg"
  },
  {
    title: "Räy",
    image: "images/kisuli.jpg"
  }
];

let currentIndex = 0;
let intervalId = null;

let showItem = (index) => {
  const item = mediaItems[index];

  $("#carousel").fadeOut(200, function () {
    $("#image").attr("src", item.image);
    $("#caption").html(`<strong>${item.title}</strong>`);
    $("#carousel").fadeIn(200);
  });

  localStorage.setItem("carouselIndex", index);
};

let nextItem = () => {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  showItem(currentIndex);
};

let prevItem = () => {
  currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  showItem(currentIndex);
};

let playToggle = () => {
  if (intervalId === null) {
    intervalId = setInterval(nextItem, 3000);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
};


window.onload = () => {
  const saved = localStorage.getItem("carouselIndex");
  if (saved !== null) currentIndex = Number(saved);

  showItem(currentIndex);
};

