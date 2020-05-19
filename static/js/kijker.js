(() => {
  'use strict'; // strict mode

  const lineup = [{
    picture: 'https://matthiastalloen.be/wp-content/uploads/2019/04/20180529_BD-1631-3716-Tinhoutstraat_werfbord-600x445.jpg',
    h3: 'Appartement 101',
    h4: '<span class="status-label">Te koop</span> Appartement met twee slaapkamers en terras',
    tag: '€ 220.000'
},
{
  picture: 'https://matthiastalloen.be/wp-content/uploads/2019/04/doomkerkerpano-600x445.jpg',
  h3: 'Nieuwbouwwoningen Doomkerke',
  h4: ' <span class="status-label">Te koop</span> Drie geschakelde nieuwbouwwoningen',
  tag: 'Verkocht'
},
{
picture: 'https://matthiastalloen.be/wp-content/uploads/2019/05/IMG_9624-cover-600x445.jpg',
h3: 'Alleenstaande pastoriewoning in Wingene',
h4: '<span class="status-label">Te koop</span> Ruime alleenstaande woning',
tag: 'Verkocht'
}
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
  <div class="g-fb-col-12 g-fb-col-md-4">
      <a href="">
          <div class="premise__content">
              <div class="premise__content__price"> <strong class="text-uppercase">${lineup.tag}</strong></div>
              <div class="premise__content__thumbnail"> <img width="350" height="260"
                      src="${lineup.picture}"
                      class="attachment-thumbnail size-thumbnail wp-post-image" alt=""></div>
              <div class="premise__content__info p-3">
                  <h3>${lineup.h3}</h3>
                  <h4>${lineup.h4}</h4>
              </div>
          </div>
      </a>
  </div>
  `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();