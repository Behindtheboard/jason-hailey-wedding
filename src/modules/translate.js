export default function translate() {
  const languageSwitch = document.getElementById("languageSwitch");
  const menuLinks = document.querySelectorAll("li a");
  const secHeaders = document.querySelectorAll("h2");
  const thirHeaders = document.querySelectorAll("h3");
  const registryCtn = document.getElementById("registry-info");
  const detailsCtn = document.querySelectorAll("#details-container p");

  //change menu names
  const menuNames = {
    english: ["home", "our story", "registry", "details"],
    korean: ["홈", "우리의 이야기", "축의금", "정보"],
  };

  function menuTrans(textArr) {
    menuLinks.forEach((link, i) => {
      link.textContent = textArr[i];
    });
  }
  menuTrans(menuNames.english);

  //change header names
  const headerNames = {
    english: ["our story", "registry", "details", 'See you soon!'],
    korean: ["우리의 이야기", "축의금", "정보"],
  };

  function headerTrans(textArr) {
    secHeaders.forEach((header, i) => {
      header.textContent = textArr[i];
    });
  }
  headerTrans(headerNames.english);

  //change header three names
  const thirdHeaderNames = {
    english: ["ceremony","parking", "attire"],
    korean: ["결혼식","주차정보", "복장"],
  };

  function thirdHeaderTrans(textArr) {
    thirHeaders.forEach((header, i) => {
      header.textContent = textArr[i];
    });
  }
  thirdHeaderTrans(thirdHeaderNames.english);

  //change registry info
  const regInfo = {
    english: [
      "We're just happy you're joining us!",
      "But if you insist, venmo or zelle would be amazing!",
      "Venmo: @kjason",
      "Zelle: 917-599-6050",
    ],
    korean: [
      "저희의 시작을 함께 축하해주셔서 감사합니다!",
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

  // translate details container

  const detailsInfo = {
    english: [
      "Please arrive by 3:30PM",
      "Parking will be on site on a small field next to the venue. There will not be ushers to guide you, so we ask that you park accordingly!",
      "Cocktail attire is recommended. Please refrain from navy/blues if possible!",
      "We will be celebrating on gravel and grass, so we recommend block heels for the ladies!",
    ],
    korean: [
      "오후 3시 30분까지 도착해 주세요.",
      "주차는 결혼식 장소로 오시면 지정된 파킹장이 마련돼 있습니다!",
      "칵테일/세미정장 복장, 파란색/남색은 피해주세요! ",
      "결혼식 장소에 작은돌과 잔디가 있어요. 여성분들 뾰족한 힐은 불편하실수 있어요.",
    ],
  };

  function detailsTrans(textArr) {
    detailsCtn.forEach((text, i) => {
      text.textContent = textArr[i];
    });
  }
  detailsTrans(detailsInfo.english);

  languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
      menuTrans(menuNames.korean);
      headerTrans(headerNames.korean);
      thirdHeaderTrans(thirdHeaderNames.korean);
      registryInfo(regInfo.korean);
      detailsTrans(detailsInfo.korean);

    } else {
      menuTrans(menuNames.english);
      headerTrans(headerNames.english);
      thirdHeaderTrans(thirdHeaderNames.english);
      registryInfo(regInfo.english);
      detailsTrans(detailsInfo.english);
    }
  });
}
