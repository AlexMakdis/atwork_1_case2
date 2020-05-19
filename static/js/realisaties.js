(() => {
  'use strict'; // strict mode

  const lineup = [{
    picture: 'https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_3178-e1555426410836-600x445.jpg',
    h3: 'Luxevilla in Moerbrugge',
    h4: 'Geklasseerde schuur in een nieuw jasje',
},
{
  picture: 'https://matthiastalloen.be/wp-content/uploads/2019/05/IMG_2085-600x445.jpg',
  h3: 'Landelijke woning in Zwevezele',
  h4: 'Prachtige landelijke woning met hoogwaardige afwerking en materialen.',
},
{
picture: 'https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2631-omslag-copy-600x445.jpg',
h3: 'Gekoppelde woning Doomkerke',
h4: '2 Ruime halfopen pastorijwoningen',
}
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box_2');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
                <div class="g-fb-col-12 g-fb-col-md-4">
                    <article class="realisatie1">
                        <div class="detail2">
                            <a href="">
                                <div class="premise__content">
                                    <div class="premise__content__thumbnail"> <img width="350" height="260"
                                            src="${lineup.picture}"
                                            class="attachment-thumbnail size-thumbnail wp-post-image" alt=""></div>
                                    <div class="premise__content__info2 p-3">
                                        <h3>${lineup.h3}</h3>
                                        <h4>${lineup.h4}</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                </div>
  `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();