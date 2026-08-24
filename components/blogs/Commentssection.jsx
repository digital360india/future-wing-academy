"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const API_BASE = "https://futurewingsblogs.vercel.app/api";

function formatDate(value) {
  if (!value) return null;
  if (typeof value === "object" && value.seconds) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric", month: "long", day: "numeric",
    }).format(new Date(value.seconds * 1000));
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric", month: "long", day: "numeric",
  }).format(date);
}

export default function CommentsSection({ slug, initialComments = [] }) {
  const [mounted, setMounted]   = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName]         = useState("");
  const [text, setText]         = useState("");
  const [status, setStatus]     = useState(null); // "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  // Load comments only on the client to avoid hydration mismatch
  // caused by Firebase Timestamp objects serialising differently
  // on the server vs the client.
  useEffect(() => {
    setComments(initialComments);
    setMounted(true);
  }, [initialComments]);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedName || !trimmedText) return;

    setStatus("loading");
    setErrorMsg("");

    const optimisticId = `temp_${Date.now()}`;
    const optimistic = {
      id: optimisticId,
      displayName: trimmedName,
      text: trimmedText,
      createdAt: new Date().toISOString(),
      avatar: "",
      _optimistic: true,
    };
    setComments((prev) => [...prev, optimistic]);

    try {
      const res = await fetch(`${API_BASE}/blogs/${slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: trimmedName, text: trimmedText }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Error ${res.status}`);
      }

      setComments((prev) =>
        prev.map((c) => (c.id === optimisticId ? { ...data.comment, _optimistic: false } : c))
      );
      setStatus("success");
      setName("");
      setText("");
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      setComments((prev) => prev.filter((c) => c.id !== optimisticId));
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  // ── Before mount: render a stable skeleton that matches server HTML ────────
  if (!mounted) {
    return (
      <section className="mt-14">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F6F5C]">Discussion</p>
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#15181D] mb-6">
          Comments{" "}
          <span className="text-base font-normal text-[#9CA3AF]">(0)</span>
        </h2>
        <div className="rounded-2xl border border-dashed border-[#E2E4E0] bg-[#F5F6F4] px-6 py-10 text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9D5D2" strokeWidth="1.5" className="mx-auto mb-3">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <p className="text-sm font-medium text-[#9CA3AF]">Loading comments…</p>
        </div>
      </section>
    );
  }

  // ── After mount: full interactive UI ──────────────────────────────────────
  return (
    <section className="mt-14">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1F6F5C]" />
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F6F5C]">Discussion</p>
      </div>
      <h2 className="font-serif text-2xl font-bold text-[#15181D] mb-6">
        Comments{" "}
        <span className="text-base font-normal text-[#9CA3AF]">({comments.length})</span>
      </h2>

      {/* Comment form */}
      <div className="mb-10 rounded-2xl border border-[#E2E4E0] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F0F1EF] bg-[#F9FAF9]">
          <p className="text-sm font-semibold text-[#15181D]">Leave a comment</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-xs font-semibold text-[#5B6168] uppercase tracking-wider mb-1.5">
              Your name <span className="text-[#1F6F5C]">*</span>
            </label>
            <input
              id="comment-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              maxLength={80}
              className="w-full rounded-xl border border-[#E2E4E0] bg-[#F9FAF9] px-4 py-2.5 text-sm text-[#15181D] placeholder:text-[#C9D5D2] focus:border-[#1F6F5C] focus:outline-none focus:ring-2 focus:ring-[#1F6F5C]/20 transition"
            />
          </div>
          <div>
            <label htmlFor="comment-text" className="block text-xs font-semibold text-[#5B6168] uppercase tracking-wider mb-1.5">
              Comment <span className="text-[#1F6F5C]">*</span>
            </label>
            <textarea
              id="comment-text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts…"
              rows={4}
              maxLength={2000}
              className="w-full rounded-xl border border-[#E2E4E0] bg-[#F9FAF9] px-4 py-2.5 text-sm text-[#15181D] placeholder:text-[#C9D5D2] focus:border-[#1F6F5C] focus:outline-none focus:ring-2 focus:ring-[#1F6F5C]/20 transition resize-none"
            />
            <p className="text-right text-[11px] text-[#C9D5D2] mt-1">{text.length}/2000</p>
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 rounded-xl bg-[#E8F4F1] border border-[#A7D7C8] px-4 py-2.5 text-sm text-[#1F6F5C] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Comment posted successfully!
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] px-4 py-2.5 text-sm text-[#E11D48] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errorMsg}
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-[#9CA3AF]">Your name will be visible to others.</p>
            <button
              type="submit"
              disabled={status === "loading" || !name.trim() || !text.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1F6F5C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#185E4E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6F5C] focus-visible:ring-offset-2"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Posting…
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Post comment
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Comment list */}
      {comments.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#E2E4E0] bg-[#F5F6F4] px-6 py-10 text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9D5D2" strokeWidth="1.5" className="mx-auto mb-3">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <p className="text-sm font-medium text-[#9CA3AF]">No comments yet</p>
          <p className="text-xs text-[#C9D5D2] mt-1">Be the first to share your thoughts.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, i) => {
            const commentDate = formatDate(comment.createdAt);
            const authorName = comment.displayName || "Anonymous";
            return (
              <div
                key={comment.id || i}
                className={`rounded-2xl border bg-white p-5 transition-all duration-300 ${
                  comment._optimistic
                    ? "border-[#A7D7C8] opacity-70"
                    : "border-[#E2E4E0] hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {comment.avatar ? (
                    <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0 ring-2 ring-[#E8F4F1]">
                      <Image src={comment.avatar} alt={authorName} fill className="object-cover" />
                    </div>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#15181D] text-sm font-bold text-[#F5F6F4]">
                      {authorName[0]?.toUpperCase() || "?"}
                    </span>
                  )}
                  <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm text-[#15181D] leading-tight">{authorName}</p>
                      {commentDate && (
                        <time className="text-xs text-[#9CA3AF]">{commentDate}</time>
                      )}
                    </div>
                    {comment._optimistic && (
                      <span className="text-[10px] font-medium text-[#1F6F5C] bg-[#E8F4F1] rounded-full px-2 py-0.5 shrink-0">
                        Posting…
                      </span>
                    )}
                  </div>
                </div>
                {comment.text && (
                  <p className="text-sm text-[#33363C] leading-relaxed pl-12">{comment.text}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}