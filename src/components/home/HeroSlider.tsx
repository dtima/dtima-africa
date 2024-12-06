import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/lovable-uploads/b3eeca37-e80c-47fd-bf07-4bd7720a6f1f.png",
    title: "Building Digital Capacity",
    description: "Empowering municipal leaders and staff through comprehensive digital training"
  },
  {
    image: "/lovable-uploads/28341fb5-adcf-4dc1-91d1-3b5b8f137816.png",
    title: "Local Government Partnership",
    description: "Collaborating with municipalities like Kette to drive digital transformation"
  },
  {
    image: "/lovable-uploads/3d0416ee-0ee4-445a-b693-98000aa9b7b3.png",
    title: "Knowledge Sharing",
    description: "Facilitating workshops and presentations to share digital best practices"
  }
];

const SlideContent = ({ slide, isActive }: { slide: typeof slides[0], isActive: boolean }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        isActive ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        className={cn(
          "absolute inset-0 bg-gray-200",
          imageLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <div className="text-center space-y-4 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-up">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl animate-fade-up">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const NavigationDots = ({ currentSlide, totalSlides, onDotClick }: { 
  currentSlide: number, 
  totalSlides: number, 
  onDotClick: (index: number) => void 
}) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        className={cn(
          "w-2 h-2 rounded-full transition-all",
          currentSlide === index ? "bg-white w-4" : "bg-white/50"
        )}
        onClick={() => onDotClick(index)}
      />
    ))}
  </div>
);

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <SlideContent key={index} slide={slide} isActive={currentSlide === index} />
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      
      <NavigationDots 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onDotClick={setCurrentSlide}
      />
    </div>
  );
};

export default HeroSlider;