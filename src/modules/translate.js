export default function translate() {
  const languageSwitch = document.getElementById("languageSwitch");
  const menuLinks = document.querySelectorAll("li a");
  const secHeaders = document.querySelectorAll("h2");

  //change menu names

  const menuNames = {
    english: ["home", "our story", "location", "registry", "rsvp"],
    korean: ["홈", "우리의 이야기", "장소", "축의금", "rsvp"],
  };

  function menuTrans(textArr) {
    menuLinks.forEach((link, i) => {
      link.textContent = textArr[i];
    });
  }

  menuTrans(menuNames.english);

  //change header names

  const headerNames = {
    english: ["our story", "location", "registry"],
    korean: ["우리의 이야기", "장소", "축의금"],
  };

  function headerTrans(textArr) {
    secHeaders.forEach((header, i) => {
      header.textContent = textArr[i];
    });
  }

  headerTrans(headerNames.english);

  languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
      menuTrans(menuNames.korean);
      headerTrans(headerNames.korean);
    } else {
      menuTrans(menuNames.english);
      headerTrans(headerNames.english);
    }
  });
}
