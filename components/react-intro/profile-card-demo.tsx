type ProfileCardProps = {
  job: string;
  name: string;
};

function ProfileCard({ job, name }: ProfileCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">component</p>
      <h3 className="mt-3 text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{job}</p>
    </article>
  );
}

export function ProfileCardDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ProfileCard job="宇宙を学び直す父" name="父" />
      <ProfileCard job="なんで？を投げる人" name="娘" />
    </div>
  );
}
