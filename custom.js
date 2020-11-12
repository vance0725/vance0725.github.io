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
        
        itemsBaseURL:     'https://github.com/vance0725/vance0725.github.io/blob/master/images-min/',
        
        // ### gallery content ### 
        items: [
            { src: 'vs01.jpg?raw=true', srct: 'vs01.jpg?raw=true', title: 'NCNU 1' },
            { src: 'vs02.jpg?raw=true', srct: 'vs02.jpg?raw=true', title: 'NCNU 2' },
            { src: 'vs03.jpg?raw=true', srct: 'vs03.jpg?raw=true', title: 'NCNU 3' },
            { src: 'vs04.jpg?raw=true', srct: 'vs04.jpg?raw=true', title: 'NCNU 4' },
            { src: 'vs05.jpg?raw=true', srct: 'vs05.jpg?raw=true', title: 'NCNU 5' },
            { src: 'vs06.jpg?raw=true', srct: 'vs06.jpg?raw=true', title: 'NCNU 6' },
            { src: 'vs07.jpg?raw=true', srct: 'vs07.jpg?raw=true', title: 'NCNU 7' },
            { src: 'vs08.jpg?raw=true', srct: 'vs08.jpg?raw=true', title: 'NCNU 8' },
            { src: 'vs09.jpg?raw=true', srct: 'vs09.jpg?raw=true', title: 'NCNU 9' },
            { src: 'vs10.jpg?raw=true', srct: 'vs10.jpg?raw=true', title: 'NCNU 10' },
            { src: 'vs11.jpg?raw=true', srct: 'vs11.jpg?raw=true', title: 'Sun Moon Lake 1' },
            { src: 'vs12.jpg?raw=true', srct: 'vs12.jpg?raw=true', title: 'Sun Moon Lake 2' },
            { src: 'vs13.jpg?raw=true', srct: 'vs13.jpg?raw=true', title: 'Sun Moon Lake 3' },
            { src: 'vs14.jpg?raw=true', srct: 'vs14.jpg?raw=true', title: 'Sun Moon Lake 4' },
            { src: 'vs15.jpg?raw=true', srct: 'vs15.jpg?raw=true', title: 'Sun Moon Lake 5' },
            { src: 'vs16.jpg?raw=true', srct: 'vs16.jpg?raw=true', title: 'Sun Moon Lake 6' },
            { src: 'vs17.jpg?raw=true', srct: 'vs17.jpg?raw=true', title: 'Sun Moon Lake 7' },
            { src: 'vs18.jpg?raw=true', srct: 'vs18.jpg?raw=true', title: 'Sun Moon Lake 8' },
            { src: 'vs19.jpg?raw=true', srct: 'vs19.jpg?raw=true', title: 'Sun Moon Lake 9' },
            { src: 'vs20.jpg?raw=true', srct: 'vs20.jpg?raw=true', title: 'Sun Moon Lake 10' },
            { src: 'vs21.jpg?raw=true', srct: 'vs21.jpg?raw=true', title: 'Sun Moon Lake 11' },
            { src: 'vs22.jpg?raw=true', srct: 'vs22.jpg?raw=true', title: 'Sun Moon Lake 12' },
            { src: 'vs23.jpg?raw=true', srct: 'vs23.jpg?raw=true', title: 'Sun Moon Lake 13' },
            { src: 'vs24.jpg?raw=true', srct: 'vs24.jpg?raw=true', title: 'Sun Moon Lake 14' },
            { src: 'vs25.jpg?raw=true', srct: 'vs25.jpg?raw=true', title: 'Sun Moon Lake 15' },
            { src: 'vs26.jpg?raw=true', srct: 'vs26.jpg?raw=true', title: 'Sun Moon Lake 16' },
            { src: 'vs27.jpg?raw=true', srct: 'vs27.jpg?raw=true', title: 'Sun Moon Lake 17' },
            { src: 'vs28.jpg?raw=true', srct: 'vs28.jpg?raw=true', title: 'Sun Moon Lake 18' },
            { src: 'vs29.jpg?raw=true', srct: 'vs29.jpg?raw=true', title: 'Sun Moon Lake 19' },
            { src: 'vs30.jpg?raw=true', srct: 'vs30.jpg?raw=true', title: 'Sun Moon Lake 20' },
            { src: 'vs31.jpg?raw=true', srct: 'vs31.jpg?raw=true', title: 'Sun Moon Lake 21' },
            { src: 'vs32.jpg?raw=true', srct: 'vs32.jpg?raw=true', title: 'Sun Moon Lake 22' },
            { src: 'vs33.jpg?raw=true', srct: 'vs33.jpg?raw=true', title: 'Sun Moon Lake 23' },
            { src: 'vs34.jpg?raw=true', srct: 'vs34.jpg?raw=true', title: 'Sun Moon Lake 24' },
            { src: 'vs35.jpg?raw=true', srct: 'vs35.jpg?raw=true', title: 'Sun Moon Lake 25' },
            { src: 'vs36.jpg?raw=true', srct: 'vs36.jpg?raw=true', title: 'Sun Moon Lake 26' }
          ]
      });
    
  });