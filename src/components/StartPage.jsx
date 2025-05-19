export default function StartPage({ onStart }) {
  return (
    <>
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen animated-bg">
      <h1 className="text-center justify-center  text-4xl">Breathing Exercise</h1>
    <div>
<p>
  <span className="font-bold">Breathe In :— </span> Fill your lungs with calm, fresh air.
</p>
<p>
   <span className="font-bold">Breathe Out :— </span>
Release tension and stress with each breath.
</p>

    </div>

      <button
        onClick={onStart}
        className="px-6 py-3 text-xl font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
        >
        Start
      </button>
    </div>
        </>
  );
}
