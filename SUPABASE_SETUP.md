# Supabase Setup

## 1. Create the table

Run the SQL in [supabase/posts_schema.sql](/c:/Users/satya/Desktop/Blog%20Page/Blog-Page/supabase/posts_schema.sql) inside the Supabase SQL Editor.

## 2. Add your app keys

Create `.env.local` in the project root:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

You can copy the variable names from [.env.example](/c:/Users/satya/Desktop/Blog%20Page/Blog-Page/.env.example).

## 3. Add posts whenever you want

Open your Supabase dashboard:

1. Go to `Table Editor`
2. Open `posts`
3. Click `Insert`
4. Fill these fields:
   `title`, `description`, `content`, `image_url`, `author`, `category`, `read_time`
5. Leave `published = true` if you want it visible on the site

Use blank lines inside `content` to split the article into paragraphs on the blog post page.

## 4. Start the app

```bash
npm run dev
```

The homepage and post page now read from Supabase instead of the local `blogs.js` file.
