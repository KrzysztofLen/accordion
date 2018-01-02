import 'normalize.css/normalize.css';
import './accordion.scss';
import {Accordion} from './accordion.js';

const accordion = new Accordion(
	[...document.querySelectorAll('.accordion__button')]
);