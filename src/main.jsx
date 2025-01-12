import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import { motion } from 'framer-motion';

const AnimatedCard = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="card"
  >
    {children}
  </motion.div>
);

<AnimatedCard>
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
                  src={video.imageURL}
                  alt={video.title}
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                <span className="font-medium">{video.title}</span>
                <Button variant="ghost" size="icon">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</AnimatedCard>


