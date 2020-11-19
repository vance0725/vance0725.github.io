jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        // GALLERY AND THUMBNAIL LAYOUT
        galleryMosaic : [                       // default layout
            { w: 2, h: 2, c: 1, r: 1 },
            { w: 1, h: 1, c: 3, r: 1 },
            { w: 1, h: 1, c: 3, r: 2 },
            { w: 1, h: 2, c: 4, r: 1 },
            { w: 2, h: 1, c: 5, r: 1 },
            { w: 2, h: 2, c: 5, r: 2 },
            { w: 1, h: 1, c: 4, r: 3 },
            { w: 2, h: 1, c: 2, r: 3 },
            { w: 1, h: 2, c: 1, r: 3 },
            { w: 1, h: 1, c: 2, r: 4 },
            { w: 2, h: 1, c: 3, r: 4 },
            { w: 1, h: 1, c: 5, r: 4 },
            { w: 1, h: 1, c: 6, r: 4 }
        ],
        galleryMosaicXS : [                     // layout for XS width
            { w: 2, h: 2, c: 1, r: 1 },
            { w: 1, h: 1, c: 3, r: 1 },
            { w: 1, h: 1, c: 3, r: 2 },
            { w: 1, h: 2, c: 1, r: 3 },
            { w: 2, h: 1, c: 2, r: 3 },
            { w: 1, h: 1, c: 2, r: 4 },
            { w: 1, h: 1, c: 3, r: 4 }
        ],
        galleryMosaicSM : [                     // layout for SM width
            { w: 2, h: 2, c: 1, r: 1 },
            { w: 1, h: 1, c: 3, r: 1 },
            { w: 1, h: 1, c: 3, r: 2 },
            { w: 1, h: 2, c: 1, r: 3 },
            { w: 2, h: 1, c: 2, r: 3 },
            { w: 1, h: 1, c: 2, r: 4 },
            { w: 1, h: 1, c: 3, r: 4 }
        ],
        galleryMaxRows: 1,
        galleryDisplayMode: 'rows',
        gallerySorting: 'random',
        thumbnailDisplayOrder: 'random',

        thumbnailHeight: '180', thumbnailWidth: '220',
        thumbnailAlignment: 'scaled',
        thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

        thumbnailToolbarImage: null,
        thumbnailToolbarAlbum: null,
        thumbnailLabel: { display: false },

        // DISPLAY ANIMATION
        // for gallery
        galleryDisplayTransitionDuration: 1500,
        // for thumbnails
        thumbnailDisplayTransition: 'imageSlideUp',
        thumbnailDisplayTransitionDuration: 1200,
        thumbnailDisplayTransitionEasing: 'easeInOutQuint',
        thumbnailDisplayInterval: 60,

        // THUMBNAIL HOVER ANIMATION
        thumbnailBuildInit2: 'image_scale_1.15',
        thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
        touchAnimation: true,
        touchAutoOpenDelay: 500,

        // LIGHTBOX
        viewerToolbar: { display: false },
        viewerTools:    {
            topLeft:   'label',
            topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
        },

        // GALLERY THEME
        galleryTheme : { 
            thumbnail: { background: '#111' },
        },
        
        // DEEP LINKING
        locationHash: true,
        
        itemsBaseURL:     'https://raw.githubusercontent.com/vance0725/vance0725.github.io/master/images-min/',
        
        // ### gallery content ### 
        items: [
            { src: 'vs01.jpg', srct: 'vs01_t.jpg', title: 'NCNU' },
            { src: 'vs02.jpg', srct: 'vs02_t.jpg', title: 'NCNU' },
            { src: 'vs03.jpg', srct: 'vs03_t.jpg', title: 'NCNU' },
            { src: 'vs04.jpg', srct: 'vs04_t.jpg', title: 'NCNU' },
            { src: 'vs05.jpg', srct: 'vs05_t.jpg', title: 'NCNU' },
            { src: 'vs06.jpg', srct: 'vs06_t.jpg', title: 'NCNU' },
            { src: 'vs07.jpg', srct: 'vs07_t.jpg', title: 'NCNU' },
            { src: 'vs08.jpg', srct: 'vs08_t.jpg', title: 'NCNU' },
            { src: 'vs09.jpg', srct: 'vs09_t.jpg', title: 'NCNU' },
            { src: 'vs10.jpg', srct: 'vs10_t.jpg', title: 'NCNU' },
            { src: 'vs11.jpg', srct: 'vs11_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs12.jpg', srct: 'vs12_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs13.jpg', srct: 'vs13_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs14.jpg', srct: 'vs14_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs15.jpg', srct: 'vs15_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs16.jpg', srct: 'vs16_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs17.jpg', srct: 'vs17_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs18.jpg', srct: 'vs18_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs19.jpg', srct: 'vs19_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs20.jpg', srct: 'vs20_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs21.jpg', srct: 'vs21_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs22.jpg', srct: 'vs22_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs23.jpg', srct: 'vs23_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs24.jpg', srct: 'vs24_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs25.jpg', srct: 'vs25_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs26.jpg', srct: 'vs26_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs27.jpg', srct: 'vs27_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs28.jpg', srct: 'vs28_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs29.jpg', srct: 'vs29_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs30.jpg', srct: 'vs30_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs31.jpg', srct: 'vs31_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs32.jpg', srct: 'vs32_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs33.jpg', srct: 'vs33_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs34.jpg', srct: 'vs34_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs35.jpg', srct: 'vs35_t.jpg', title: 'Sun Moon Lake' },
            { src: 'vs36.jpg', srct: 'vs36_t.jpg', title: 'Sun Moon Lake' }
          ]
      });
    
  });