import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "./card"; // Ensure this path is correct
import { Instagram, Twitter, Youtube, Search } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const allYoutubers = [
    {
      name: "CarryMinati (Ajey Nagar)",
      youtubeId: "CarryMinati",
      instaId: "carryminati",
      twitterId: "CarryMinati",
      about: "One of India's top creators, redefining humor with unmatched style and audacity.",
      avatar: "CM"
    },
    {
      name: "Ashish Chanchlani",
      youtubeId: "ashchanchlani",
      instaId: "ashchanchlani",
      twitterId: "ashchanchlani",
      about: "Famous for his hilarious sketches and relatable content.",
      avatar: "AC"
    },
    {
      name: "Bhuvan Bam",
      youtubeId: "bbkivines",
      instaId: "bhuvan.bam22",
      twitterId: "Bhuvan_Bam",
      about: "Popular comedian and musician known for his unique style.",
      avatar: "BB"
    },
    {
      name: "Nisha Madhulika",
      youtubeId: "nishamadhulika",
      instaId: "nishamadhulika",
      twitterId: "NishaMadhulika",
      about: "Known for her delicious vegetarian recipes.",
      avatar: "NM"
    },
    {
      name: "Technical Guruji",
      youtubeId: "TechnicalGuruji",
      instaId: "technicalguruji",
      twitterId: "TechnicalGuruji",
      about: "Providing easy-to-understand technology videos.",
      avatar: "TG"
    },
    {
      name: "Prajakta Koli (MostlySane)",
      youtubeId: "MostlySane",
      instaId: "mostlysane",
      twitterId: "iamMostlySane",
      about: "Known for her relatable comedy sketches and engaging vlogs, bringing humor to everyday situations.",
      avatar: "PK"
    },
    {
      name: "Amit Bhadana",
      youtubeId: "AmitBhadana",
      instaId: "amit_bhadana",
      twitterId: "iamAmitBhadana",
      about: "One of India's most subscribed YouTubers, known for his comedy videos.",
      avatar: "AB"
    },
    {
      name: "Gaurav Chaudhary (Technical Guruji)",
      youtubeId: "TechnicalGuruji",
      instaId: "technicalguruji",
      twitterId: "TechnicalGuruji",
      about: "Popular tech YouTuber known for his gadget reviews and tech news updates.",
      avatar: "GC"
    },
    {
      name: "Vidya Iyer (Vidya Vox)",
      youtubeId: "VidyaVox",
      instaId: "vidyavox",
      twitterId: "VidyaVox",
      about: "Singer and YouTuber known for her mashups of Western pop and Indian classical music.",
      avatar: "VI"
    },
    {
      name: "Ranveer Allahbadia (BeerBiceps)",
      youtubeId: "BeerBiceps",
      instaId: "beerbiceps",
      twitterId: "BeerBicepsGuy",
      about: "Fitness enthusiast and motivational speaker with content on lifestyle and self-improvement.",
      avatar: "RA"
    },
    {
      name: "Sejal Kumar",
      youtubeId: "SejalKumar",
      instaId: "sejalkumar1195",
      twitterId: "Sejalkumar1195",
      about: "Fashion and lifestyle YouTuber known for her style tips and travel vlogs.",
      avatar: "SK"
    },
    {
      name: "Kabita Singh (Kabita's Kitchen)",
      youtubeId: "KabitasKitchen",
      instaId: "kabitaskitchen",
      twitterId: "kabitaskitchen",
      about: "Popular food YouTuber known for her simple and delicious Indian recipes.",
      avatar: "KS"
    }
  ];

export default function SocialTubesComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedYoutubers, setDisplayedYoutubers] = useState(allYoutubers.slice(0, 6));
  const [ref, inView] = useInView();

  const loadMore = useCallback(() => {
    const nextBatch = allYoutubers.slice(displayedYoutubers.length, displayedYoutubers.length + 3);
    setDisplayedYoutubers(prev => [...prev, ...nextBatch]);
  }, [displayedYoutubers]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  const filteredYoutubers = displayedYoutubers.filter(youtuber =>
    youtuber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    youtuber.youtubeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-600 font-sans">
      <header className="py-12 mb-16 bg-white shadow-lg rounded-b-3xl relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            opacity: 0.1
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-extrabold mb-2" style={{ color: 'rgb(0, 0, 128)', fontFamily: "'Pacifico', cursive" }}>
  SocialTubes
</h1>

          <p className="text-xl text-gray-600 mb-4">
            Discover and connect with your favorite influencers
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search YouTubers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-20 z-0"></div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredYoutubers.map((youtuber, index) => (
            <Card key={index} className="flex flex-col border-none shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-white overflow-hidden group">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold text-2xl shadow-inner">
                  {youtuber.avatar}
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold text-xl truncate">{youtuber.name}</h2>
                  <p className="text-sm text-purple-100 line-clamp-2">{youtuber.about}</p>
                </div>
              </div>
              <CardContent className="flex-grow p-4">
                <ul className="space-y-3 mt-2">
                  <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <a href={`https://www.youtube.com/${youtuber.youtubeId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full hover:text-red-500 transition-colors duration-300">
                      <Youtube className="w-6 h-6" />
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <a href={`https://www.instagram.com/${youtuber.instaId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full hover:text-purple-500 transition-colors duration-300">
                      <Instagram className="w-6 h-6" />
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <a href={`https://www.twitter.com/${youtuber.twitterId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full hover:text-blue-500 transition-colors duration-300">
                      <Twitter className="w-6 h-6" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div ref={ref} className="mt-8 text-center">
            
      
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Pacifico', cursive" }}>SocialTubes</h2>
              <p className="text-gray-400">Connect with top influencers</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 SocialTubes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
