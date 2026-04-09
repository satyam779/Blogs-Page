import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPublishedPostById } from "../lib/posts";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadPost() {
      setStatus("loading");
      setMessage("");

      const { data, error, configured } = await fetchPublishedPostById(id);

      if (ignore) {
        return;
      }

      if (!configured) {
        setPost(null);
        setStatus("error");
        setMessage("Add your Supabase URL and publishable key in .env.local to load posts.");
        return;
      }

      if (error) {
        setPost(null);
        setStatus("error");
        setMessage("Could not load this post from Supabase right now.");
        return;
      }

      if (!data) {
        setPost(null);
        setStatus("not_found");
        setMessage("The article you requested does not exist or is not published.");
        return;
      }

      setPost(data);
      setStatus("ready");
    }

    loadPost();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (status !== "ready" || !post) {
    const title =
      status === "loading"
        ? "Loading post..."
        : status === "error"
          ? "Supabase setup needed"
          : "Post not found";

    const description =
      status === "loading"
        ? "Fetching the article from Supabase."
        : message;

    return (
      <main className="blog-post-page">
        <section className="blog-post-body-section">
          <div className="blog-post-shell">
            <div className="not-found-card">
              <p className="blog-post-sidebar-title">{status === "not_found" ? "404" : "Supabase"}</p>
              <h1 className="blog-post-heading">{title}</h1>
              <p className="blog-post-summary">{description}</p>
              <Link to="/" className="back-home-btn">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="blog-post-shell blog-post-hero-grid">
          <div className="blog-post-copy">
            <Link to="/" className="back-link">
              {"<- Back to all posts"}
            </Link>
            <span className="hero-badge">{post.category}</span>
            <h1 className="blog-post-heading">{post.title}</h1>
            <p className="blog-post-summary">{post.description}</p>
            <div className="blog-post-meta">
              <span className="hero-author">
                <span className="avatar-placeholder">{post.author?.charAt(0)}</span>
                {post.author}
              </span>
              <div className="card-meta-right">
                <span>{post.date}</span>
                {post.readTime && (
                  <>
                    <span className="meta-separator" aria-hidden="true">|</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="blog-post-image-panel">
            <img src={post.image} alt={post.title} className="blog-post-image" />
          </div>
        </div>
      </section>

      <section className="blog-post-body-section">
        <div className="blog-post-shell blog-post-layout">
          <article className="blog-post-article">
            {post.content.map((paragraph, index) => (
              <p key={index} className="blog-post-paragraph">
                {paragraph}
              </p>
            ))}
          </article>

          <aside className="blog-post-sidebar">
            <div className="blog-post-sidebar-card">
              <p className="blog-post-sidebar-title">Article Details</p>
              <div className="blog-post-sidebar-list">
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Category</span>
                  <span>{post.category}</span>
                </div>
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Published</span>
                  <span>{post.date}</span>
                </div>
                <div className="blog-post-sidebar-row">
                  <span className="sidebar-label">Reading time</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
