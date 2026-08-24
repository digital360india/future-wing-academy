import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Source_Serif_4, Work_Sans, IBM_Plex_Mono } from "next/font/google";

const displayFont = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});
const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
});

async function getBlogs() {
  try {
    const res = await fetch(
      "https://futurewingsblogs.vercel.app/api/blogs",
      {
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

function readingTime(content = "") {
  const words = content
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(createdAt) {
  if (!createdAt) return null;
  const date = new Date(
    createdAt.seconds ? createdAt.seconds * 1000 : createdAt,
  );
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const CATEGORY_PALETTE = ["#02618f"];

function getCatColor(category = "") {
  let h = 0;
  for (let i = 0; i < category.length; i++)
    h = (h + category.charCodeAt(i)) % CATEGORY_PALETTE.length;
  return CATEGORY_PALETTE[h] || CATEGORY_PALETTE[0];
}

function CategoryStamp({ category, className = "" }) {
  if (!category) return null;
  const hex = getCatColor(category);
  return (
    <span
      className={`${monoFont.className} inline-flex w-fit items-center rounded-[3px] border-[1.5px] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm ${className}`}
      style={{ borderColor: hex, color: hex }}
    >
      {category}
    </span>
  );
}

function DocIcon({ color = "#8C8F86", size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.3"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function AuthorPip({ name }) {
  const init = (name || "A").charAt(0).toUpperCase();
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16181D] text-[11px] font-bold text-[#F4F5F1] ring-2 ring-white">
      {init}
    </span>
  );
}

function BlogCard({ blog, featured = false }) {
  const hex = getCatColor(blog.category);
  const rt = readingTime(blog.content);
  const date = formatDate(blog.createdAt);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-[#DEDFD6] shadow-[0_1px_2px_rgba(22,24,29,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-14px_rgba(22,24,29,0.2)]">
      <Link
        href={`/blogs/${blog.slug}`}
        className="absolute inset-0 z-30"
        aria-label={`Read ${blog.title}`}
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-[#EEEFE9]">
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: `${hex}14` }}
          >
            <DocIcon color={hex} size={34} />
          </div>
        )}

        {blog.category && (
          <CategoryStamp
            category={blog.category}
            className="absolute top-3 right-3 rotate-2"
          />
        )}

        {featured && (
          <span
            className={`${monoFont.className} absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-[3px] bg-[#02618f]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F4F5F1] backdrop-blur-sm`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#02618f]" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3
          className={`${displayFont.className} text-[1.05rem] font-semibold leading-snug text-[#16181D] line-clamp-2 transition-colors group-hover:text-[#02618f]`}
        >
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="text-sm text-[#5B5F57] leading-relaxed line-clamp-2 flex-1">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#02618f] pt-4">
          <div className="flex items-center gap-2">
            <AuthorPip name={blog.authorName || blog.author} />
            <div className={`${monoFont.className} leading-tight`}>
              <p className="text-[11px] font-semibold text-[#16181D]">
                {blog.authorName || blog.author || "Staff writer"}
              </p>
              <p className="text-[10px] text-[#8C8F86]">
                {rt} min · {date || "—"}
              </p>
            </div>
          </div>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#16181D] transition-colors group-hover:bg-[#16181D] group-hover:text-[#F4F5F1]"
            style={{ backgroundColor: `${hex}14` }}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

function PageHero() {
  return (
    <div className="relative overflow-hidden bg-[#02618f] text-[#F4F5F1]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <h1
          className={`${displayFont.className} italic md:text-4xl  text-2xl font-semibold tracking-tight leading-[1.05] mb-6`}
        >
          Stories that{" "}
          <span className="relative not-italic">
            inspire learning
            <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-[#02618f]" />
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-white leading-relaxed">
          From choosing the right school to planning a successful career,
          explore practical insights and educational resources written by
          experts.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog",
  description: "Latest articles and insights",
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#F4F5F1]`}>
      <PageHero />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#DEDFD6] bg-white py-28 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEEFE9] mb-5">
              <DocIcon color="#8C8F86" size={28} />
            </div>
            <h3
              className={`${displayFont.className} text-xl font-semibold text-[#16181D]`}
            >
              No dispatches filed yet
            </h3>
            <p className="mt-2 text-[#8C8F86] max-w-sm">
              Check back soon — new stories land here the moment they're
              published.
            </p>
          </div>
        ) : (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-[#DEDFD6]" />
              <span
                className={`${monoFont.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#8C8F86] whitespace-nowrap`}
              >
                All Stories
              </span>
              <div className="h-px flex-1 bg-[#DEDFD6]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} featured={i === 0} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
