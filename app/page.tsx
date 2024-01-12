import Hero from '@/components/hero';
import AboutUsMain from '@/components/aboutusmain';
import Services from "@/components/services";
import Footer from "@/components/footer";
import Subscription from "@/components/subscription";
import Testimonials from "@/components/testimonials";
import Subscribe from '@/components/subscribe';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsMain />
      <Services />
      <Subscription />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  )
}
