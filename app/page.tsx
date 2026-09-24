"use client";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Film,
  Home,
  Languages,
  LayoutGrid,
  Lock,
  Maximize,
  Menu,
  Minus,
  Pause,
  Play,
  Plus,
  Radio,
  RotateCcw,
  RotateCw,
  Search,
  Settings,
  Share2,
  Sparkles,
  Star,
  Trophy,
  Tv,
  UserCircle,
  Volume2,
  VolumeX,
  X
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Content = {
  id: number;
  title: string;
  image: string;
  genre: string;
  year: number;
  rating: string;
  languages: string[];
  premium?: boolean;
  progress?: number;
};

type SportMatch = {
  id: number;
  league: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
};

/* =========================================================
   DATA
========================================================= */

const hero = {
  title: "The Last Horizon",
  description:
    "A young explorer discovers a mysterious signal that could change humanity's future.",
  image:
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2200&q=85",
  rating: "8.7",
  year: "2026",
  age: "U/A 16+",
  languages: "Hindi • English • Bengali"
};

const continueWatching: Content[] = [
  {
    id: 1,
    title: "The Last Horizon",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    genre: "Sci-Fi",
    year: 2026,
    rating: "8.7",
    languages: ["Hindi", "English"],
    progress: 72
  },
  {
    id: 2,
    title: "Dark City",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    genre: "Thriller",
    year: 2025,
    rating: "8.1",
    languages: ["Hindi", "English"],
    progress: 41
  },
  {
    id: 3,
    title: "Beyond Earth",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
    genre: "Adventure",
    year: 2026,
    rating: "8.4",
    languages: ["English"],
    progress: 29
  },
  {
    id: 4,
    title: "City Lights",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
    genre: "Drama",
    year: 2025,
    rating: "7.9",
    languages: ["Hindi", "Bengali"],
    progress: 83
  }
];

const trending: Content[] = [
  {
    id: 5,
    title: "Warrior",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80",
    genre: "Action",
    year: 2026,
    rating: "8.5",
    languages: ["Hindi", "Tamil"],
    premium: true
  },
  {
    id: 6,
    title: "The Island",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    genre: "Adventure",
    year: 2026,
    rating: "8.2",
    languages: ["Hindi", "English"]
  },
  {
    id: 7,
    title: "Shadow",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
    genre: "Mystery",
    year: 2025,
    rating: "8.0",
    languages: ["Hindi", "Bengali"],
    premium: true
  },
  {
    id: 8,
    title: "Kingdom",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?auto=format&fit=crop&w=900&q=80",
    genre: "Drama",
    year: 2026,
    rating: "8.8",
    languages: ["Hindi", "English"]
  },
  {
    id: 9,
    title: "Ocean",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    genre: "Nature",
    year: 2026,
    rating: "9.0",
    languages: ["English"]
  }
];

const popular: Content[] = [
  ...trending,
  {
    id: 10,
    title: "Midnight",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    genre: "Mystery",
    year: 2026,
    rating: "8.6",
    languages: ["Hindi", "English"]
  }
];

const sports: SportMatch[] = [
  {
    id: 1,
    league: "Star 7 Cricket",
    team1: "IND",
    team2: "AUS",
    score1: "184/5",
    score2: "176/8"
  },
  {
    id: 2,
    league: "Premier League",
    team1: "MCI",
    team2: "LIV",
    score1: "2",
    score2: "1"
  },
  {
    id: 3,
    league: "Champions Cup",
    team1: "IND",
    team2: "ENG",
    score1: "148/3",
    score2: "—"
  }
];

const top10Images = [
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({
  onSearch
}: {
  onSearch: () => void;
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menu = [
    { name: "Home", icon: Home },
    { name: "TV", icon: Tv },
    { name: "Movies", icon: Film },
    { name: "Sports", icon: Trophy },
    { name: "Categories", icon: LayoutGrid },
    { name: "Spaces", icon: Sparkles }
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[80] border-b border-white/5 bg-[#0A0E17]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1900px] items-center px-4 md:px-7">

          <button
            className="mr-3 rounded-lg p-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="mr-8 whitespace-nowrap text-2xl font-black">
            STAR <span className="text-[#00D2FF]">7</span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon size={17} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">

            <button
              onClick={onSearch}
              className="rounded-xl p-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              <Search size={21} />
            </button>

            <button className="hidden rounded-lg border border-[#FFB800]/30 bg-[#FFB800]/10 px-3 py-1.5 text-[10px] font-black text-[#FFB800] sm:block">
              PREMIUM
            </button>

            <button className="relative p-1">
              <UserCircle size={33} />

              <span className="absolute -bottom-1 -right-1 rounded-md bg-[#00D2FF] px-1.5 py-0.5 text-[8px] font-black text-black">
                KIDS
              </span>
            </button>

          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/5 bg-[#0A0E17] p-3 md:hidden">

            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setMobileMenu(false)}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}

          </div>
        )}
      </header>
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({
  onPlay,
  onWatchlist
}: {
  onPlay: () => void;
  onWatchlist: () => void;
}) {
  return (
    <section className="relative min-h-[650px] overflow-hidden pt-[68px]">

      <img
        src={hero.image}
        alt={hero.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex min-h-[650px] items-end px-5 pb-16 md:px-12 md:pb-24 lg:px-20">

        <div className="max-w-2xl">

          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">

            <span className="flex items-center gap-1 text-[#FFB800]">
              <Star size={15} fill="currentColor" />
              {hero.rating}
            </span>

            <span>{hero.year}</span>

            <span className="rounded border border-white/30 px-2 py-0.5">
              {hero.age}
            </span>

            <span>{hero.languages}</span>

          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            <button
              onClick={onPlay}
              className="flex items-center gap-2 rounded-xl bg-[#00D2FF] px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#39dcff]"
            >
              <Play size={18} fill="currentColor" />
              Watch Free
            </button>

            <button
              onClick={onWatchlist}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              <Plus size={19} />
              Watchlist
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20">
              <Share2 size={18} />
              Share
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTENT CARD
========================================================= */

function ContentCard({
  item,
  onPlay
}: {
  item: Content;
  onPlay: (item: Content) => void;
}) {
  return (
    <article className="content-card group relative min-w-[180px] max-w-[180px] cursor-pointer md:min-w-[225px] md:max-w-[225px]">

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#181E2B]">

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        {item.premium && (
          <span className="absolute left-2 top-2 rounded-md bg-[#FFB800] px-2 py-1 text-[9px] font-black text-black">
            PREMIUM
          </span>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/65 opacity-0 transition group-hover:opacity-100">

          <button
            onClick={() => onPlay(item)}
            className="rounded-full bg-[#00D2FF] p-3 text-black shadow-xl"
          >
            <Play size={21} fill="currentColor" />
          </button>

        </div>

        {item.progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div
              className="h-full bg-[#00D2FF]"
              style={{
                width: `${item.progress}%`
              }}
            />
          </div>
        )}

      </div>

      <div className="mt-2">

        <h3 className="truncate text-sm font-semibold">
          {item.title}
        </h3>

        <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
          <span>{item.year}</span>
          <span>•</span>
          <span>{item.genre}</span>

          <span className="ml-auto flex items-center gap-1 text-[#FFB800]">
            <Star size={10} fill="currentColor" />
            {item.rating}
          </span>
        </div>

      </div>

      {/* Hover Preview */}

      <div className="pointer-events-none absolute left-0 right-0 top-full z-40 mt-2 hidden rounded-xl border border-white/10 bg-[#181E2B] p-4 shadow-2xl group-hover:block">

        <h3 className="font-bold">
          {item.title}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {item.genre} • {item.year}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {item.languages.map((language) => (
            <span
              key={language}
              className="rounded bg-white/5 px-2 py-1 text-[10px]"
            >
              {language}
            </span>
          ))}
        </div>

        <div className="mt-3 flex gap-2">
          <span className="rounded-lg bg-white p-2 text-black">
            <Play size={14} fill="currentColor" />
          </span>

          <span className="rounded-lg bg-white/10 p-2">
            <Plus size={14} />
          </span>
        </div>

      </div>

    </article>
  );
}

/* =========================================================
   CONTENT TRAY
========================================================= */

function ContentTray({
  title,
  items,
  onPlay
}: {
  title: string;
  items: Content[];
  onPlay: (item: Content) => void;
}) {
  const container = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!container.current) return;

    container.current.scrollBy({
      left: direction === "right" ? 600 : -600,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative px-5 py-6 md:px-10 lg:px-14">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">
          {title}
        </h2>

        <button className="text-sm text-[#00D2FF] hover:underline">
          View All
        </button>
      </div>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-black/80 p-2 backdrop-blur md:block"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={container}
          className="hide-scrollbar flex gap-4 overflow-x-auto pb-5"
        >
          {items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onPlay={onPlay}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-black/80 p-2 backdrop-blur md:block"
        >
          <ChevronRight size={20} />
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   TOP 10
========================================================= */

function Top10Tray({
  onPlay
}: {
  onPlay: () => void;
}) {
  return (
    <section className="px-5 py-6 md:px-10 lg:px-14">

      <h2 className="mb-5 text-xl font-bold md:text-2xl">
        Top 10 in India Today
      </h2>

      <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-6">

        {top10Images.map((poster, index) => (
          <div
            key={`${poster}-${index}`}
            className="group relative flex min-w-[190px] items-end md:min-w-[230px]"
          >

            <span className="absolute -left-3 bottom-[-20px] z-0 text-[130px] font-black leading-none text-white/[0.06]">
              {index + 1}
            </span>

            <div className="relative z-10 aspect-[2/3] w-full overflow-hidden rounded-xl">

              <img
                src={poster}
                alt={`Top ${index + 1}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <button
                onClick={onPlay}
                className="absolute bottom-4 right-4 rounded-full bg-[#00D2FF] p-3 text-black opacity-0 transition group-hover:opacity-100"
              >
                <Play size={17} fill="currentColor" />
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

/* =========================================================
   SPORTS
========================================================= */

function SportsTray({
  onPlay
}: {
  onPlay: () => void;
}) {
  return (
    <section className="px-5 py-6 md:px-10 lg:px-14">

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">
          Popular in Sports
        </h2>

        <button className="text-sm text-[#00D2FF]">
          View All
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">

        {sports.map((match) => (
          <div
            key={match.id}
            className="rounded-2xl border border-white/5 bg-[#181E2B] p-5 transition hover:-translate-y-1 hover:border-white/10"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Trophy size={14} />
                {match.league}
              </div>

              <span className="flex items-center gap-1 rounded-md bg-[#E50914] px-2 py-1 text-[10px] font-black">
                <Radio size={10} />
                LIVE
              </span>

            </div>

            <div className="mt-5 grid grid-cols-3 items-center text-center">

              <div>
                <div className="text-2xl font-black">
                  {match.team1}
                </div>
                <div className="mt-1 text-sm text-gray-400">
                  {match.score1}
                </div>
              </div>

              <div className="text-xs text-gray-500">
                VS
              </div>

              <div>
                <div className="text-2xl font-black">
                  {match.team2}
                </div>
                <div className="mt-1 text-sm text-gray-400">
                  {match.score2}
                </div>
              </div>

            </div>

            <button
              onClick={onPlay}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-sm font-semibold transition hover:bg-[#00D2FF] hover:text-black"
            >
              <Play size={15} fill="currentColor" />
              Watch Live
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

/* =========================================================
   VIDEO PLAYER
========================================================= */

function VideoPlayer({
  src,
  title,
  onClose
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [settings, setSettings] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress(
          (video.currentTime / video.duration) * 100
        );
      }
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = Math.max(
      0,
      Math.min(
        video.duration || Infinity,
        video.currentTime + seconds
      )
    );
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const fullscreen = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await video.requestFullscreen();
      }
    } catch {
      // Browser may block fullscreen.
    }
  };

  const changeSpeed = (value: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = value;
    setSpeed(value);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">

      <video
        ref={videoRef}
        src={src}
        className="h-full max-h-[85vh] w-full object-contain"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={togglePlay}
      />

      {!locked && (
        <>
          {/* PLAYER TOP */}

          <div className="absolute left-0 right-0 top-0 flex items-center gap-4 bg-gradient-to-b from-black/90 to-transparent p-5">

            <button
              onClick={onClose}
              className="rounded-full bg-black/30 p-2"
            >
              <ArrowLeft size={21} />
            </button>

            <span className="font-semibold">
              {title}
            </span>

          </div>

          {/* SKIP INTRO */}

          <button className="absolute bottom-28 right-5 rounded-lg bg-black/70 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white hover:text-black">
            Skip Intro
          </button>

          {/* CONTROLS */}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent px-5 pb-5 pt-20">

            <div className="mb-4 h-1.5 rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-[#00D2FF]"
                style={{
                  width: `${progress}%`
                }}
              />
            </div>

            <div className="flex items-center gap-3">

              <button onClick={togglePlay}>
                {playing ? (
                  <Pause size={22} fill="white" />
                ) : (
                  <Play size={22} fill="white" />
                )}
              </button>

              <button onClick={() => seek(-10)}>
                <RotateCcw size={21} />
              </button>

              <button onClick={() => seek(10)}>
                <RotateCw size={21} />
              </button>

              <button onClick={toggleMute}>
                {muted ? (
                  <VolumeX size={21} />
                ) : (
                  <Volume2 size={21} />
                )}
              </button>

              <div className="ml-auto flex items-center gap-2">

                <button className="hidden rounded-lg bg-white/10 p-2 md:block">
                  <Languages size={19} />
                </button>

                <button
                  onClick={() => setSettings(!settings)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <Settings size={20} />
                </button>

                <button
                  onClick={() => setLocked(true)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <Lock size={20} />
                </button>

                <button
                  onClick={fullscreen}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <Maximize size={20} />
                </button>

              </div>

            </div>
          </div>

          {/* SETTINGS */}

          {settings && (
            <div className="absolute bottom-20 right-5 z-50 w-72 rounded-2xl border border-white/10 bg-[#181E2B]/95 p-4 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center justify-between">
                <h3 className="font-bold">
                  Player Settings
                </h3>

                <button onClick={() => setSettings(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5">

                <p className="text-xs text-gray-400">
                  Quality
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Auto",
                    "360p",
                    "480p",
                    "720p",
                    "1080p",
                    "4K"
                  ].map((quality) => (
                    <button
                      key={quality}
                      className="rounded-lg bg-white/5 px-3 py-2 text-xs hover:bg-[#00D2FF] hover:text-black"
                    >
                      {quality}
                    </button>
                  ))}
                </div>

              </div>

              <div className="mt-5">

                <p className="text-xs text-gray-400">
                  Audio & Subtitles
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Hindi",
                    "Bengali",
                    "English",
                    "Tamil"
                  ].map((language) => (
                    <button
                      key={language}
                      className="rounded-lg bg-white/5 px-3 py-2 text-xs hover:bg-[#00D2FF] hover:text-black"
                    >
                      {language}
                    </button>
                  ))}
                </div>

              </div>

              <div className="mt-5">

                <p className="text-xs text-gray-400">
                  Playback Speed
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {[0.75, 1, 1.25, 1.5, 2].map(
                    (value) => (
                      <button
                        key={value}
                        onClick={() => changeSpeed(value)}
                        className={`rounded-lg px-3 py-2 text-xs ${
                          speed === value
                            ? "bg-[#00D2FF] text-black"
                            : "bg-white/5"
                        }`}
                      >
                        {value}x
                      </button>
                    )
                  )}
                </div>

              </div>

            </div>
          )}
        </>
      )}

      {/* LOCK SCREEN */}

      {locked && (
        <button
          onClick={() => setLocked(false)}
          className="absolute right-5 top-5 rounded-full bg-black/70 p-3 backdrop-blur"
        >
          <Lock size={18} />
        </button>
      )}

    </div>
  );
}

/* =========================================================
   SEARCH MODAL
========================================================= */

function SearchModal({
  onClose,
  items,
  onPlay
}: {
  onClose: () => void;
  items: Content[];
  onPlay: (item: Content) => void;
}) {
  const [query, setQuery] = useState("");

  const results = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[150] bg-[#0A0E17]/95 p-5 backdrop-blur-xl md:p-10">

      <div className="mx-auto max-w-5xl">

        <div className="flex items-center gap-3">

          <Search size={22} className="text-gray-400" />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, shows, sports..."
            className="w-full bg-transparent py-3 text-xl outline-none"
          />

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2"
          >
            <X size={21} />
          </button>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {results.map((item) => (
            <button
              key={item.id}
              onClick={() => onPlay(item)}
              className="overflow-hidden rounded-xl bg-[#181E2B] text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-video w-full object-cover"
              />

              <div className="p-3">
                <p className="truncate font-semibold">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {item.genre} • {item.year}
                </p>
              </div>
            </button>
          ))}

        </div>

        {results.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No results found.
          </div>
        )}

      </div>
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function Star7Home() {
  const [player, setPlayer] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);

  const [watchlisted, setWatchlisted] = useState(false);

  const openPlayer = (item?: Content) => {
    setPlayer({
      title: item?.title || hero.title,

      /*
       * Put your real HLS/MP4 URL here.
       * Example:
       * https://cdn.example.com/star7/movie/master.m3u8
       */

      src: item?.id
        ? "/videos/demo.mp4"
        : "/videos/demo.mp4"
    });
  };

  const allContent = [
    ...continueWatching,
    ...trending,
    ...popular
  ];

  return (
    <main className="min-h-screen bg-[#0A0E17] text-white">

      <Navbar
        onSearch={() => setSearchOpen(true)}
      />

      <Hero
        onPlay={() => openPlayer()}
        onWatchlist={() => setWatchlisted(!watchlisted)}
      />

      {watchlisted && (
        <div className="mx-5 mt-3 rounded-xl border border-[#00D2FF]/20 bg-[#00D2FF]/10 px-4 py-3 text-sm text-[#00D2FF] md:mx-10 lg:mx-14">
          Added to your Watchlist.
        </div>
      )}

      <div className="relative z-20 -mt-3">

        <ContentTray
          title="Continue Watching"
          items={continueWatching}
          onPlay={openPlayer}
        />

        <ContentTray
          title="Latest & Trending"
          items={trending}
          onPlay={openPlayer}
        />

        <Top10Tray
          onPlay={() => openPlayer()}
        />

        <SportsTray
          onPlay={() => openPlayer()}
        />

        <ContentTray
          title="Popular Movies"
          items={popular}
          onPlay={openPlayer}
        />

        <ContentTray
          title="Star 7 Originals"
          items={continueWatching}
          onPlay={openPlayer}
        />

      </div>

      {/* FOOTER */}

      <footer className="mt-12 border-t border-white/5 px-5 py-12 text-center">

        <div className="text-2xl font-black">
          STAR <span className="text-[#00D2FF]">7</span>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs text-gray-500">
          <button>About</button>
          <button>Terms</button>
          <button>Privacy</button>
          <button>Help</button>
          <button>Contact</button>
        </div>

        <p className="mt-5 text-xs text-gray-600">
          © 2026 Star 7. All rights reserved.
        </p>

      </footer>

      {/* SEARCH */}

      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          items={allContent}
          onPlay={(item) => {
            setSearchOpen(false);
            openPlayer(item);
          }}
        />
      )}

      {/* VIDEO PLAYER */}

      {player && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95">

          <div className="h-full w-full">

            <VideoPlayer
              src={player.src}
              title={player.title}
              onClose={() => setPlayer(null)}
            />

          </div>

        </div>
      )}

    </main>
  );
}
