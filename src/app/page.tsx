import { Container } from "@/components/layout";
import {
  BlogPreviewSection,
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
  ToolsGridSection,
} from "@/components/home";

export default function Home() {
  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="flex min-h-[calc(100vh-4rem)] items-center">
          <HeroSection />
        </div>
        <ToolsGridSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BlogPreviewSection />
      </Container>
    </main>
  );
}
