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
            { src: 'vs01.jpg', srct: 'vs01.jpg', title: 'NCNU 1' },
            { src: 'vs02.jpg', srct: 'vs02.jpg', title: 'NCNU 2' },
            { src: 'vs03.jpg', srct: 'vs03.jpg', title: 'NCNU 3' },
            { src: 'vs04.jpg', srct: 'vs04.jpg', title: 'NCNU 4' },
            { src: 'vs05.jpg', srct: 'vs05.jpg', title: 'NCNU 5' },
            { src: 'vs06.jpg', srct: 'vs06.jpg', title: 'NCNU 6' },
            { src: 'vs07.jpg', srct: 'vs07.jpg', title: 'NCNU 7' },
            { src: 'vs08.jpg', srct: 'vs08.jpg', title: 'NCNU 8' },
            { src: 'vs09.jpg', srct: 'vs09.jpg', title: 'NCNU 9' },
            { src: 'vs10.jpg', srct: 'vs10.jpg', title: 'NCNU 10' },
            { src: 'vs11.jpg', srct: 'vs11.jpg', title: 'Sun Moon Lake 1' },
            { src: 'vs12.jpg', srct: 'vs12.jpg', title: 'Sun Moon Lake 2' },
            { src: 'vs13.jpg', srct: 'vs13.jpg', title: 'Sun Moon Lake 3' },
            { src: 'vs14.jpg', srct: 'vs14.jpg', title: 'Sun Moon Lake 4' },
            { src: 'vs15.jpg', srct: 'vs15.jpg', title: 'Sun Moon Lake 5' },
            { src: 'vs16.jpg', srct: 'vs16.jpg', title: 'Sun Moon Lake 6' },
            { src: 'vs17.jpg', srct: 'vs17.jpg', title: 'Sun Moon Lake 7' },
            { src: 'vs18.jpg', srct: 'vs18.jpg', title: 'Sun Moon Lake 8' },
            { src: 'vs19.jpg', srct: 'vs19.jpg', title: 'Sun Moon Lake 9' },
            { src: 'vs20.jpg', srct: 'vs20.jpg', title: 'Sun Moon Lake 10' },
            { src: 'vs21.jpg', srct: 'vs21.jpg', title: 'Sun Moon Lake 11' },
            { src: 'vs22.jpg', srct: 'vs22.jpg', title: 'Sun Moon Lake 12' },
            { src: 'vs23.jpg', srct: 'vs23.jpg', title: 'Sun Moon Lake 13' },
            { src: 'vs24.jpg', srct: 'vs24.jpg', title: 'Sun Moon Lake 14' },
            { src: 'vs25.jpg', srct: 'vs25.jpg', title: 'Sun Moon Lake 15' },
            { src: 'vs26.jpg', srct: 'vs26.jpg', title: 'Sun Moon Lake 16' },
            { src: 'vs27.jpg', srct: 'vs27.jpg', title: 'Sun Moon Lake 17' },
            { src: 'vs28.jpg', srct: 'vs28.jpg', title: 'Sun Moon Lake 18' },
            { src: 'vs29.jpg', srct: 'vs29.jpg', title: 'Sun Moon Lake 19' },
            { src: 'vs30.jpg', srct: 'vs30.jpg', title: 'Sun Moon Lake 20' },
            { src: 'vs31.jpg', srct: 'vs31.jpg', title: 'Sun Moon Lake 21' },
            { src: 'vs32.jpg', srct: 'vs32.jpg', title: 'Sun Moon Lake 22' },
            { src: 'vs33.jpg', srct: 'vs33.jpg', title: 'Sun Moon Lake 23' },
            { src: 'vs34.jpg', srct: 'vs34.jpg', title: 'Sun Moon Lake 24' },
            { src: 'vs35.jpg', srct: 'vs35.jpg', title: 'Sun Moon Lake 25' },
            { src: 'vs36.jpg', srct: 'vs36.jpg', title: 'Sun Moon Lake 26' }
          ]
      });
    
  });