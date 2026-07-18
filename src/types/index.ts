export interface ImageMeta {image:string;imageLabel:string;recommendedSize:string}
export interface Destination extends ImageMeta {slug:string;name:string;region:string;description:string;featured?:boolean}
export interface Package extends ImageMeta {slug:string;title:string;destination:string;kind:'Domestic'|'International';duration:string;places:string[];categories:string[];summary:string;inclusions:string[]}
export interface Testimonial {name:string;review:string;destination?:string;image?:string}
export interface BlogPost extends ImageMeta {slug:string;title:string;category:string;excerpt:string;date?:string;content:string[]}
