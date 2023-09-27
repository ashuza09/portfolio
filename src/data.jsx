import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import {BiLogoTailwindCss} from 'react-icons/bi'
import Astore from './assets/img/ashuStore.png'
import CocktaiPage from './assets/img/cocktaiPage.png'
import ImageSplash from './assets/img/imageSplash.png'
import Cart from './assets/img/cart.png'
import Gb from './assets/img/gb.png'
import Carusal from './assets/img/carusal.png'
import songs from './assets/img/songs.png'
import m from './assets/img/m.png'
import aswaaq from './assets/img/aswaaq.png'
import mbrsg from './assets/img/mbrsg.png'
import carmel from './assets/img/carmel.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'react projects' },
  { id: nanoid(), href: '#LiveProjects', text: 'LiveProjects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-emerald-500' />,
    text: 'Proficiency in Tailwind css',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-16 w-16 text-emerald-500' />,
    text: 'Proficiency in Figma',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Astore,
    url: 'https://ashu-store.netlify.app/',
    github: 'https://github.com/ashuza09/Ashu-store',
    title: 'ashu store',
    
  },
  {
    id: nanoid(),
    img: CocktaiPage,
    url: 'https://ashutosh-cocktail.netlify.app/',
    github: 'https://github.com/ashuza09/cocktail',
    title: 'cocktail',
    
  },
  {
    id: nanoid(),
    img: ImageSplash,
    url: 'https://ashuimagesplash.netlify.app/',
    github: 'https://github.com/ashuza09/imageSplash',
    title: 'ImageSplash Images',
    
  },
  {
    id: nanoid(),
    img: Cart,
    url: 'https://ashucart.netlify.app/',
    github: 'https://github.com/ashuza09/useReducreInCart',
    title: 'useReducre Cart',
    
  },
  {
    id: nanoid(),
    img: Gb,
    url: 'https://ashutoshgrocerybud.netlify.app/',
    github: 'https://github.com/ashuza09/GroceryBud',
    title: 'Grocery Bud',
    
  },
  {
    id: nanoid(),
    img: Carusal,
    url: 'https://ashutoshreview.netlify.app/',
    github: 'https://github.com/ashuza09/Review',
    title: 'React Carousel',
    
  },
];

export const liveProject = [
  {
    id: nanoid(),
    img: songs,
    url: 'https://www.songs.de/',
    title: 'Songs.de (Angular 8)',
    text:'Done HTML, CSS, JQUERY (Custom), Bootstrap and Angular',
  },
  {
    id: nanoid(),
    img: m,
    url: 'https://montereytechnologies.com/',
    title: 'Monterey Technologies ( WordPress )',
    text:'Done HTML, CSS, JQUERY (Custom), Bootstrap and Word press theming',
  },
  {
    id: nanoid(),
    img: aswaaq,
    url: 'https://aswaaq.ae/',
    title: 'Aswaaq ( Kentico )',
    text:'Done Html, CSS, JQUERY (Custom), Bootstrap and Kentico theming.',
  },
  {
    id: nanoid(),
    img: mbrsg,
    url: 'https://www.mbrsg.ae/home.aspx',
    title: 'mbrsg ( Kentico )',
    text:'Done Html, CSS, JQUERY (Custom), Bootstrap and Kentico theming.',
  },
  {
    id: nanoid(),
    img: carmel,
    url: 'https://carmelmission.org/',
    title: 'Carmel Mission ( WordPress  )',
    text:'Done Html, CSS, JQUERY (Custom), Bootstrap and Word press theming.',
  },
];
