import { Container } from "@/components/layout";
import { HeroSection } from "@/components/home";

export default function Home() {
  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <HeroSection />
      </Container>
    </main>
  );
}
