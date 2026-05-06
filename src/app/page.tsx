import HeroSection from '../components/sections/HeroSection';
import DnaStudyGrid from '../components/sections/DnaStudyGrid';
import OutreachSlider from '../components/sections/OutreachSlider';
import ServiceGrid from '../components/ServiceGrid';
import PrayerWall from '../components/PrayerWall';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceGrid />
      <DnaStudyGrid />
      <OutreachSlider />
      <PrayerWall />
    </main>
  );
}
