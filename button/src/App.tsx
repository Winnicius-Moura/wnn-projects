import { GlowButton } from "./components/GlowButton";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gray-100">
      <GlowButton onClick={() => console.log("Magic button clicked!")}>
        Make the Magic
      </GlowButton>
    </div>
  );
}