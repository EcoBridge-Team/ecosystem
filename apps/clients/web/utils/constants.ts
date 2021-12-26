import { Video } from '@ecosystem/components/ui';

interface breakpoint {
  max: number;
  min: number;
}

interface responsive_config {
  breakpoint: breakpoint;
  items: number;
}

interface CarouselResponsive {
  xlargeDesktop: responsive_config;
  largeDesktop: responsive_config;
  desktop: responsive_config;
  tablet: responsive_config;
  mobile: responsive_config;
}

const items_card_responsive: CarouselResponsive = {
  xlargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 6,
  },
  largeDesktop: {
    breakpoint: { max: 2200, min: 1401 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 899, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 2,
  },
};

const events_card_responsive: CarouselResponsive = {
  xlargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 4,
  },
  largeDesktop: {
    breakpoint: { max: 2200, min: 1401 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 899, min: 500 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};

const videos_card_responsive: CarouselResponsive = {
  xlargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 1,
  },
  largeDesktop: {
    breakpoint: { max: 4000, min: 1301 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1300, min: 900 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 899, min: 500 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};

const certifications_card_responsive: CarouselResponsive = {
  xlargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 1,
  },
  largeDesktop: {
    breakpoint: { max: 4000, min: 1301 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1300, min: 900 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 899, min: 500 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};

const videos = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    embedUrl: '5d7UXzqnTlg',
    renderItem: Video,
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    embedUrl: '5d7UXzqnTlg',
    renderItem: Video,
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    embedUrl: '5d7UXzqnTlg',
    renderItem: Video,
  },
];

export {
  items_card_responsive,
  events_card_responsive,
  videos,
  videos_card_responsive,
  certifications_card_responsive,
};
