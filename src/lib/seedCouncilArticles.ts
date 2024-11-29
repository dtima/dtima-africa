import { supabase } from '@/integrations/supabase/client';

const councilArticles = [
  {
    title: "Mokolo: Gateway to Economic Prosperity in Far North Cameroon",
    content: `Mokolo, situated in the Far North Region of Cameroon, emerges as a bustling city presenting numerous opportunities for entrepreneurs, the African Diaspora, investors, and development partners. The city's strategic location, rich cultural heritage, and untapped resources make it a promising hub for diverse investment opportunities.

    The economic landscape of Mokolo is ripe with potential across various sectors. From retail to restaurants, agriculture to tourism, the city offers a wide spectrum of investment possibilities. The growing community needs create abundant opportunities for business development and expansion.

    The Mokolo Council actively seeks partnerships for sustainable development, inviting both local and foreign investors to explore opportunities in sectors such as agriculture, tourism, and local business development. These investments will significantly contribute to improving residents' quality of life while fostering sustainable development.`,
    excerpt: "Discover Mokolo's economic potential and investment opportunities in Cameroon's Far North Region, where tradition meets progress.",
    created_at: '2023-11-11T12:00:00Z',
    featured_image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Wum Council: A Legacy of Growth and Innovation Since 1948",
    content: `Established in 1948, Wum Council stands as a testament to sustainable development and cultural preservation, governing 17 thriving villages in the Menchum subdivision. The council's rich history and vibrant culture create a unique foundation for innovation and growth.

    Wum Council's economic landscape is marked by dynamic income-generating projects, including a bustling restaurant, sustainable earth bricks workshop, market sheds, and a thriving council farm. These initiatives showcase the entrepreneurial spirit driving the region's economic vitality.

    The council welcomes partnerships across diverse sectors, focusing on local economic development and youth empowerment. Investment opportunities span infrastructure, agriculture, and tourism initiatives, all contributing to the region's sustainable growth.`,
    excerpt: "Explore Wum Council's journey of innovation and sustainable development, spanning over seven decades of community growth.",
    created_at: '2023-11-12T12:00:00Z',
    featured_image_url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  // ... Additional articles will be added in subsequent messages due to length limitations
];

export const seedCouncilArticles = async () => {
  for (const article of councilArticles) {
    const { error } = await supabase
      .from('articles')
      .insert([{
        ...article,
        status: 'published'
      }]);
    
    if (error) {
      console.error('Error inserting article:', error);
    }
  }
};