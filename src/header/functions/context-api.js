import { signal } from '@preact/signals';
import {createContext} from '@wordpress/element';

// 
export const ContextAttributes = createContext();


export const state_header_justify_content = signal('-md-justify-start');
export const state_header_align = signal('md:items-start');