import FAQs from "@/components/FAQSection";
import Hero from "@/components/Hero";
import PilotJourneyForm from "@/components/PilotJourneyForm";
import QuizStart from "@/components/QuizStart";
import ReviewsSection from "@/components/ReviewsSection";
import Testimonials from "@/components/Testimonials";
import TieUpMarquee from "@/components/TieUpMarquee";
import TopMarquee from "@/components/TopMarquee";
import TrainingProgrammes from "@/components/TrainingProgrammes";
import WhoIsThisCourseFor from "@/components/WhoIsThisCourseFor";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero />
  <TopMarquee />
  <div className="md:hidden block">
    <PilotJourneyForm />
  </div>
  <WhyChooseUs />
    <TieUpMarquee />

  <WhoWeAre />
  <TrainingProgrammes />
  <WhoIsThisCourseFor />
  {/* <Testimonials /> */}
  <ReviewsSection />
  <FAQs />
  <QuizStart />
  </>
  );
}
