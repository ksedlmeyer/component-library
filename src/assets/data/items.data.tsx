export const viewItems = [
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    titleLeadingIcon: 'BeakerIcon',
    descriptionText: '',
    progress: 12,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    contextValues: [
      {
        label: 'Due 9/1',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 12,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    buttonIcons: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    }
  },
  {
    itemID: '867-5309-0427',
    overlineText: 'COURSE',
    titleText: 'Understanding the Brain - :) !!',
    descriptionText:
      'Learn how the nervous system produces behavior, how we use our brain every day, and how neuroscience can explain the common problems afflicting people today. We will study functional human neuroanatomy and neuronal communication, and then use this information to understand how we perceive the outside world, move our bodies voluntarily, stay alive, and play well with others.',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 9/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '13 hours',
        leadingIcon:
          '<svg xmlnshttp://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 10,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-38.svg',
      imageWidth: 8,
      imageHeight: '1/6',
      imageSize: 'contain',
      textureBgPosition: 'bottom',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      bgPalette: 'warning',
      textureMixBlend: 'luminosity',
      textureOpacity: 100
    }
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText:
      'Over 500,000 people in the United States and over 8 million people worldwide are dying every year from cancer. As people live longer, the incidence of cancer is rising worldwide and the disease is expected to strike over 20 million people annually by 2030. This open course is designed for people who would like to develop an understanding of cancer and how it is prevented, diagnosed, and treated.\nThe course introduces the molecular biology of cancer (oncogenes and tumor suppressor genes) as well as the biologic hallmarks of cancer. The course also describes the risk factors for the major cancers worldwide, including lung cancer, breast cancer, colon cancer, prostate cancer, liver cancer, and stomach cancer. We explain how cancer is staged, the major ways cancer is found by imaging, and how the major cancers are treated.\n',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 09/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '2 hours',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: null,
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100
    }
  },
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    descriptionText:
      'The FDA has granted approval to the combination of pembrolizumab (Keytruda) and lenvatinib (Lenvima) for the first-line treatment of adult patients with advanced renal cell carcinoma (RCC).',
    progress: 12,
    isDisabled: false,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 9/1',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 12,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    buttonIcons: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    }
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText:
      'Over 500,000 people in the United States and over 8 million people worldwide are dying every year from cancer. As people live longer, the incidence of cancer is rising worldwide and the disease is expected to strike over 20 million people annually by 2030. This open course is designed for people who would like to develop an understanding of cancer and how it is prevented, diagnosed, and treated.\nThe course introduces the molecular biology of cancer (oncogenes and tumor suppressor genes) as well as the biologic hallmarks of cancer. The course also describes the risk factors for the major cancers worldwide, including lung cancer, breast cancer, colon cancer, prostate cancer, liver cancer, and stomach cancer. We explain how cancer is staged, the major ways cancer is found by imaging, and how the major cancers are treated.\n',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    contextValues: [
      {
        label: 'Due 09/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '2 hours',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: null,
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    }
  },
  {
    itemID: '867-5309-0427',
    overlineText: '',
    titleText: 'try new things',
    descriptionText:
      'Learn how the nervous system produces behavior, how we use our brain every day, and how neuroscience can explain the common problems afflicting people today. We will study functional human neuroanatomy and neuronal communication, and then use this information to understand how we perceive the outside world, move our bodies voluntarily, stay alive, and play well with others.',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    thumbnailProps: {
      bgPalette: 'transparent',
      textureBgPosition: 'center',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      bgOpacity: 0,
      textureMixBlend: 'normal',
      textureOpacity: 0,
      imageWidth: 'auto',
      imageHeight: '5/6',
      imageSize: 'contain'
    },
    bgImage: 'foreground/icons-health/icon-health-51.svg',
    bgSize: 'cover',
    bgRepeat: 'no-repeat',
    bgPosition: 'center'
  }
];

export const viewItemsCallout = [
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    titleLeadingIcon: 'BeakerIcon',
    descriptionText: '',
    progress: 12,
    isDisabled: true,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageWidth: 'full',
      imageRepeat: 'no-repeat',
      bgPalette: 'transparent',
      imagePosition: 'center'
    }
  },
  {
    itemID: '867-5309-0427',
    overlineText: 'COURSE',
    titleText: 'Understanding the Brain - :) !!',
    descriptionText: '',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-38.svg',
      imageWidth: 'full',
      imageSize: 'cover',
      imagePosition: 'bottom'
    }
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText: '',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageWidth: 'full',
      imageRepeat: 'no-repeat',
      imagePosition: 'center'
    }
  },
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    descriptionText: '',
    progress: 12,
    isDisabled: true,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageWidth: 'full',
      imageRepeat: 'no-repeat',
      imagePosition: 'center'
    }
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText: '',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageWidth: 'full',
      imageRepeat: 'no-repeat',
      imagePosition: 'center'
    }
  },
  {
    itemID: '867-5309-0427',
    overlineText: '',
    titleText: 'try new things',
    descriptionText: '',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    thumbnailProps: {
      bgPalette: 'yellow',
      bgPaletteStop: 50,
      textureImageURL: 'foreground/icons-health/icon-health-51.svg',
      textureBgPosition: 'center',
      textureRepeat: 'no-repeat',
      textureSize: 'cover',
      bgOpacity: 0,
      textureMixBlend: 'overlay',
      textureOpacity: 0,
      imageWidth: 'auto',
      imageHeight: '5/6',
      imageSize: 'contain'
    }
  }
];

export const viewItemsAggregate = [
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    titleLeadingIcon: 'BeakerIcon',
    descriptionText: '',
    progress: 12,
    isDisabled: false,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    contextValues: [
      {
        label: 'Due 9/1',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 12,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    buttonIcons: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    },
    listAggregateState: 'complete',
    listAggregateLocation: 'top'
  },
  {
    itemID: '867-5309-0427',
    overlineText: 'COURSE',
    titleText: 'Understanding the Brain - :) !!',
    descriptionText:
      'Learn how the nervous system produces behavior, how we use our brain every day, and how neuroscience can explain the common problems afflicting people today. We will study functional human neuroanatomy and neuronal communication, and then use this information to understand how we perceive the outside world, move our bodies voluntarily, stay alive, and play well with others.',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 9/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '13 hours',
        leadingIcon:
          '<svg xmlnshttp://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 10,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-38.svg',
      imageWidth: 8,
      imageHeight: '1/6',
      imageSize: 'contain',
      textureBgPosition: 'bottom',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      bgPalette: 'warning',
      textureMixBlend: 'luminosity',
      textureOpacity: 100
    },
    listAggregateState: 'unlocked',
    listAggregateLocation: 'middle'
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText:
      'Over 500,000 people in the United States and over 8 million people worldwide are dying every year from cancer. As people live longer, the incidence of cancer is rising worldwide and the disease is expected to strike over 20 million people annually by 2030. This open course is designed for people who would like to develop an understanding of cancer and how it is prevented, diagnosed, and treated.\nThe course introduces the molecular biology of cancer (oncogenes and tumor suppressor genes) as well as the biologic hallmarks of cancer. The course also describes the risk factors for the major cancers worldwide, including lung cancer, breast cancer, colon cancer, prostate cancer, liver cancer, and stomach cancer. We explain how cancer is staged, the major ways cancer is found by imaging, and how the major cancers are treated.\n',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 09/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '2 hours',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: null,
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100
    },
    listAggregateState: 'locked',
    listAggregateLocation: 'middle'
  },
  {
    itemID: '867-5309-0154',
    overlineText: 'LEARNING PATH',
    titleText: 'Oncology - Renal Cell Carcinoma',
    descriptionText:
      'The FDA has granted approval to the combination of pembrolizumab (Keytruda) and lenvatinib (Lenvima) for the first-line treatment of adult patients with advanced renal cell carcinoma (RCC).',
    progress: 12,
    isDisabled: true,
    itemType: 'collectionSeries',
    action: {
      method: 'openDetail'
    },
    contextValues: [
      {
        label: 'Due 9/1',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        progress: 12,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning'
      }
    ],
    buttonIcons: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-01.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    },
    listAggregateState: 'locked',
    listAggregateLocation: 'middle'
  },
  {
    itemID: '867-5309-0591',
    overlineText: 'COURSE',
    titleText: 'Introduction to the Biology of Cancer',
    descriptionText:
      'Over 500,000 people in the United States and over 8 million people worldwide are dying every year from cancer. As people live longer, the incidence of cancer is rising worldwide and the disease is expected to strike over 20 million people annually by 2030. This open course is designed for people who would like to develop an understanding of cancer and how it is prevented, diagnosed, and treated.\nThe course introduces the molecular biology of cancer (oncogenes and tumor suppressor genes) as well as the biologic hallmarks of cancer. The course also describes the risk factors for the major cancers worldwide, including lung cancer, breast cancer, colon cancer, prostate cancer, liver cancer, and stomach cancer. We explain how cancer is staged, the major ways cancer is found by imaging, and how the major cancers are treated.\n',
    notes: 'https://www.coursera.org/learn/cancer',
    progress: 0,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 240,
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    contextValues: [
      {
        label: 'Due 09/03',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: '2 hours',
        leadingIcon:
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>'
      },
      {
        label: null,
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'success'
      }
    ],
    thumbnailProps: {
      imageURL: 'foreground/icons-health/icon-health-51.svg',
      imageHeight: '5/6',
      imageSize: 'contain',
      imagePosition: 'center',
      textureImageURL: 'background/texture-radial-burst-alpha.png',
      textureBgPosition: 'auto',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      textureMixBlend: 'luminosity',
      textureOpacity: 100,
      bgPalette: 'transparent'
    },
    listAggregateState: 'locked',
    listAggregateLocation: 'middle'
  },
  {
    itemID: '867-5309-0427',
    overlineText: '',
    titleText: 'try new things',
    descriptionText:
      'Learn how the nervous system produces behavior, how we use our brain every day, and how neuroscience can explain the common problems afflicting people today. We will study functional human neuroanatomy and neuronal communication, and then use this information to understand how we perceive the outside world, move our bodies voluntarily, stay alive, and play well with others.',
    notes: 'https://www.coursera.org/learn/neurobiology#syllabus',
    progress: 10,
    isDisabled: false,
    itemType: 'collectionSeries',
    duration: 780,
    action: {
      method: 'openDetail'
    },
    hasAttachment: true,
    thumbnailProps: {
      bgPalette: 'transparent',
      textureBgPosition: 'center',
      textureRepeat: 'repeat',
      textureSize: 'cover',
      bgOpacity: 0,
      textureMixBlend: 'normal',
      textureOpacity: 0,
      imageWidth: 'auto',
      imageHeight: '5/6',
      imageSize: 'contain'
    },
    bgImage: 'foreground/icons-health/icon-health-51.svg',
    bgSize: 'cover',
    bgRepeat: 'no-repeat',
    bgPosition: 'center',
    listAggregateState: 'locked',
    listAggregateLocation: 'bottom'
  }
];

export const assignmentItems = [
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'NEW',
        bgPalette: 'success'
      },
      {
        label: 'NOT STARTED',
        bgPalette: 'neutral'
      }
    ],
    contextValues: [
      {
        label: 'Due 10/1',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'NOT STARTED',
        bgPalette: 'neutral'
      }
    ],
    contextValues: [
      {
        label: 'Due 9/15',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'COMPLETED',
        bgPalette: 'primary'
      }
    ],
    contextValues: [
      {
        label: 'Due 9/13',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 100,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'secondary'
      },
      {
        label: 'DUE TODAY',
        bgPalette: 'info'
      }
    ],
    contextValues: [
      {
        label: 'Due 9/9',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 50,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'secondary'
      },
      {
        label: 'OVERDUE',
        bgPalette: 'warning',
        indicatorStatus: true,
        indicatorStatusPing: true
      }
    ],
    contextValues: [
      {
        label: 'Due 9/1',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 90,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ]
  }
];

export const listItems = [
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'NEW',
        bgPalette: 'success'
      },
      {
        label: 'NOT STARTED',
        bgPalette: 'neutral'
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    contextValues: [
      {
        label: '10/1',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'NEW',
        bgPalette: 'success'
      },
      {
        label: 'NOT STARTED',
        bgPalette: 'neutral'
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    contextValues: [
      {
        label: '9/15',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 0,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'COMPLETED',
        bgPalette: 'primary'
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    contextValues: [
      {
        label: '9/13',
        leadingIcon: 'CalendarDaysIcon'
      },
      {
        progress: 100,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [
      {
        label: 'IN PROGRESS',
        bgPalette: 'secondary'
      }
    ],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    contextValues: [
      {
        progress: 50,
        contextValueProps: {
          showProgress: true
        },
        visualProgressRadialIcon: true,
        visualProgressRadial: true
      }
    ]
  },
  {
    titleText: 'Title',
    overlineText: 'TYPE',
    badges: [],
    buttonIcons: [
      {
        icon: 'BookmarkIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      },
      {
        icon: 'HeartIcon',
        selected: false,
        props: {
          iconSize: '2xl',
          iconOnly: true
        }
      }
    ],
    contextValues: []
  }
];

export const cardCalloutItems = [
  {
    titleText: 'Title',
    thumbnailProps: {
      bgPalette: 'transparent',
      bgPaletteStop: 800,
      textureBgPosition: 'center',
      textureImageURL:
        '/ascnd-library/background/texture-radial-burst-alpha.png',
      textureMixBlend: 'overlay',
      textureRepeat: 'no-repeat',
      textureSize: 'cover'
    }
  },
  {
    titleText: 'Title',
    thumbnailProps: {
      bgPalette: 'transparent',
      bgPaletteStop: 800,
      textureBgPosition: 'center',
      textureImageURL: '/ascnd-library/background/texture-gold-confetti-01.png',
      textureMixBlend: 'overlay',
      textureRepeat: 'repeat',
      textureSize: 'auto'
    }
  },
  {
    titleText: 'Title',
    thumbnailProps: {
      bgPalette: 'transparent',
      bgPaletteStop: 800,
      textureBgPosition: 'center',
      textureImageURL: '/ascnd-library/background/hexa-pattern-01.png',
      textureMixBlend: 'overlay',
      textureRepeat: 'no-repeat',
      textureSize: 'cover'
    }
  },
  {
    titleText: 'Title',
    thumbnailProps: {
      bgPalette: 'transparent',
      bgPaletteStop: 800,
      textureBgPosition: 'center',
      textureImageURL:
        '/ascnd-library/background/texture-rays-from-above-orange.png',
      textureMixBlend: 'luminosity',
      textureRepeat: 'no-repeat',
      textureSize: 'cover'
    }
  },
  {
    titleText: 'Title',
    thumbnailProps: {
      bgPalette: 'transparent',
      bgPaletteStop: 800,
      textureBgPosition: 'center',
      textureImageURL: '/ascnd-library/background/texture-cubes.png',
      textureMixBlend: 'overlay',
      textureRepeat: 'repeat',
      textureSize: 'auto'
    }
  }
];
