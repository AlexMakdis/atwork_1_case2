(() => {
  'use strict'; // strict mode

  const lineup = [{
      picture1: '../matthias-talloen/static/images/detail_foto/1.jpg',
      picture2: '../matthias-talloen/static/images/detail_foto/2.jpg'
  }
// ,
//   {
//     picture1: '../matthias-talloen/static/images/detail_foto/3.jpg',
//     picture2: '../matthias-talloen/static/images/detail_foto/4.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/5.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/6.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/7.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/8.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/9.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/10.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/11.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/12.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/13.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/14.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/15.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/16.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/17.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/18.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/19.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/20.jpg'
// },
// {
//   picture1: '../matthias-talloen/static/images/detail_foto/21.jpg',
//   picture2: '../matthias-talloen/static/images/detail_foto/22.jpg'
// },
  
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box_2');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
      <div class="masonry">
        <h3 class="text-center" style="text-align: center;">Meer afbeeldingen</h3>
        <div class="masonry__items container g-fb-container" style="position: relative; height: 6000.16px;">
            <div class="masonry__items__sizer"></div>
            <div class="gutter-sizer"></div> <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/A79999F4-AA1C-4C11-9B67-781C7C62C26A-1920x1440.jpg"
                style="position: absolute; left: 0%; top: 0px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/A79999F4-AA1C-4C11-9B67-781C7C62C26A-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/A79999F4-AA1C-4C11-9B67-781C7C62C26A-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/A79999F4-AA1C-4C11-9B67-781C7C62C26A-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/2CA0C74F-3660-4E20-8322-3F8C14AA3EB7-e1557497678309-1920x1440.jpeg"
                style="position: absolute; left: 50.9981%; top: 0px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/2CA0C74F-3660-4E20-8322-3F8C14AA3EB7-e1557497678309-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/2CA0C74F-3660-4E20-8322-3F8C14AA3EB7-e1557497678309-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/2CA0C74F-3660-4E20-8322-3F8C14AA3EB7-e1557497678309-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/1001365A-EFF5-4E66-9BC6-4A70515DB87C-1920x1440.jpg"
                style="position: absolute; left: 0%; top: 430.094px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/1001365A-EFF5-4E66-9BC6-4A70515DB87C-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/1001365A-EFF5-4E66-9BC6-4A70515DB87C-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/1001365A-EFF5-4E66-9BC6-4A70515DB87C-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/685CA257-57AB-4CCE-9B3F-D3A519645FE2-1920x1440.jpg"
                style="position: absolute; left: 50.9981%; top: 430.094px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/685CA257-57AB-4CCE-9B3F-D3A519645FE2-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/685CA257-57AB-4CCE-9B3F-D3A519645FE2-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/685CA257-57AB-4CCE-9B3F-D3A519645FE2-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/54B27AB0-3576-4545-B9BE-079A2F2DFE8B-1920x1440.jpg"
                style="position: absolute; left: 0%; top: 860.187px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/54B27AB0-3576-4545-B9BE-079A2F2DFE8B-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/54B27AB0-3576-4545-B9BE-079A2F2DFE8B-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/54B27AB0-3576-4545-B9BE-079A2F2DFE8B-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/53AD7810-DA98-4EA6-A1F0-2F4AB5376F13-1920x1440.jpg"
                style="position: absolute; left: 50.9981%; top: 860.187px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/53AD7810-DA98-4EA6-A1F0-2F4AB5376F13-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/53AD7810-DA98-4EA6-A1F0-2F4AB5376F13-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/53AD7810-DA98-4EA6-A1F0-2F4AB5376F13-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/3B4DA029-C501-46F8-AA3E-5890A0C912F4-1920x1440.jpg"
                style="position: absolute; left: 0%; top: 1290.28px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/3B4DA029-C501-46F8-AA3E-5890A0C912F4-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/3B4DA029-C501-46F8-AA3E-5890A0C912F4-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/3B4DA029-C501-46F8-AA3E-5890A0C912F4-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/C7CDD3F1-A787-4CCE-9819-3AEEE1E258D2-e1557497745830-1920x1440.jpeg"
                style="position: absolute; left: 50.9981%; top: 1290.28px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/C7CDD3F1-A787-4CCE-9819-3AEEE1E258D2-e1557497745830-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/C7CDD3F1-A787-4CCE-9819-3AEEE1E258D2-e1557497745830-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/C7CDD3F1-A787-4CCE-9819-3AEEE1E258D2-e1557497745830-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/D8E967DB-1C78-4CB9-94C6-879F06EACD30-e1557497668572-1920x1440.jpeg"
                style="position: absolute; left: 0%; top: 1720.37px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/D8E967DB-1C78-4CB9-94C6-879F06EACD30-e1557497668572-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/D8E967DB-1C78-4CB9-94C6-879F06EACD30-e1557497668572-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/D8E967DB-1C78-4CB9-94C6-879F06EACD30-e1557497668572-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/8CD4BD76-4FA8-4710-BF68-72E052948249-1440x1920.jpg"
                style="position: absolute; left: 50.9981%; top: 1720.37px;"> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/8CD4BD76-4FA8-4710-BF68-72E052948249-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/8CD4BD76-4FA8-4710-BF68-72E052948249-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/8CD4BD76-4FA8-4710-BF68-72E052948249-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/8CD4BD76-4FA8-4710-BF68-72E052948249-1440x1920.jpg 1440w"
                    sizes="(max-width: 675px) 100vw, 675px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/DC98E4BA-6901-402E-BCE8-090FDE346F37-e1557497693604-1920x1440.jpeg"
                style="position: absolute; left: 0%; top: 2150.47px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/DC98E4BA-6901-402E-BCE8-090FDE346F37-e1557497693604-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/DC98E4BA-6901-402E-BCE8-090FDE346F37-e1557497693604-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/DC98E4BA-6901-402E-BCE8-090FDE346F37-e1557497693604-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/388E60AD-2B9D-4379-9737-2F7150F514FA-e1557497783890-1920x1440.jpeg"
                style="position: absolute; left: 50.9981%; top: 2467.75px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/388E60AD-2B9D-4379-9737-2F7150F514FA-e1557497783890-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/388E60AD-2B9D-4379-9737-2F7150F514FA-e1557497783890-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/388E60AD-2B9D-4379-9737-2F7150F514FA-e1557497783890-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/FB4559AC-712D-419A-A4C6-6B8947A0FCA9-1440x1920.jpg"
                style="position: absolute; left: 0%; top: 2580.56px;"> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/FB4559AC-712D-419A-A4C6-6B8947A0FCA9-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/FB4559AC-712D-419A-A4C6-6B8947A0FCA9-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/FB4559AC-712D-419A-A4C6-6B8947A0FCA9-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/FB4559AC-712D-419A-A4C6-6B8947A0FCA9-1440x1920.jpg 1440w"
                    sizes="(max-width: 675px) 100vw, 675px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/CBA4C84D-74B6-4042-8BD7-823E20EAA052-1920x1440.jpg"
                style="position: absolute; left: 50.9981%; top: 2897.84px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/CBA4C84D-74B6-4042-8BD7-823E20EAA052-900x675.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/CBA4C84D-74B6-4042-8BD7-823E20EAA052-900x675.jpg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/CBA4C84D-74B6-4042-8BD7-823E20EAA052-768x576.jpg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/87904F03-01C5-4A06-B2DE-AB6C11E5986C-e1557497634753-1920x1440.jpeg"
                style="position: absolute; left: 50.9981%; top: 3327.94px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/87904F03-01C5-4A06-B2DE-AB6C11E5986C-e1557497634753-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/87904F03-01C5-4A06-B2DE-AB6C11E5986C-e1557497634753-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/87904F03-01C5-4A06-B2DE-AB6C11E5986C-e1557497634753-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/65FF2753-E538-49C1-8A2D-8EA2388CEF33-e1557497656842-1920x1440.jpeg"
                style="position: absolute; left: 0%; top: 3327.94px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/65FF2753-E538-49C1-8A2D-8EA2388CEF33-e1557497656842-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/65FF2753-E538-49C1-8A2D-8EA2388CEF33-e1557497656842-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/65FF2753-E538-49C1-8A2D-8EA2388CEF33-e1557497656842-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/C1D98094-5C44-45BB-9A34-2F5BA7BC8141-e1557497599488-1920x1440.jpeg"
                style="position: absolute; left: 50.9981%; top: 3758.03px;"> <img width="544" height="408"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/C1D98094-5C44-45BB-9A34-2F5BA7BC8141-e1557497599488-900x675.jpeg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/C1D98094-5C44-45BB-9A34-2F5BA7BC8141-e1557497599488-900x675.jpeg 900w, https://matthiastalloen.be/wp-content/uploads/2019/04/C1D98094-5C44-45BB-9A34-2F5BA7BC8141-e1557497599488-768x576.jpeg 768w"
                    sizes="(max-width: 900px) 100vw, 900px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-1440x1920.jpg"
                style="position: absolute; left: 0%; top: 3758.03px;">
                <div class="premise__content__price2"> Achtergevel in opbouw</div> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-1440x1920.jpg 1440w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_0274-e1554995759528-600x800.jpg 600w"
                    sizes="(max-width: 675px) 100vw, 675px">
            </a>
            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-1440x1920.jpg"
                style="position: absolute; left: 50.9981%; top: 4188.12px;">
                <div class="premise__content__price2"> Achtergevel in opbouw</div> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-1440x1920.jpg 1440w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_2637-e1554995776468-600x800.jpg 600w"
                    sizes="(max-width: 675px) 100vw, 675px">
            </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-1440x1920.jpg"
                style="position: absolute; left: 0%; top: 4505.41px;">
                <div class="premise__content__price2"> Voorgevel in opbouw</div> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-1440x1920.jpg 1440w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_5721-e1554995791103-600x800.jpg 600w"
                    sizes="(max-width: 675px) 100vw, 675px">
            </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-1440x1920.jpg"
                style="position: absolute; left: 50.9981%; top: 4935.5px;"> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-1440x1920.jpg 1440w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_7365-e1554995798512-600x800.jpg 600w"
                    sizes="(max-width: 675px) 100vw, 675px"> </a>

            <a class="masonry__items__item" data-fancybox="gallery"
                href="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-1440x1920.jpg"
                style="position: absolute; left: 0%; top: 5252.78px;">
                <div class="premise__content__price2"> Voorgevel in opbouw</div> <img width="544" height="700"
                    src="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-675x900.jpg"
                    class="attachment-medium size-medium" alt=""
                    srcset="https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-675x900.jpg 675w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-768x1024.jpg 768w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-1440x1920.jpg 1440w, https://matthiastalloen.be/wp-content/uploads/2019/04/IMG_8608-e1554995807652-600x800.jpg 600w"
                    sizes="(max-width: 675px) 100vw, 675px">
            </a> <a class="masonry__items__item" data-fancybox="gallery" href=""
                style="position: absolute; left: 50.9981%; top: 5682.87px;"> </a>
        </div>
    </div>


    </main>
    </div>
    </div>
    </div>
    </div>

    <div class="realisaties">
        <div class="container">
            <h1>Enkele andere projecten</h1>
            <div class="row_detail">
                <article class="realisatie1">
                    <div class="detail2">
                        <a href="">
                            <div class="premise__content">
                                <div class="premise__content__price"> <strong class="text-uppercase">2 Loten</strong>
                                </div>
                                <div class="premise__content__thumbnail"> <img width="336" height="260"
                                        src="/matthias-talloen/static/images/koopB.jpg"
                                        class="attachment-thumbnail size-thumbnail wp-post-image" alt=""></div>
                                <div class="premise__content__info2 p-3">
                                    <h3>Appartementen in Oostveld</h3>
                                    <h4>Vijf nieuwbouwappartementen in het rustige Oostveld</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <article class="realisatie2">
                    <div class="detail2">
                        <a href="">
                            <div class="premise__content">
                                <div class="premise__content__price"> <strong class="text-uppercase">Verkocht</strong>
                                </div>
                                <div class="premise__content__thumbnail"><img width="350" height="260"
                                        src="https://matthiastalloen.be/wp-content/uploads/2019/05/IMG_9624-cover-600x445.jpg"
                                        class="attachment-thumbnail size-thumbnail wp-post-image" alt=""></div>
                                <div class="premise__content__info2 p-3">
                                    <h3>Alleenstaande pastoriewoning in Wingene</h3>
                                    <h4>Ruime alleenstaande woning</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <article class="kijker3">
                    <div class="detail2">
                        <a href="">
                            <div class="premise__content">
                                <div class="premise__content__price"> <strong class="text-uppercase">Verkocht</strong>
                                </div>
                                <div class="premise__content__thumbnail"> <img width="350" height="260"
                                        src="https://matthiastalloen.be/wp-content/uploads/2019/04/doomkerkerpano-600x445.jpg"
                                        class="attachment-thumbnail size-thumbnail wp-post-image" alt=""></div>
                                <div class="premise__content__info2 p-3">
                                    <h3>Nieuwbouwwoningen Doomkerke</h3>
                                    <h4>Drie geschakelde nieuwbouwwoningen</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </div>
  `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();