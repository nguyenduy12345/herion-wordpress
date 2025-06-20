import band from '../assets/images/templateArtistPage/band.jpg'
import dark from '../assets/images/templateArtistPage/dark.jpg'
import defaultPage from '../assets/images/templateArtistPage/default.jpg'
import minimal from '../assets/images/templateArtistPage/minimal.jpg'
import discography from '../assets/images/templateArtistPage/discography.jpg'
import standard from '../assets/images/templateArtistPage/standard.jpg'

import carousel from '../assets/images/templateArtistListing/carousel.jpg'
import gallery from '../assets/images/templateArtistListing/gallery.jpg'
import label from '../assets/images/templateArtistListing/label.jpg'
import masonry from '../assets/images/templateArtistListing/masonry.jpg'
import metro from '../assets/images/templateArtistListing/metro.jpg'
import standardListing from '../assets/images/templateArtistListing/standard-listing.jpg'

const artists = [
  { id: 1, img: defaultPage, type: 'artist-single-pages', name: 'Default' },
  { id: 2, img: minimal, type: 'artist-single-pages', name: 'Minimal' },
  { id: 3, img: dark, type: 'artist-single-pages', name:'Dark' },
  { id: 4, img: standard, type: 'artist-single-pages', name: 'Standard Custom Layout' },
  { id: 5, img: discography, type: 'artist-single-pages', name: 'Discography Oriented' },
  { id: 6, img: band, type: 'artist-single-pages', name: 'Band Oriented' },
  { id: 7, img: standardListing, type: 'artist-listing', name: 'Standard' },
  { id: 8, img: gallery, type: 'artist-listing', name: 'Gallery' },
  { id: 9, img: label, type: 'artist-listing', name: 'Label' },
  { id: 10, img: masonry, type: 'artist-listing', name: 'Masonry' },
  { id: 11, img: metro, type: 'artist-listing', name: 'Metro' },
  { id: 12, img: carousel, type: 'artist-listing', name: 'Carousel' },
]
export default artists