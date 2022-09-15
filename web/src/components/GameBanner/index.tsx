interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
        <strong className="text text-white font-bold block">{title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">{adsCount > 1 ? `${adsCount} anúncios` : `${adsCount} anúncio`}</span>
      </div>
    </a>
  );
}
