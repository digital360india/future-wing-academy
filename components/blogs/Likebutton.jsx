"use client";

import { useState, useEffect } from "react";

const API_BASE = "https://futurewingsblogs.vercel.app/api";
const accent = "#1F6F5C";

export default function LikeButton({ slug, initialLikeCount = 0 }) {
  const [mounted, setMounted]   = useState(false);
  const [uid, setUid]           = useState(null);
  const [liked, setLiked]       = useState(false);
  const [count, setCount]       = useState(initialLikeCount);
  const [loading, setLoading]   = useState(false);
  const [status, setStatus]     = useState(null); // "success" | "error"

  // ── Runs only on the client, after hydration ──────────────────────────────
  useEffect(() => {
    // Generate / retrieve a persistent guest ID (same as before)
    let guestId = localStorage.getItem("guest_uid");
    if (!guestId) {
      guestId = `guest_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      localStorage.setItem("guest_uid", guestId);
    }
    setUid(guestId);

    // Restore liked state for this post from localStorage
    const likedPosts = JSON.parse(localStorage.getItem("liked_posts") || "{}");
    if (likedPosts[slug]) setLiked(true);

    // Mark mounted last — prevents hydration mismatch
    setMounted(true);
  }, [slug]);

  // ── Like / unlike handler ─────────────────────────────────────────────────
  async function handleLike() {
    if (loading || !uid) return;
    setLoading(true);
    setStatus(null);

    const willLike = !liked;

    // Optimistic update
    setLiked(willLike);
    setCount((c) => c + (willLike ? 1 : -1));

    try {
      const res = await fetch(`${API_BASE}/blogs/${slug}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send uid so your API can toggle per-user and update Firebase
        body: JSON.stringify({ uid }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Error ${res.status}`);
      }

      // Sync with server truth (Firebase-persisted values)
      if (typeof data.likeCount === "number") setCount(data.likeCount);
      setLiked(data.liked);
      setStatus("success");

      // Persist liked state locally so the button survives page refresh
      const likedPosts = JSON.parse(localStorage.getItem("liked_posts") || "{}");
      if (data.liked) likedPosts[slug] = true;
      else delete likedPosts[slug];
      localStorage.setItem("liked_posts", JSON.stringify(likedPosts));

      setTimeout(() => setStatus(null), 2500);
    } catch {
      // Revert optimistic update on failure
      setLiked(!willLike);
      setCount((c) => c + (willLike ? -1 : 1));
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setLoading(false);
    }
  }

  // ── Before mount: static skeleton — matches server HTML exactly ───────────
  // This prevents the React hydration mismatch error.
  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <button
          disabled
          aria-label="Like this post"
          className="inline-flex items-center gap-2.5 rounded-full border border-[#E2E4E0] bg-white px-5 py-2.5 text-sm font-semibold text-[#15181D] shadow-sm opacity-70 cursor-default"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{initialLikeCount} {initialLikeCount === 1 ? "like" : "likes"}</span>
        </button>
      </div>
    );
  }

  // ── After mount: fully interactive ───────────────────────────────────────
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          disabled={loading}
          aria-pressed={liked}
          aria-label={liked ? "Unlike this post" : "Like this post"}
          className={`
            inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5
            text-sm font-semibold shadow-sm transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6F5C] focus-visible:ring-offset-2
            disabled:opacity-60 disabled:cursor-not-allowed
            ${liked
              ? "border-[#1F6F5C] bg-[#E8F4F1] text-[#1F6F5C] hover:bg-[#d4ede7]"
              : "border-[#E2E4E0] bg-white text-[#15181D] hover:border-[#1F6F5C] hover:text-[#1F6F5C]"
            }
          `}
        >
          {loading ? (
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={liked ? accent : "none"}
              stroke={accent}
              strokeWidth="2"
              className={`transition-transform duration-150 ${liked ? "scale-110" : "scale-100"}`}
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
          <span>
            {count} {count === 1 ? "like" : "likes"}
          </span>
        </button>
      </div>

      {/* Status feedback — mirrors CommentsSection style */}
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl bg-[#E8F4F1] border border-[#A7D7C8] px-4 py-2 text-xs text-[#1F6F5C] font-medium w-fit">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {liked ? "Thanks for liking!" : "Like removed."}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] px-4 py-2 text-xs text-[#E11D48] font-medium w-fit">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Could not save. Please try again.
        </div>
      )}
    </div>
  );
}