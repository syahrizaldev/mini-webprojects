// Tabs Function
const tabsLink = document.querySelectorAll(".tabs-link");
const contentItem = document.querySelectorAll(".content-item");

tabsLink.forEach((e) => {
   e.addEventListener("click", tabActive);
});

// Activate Tabs
function tabActive(tabs) {
   const target = tabs.currentTarget;
   const tabId = target.dataset.country;

   tabsLink.forEach((link) => {
      link.classList.remove("active");
   });

   contentItem.forEach((content) => {
      content.classList.remove("active");
   });

   document.querySelector("#" + tabId).classList.add("active");
   target.classList.add("active");
}
