import React, { useEffect, useState } from 'react';
import { Edit2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const MergedLandingPage = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      const response = {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [{ "performanceId": "perf1", "eventTitle": "Live at Mumbai Arena", "description": "An acoustic performance for music lovers.", "ticketPrice": 1499, "durationMinutes": 120, "platform": "Stage", "performanceType": "Team" }],
        "songSales": [{ "songId": "song1", "title": "Melody of Dreams", "priceType": "Variable", "description": "An enchanting melody inspired by the beauty of nature.", "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584" }],
        "musicVideos": [{ "videoId": "vid1", "title": "Melodic Memories", "description": "A visual treat of my recent performance.", "platform": "YouTube", "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8", "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg" }],
        "merchandise": [{ "merchId": "merc1", "merchName": "Signed TShirt + Signed Cup + Signed Vinyl", "merchDescription": "Limited edition signed merchandise.", "price": 399, "merchType": "Exclusive", "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid" }],
        "fanMessages": { "title": "Message Vishal Mishra", "description": "Send me your thoughts or questions.", "promisedReplyTime": "3" },
        "supportPage": { "title": "Show Your Love" },
        "musicPlatformLinks": [
          { "musicPlatform": "JioSaavan", "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_", "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo" },
          { "musicPlatform": "Spotify", "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507", "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" }
        ]
      };

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };

    fetchLandingPageData();
  }, [username]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 px-4"
      style={{
        background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
      }}
    >
      
      <nav id="navbar" className="fixed top-0 w-full z-50">
        <Card className="rounded-none shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger value="performances" onClick={() => scrollToSection('performances')}>
                    Performances
                  </TabsTrigger>
                  <TabsTrigger value="videos" onClick={() => scrollToSection('videos')}>
                    Videos
                  </TabsTrigger>
                  <TabsTrigger value="songsSale" onClick={() => scrollToSection('songsSale')}>
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger value="merchandise" onClick={() => scrollToSection('merchandise')}>
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger value="fanMessages" onClick={() => scrollToSection('messages')}>
                    Messages
                  </TabsTrigger>
                  <TabsTrigger value="support" onClick={() => scrollToSection('support')}>
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </nav>

      <div className="w-full max-w-3xl space-y-8">
        
        <div className="flex flex-col items-center">
          <Avatar className="w-48 h-48 mb-4">
            <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>

          <h2 className="text-3xl font-bold">{artistPage.artistName}</h2>
          <Badge variant="secondary" className="mt-2">
            {artistPage.stageTitles}
          </Badge>

          {/* Social Links Section */}
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
            {musicPlatformLinks.map((link) => (
              <button
                key={link.musicPlatform + link.url}
                className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition"
                onClick={() => link.url && window.open(link.url, '_blank')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-2">
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt={`${link.musicPlatform} icon`}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  )}
                </div>
                <span className="text-sm font-medium">{link.musicPlatform}</span>
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>{artistPage.artistBio}</CardDescription>
          </CardHeader>
        </Card>

        {/* Music Videos Section */}
        <div id="videos" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Music Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {musicVideos.map((video) => (
                  <Card
                    key={video.videoId}
                    className="overflow-hidden cursor-pointer w-full"
                    onClick={() => window.open(video.redirectURL, '_blank')}
                  >
                    <div className="relative">
                      <div className="w-full" style={{ paddingTop: '66.66%' }}>
                        <img
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          src={video.imageURL}
                          alt={video.title}
                        />
                      </div>
                    </div>
                    <CardTitle className="mt-2">{video.title}</CardTitle>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Merchandise Section */}
        <div id="merchandise" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Merchandise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {merchandise.map((item) => (
                  <Card
                    key={item.merchId}
                    className="overflow-hidden cursor-pointer w-full"
                    onClick={() => window.open(item.merchURL, '_blank')}
                  >
                    <img
                      src={item.imageURL}
                      alt={item.merchName}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-4">
                      <CardTitle className="text-lg">{item.merchName}</CardTitle>
                      <CardDescription>{item.merchDescription}</CardDescription>
                      <div className="mt-2 text-sm font-semibold">₹{item.price}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fan Messages Section */}
        <div id="messages" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>{fanMessages.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm">{fanMessages.description}</div>
              <div className="text-center font-bold mt-2">Expected Reply in: {fanMessages.promisedReplyTime} hours</div>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <div id="support" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>{supportPage.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">Support details coming soon...</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MergedLandingPage;
