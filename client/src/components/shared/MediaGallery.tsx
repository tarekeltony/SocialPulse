import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mediaAppearances } from "@/data/mediaAppearances";

const MediaGallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaAppearances.map((media, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all group border-none shadow-md">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-play text-white text-xl"></i>
                      </div>
                    </div>
                    <img 
                      src={media.thumbnailUrl} 
                      alt={media.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{media.title}</h4>
                    <p className="text-foreground/70 text-sm mb-2">{media.platform} • {media.date}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-[90vw]">
                <DialogHeader>
                  <DialogTitle>{media.title}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full mt-2">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${media.videoUrl.split('v=')[1]}?autoplay=1`}
                    title={media.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;