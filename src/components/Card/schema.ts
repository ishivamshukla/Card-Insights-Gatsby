export interface Card {
    heading?: string;
    date?: string;
    link?: string;
    excerpt?: string;
    author?: string;
    image?: string;
    
}

export const seoSchema : {} ={
    '@context'      : "https://schema.org",
    '@type'         : "CreativeWork",
    'author'        : "John Smith",
    'datePublished' : "2009-04-12",
    'description'   : "This is card description",
    'name'          : "Insights card"


  }