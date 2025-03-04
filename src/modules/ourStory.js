export default function ourStory() {
  const ourStoryContainer = document.querySelector("#story");
  const languageSwitch = document.getElementById("languageSwitch");

  const translations = {
    english: [
      "They say to marry your best friend—but that wasn’t what we believed at first. We started like something out of a movie, living as the romantic leads in our own Hollywood rom-com. In a city that brings stories to life, we were creating one of our own, lost in a world that felt like it was just ours.",
      "",
      "As time went on, our love story evolved. It became more than just romance—it became friendship, partnership, and a deep sense of belonging. We took care of each other, lifted each other up, and found joy in the simple moments that turned days into years. Somewhere along the way, we realized we had become each other’s best friends.",
      "",
      "Life in LA, with its infamous traffic, has made our time together even more precious. Though we live just far enough apart to only see each other on weekends, our relationship has grown stronger. Distance truly makes the heart grow fonder, and every week for the last three years, we’ve counted down the days until we could be together again.",
      "",
      "On November 23rd, 2024, we said “yes” to forever! After three incredible years of love, laughter, and shared dreams, we’re thrilled to start this next chapter together. Come celebrate our journey of love and friendship as we embark on the adventure of a lifetime—we can’t wait to share this special moment with you!",
    ],

    korean: [
      `사람들은 늘 "가장 친한 친구와 결혼하라"고 말하죠. 하지만 우리는 처음부터 그렇게 믿지는 않았어요. 우리의 이야기는 영화처럼 시작되었고, 정말 영화 속 주인공이 된 기분이었어요. 할리우드라는 영화의 도시에서 우리만의 로맨틱 코미디를 만들어가며, 세상 속에서 오직 우리 둘만의 세상을 살았죠.`,
      "",
      "시간이 지나며 우리의 사랑 이야기도 변했어요. 단순한 로맨스를 넘어 우정, 동반자 관계, 그리고 깊은 소속감이 되었죠. 우리는 서로를 보살피고, 힘들 때마다 서로를 일으켜 세우며, 함께 보내는 소소한 순간들 속에서 행복을 찾았어요. 그러다 보니 어느새, 우리는 정말 서로의 가장 친한 친구가 되어 있더라고요.",
      "",
      "저희는 주말에만 볼수 있을 정도로 조금 떨어져 살았지만, 이 거리감은 우리의 관계를 더 단단하게 만들어 주었어요. 매주, 지난 3년 동안 우리는 주말이 오기만을 손꼽아 기다렸답니다.",
      "",
      "그리고 2024년 11월 23일, 우리는 서로에게 영원히 함께하자고 약속했어요! 사랑, 웃음, 그리고 꿈을 나눈 지난 3년의 시간을 지나, 이제 새로운 여정을 함께 시작하려 해요. 우리의 사랑과 우정의 여정을 함께 축하하며, 앞으로 펼쳐질 아름다운 모험에 함께해 주세요. 여러분과 함께 이 특별한 순간을 나누고 싶어요!",
    ],
  };

  function createParagraph(textArray) {
    ourStoryContainer.innerHTML = "";

    textArray.forEach((text, index) => {
      if (text === "") {
        ourStoryContainer.appendChild(document.createElement("br"));
      } else {
        const p = document.createElement("p");
        const textNode = document.createTextNode(text);
        p.appendChild(textNode);
        ourStoryContainer.appendChild(p);
      }
    });
  }

  createParagraph(translations.english);

  languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
      createParagraph(translations.korean);
    } else {
      createParagraph(translations.english);
    }
  });
}
