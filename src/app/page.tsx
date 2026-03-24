import Hero from "./components/Hero";
import Nav from "./components/Nav";
import CoffeeSection from "./components/CoffeeSection";
import RestaurantsSection from "./components/RestaurantsSection";
import BarsSection from "./components/BarsSection";
import FitnessSection from "./components/FitnessSection";
import SpasSection from "./components/SpasSection";
import PracticalSection from "./components/PracticalSection";
import ItinerarySection from "./components/ItinerarySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <CoffeeSection />
      <RestaurantsSection />
      <BarsSection />
      <FitnessSection />
      <SpasSection />
      <PracticalSection />
      <ItinerarySection />
    </>
  );
}
