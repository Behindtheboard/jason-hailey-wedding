export default function translate() {
  const languageSwitch = document.getElementById("languageSwitch");
  const menuLinks = document.querySelectorAll("li a");
  const secHeaders = document.querySelectorAll("h2");
  const registryCtn = document.getElementById("registry-info");

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

  //change registry info
  const regInfo = {
    english: [
      "We're just happy you're joining us!",
      "But if you insist, venmo or zelle would be amazing!",
      "",
      "Venmo: @kjason",
      "Zelle: 917-599-6050",
    ],
    korean: [
      "저희의 시작을 함께 축하해주셔서 감사합니다!",
      "",
      "벤모 (Venmo): @kjason",
      "젤 (Zelle): 917-599-6050",
    ],
  };
  function registryInfo(textArr) {
    registryCtn.innerHTML = "";

    textArr.forEach((text, i) => {
      if (text === "") {
        registryCtn.appendChild(document.createElement("br"));
      } else {
        const p = document.createElement("p");
        const textNode = document.createTextNode(text);
        p.appendChild(textNode);
        registryCtn.appendChild(p);
      }
    });
  }
  registryInfo(regInfo.english);

  //Address info
  const addInfo = document.getElementById("address");
  addInfo.textContent = "Address will be sent to you after you RSVP!";

  languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
      menuTrans(menuNames.korean);
      headerTrans(headerNames.korean);
      registryInfo(regInfo.korean);
      addInfo.textContent =
        "결혼식 장소의 정확한 주소는 RSVP 후이메일로 보내 드릴게요!";
    } else {
      menuTrans(menuNames.english);
      headerTrans(headerNames.english);
      registryInfo(regInfo.english);
      addInfo.textContent = "Address will be sent to you after you RSVP!";
    }
  });
}
