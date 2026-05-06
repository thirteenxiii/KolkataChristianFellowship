import HeroSlider from '../components/HeroSlider';
import ServiceGrid from '../components/ServiceGrid';
import PrayerWall from '../components/PrayerWall';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ServiceGrid />
      <PrayerWall />
    </main>
  );
}
