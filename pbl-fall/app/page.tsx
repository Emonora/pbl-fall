import ImageCarousel from "./switcher";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center mx-auto text-xl md:text-2xl lg:text-3xl">Promoting Mental Health</h1>
      <p className="mt-4 text-center">Placeholder</p>
      <ImageCarousel />
    </main>
  );
}
