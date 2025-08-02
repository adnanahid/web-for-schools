import CommitteeMembers from "@/components/HomePage/CommitteeMembers";
import CurriculumInfo from "@/components/HomePage/CurriculumInfo";
import Footer from "@/components/HomePage/Footer";
import HeadmasterWelcome from "@/components/HomePage/HeadmasterWelcome";
import HeroSlider from "@/components/HomePage/HeroSlider";
import Navigation from "@/components/HomePage/Navigation";
import NoticeBoard from "@/components/HomePage/NoticeBoard";
import RecentResults from "@/components/HomePage/RecentResults";

export default function HomePage() {
  return (
    <div className="">
      
        <HeroSlider />
        <RecentResults />
        <NoticeBoard />
        <HeadmasterWelcome />
        <CommitteeMembers />
        <CurriculumInfo />
    </div>
  );
}
