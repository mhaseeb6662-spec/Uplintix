import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_DATA = {
  '/': {
    title: 'Uplintix | Digital Agency for Creative, Web & Marketing Solutions',
    description: 'Uplintix is a digital agency helping businesses grow through video production, graphic design, social media, performance marketing, website development, software and AI solutions.'
  },
  '/services': {
    title: 'Digital Marketing, Web Development & Creative Services | Uplintix',
    description: 'Digital services built around your business goals. From video production and branding to web development, performance marketing, and AI solutions.'
  },
  '/work': {
    title: 'Our Work | Video, Design, Websites & Digital Marketing | Uplintix',
    description: 'Explore selected projects across creative, marketing, and technology built by Uplintix.'
  },
  '/about': {
    title: 'About Uplintix | Creative, Technology & Digital Growth Agency',
    description: 'Learn about Uplintix: great businesses deserve great digital experiences. Creative production, digital marketing, web development, and AI under one team.'
  },
  '/contact': {
    title: 'Contact Uplintix | Start Your Digital Project',
    description: 'Tell us what you\'re working on. Start your digital project with Uplintix.'
  }
};

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Get metadata for current path or fallback to home
    const meta = SEO_DATA[pathname] || SEO_DATA['/'];
    
    // Update Title
    document.title = meta.title;

    // Update Meta Description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}
