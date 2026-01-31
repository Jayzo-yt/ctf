import ChapterIntro from "@/components/ui/8bit/blocks/chapter-intro"
import { Button } from "@/components/ui/8bit/button"
import LoadingScreen from "@/components/ui/8bit/blocks/loading-screen";
export default function ChallengeStart() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ChapterIntro
        title="LEVEL 1: FIERY FRAGMENT"
        subtitle="Find the fragment to unlock the gate."
        backgroundSrc="/pass.png"
        height="md"
        align="center"
        darken={0.5}
      />
      <Button variant="outline" className="justify-center bottom-50 absolute">START</Button>
    </div>
  )
}
