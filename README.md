# Smart Swap OLX

Smart Swap OLX is a campus marketplace for students to buy and sell used books, drafting tools, calculators, lab items, hostel items, notes, and other college essentials.

The app is built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Supabase**. It includes a demo-data mode, so the UI runs even before Supabase keys are configured.

## Features

- Admin-approved student accounts.
- Admin-approved listings.
- Marketplace search, category, price, condition, and sorting filters.
- Listing detail pages with seller summary, safety reminder, chat, wishlist, report, and optional WhatsApp click-to-chat.
- Student dashboard for listings, saved items, chats, notifications, and approval status.
- Admin dashboard for users, listings, reports, and categories.
- Supabase SQL schema with Row Level Security policies.

## Local Setup

1. Install dependencies.

```bash
pnpm install
```

2. Copy environment variables.

```bash
cp .env.example .env.local
```

3. Add your Supabase project URL and anon key to `.env.local`.

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Run the SQL in `supabase/schema.sql` inside the Supabase SQL editor.

5. Start the dev server.

```bash
pnpm dev
```

## First Admin

After your first admin user signs up, run this SQL in Supabase to promote that account:

```sql
update public.profiles
set role = 'admin', approval_status = 'approved'
where email = 'admin@your-college.edu';
```

## Deployment

- Deploy the Next.js app to Vercel.
- Add the same Supabase environment variables in Vercel.
- Keep online payments out of v1; Smart Swap OLX supports offline campus meet-ups only.

## QA Checklist

- Signup creates a pending student profile.
- Admin can approve or reject users.
- Approved users can create listings; pending users cannot.
- Listings remain hidden until approved.
- Search and filters return expected listings.
- Buyers can start in-app chats after approval.
- WhatsApp button appears only when the seller enables it.
- Reports appear in the admin queue.
- Seller can mark an item sold.
- Mobile marketplace, listing detail, dashboard, chat, and admin pages remain readable.
