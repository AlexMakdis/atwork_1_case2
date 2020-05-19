(() => {
  'use strict'; // strict mode

  const lineup = [{
      picture: '../static/images/koopA.jpeg',
      a: '../te-koop/nieuwbouwwoning-met-3-slaapkamers-in-wildenburg-wingene/index.html',
      h3: 'NIEUWBOUWWONING WINGENE',
      h4: 'Nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.',
      tag: '€ 292.500'
  },
  {
    picture: '../static/images/koopB.jpg',
    a: '',
    h3: 'Appartementen in Oostveld',
    h4: 'Vijf nieuwbouwappartementen in het rustige Oostveld',
    tag: '2 Loten'
},
{
  picture: '../static/images/koopC.jpg',
  a: '',
  h3: 'Alleenstaande pastoriewoning in Wingene',
  h4: 'Ruime alleenstaande woning',
  tag: 'Verkocht'
},
{
  picture: '../static/images/koopD.jpg',
  a: '',
  h3: 'Nieuwbouwwoningen Doomkerke',
  h4: 'Drie geschakelde nieuwbouwwoningen',
  tag: 'Verkocht'
},

  
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
                <div class="g-fb-col-12 g-fb-col-md-4">
                    <a href="${lineup.a}">
                        <div class="premise__content">
                            <div class="premise__content__price4"> <strong class="text-uppercase">${lineup.tag}</strong>
                            </div>
                            <div class="premise__content__thumbnail"> <img width="336" height="260"
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