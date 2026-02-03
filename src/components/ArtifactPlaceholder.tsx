export default function ArtifactPlaceholder({ title }: { title: string }) {
  return (
    <div className="border-2 border-architectural-ink bg-architectural-white aspect-[4/3] flex items-center justify-center">
      <div className="text-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" fill="#EFEFEC" stroke="#0A0A0A" strokeWidth="2"/>
          <path d="M32 16V48M16 32H48" stroke="#0A0A0A" strokeWidth="2"/>
        </svg>
        <p className="mt-2 text-architectural-graphite text-xs uppercase tracking-[0.05em]">{title}</p>
      </div>
    </div>
  );
}
