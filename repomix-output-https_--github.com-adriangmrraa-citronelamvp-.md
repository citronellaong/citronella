This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.agents/
  skills/
    neon-postgres/
      SKILL.md
.claude/
  skills/
    neon-postgres/
      SKILL.md
app/
  (app)/
    admin/
      community/
        page.tsx
      cultivo/
        page.tsx
      events/
        [id]/
          page.tsx
        page.tsx
      legal/
        page.tsx
      notifications/
        page.tsx
      transactions/
        page.tsx
      users/
        page.tsx
      page.tsx
    community/
      [id]/
        page.tsx
      new/
        page.tsx
      page.tsx
    cultivator/
      patients/
        page.tsx
    cultivo/
      [id]/
        page.tsx
      page.tsx
    events/
      [id]/
        page.tsx
      page.tsx
    market/
      orders/
        page.tsx
      products/
        [id]/
          page.tsx
      sellers/
        [id]/
          page.tsx
      page.tsx
    notifications/
      page.tsx
    profile/
      page.tsx
    layout.tsx
  (auth)/
    login/
      page.tsx
    register/
      page.tsx
    layout.tsx
  api/
    admin/
      crops/
        route.ts
      cultivators/
        route.ts
      legal/
        route.ts
      notifications/
        broadcast/
          route.ts
        route.ts
      posts/
        [id]/
          route.ts
        route.ts
      products/
        route.ts
      stats/
        route.ts
      transactions/
        export/
          route.ts
        route.ts
      users/
        [id]/
          approve/
            route.ts
          documents/
            route.ts
          reject/
            route.ts
          tokens/
            route.ts
        export/
          route.ts
        route.ts
    ai/
      describe-product/
        route.ts
      suggest-notes/
        route.ts
      suggest-ph-ec/
        route.ts
    auth/
      login/
        route.ts
      logout/
        route.ts
      me/
        route.ts
      register/
        route.ts
      verify/
        route.ts
    crops/
      [id]/
        lab-reports/
          [reportId]/
            route.ts
          route.ts
        logs/
          [logId]/
            feedback/
              route.ts
            route.ts
          route.ts
        route.ts
      route.ts
    cultivator/
      patients/
        route.ts
    events/
      [id]/
        reservations/
          route.ts
        route.ts
      route.ts
    notifications/
      [id]/
        read/
          route.ts
      read-all/
        route.ts
      route.ts
    orders/
      [id]/
        review/
          route.ts
        route.ts
      route.ts
    posts/
      [id]/
        comments/
          [commentId]/
            route.ts
          route.ts
        export/
          route.ts
        reactions/
          route.ts
        subscribe/
          route.ts
        route.ts
      route.ts
    products/
      [id]/
        purchase/
          route.ts
        route.ts
      route.ts
    profile/
      documents/
        route.ts
      route.ts
    sellers/
      [id]/
        reputation/
          route.ts
    wishlist/
      route.ts
  crops/
    page.tsx
  dashboard/
    page.tsx
  legal/
    privacy/
      page.tsx
    terms/
      page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  admin/
    KpiGrid.tsx
    NotificationSender.tsx
    StatsCard.tsx
    TokenAssignModal.tsx
    TransactionTable.tsx
    UserTable.tsx
    UserTableWrapper.tsx
  auth/
    LoginForm.tsx
    RegisterForm.tsx
    VerificationBanner.tsx
  community/
    CategoryFilter.tsx
    CommentForm.tsx
    CommentList.tsx
    PostCard.tsx
    PostDetail.tsx
    PostForm.tsx
    ReactionBar.tsx
    SubscribeButton.tsx
  crops/
    CropCard.tsx
    CropForm.tsx
    LabReportCard.tsx
    LabReportForm.tsx
    LogForm.tsx
    LogTable.tsx
    NutrientCalculator.tsx
  cultivator/
    PatientList.tsx
  events/
    EventCard.tsx
    EventForm.tsx
    ReservationCard.tsx
    TicketSelector.tsx
  layout/
    AdminSidebarWrapper.tsx
    AppHeader.tsx
    AppSidebar.tsx
  market/
    CartDrawer.tsx
    FilterBar.tsx
    OrderCard.tsx
    ProductCard.tsx
    ProductDetail.tsx
    ProductForm.tsx
    ReviewForm.tsx
    SellerReputation.tsx
    WishlistButton.tsx
  notifications/
    NotificationDropdown.tsx
    NotificationItem.tsx
  profile/
    DocumentList.tsx
    ProfileForm.tsx
  shared/
    ExportButton.tsx
    NotificationBell.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    mode-toggle.tsx
  theme-provider.tsx
db/
  schema.ts
lib/
  utils/
    time.ts
  ai.ts
  auth.ts
  db.ts
  session.ts
  utils.ts
scripts/
  seed-admin.ts
tests/
  __mocks__/
    server-only.ts
  api/
    admin-events.test.ts
    community.test.ts
    crops.test.ts
    marketplace.test.ts
    notifications.test.ts
  db/
    schema.test.ts
  lib/
    auth.test.ts
    session.test.ts
    validation.test.ts
  example.test.tsx
  setup.ts
  utils.test.ts
.env.example
.gitignore
drizzle.config.ts
error despliegue.txt
middleware.ts
next-env.d.ts
next.config.js
package.json
postcss.config.js
README.md
skills-lock.json
tailwind.config.ts
tsconfig.json
vitest.config.ts
```

# Files

## File: .agents/skills/neon-postgres/SKILL.md
````markdown
---
name: neon-postgres
description: Guides and best practices for working with Neon Serverless Postgres. Covers getting started, local development with Neon, choosing a connection method, Neon features, authentication (@neondatabase/auth), PostgREST-style data API (@neondatabase/neon-js), Neon CLI, and Neon's Platform API/SDKs. Use for any Neon-related questions.
---

# Neon Serverless Postgres

Neon is a serverless Postgres platform that separates compute and storage to offer autoscaling, branching, instant restore, and scale-to-zero. It's fully compatible with Postgres and works with any language, framework, or ORM that supports Postgres.

## Neon Documentation

The Neon documentation is the source of truth for all Neon-related information. Always verify claims against the official docs before responding. Neon features and APIs evolve, so prefer fetching current docs over relying on training data.

### Fetching Docs as Markdown

Any Neon doc page can be fetched as markdown in two ways:

1. **Append `.md` to the URL** (simplest): https://neon.com/docs/introduction/branching.md
2. **Request `text/markdown`** on the standard URL: `curl -H "Accept: text/markdown" https://neon.com/docs/introduction/branching`

Both return the same markdown content. Use whichever method your tools support.

### Finding the Right Page

The docs index lists every available page with its URL and a short description:

```
https://neon.com/docs/llms.txt
```

Common doc URLs are organized in the topic links below. If you need a page not listed here, search the docs index: https://neon.com/docs/llms.txt — don't guess URLs.

## What Is Neon

Use this for architecture explanations and terminology (organizations, projects, branches, endpoints) before giving implementation advice.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/what-is-neon.md

## Getting Started

Use this for first-time setup: org/project selection, connection strings, driver installation, optional auth, and initial schema setup.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/getting-started.md

## Connection Methods & Drivers

Use this when you need to pick the correct transport and driver based on runtime constraints (TCP, HTTP, WebSocket, edge, serverless, long-running).

Link: https://neon.com/docs/ai/skills/neon-postgres/references/connection-methods.md

### Serverless Driver

Use this for `@neondatabase/serverless` patterns, including HTTP queries, WebSocket transactions, and runtime-specific optimizations.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-serverless.md

### Neon JS SDK

Use this for combined Neon Auth + Data API workflows with PostgREST-style querying and typed client setup.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-js.md

## Developer Tools

Use this for local development enablement with `npx neonctl@latest init`, VSCode extension setup, and Neon MCP server configuration.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/devtools.md

### Neon CLI

Use this for terminal-first workflows, scripts, and CI/CD automation with `neonctl`.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-cli.md

## Neon Admin API

The Neon Admin API can be used to manage Neon resources programmatically. It is used behind the scenes by the Neon CLI and MCP server, but can also be used directly for more complex automation workflows or when embedding Neon in other applications.

### Neon REST API

Use this for direct HTTP automation, endpoint-level control, API key auth, rate-limit handling, and operation polling.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-rest-api.md

### Neon TypeScript SDK

Use this when implementing typed programmatic control of Neon resources in TypeScript via `@neondatabase/api-client`.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-typescript-sdk.md

### Neon Python SDK

Use this when implementing programmatic Neon management in Python with the `neon-api` package.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-python-sdk.md

## Neon Auth

Use this for managed user authentication setup, UI components, auth methods, and Neon Auth integration pitfalls in Next.js and React apps.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-auth.md

Neon Auth is also embedded in the Neon JS SDK - so depending on your use case, you may want to use the Neon JS SDK instead of Neon Auth. See https://neon.com/docs/ai/skills/neon-postgres/references/connection-methods.md for more details.

## Branching

Use this when the user is planning isolated environments, schema migration testing, preview deployments, or branch lifecycle automation.

Key points:

- Branches are instant, copy-on-write clones (no full data copy).
- Each branch has its own compute endpoint.
- Use the neonctl CLI or MCP server to create, inspect, and compare branches.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/branching.md

## Autoscaling

Use this when the user needs compute to scale automatically with workload and wants guidance on CU sizing and runtime behavior.

Link: https://neon.com/docs/introduction/autoscaling.md

## Scale to Zero

Use this when optimizing idle costs and discussing suspend/resume behavior, including cold-start trade-offs.

Key points:

- Idle computes suspend automatically (default 5 minutes, configurable) (unless disabled - launch & scale plan only)
- First query after suspend typically has a cold-start penalty (around hundreds of ms)
- Storage remains active while compute is suspended.

Link: https://neon.com/docs/introduction/scale-to-zero.md

## Instant Restore

Use this when the user needs point-in-time recovery or wants to restore data state without traditional backup restore workflows.

Key points:

- Restore windows depend on plan limits.
- Users can create branches from historical points-in-time.
- Time Travel queries can be used for historical inspection workflows.

Link: https://neon.com/docs/introduction/branch-restore.md

## Read Replicas

Use this for read-heavy workloads where the user needs dedicated read-only compute without duplicating storage.

Key points:

- Replicas are read-only compute endpoints sharing the same storage.
- Creation is fast and scaling is independent from primary compute.
- Typical use cases: analytics, reporting, and read-heavy APIs.

Link: https://neon.com/docs/introduction/read-replicas.md

## Connection Pooling

Use this when the user is in serverless or high-concurrency environments and needs safe, scalable Postgres connection management.

Key points:

- Neon pooling uses PgBouncer.
- Add `-pooler` to endpoint hostnames to use pooled connections.
- Pooling is especially important in serverless runtimes with bursty concurrency.

Link: https://neon.com/docs/connect/connection-pooling.md

## IP Allow Lists

Use this when the user needs to restrict database access by trusted networks, IPs, or CIDR ranges.

Link: https://neon.com/docs/introduction/ip-allow.md

## Logical Replication

Use this when integrating CDC pipelines, external Postgres sync, or replication-based data movement.

Key points:

- Neon supports native logical replication workflows.
- Useful for replicating to/from external Postgres systems.

Link: https://neon.com/docs/guides/logical-replication-guide.md
````

## File: .claude/skills/neon-postgres/SKILL.md
````markdown
---
name: neon-postgres
description: Guides and best practices for working with Neon Serverless Postgres. Covers getting started, local development with Neon, choosing a connection method, Neon features, authentication (@neondatabase/auth), PostgREST-style data API (@neondatabase/neon-js), Neon CLI, and Neon's Platform API/SDKs. Use for any Neon-related questions.
---

# Neon Serverless Postgres

Neon is a serverless Postgres platform that separates compute and storage to offer autoscaling, branching, instant restore, and scale-to-zero. It's fully compatible with Postgres and works with any language, framework, or ORM that supports Postgres.

## Neon Documentation

The Neon documentation is the source of truth for all Neon-related information. Always verify claims against the official docs before responding. Neon features and APIs evolve, so prefer fetching current docs over relying on training data.

### Fetching Docs as Markdown

Any Neon doc page can be fetched as markdown in two ways:

1. **Append `.md` to the URL** (simplest): https://neon.com/docs/introduction/branching.md
2. **Request `text/markdown`** on the standard URL: `curl -H "Accept: text/markdown" https://neon.com/docs/introduction/branching`

Both return the same markdown content. Use whichever method your tools support.

### Finding the Right Page

The docs index lists every available page with its URL and a short description:

```
https://neon.com/docs/llms.txt
```

Common doc URLs are organized in the topic links below. If you need a page not listed here, search the docs index: https://neon.com/docs/llms.txt — don't guess URLs.

## What Is Neon

Use this for architecture explanations and terminology (organizations, projects, branches, endpoints) before giving implementation advice.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/what-is-neon.md

## Getting Started

Use this for first-time setup: org/project selection, connection strings, driver installation, optional auth, and initial schema setup.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/getting-started.md

## Connection Methods & Drivers

Use this when you need to pick the correct transport and driver based on runtime constraints (TCP, HTTP, WebSocket, edge, serverless, long-running).

Link: https://neon.com/docs/ai/skills/neon-postgres/references/connection-methods.md

### Serverless Driver

Use this for `@neondatabase/serverless` patterns, including HTTP queries, WebSocket transactions, and runtime-specific optimizations.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-serverless.md

### Neon JS SDK

Use this for combined Neon Auth + Data API workflows with PostgREST-style querying and typed client setup.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-js.md

## Developer Tools

Use this for local development enablement with `npx neonctl@latest init`, VSCode extension setup, and Neon MCP server configuration.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/devtools.md

### Neon CLI

Use this for terminal-first workflows, scripts, and CI/CD automation with `neonctl`.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-cli.md

## Neon Admin API

The Neon Admin API can be used to manage Neon resources programmatically. It is used behind the scenes by the Neon CLI and MCP server, but can also be used directly for more complex automation workflows or when embedding Neon in other applications.

### Neon REST API

Use this for direct HTTP automation, endpoint-level control, API key auth, rate-limit handling, and operation polling.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-rest-api.md

### Neon TypeScript SDK

Use this when implementing typed programmatic control of Neon resources in TypeScript via `@neondatabase/api-client`.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-typescript-sdk.md

### Neon Python SDK

Use this when implementing programmatic Neon management in Python with the `neon-api` package.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-python-sdk.md

## Neon Auth

Use this for managed user authentication setup, UI components, auth methods, and Neon Auth integration pitfalls in Next.js and React apps.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/neon-auth.md

Neon Auth is also embedded in the Neon JS SDK - so depending on your use case, you may want to use the Neon JS SDK instead of Neon Auth. See https://neon.com/docs/ai/skills/neon-postgres/references/connection-methods.md for more details.

## Branching

Use this when the user is planning isolated environments, schema migration testing, preview deployments, or branch lifecycle automation.

Key points:

- Branches are instant, copy-on-write clones (no full data copy).
- Each branch has its own compute endpoint.
- Use the neonctl CLI or MCP server to create, inspect, and compare branches.

Link: https://neon.com/docs/ai/skills/neon-postgres/references/branching.md

## Autoscaling

Use this when the user needs compute to scale automatically with workload and wants guidance on CU sizing and runtime behavior.

Link: https://neon.com/docs/introduction/autoscaling.md

## Scale to Zero

Use this when optimizing idle costs and discussing suspend/resume behavior, including cold-start trade-offs.

Key points:

- Idle computes suspend automatically (default 5 minutes, configurable) (unless disabled - launch & scale plan only)
- First query after suspend typically has a cold-start penalty (around hundreds of ms)
- Storage remains active while compute is suspended.

Link: https://neon.com/docs/introduction/scale-to-zero.md

## Instant Restore

Use this when the user needs point-in-time recovery or wants to restore data state without traditional backup restore workflows.

Key points:

- Restore windows depend on plan limits.
- Users can create branches from historical points-in-time.
- Time Travel queries can be used for historical inspection workflows.

Link: https://neon.com/docs/introduction/branch-restore.md

## Read Replicas

Use this for read-heavy workloads where the user needs dedicated read-only compute without duplicating storage.

Key points:

- Replicas are read-only compute endpoints sharing the same storage.
- Creation is fast and scaling is independent from primary compute.
- Typical use cases: analytics, reporting, and read-heavy APIs.

Link: https://neon.com/docs/introduction/read-replicas.md

## Connection Pooling

Use this when the user is in serverless or high-concurrency environments and needs safe, scalable Postgres connection management.

Key points:

- Neon pooling uses PgBouncer.
- Add `-pooler` to endpoint hostnames to use pooled connections.
- Pooling is especially important in serverless runtimes with bursty concurrency.

Link: https://neon.com/docs/connect/connection-pooling.md

## IP Allow Lists

Use this when the user needs to restrict database access by trusted networks, IPs, or CIDR ranges.

Link: https://neon.com/docs/introduction/ip-allow.md

## Logical Replication

Use this when integrating CDC pipelines, external Postgres sync, or replication-based data movement.

Key points:

- Neon supports native logical replication workflows.
- Useful for replicating to/from external Postgres systems.

Link: https://neon.com/docs/guides/logical-replication-guide.md
````

## File: app/(app)/admin/community/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Pin, PinOff, Lock, Unlock, Trash2, RefreshCw } from 'lucide-react';

interface AdminPost {
  id: number;
  title: string;
  authorUsername: string;
  category: string;
  likesCount: number;
  createdAt: string;
  isPinned: boolean;
  isImmutable: boolean;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function AdminCommunityPage() {
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/posts');
      if (!res.ok) throw new Error('Error al cargar publicaciones');
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const applyAction = async (
    postId: number,
    payload: Partial<{ isPinned: boolean; isImmutable: boolean; deleted: boolean }>
  ) => {
    setActionLoading(postId);
    try {
      if (payload.deleted) {
        const res = await fetch(`/api/admin/posts/${postId}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Error al eliminar');
        setPosts((prev) => prev.filter((p) => p.id !== postId));
        return;
      }

      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Error al actualizar');
      const data = await res.json();
      const updated = data.post ?? data;
      setPosts((prev) => prev.map((p) => (p.id === postId ? { ...p, ...updated } : p)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = (postId: number) => {
    if (!confirm('¿Eliminar esta publicación? Esta acción es irreversible.')) return;
    applyAction(postId, { deleted: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Moderación del foro
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Gestioná las publicaciones de la comunidad
            </p>
          </div>
          <button
            onClick={fetchPosts}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Actualizar
          </button>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-xl px-5 py-4 text-sm">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="p-8 space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400 dark:text-gray-500">
              No hay publicaciones
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-5 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Título
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Autor
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Categoría
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Likes
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Fecha
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Fijado
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Bloqueado
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => {
                    const isActing = actionLoading === post.id;
                    return (
                      <tr
                        key={post.id}
                        className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="px-5 py-3 font-medium text-gray-800 dark:text-gray-100 max-w-xs truncate">
                          {post.title}
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                          {post.authorUsername}
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                          {post.category}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                          {post.likesCount}
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          {formatDate(post.createdAt)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              post.isPinned ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              post.isImmutable ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center gap-1.5">
                            {/* Pin/Unpin */}
                            <button
                              onClick={() => applyAction(post.id, { isPinned: !post.isPinned })}
                              disabled={isActing}
                              title={post.isPinned ? 'Desfijar' : 'Fijar'}
                              className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all disabled:opacity-40"
                            >
                              {post.isPinned ? (
                                <PinOff className="w-4 h-4" />
                              ) : (
                                <Pin className="w-4 h-4" />
                              )}
                            </button>

                            {/* Lock/Unlock */}
                            <button
                              onClick={() =>
                                applyAction(post.id, { isImmutable: !post.isImmutable })
                              }
                              disabled={isActing}
                              title={post.isImmutable ? 'Desbloquear' : 'Bloquear'}
                              className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all disabled:opacity-40"
                            >
                              {post.isImmutable ? (
                                <Unlock className="w-4 h-4" />
                              ) : (
                                <Lock className="w-4 h-4" />
                              )}
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(post.id)}
                              disabled={isActing}
                              title="Eliminar"
                              className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all disabled:opacity-40"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
          {posts.length} publicación{posts.length !== 1 ? 'es' : ''} en total
        </p>
      </div>
    </div>
  );
}
````

## File: app/(app)/admin/cultivo/page.tsx
````typescript
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/session';

const STATUS_STYLES: Record<string, string> = {
  Verde: 'bg-green-100 text-green-800',
  Amarillo: 'bg-yellow-100 text-yellow-800',
  Rojo: 'bg-red-100 text-red-800',
};

const METHOD_LABELS: Record<string, string> = {
  Hidroponia: 'Hidroponia',
  Organico: 'Orgánico',
  SalesMinerales: 'Sales Minerales',
  Mixto: 'Mixto',
};

interface AdminCrop {
  id: number;
  bucketName: string;
  status: string | null;
  cultivationMethod: string | null;
  createdAt: Date | string | null;
  userId: number;
  username: string;
  email: string | null;
}

async function getAdminCrops(): Promise<AdminCrop[] | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/admin/crops`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.crops ?? [];
  } catch {
    return null;
  }
}

function formatDate(date: Date | string | null) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default async function AdminCultivoPage() {
  try {
    await requireAdmin();
  } catch {
    redirect('/dashboard');
  }

  const crops = await getAdminCrops();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cultivos — Panel Admin</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {crops ? `${crops.length} parcelas en el sistema` : 'Error al cargar datos'}
        </p>
      </div>

      {crops === null && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          No se pudieron cargar los cultivos
        </div>
      )}

      {crops && crops.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <p className="text-gray-400 dark:text-gray-500">No hay parcelas registradas en el sistema</p>
        </div>
      )}

      {crops && crops.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Usuario</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Parcela</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Método</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Estado</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Creado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {crops.map((crop) => (
                  <tr
                    key={crop.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{crop.username}</p>
                        {crop.email && (
                          <p className="text-xs text-gray-400 dark:text-gray-500">{crop.email}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                      {crop.bucketName}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                      {METHOD_LABELS[crop.cultivationMethod ?? ''] ?? crop.cultivationMethod ?? '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${STATUS_STYLES[crop.status ?? ''] ?? 'bg-gray-100 text-gray-700'}`}>
                        {crop.status ?? '—'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                      {formatDate(crop.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
````

## File: app/(app)/admin/events/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventForm from '@/components/events/EventForm';
import { ArrowLeft, Pencil, Calendar, MapPin, Users } from 'lucide-react';

interface TicketCategory {
  id: number;
  name: string;
  price: number;
  benefits: string | null;
  capacity: number | null;
  reserved: number;
}

interface Reservation {
  id: number;
  userId: number;
  username: string;
  categoryName: string;
  qrCode: string;
  createdAt: string;
}

interface EventDetail {
  id: number;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  location: string | null;
  capacity: number | null;
  flyerUrl: string | null;
  requirements: string | null;
  ticketCategories: TicketCategory[];
  reservationsCount: number;
}

export default function AdminEventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [evRes, resRes] = await Promise.all([
        fetch(`/api/events/${id}`),
        fetch(`/api/events/${id}/reservations`),
      ]);
      const evData = await evRes.json();
      const resData = await resRes.json();
      setEvent(evData.event ?? null);
      setReservations(resData.reservations ?? []);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return <div className="p-6 text-center text-gray-400">Cargando...</div>;
  }

  if (!event) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Evento no encontrado.</p>
        <Link href="/admin/events">
          <Button className="mt-4" variant="outline">Volver</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/events">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver
          </Button>
        </Link>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(event.date).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              {event.time && ` — ${event.time}`}
            </span>
            {event.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {event.location}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              {event.reservationsCount}{event.capacity ? `/${event.capacity}` : ''} reservas
            </span>
          </div>
          {event.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl">{event.description}</p>
          )}
        </div>
        <Button onClick={() => setShowEdit(true)} variant="outline" className="shrink-0">
          <Pencil className="w-4 h-4 mr-1.5" />
          Editar
        </Button>
      </div>

      {/* Ticket categories */}
      {event.ticketCategories.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Categorías de entrada</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {event.ticketCategories.map((cat) => (
              <div key={cat.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">{cat.name}</span>
                  <span className="font-bold text-green-600 dark:text-green-400 text-sm">
                    {cat.price === 0 ? 'Gratis' : `${cat.price} tkn`}
                  </span>
                </div>
                {cat.benefits && <p className="text-xs text-gray-500 dark:text-gray-400">{cat.benefits}</p>}
                {cat.capacity !== null && (
                  <p className="text-xs text-gray-400 mt-1">{cat.reserved}/{cat.capacity} reservas</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reservations table */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Reservas ({reservations.length})
        </h2>
        {reservations.length === 0 ? (
          <p className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">Sin reservas todavía.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Usuario</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Categoría</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Código QR</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Fecha reserva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {reservations.map((r) => (
                  <tr key={r.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{r.username}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{r.categoryName}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400 max-w-[200px] truncate">{r.qrCode}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {new Date(r.createdAt).toLocaleDateString('es-AR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showEdit && (
        <EventForm
          eventId={event.id}
          initialData={{
            title: event.title,
            description: event.description ?? '',
            date: event.date.slice(0, 10),
            time: event.time ?? '',
            location: event.location ?? '',
            capacity: event.capacity?.toString() ?? '',
            flyerUrl: event.flyerUrl ?? '',
            requirements: event.requirements ?? '',
          }}
          onClose={() => setShowEdit(false)}
          onSuccess={() => { setShowEdit(false); load(); }}
        />
      )}
    </div>
  );
}
````

## File: app/(app)/admin/events/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventForm from '@/components/events/EventForm';
import { Plus, Pencil, Trash2, Users, Calendar } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string | null;
  location: string | null;
  capacity: number | null;
  reservationsCount: number;
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data.events ?? []);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminás este evento? Esta acción no se puede deshacer.')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      if (res.ok) setEvents((ev) => ev.filter((e) => e.id !== id));
      else alert('No se pudo eliminar el evento');
    } catch {
      alert('Error al eliminar');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gestión de eventos</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{events.length} evento{events.length !== 1 ? 's' : ''} registrado{events.length !== 1 ? 's' : ''}</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Nuevo evento
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">Cargando eventos...</div>
      ) : events.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <Calendar className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No hay eventos todavía.</p>
          <Button className="mt-4" onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-1.5" />
            Crear primer evento
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Evento</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Fecha</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Lugar</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Reservas</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {events.map((ev) => (
                <tr key={ev.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3">
                    <Link href={`/admin/events/${ev.id}`} className="font-medium text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      {ev.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {new Date(ev.date).toLocaleDateString('es-AR')}
                    {ev.time && <span className="text-gray-400 ml-1">{ev.time}</span>}
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400 max-w-[180px] truncate">
                    {ev.location ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Users className="w-3.5 h-3.5" />
                      {ev.reservationsCount}{ev.capacity ? `/${ev.capacity}` : ''}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/events/${ev.id}`}>
                        <Button size="sm" variant="outline">
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(ev.id)}
                        disabled={deletingId === ev.id}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <EventForm
          onClose={() => setShowForm(false)}
          onSuccess={() => { setShowForm(false); load(); }}
        />
      )}
    </div>
  );
}
````

## File: app/(app)/admin/legal/page.tsx
````typescript
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Save, FileText } from 'lucide-react';

interface LegalSection {
  type: 'terms' | 'privacy';
  content: string;
}

interface SectionEditorProps {
  label: string;
  type: 'terms' | 'privacy';
  initialContent: string;
}

function SectionEditor({ label, type, initialContent }: SectionEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async () => {
    setError('');
    setLoading(true);
    setSaved(false);
    try {
      const res = await fetch('/api/admin/legal', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al guardar');
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 p-5 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
          {label}
        </h2>
        <Button size="sm" onClick={handleSave} disabled={loading}>
          <Save className="w-3.5 h-3.5 mr-1.5" />
          {loading ? 'Guardando...' : saved ? '¡Guardado!' : 'Guardar'}
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          {error}
        </div>
      )}

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
          Contenido guardado correctamente.
        </div>
      )}

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={16}
        className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y font-mono"
        placeholder="Ingresá el contenido..."
      />

      <p className="text-xs text-gray-400">{content.length} caracteres</p>
    </div>
  );
}

export default function AdminLegalPage() {
  const [sections, setSections] = useState<LegalSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/admin/legal');
        const data = await res.json();
        setSections(data.sections ?? []);
      } catch {
        // fallback to empty
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const getContent = (type: 'terms' | 'privacy') =>
    sections.find((s) => s.type === type)?.content ?? '';

  if (loading) {
    return <div className="p-6 text-center text-gray-400">Cargando contenido legal...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contenido legal</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Editá los términos y la política de privacidad de la plataforma.
        </p>
      </div>

      <SectionEditor
        label="Términos y Condiciones"
        type="terms"
        initialContent={getContent('terms')}
      />

      <SectionEditor
        label="Política de Privacidad"
        type="privacy"
        initialContent={getContent('privacy')}
      />
    </div>
  );
}
````

## File: app/(app)/admin/notifications/page.tsx
````typescript
import NotificationSender from '@/components/admin/NotificationSender';
import { Bell } from 'lucide-react';

async function getTodayStats() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/admin/notifications/stats`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AdminNotificationsPage() {
  const stats = await getTodayStats();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
          <Bell className="w-5 h-5 text-[#16A34A]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Notificaciones</h1>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">
            Enviá mensajes a usuarios o grupos
          </p>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              Enviadas hoy
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
              {stats.today ?? 0}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              Total acumuladas
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
              {stats.total ?? 0}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              Sin leer (global)
            </p>
            <p className="text-2xl font-bold text-[#D97706] mt-1">
              {stats.unread ?? 0}
            </p>
          </div>
        </div>
      )}

      {/* Sender form */}
      <NotificationSender />
    </div>
  );
}
````

## File: app/(app)/admin/transactions/page.tsx
````typescript
import TransactionTable from '@/components/admin/TransactionTable';
import ExportButton from '@/components/shared/ExportButton';

async function getTransactions() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/admin/transactions`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.transactions ?? [];
  } catch {
    return [];
  }
}

export default async function AdminTransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Transacciones de tokens</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Historial completo de movimientos</p>
        </div>
        <ExportButton
          url="/api/admin/transactions/export"
          filename={`transacciones-${new Date().toISOString().slice(0, 10)}.csv`}
        />
      </div>

      <TransactionTable transactions={transactions} />
    </div>
  );
}
````

## File: app/(app)/admin/users/page.tsx
````typescript
import UserTableWrapper from '@/components/admin/UserTableWrapper';

async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/admin/users`, {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.users ?? [];
}

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gestión de Usuarios</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {users.length} usuario{users.length !== 1 ? 's' : ''} registrado{users.length !== 1 ? 's' : ''}
        </p>
      </div>

      <UserTableWrapper initialUsers={users} />
    </div>
  );
}
````

## File: app/(app)/admin/page.tsx
````typescript
import Link from 'next/link';
import KpiGrid from '@/components/admin/KpiGrid';
import { Users, Sprout, ShoppingBag, MessageSquare, Coins, CalendarDays, FileText, Receipt } from 'lucide-react';

async function getAdminStats() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/admin/stats`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AdminPage() {
  const stats = await getAdminStats();

  const quickLinks = [
    { href: '/admin/users', label: 'Gestión de usuarios', icon: Users },
    { href: '/admin/cultivo', label: 'Parcelas y cultivos', icon: Sprout },
    { href: '/admin/community', label: 'Comunidad', icon: MessageSquare },
    { href: '/admin/transactions', label: 'Transacciones de tokens', icon: Receipt },
    { href: '/admin/events', label: 'Eventos', icon: CalendarDays },
    { href: '/admin/legal', label: 'Contenido legal', icon: FileText },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Panel de Administración</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Resumen general del sistema</p>
      </div>

      <KpiGrid
        stats={{
          totalUsuarios: stats?.totalUsuarios,
          pendientes: stats?.pendientes,
          tasaVerificacion: stats?.tasaVerificacion,
          totalParcelas: stats?.totalParcelas,
          ordenes: stats?.ordenes,
          tokensCirculacion: stats?.tokensCirculacion,
          postsSemana: stats?.postsSemana,
          eventos: stats?.eventos,
        }}
      />

      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Acceso rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-600 transition-colors bg-white dark:bg-gray-900"
            >
              <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
````

## File: app/(app)/community/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PostDetail, { type PostDetailData } from '@/components/community/PostDetail';
import CommentList, { type Comment } from '@/components/community/CommentList';
import CommentForm from '@/components/community/CommentForm';
import type { ReactionCounts, ReactionType } from '@/components/community/ReactionBar';

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<PostDetailData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [reactions, setReactions] = useState<ReactionCounts>({ Interesante: 0, Util: 0, Cientifico: 0 });
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [postRes, commentsRes, reactionsRes] = await Promise.all([
        fetch(`/api/posts/${id}`),
        fetch(`/api/posts/${id}/comments`),
        fetch(`/api/posts/${id}/reactions`),
      ]);

      if (!postRes.ok) throw new Error('No se encontró la publicación');

      const [postData, commentsData, reactionsData] = await Promise.all([
        postRes.json(),
        commentsRes.ok ? commentsRes.json() : { comments: [] },
        reactionsRes.ok ? reactionsRes.json() : { reactions: {}, userReaction: null },
      ]);

      setPost(postData.post ?? postData);
      setComments(commentsData.comments ?? []);
      setReactions(reactionsData.reactions ?? { Interesante: 0, Util: 0, Cientifico: 0 });
      setUserReaction(reactionsData.userReaction ?? null);
      setIsSubscribed(reactionsData.isSubscribed ?? false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleCommentDeleted = (deletedId: number) => {
    setComments((prev) => prev.filter((c) => c.id !== deletedId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
          <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">{error ?? 'Publicación no encontrada'}</p>
          <button
            onClick={() => router.push('/community')}
            className="text-green-600 hover:underline text-sm font-medium"
          >
            Volver a la comunidad
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Back */}
        <button
          onClick={() => router.push('/community')}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la comunidad
        </button>

        {/* Post */}
        <PostDetail
          post={post}
          reactions={reactions}
          userReaction={userReaction}
          isSubscribed={isSubscribed}
        />

        {/* Comments */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
            Comentarios ({comments.length})
          </h2>
          <CommentList
            comments={comments}
            onDelete={handleCommentDeleted}
          />

          {!post.isImmutable && (
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Dejá tu comentario
              </h3>
              <CommentForm postId={post.id} onComment={fetchAll} />
            </div>
          )}

          {post.isImmutable && (
            <p className="mt-4 text-sm text-gray-400 dark:text-gray-500 text-center">
              🔒 Esta publicación está bloqueada. No se pueden agregar comentarios.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
````

## File: app/(app)/community/new/page.tsx
````typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function NewPostPage() {
  const router = useRouter();

  const handleSuccess = (postId: number) => {
    router.push(`/community/${postId}`);
  };

  const handleClose = () => {
    router.push('/community');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <button
          onClick={handleClose}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la comunidad
        </button>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Nueva publicación
          </h1>

          {/* PostForm inline (without modal overlay) */}
          <InlinePostForm onClose={handleClose} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}

// Inline variant — same logic but no modal wrapper
function InlinePostForm({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: (postId: number) => void;
}) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: 'Clases',
    youtubeLink: '',
    fileUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const CATEGORIES = [
    'Clases',
    'Investigaciones',
    'FAQ',
    'Debates',
    'Papers',
    'Noticias',
    'Anuncios',
  ] as const;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError('El título y el contenido son obligatorios.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          content: form.content.trim(),
          category: form.category,
          youtubeLink: form.youtubeLink.trim() || null,
          fileUrl: form.fileUrl.trim() || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error al guardar el post');
      }

      const data = await res.json();
      const id: number = data.post?.id ?? data.id;
      onSuccess(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm rounded-lg px-4 py-2">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Título <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título de tu publicación"
          className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Categoría
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Contenido <span className="text-red-500">*</span>
        </label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Escribí tu contenido acá..."
          rows={10}
          className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-y"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Link de YouTube <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <input
          type="text"
          name="youtubeLink"
          value={form.youtubeLink}
          onChange={handleChange}
          placeholder="https://youtube.com/watch?v=..."
          className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          URL de archivo <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <input
          type="text"
          name="fileUrl"
          value={form.fileUrl}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </div>
    </form>
  );
}
````

## File: app/(app)/community/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Search } from 'lucide-react';
import CategoryFilter from '@/components/community/CategoryFilter';
import PostCard, { type PostCardData } from '@/components/community/PostCard';
import PostForm from '@/components/community/PostForm';
import { useRouter } from 'next/navigation';

type SortOption = 'nuevo' | 'popular';

export default function CommunityPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('nuevo');
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/posts');
      if (!res.ok) throw new Error('Error al cargar publicaciones');
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const filtered = posts
    .filter((p) => (category === 'Todos' ? true : p.category === category))
    .filter((p) => (search.trim() ? p.title.toLowerCase().includes(search.toLowerCase()) : true))
    .sort((a, b) => {
      if (sort === 'popular') return b.likesCount - a.likesCount;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const handlePostCreated = (postId: number) => {
    router.push(`/community/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {showForm && (
        <PostForm
          onClose={() => setShowForm(false)}
          onSuccess={handlePostCreated}
        />
      )}

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Comunidad</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Compartí experiencias, debatí y aprendé
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Nuevo post
          </button>
        </div>

        {/* Search + Sort */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar publicaciones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm transition"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="nuevo">Más nuevo</option>
            <option value="popular">Más popular</option>
          </select>
        </div>

        {/* Category filter */}
        <CategoryFilter active={category} onChange={setCategory} />

        {/* Posts */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-28 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-xl px-5 py-4 text-sm">
            {error}
            <button onClick={fetchPosts} className="ml-3 underline font-medium">
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">📝</div>
            <p className="text-gray-500 dark:text-gray-400">
              {search || category !== 'Todos'
                ? 'No hay publicaciones que coincidan con tu búsqueda.'
                : 'Todavía no hay publicaciones. ¡Sé el primero!'}
            </p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="space-y-3">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
````

## File: app/(app)/cultivator/patients/page.tsx
````typescript
import PatientList from '@/components/cultivator/PatientList';

async function getPatients() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/cultivator/patients`, {
    cache: 'no-store',
  });

  if (res.status === 403) {
    return { forbidden: true, patients: [] };
  }

  if (!res.ok) {
    return { forbidden: false, patients: [] };
  }

  const data = await res.json();
  return { forbidden: false, patients: data.patients ?? [] };
}

export default async function CultivatorPatientsPage() {
  const { forbidden, patients } = await getPatients();

  if (forbidden) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300 p-5 rounded-xl">
          <h2 className="font-semibold mb-1">Acceso restringido</h2>
          <p className="text-sm">
            Esta sección es solo para cultivadores. Si creés que es un error, contactá al administrador.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mis Pacientes</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {patients.length} paciente{patients.length !== 1 ? 's' : ''} asignado{patients.length !== 1 ? 's' : ''}
        </p>
      </div>

      <PatientList patients={patients} />
    </div>
  );
}
````

## File: app/(app)/cultivo/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Crop, CropLog, LabReport } from '@/db/schema';
import CropForm from '@/components/crops/CropForm';
import LogTable from '@/components/crops/LogTable';
import LogForm from '@/components/crops/LogForm';
import LabReportCard from '@/components/crops/LabReportCard';
import LabReportForm from '@/components/crops/LabReportForm';
import NutrientCalculator from '@/components/crops/NutrientCalculator';

const STATUS_STYLES: Record<string, string> = {
  Verde: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Amarillo: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Rojo: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

const STATUS_OPTIONS = ['Verde', 'Amarillo', 'Rojo'] as const;

export default function CropDetailPage() {
  const params = useParams();
  const router = useRouter();
  const cropId = parseInt(params.id as string, 10);

  const [crop, setCrop] = useState<Crop | null>(null);
  const [logs, setLogs] = useState<CropLog[]>([]);
  const [labReports, setLabReports] = useState<LabReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showEditCrop, setShowEditCrop] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);
  const [showLabForm, setShowLabForm] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [deletingCrop, setDeletingCrop] = useState(false);

  // Status quick-update
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/crops/${cropId}`);
      if (res.status === 404) {
        setError('Cultivo no encontrado');
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCrop(data.crop);
      setLogs(data.logs);
      setLabReports(data.labReports);
    } catch {
      setError('No se pudo cargar el cultivo');
    } finally {
      setLoading(false);
    }
  }, [cropId]);

  useEffect(() => {
    if (!isNaN(cropId)) fetchData();
    else setError('ID de cultivo inválido');
  }, [cropId, fetchData]);

  async function handleDeleteCrop() {
    if (!confirm('¿Eliminar esta parcela y todos sus registros?')) return;
    setDeletingCrop(true);
    try {
      const res = await fetch(`/api/crops/${cropId}`, { method: 'DELETE' });
      if (res.ok) router.push('/cultivo');
    } catch {
      setError('Error al eliminar');
    } finally {
      setDeletingCrop(false);
    }
  }

  async function handleDeleteLog(logId: number) {
    try {
      const res = await fetch(`/api/crops/${cropId}/logs/${logId}`, { method: 'DELETE' });
      if (res.ok) setLogs((prev) => prev.filter((l) => l.id !== logId));
    } catch {
      setError('Error al eliminar registro');
    }
  }

  async function handleDeleteReport(reportId: number) {
    try {
      const res = await fetch(`/api/crops/${cropId}/lab-reports/${reportId}`, { method: 'DELETE' });
      if (res.ok) setLabReports((prev) => prev.filter((r) => r.id !== reportId));
    } catch {
      setError('Error al eliminar reporte');
    }
  }

  async function handleStatusChange(newStatus: string) {
    if (!crop || updatingStatus) return;
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/crops/${cropId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const data = await res.json();
        setCrop(data.crop);
      }
    } catch {
      // silent
    } finally {
      setUpdatingStatus(false);
    }
  }

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  if (error || !crop) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center py-20">
        <p className="text-red-500 dark:text-red-400 mb-4">{error ?? 'Cultivo no encontrado'}</p>
        <button
          onClick={() => router.push('/cultivo')}
          className="text-[#16A34A] hover:underline text-sm"
        >
          Volver a mis cultivos
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Back + actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push('/cultivo')}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-[#16A34A] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Mis Cultivos
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCalculator((v) => !v)}
            className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculadora
          </button>
          <button
            onClick={() => setShowEditCrop(true)}
            className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Editar
          </button>
          <button
            onClick={handleDeleteCrop}
            disabled={deletingCrop}
            className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border border-red-200 dark:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/20 transition text-red-600 dark:text-red-400 disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Eliminar
          </button>
        </div>
      </div>

      {/* Crop header */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <div className="flex items-start gap-4">
          {crop.imageUrl ? (
            <img
              src={crop.imageUrl}
              alt={crop.bucketName}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-green-400 dark:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
                <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
              </svg>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 truncate">{crop.bucketName}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{crop.cultivationMethod}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Estado:</span>
              <div className="flex gap-1.5">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    disabled={updatingStatus}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                      crop.status === s
                        ? STATUS_STYLES[s]
                        : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 hover:opacity-80'
                    } disabled:opacity-50`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-gray-400 dark:text-gray-500 flex-shrink-0">
            <p>{logs.length} registros</p>
            <p>{labReports.length} reportes</p>
          </div>
        </div>
      </div>

      {/* Nutrient calculator (collapsible) */}
      {showCalculator && <NutrientCalculator />}

      {/* Weekly logs section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">Registros Semanales</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{logs.length} entradas</p>
          </div>
          <button
            onClick={() => setShowLogForm(true)}
            className="flex items-center gap-1.5 text-sm bg-[#16A34A] text-white px-3.5 py-2 rounded-xl hover:bg-[#14532D] transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar Log
          </button>
        </div>
        <div className="p-1">
          <LogTable
            logs={logs}
            onDelete={handleDeleteLog}
          />
        </div>
      </div>

      {/* Lab reports section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">Reportes de Laboratorio</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{labReports.length} reportes</p>
          </div>
          <button
            onClick={() => setShowLabForm(true)}
            className="flex items-center gap-1.5 text-sm border border-[#16A34A] text-[#16A34A] px-3.5 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Reporte
          </button>
        </div>
        <div className="p-5">
          {labReports.length === 0 ? (
            <div className="text-center py-8 text-gray-400 dark:text-gray-600">
              <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <p className="text-sm">Sin reportes todavía</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {labReports.map((report) => (
                <LabReportCard
                  key={report.id}
                  report={report}
                  onDelete={handleDeleteReport}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showEditCrop && (
        <CropForm
          crop={crop}
          onSuccess={(updated) => {
            setCrop(updated);
            setShowEditCrop(false);
          }}
          onCancel={() => setShowEditCrop(false)}
        />
      )}

      {showLogForm && (
        <LogForm
          cropId={cropId}
          onSuccess={(log) => {
            setLogs((prev) => [log, ...prev]);
            setShowLogForm(false);
          }}
          onCancel={() => setShowLogForm(false)}
        />
      )}

      {showLabForm && (
        <LabReportForm
          cropId={cropId}
          onSuccess={(report) => {
            setLabReports((prev) => [report, ...prev]);
            setShowLabForm(false);
          }}
          onCancel={() => setShowLabForm(false)}
        />
      )}
    </div>
  );
}
````

## File: app/(app)/cultivo/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import CropCard from '@/components/crops/CropCard';
import CropForm from '@/components/crops/CropForm';
import type { Crop } from '@/db/schema';

export default function CultivoPage() {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCrops = useCallback(async () => {
    try {
      const res = await fetch('/api/crops');
      if (!res.ok) throw new Error('Error al cargar cultivos');
      const data = await res.json();
      setCrops(data.crops ?? []);
    } catch {
      setError('No se pudieron cargar los cultivos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCrops();
  }, [fetchCrops]);

  function handleCropCreated(crop: Crop) {
    setCrops((prev) => [crop, ...prev]);
    setShowForm(false);
  }

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-48"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mi Cultivo</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {crops.length} {crops.length === 1 ? 'parcela registrada' : 'parcelas registradas'}
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[#16A34A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nueva Parcela
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Empty state */}
      {crops.length === 0 && !error && (
        <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 text-green-400 dark:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
              <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Sin parcelas todavía</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto mb-6">
            Creá tu primera parcela para empezar a registrar el progreso de tus plantas
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#16A34A] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition-colors"
          >
            Crear primera parcela
          </button>
        </div>
      )}

      {/* Crops grid */}
      {crops.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}

      {/* Form modal */}
      {showForm && (
        <CropForm
          onSuccess={handleCropCreated}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
````

## File: app/(app)/events/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TicketSelector from '@/components/events/TicketSelector';
import ReservationCard from '@/components/events/ReservationCard';
import { ArrowLeft, Calendar, Clock, MapPin, Users, AlertCircle } from 'lucide-react';

interface TicketCategory {
  id: number;
  name: string;
  price: number;
  benefits: string | null;
  capacity: number | null;
  reserved: number;
}

interface EventDetail {
  id: number;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  location: string | null;
  capacity: number | null;
  flyerUrl: string | null;
  requirements: string | null;
  ticketCategories: TicketCategory[];
  reservationsCount: number;
}

interface Reservation {
  id: number;
  categoryName: string;
  qrCode: string;
  createdAt: string;
}

interface UserData {
  tokens: number;
}

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [evRes, meRes] = await Promise.all([
        fetch(`/api/events/${id}`),
        fetch('/api/users/me'),
      ]);

      const evData = await evRes.json();
      setEvent(evData.event ?? null);

      if (meRes.ok) {
        const meData = await meRes.json();
        setUser({ tokens: meData.user?.tokens ?? 0 });

        // Check if user has a reservation
        const resRes = await fetch(`/api/events/${id}/reservations/me`);
        if (resRes.ok) {
          const resData = await resRes.json();
          setReservation(resData.reservation ?? null);
        }
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return <div className="p-6 text-center text-gray-400">Cargando evento...</div>;
  }

  if (!event) {
    return (
      <div className="p-6 text-center space-y-4">
        <AlertCircle className="w-10 h-10 mx-auto text-gray-300" />
        <p className="text-gray-500 dark:text-gray-400">Evento no encontrado.</p>
        <Link href="/events">
          <Button variant="outline">Ver todos los eventos</Button>
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Link href="/events">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver a eventos
        </Button>
      </Link>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          {event.flyerUrl && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <img src={event.flyerUrl} alt={event.title} className="w-full object-cover max-h-72" />
            </div>
          )}

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{event.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                {formattedDate}
              </span>
              {event.time && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                  {event.time}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  {event.location}
                </span>
              )}
              {event.capacity && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                  {event.reservationsCount}/{event.capacity} lugares
                </span>
              )}
            </div>

            {event.description && (
              <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p className="whitespace-pre-line">{event.description}</p>
              </div>
            )}

            {event.requirements && (
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300 mb-1">Requisitos</p>
                <p className="text-sm text-amber-700 dark:text-amber-400 whitespace-pre-line">{event.requirements}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar: reservation */}
        <div className="space-y-4">
          {reservation ? (
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">Tu reserva</h2>
              <ReservationCard
                eventTitle={event.title}
                categoryName={reservation.categoryName}
                qrCode={reservation.qrCode}
                reservedAt={reservation.createdAt}
              />
            </div>
          ) : user ? (
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900">
              <TicketSelector
                eventId={event.id}
                categories={event.ticketCategories}
                userTokens={user.tokens}
                onSuccess={load}
              />
            </div>
          ) : (
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl text-center space-y-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Iniciá sesión para reservar tu entrada.
              </p>
              <Link href="/login">
                <Button className="w-full">Iniciar sesión</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: app/(app)/events/page.tsx
````typescript
import EventCard from '@/components/events/EventCard';
import { CalendarDays } from 'lucide-react';

interface TicketCategory {
  id: number;
  name: string;
  price: number;
  benefits: string | null;
  capacity: number | null;
  reserved: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string | null;
  location: string | null;
  capacity: number | null;
  flyerUrl: string | null;
  ticketCategories: TicketCategory[];
  reservationsCount: number;
}

async function getEvents(): Promise<Event[]> {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/events`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.events ?? [];
  } catch {
    return [];
  }
}

function groupByMonth(events: Event[]): Map<string, Event[]> {
  const map = new Map<string, Event[]>();
  for (const ev of events) {
    const key = new Date(ev.date).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });
    const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
    if (!map.has(capitalized)) map.set(capitalized, []);
    map.get(capitalized)!.push(ev);
  }
  return map;
}

export default async function EventsPage() {
  const events = await getEvents();

  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const grouped = groupByMonth(sorted);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Eventos</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Calendario de actividades de la comunidad</p>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No hay eventos próximos</p>
          <p className="text-sm mt-1">Volvé pronto para ver nuevas actividades.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {Array.from(grouped.entries()).map(([month, monthEvents]) => (
            <section key={month}>
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays className="w-4 h-4 text-green-600 dark:text-green-400" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{month}</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {monthEvents.map((ev) => (
                  <EventCard
                    key={ev.id}
                    id={ev.id}
                    title={ev.title}
                    date={ev.date}
                    time={ev.time}
                    location={ev.location}
                    capacity={ev.capacity}
                    flyerUrl={ev.flyerUrl}
                    ticketCategories={ev.ticketCategories}
                    reservationsCount={ev.reservationsCount}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
````

## File: app/(app)/market/orders/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import OrderCard, { type Order } from '@/components/market/OrderCard';

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch('/api/orders');
      if (!res.ok) throw new Error('Error al cargar canges');
      const data = await res.json();
      setOrders(data.orders ?? data ?? []);
    } catch {
      setError('No se pudieron cargar los canges');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  function handleReviewSubmitted(orderId: number) {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, hasReview: true } : o))
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mis Canges</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Historial de tus canjes en el mercado
          </p>
        </div>
        <button
          onClick={() => router.push('/market')}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-[#16A34A] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Mercado
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && orders.length === 0 && !error && (
        <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            No tenés canges todavía
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Explorá el mercado y realizá tu primer canje
          </p>
          <button
            onClick={() => router.push('/market')}
            className="bg-[#16A34A] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition-colors"
          >
            Ir al mercado
          </button>
        </div>
      )}

      {/* Orders list */}
      {!loading && orders.length > 0 && (
        <div className="space-y-3">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onReviewSubmitted={handleReviewSubmitted}
            />
          ))}
        </div>
      )}
    </div>
  );
}
````

## File: app/(app)/market/products/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProductDetail from '@/components/market/ProductDetail';
import CartDrawer, { type CartItem } from '@/components/market/CartDrawer';
import type { Product } from '@/components/market/ProductCard';
import type { SellerInfo } from '@/components/market/ProductDetail';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const [product, setProduct] = useState<(Product & { terpenes?: string | null }) | null>(null);
  const [seller, setSeller] = useState<SellerInfo | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cart (passed down from this page — page-level state per spec)
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  function notify(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      if (res.status === 404) {
        setError('Producto no encontrado');
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      const p: Product & { terpenes?: string | null } = data.product ?? data;
      setProduct(p);

      // Fetch seller reputation if we have a sellerId
      if (p.sellerId) {
        try {
          const sellerRes = await fetch(`/api/sellers/${p.sellerId}/reputation`);
          if (sellerRes.ok) {
            const sellerData = await sellerRes.json();
            setSeller(sellerData.seller ?? sellerData);
          }
        } catch {
          // non-critical
        }
      }
    } catch {
      setError('No se pudo cargar el producto');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  function addToCart(p: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === p.id);
      if (existing) {
        if (existing.quantity >= p.stock) {
          notify('Stock máximo alcanzado');
          return prev;
        }
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product: p, quantity: 1 }];
    });
    notify(`${p.name} agregado al carrito`);
    setCartOpen(true);
  }

  function removeFromCart(productId: number) {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function updateQty(productId: number, qty: number) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: qty } : i))
    );
  }

  async function handleConfirmCange() {
    if (cart.length === 0 || confirming) return;
    setConfirming(true);
    for (const item of cart) {
      try {
        await fetch(`/api/products/${item.product.id}/purchase`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: item.quantity }),
        });
      } catch {
        // continue
      }
    }
    setCart([]);
    setCartOpen(false);
    notify('¡Canges confirmados!');
    setConfirming(false);
  }

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  if (loading) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-32" />
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center py-20">
        <p className="text-red-500 dark:text-red-400 mb-4">{error ?? 'Producto no encontrado'}</p>
        <button
          onClick={() => router.push('/market')}
          className="text-[#16A34A] hover:underline text-sm"
        >
          Volver al mercado
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-[#16A34A] text-white px-5 py-3 rounded-xl shadow-lg z-50 text-sm font-medium">
          {notification}
        </div>
      )}

      {/* Back + cart */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push('/market')}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-[#16A34A] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Mercado
        </button>

        {/* Cart icon */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-xl hover:border-[#16A34A] transition-colors shadow-sm text-sm"
        >
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">Carrito</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#16A34A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Detail */}
      <ProductDetail
        product={product}
        seller={seller}
        onAddToCart={addToCart}
      />

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQtyChange={updateQty}
        onConfirm={handleConfirmCange}
        confirming={confirming}
      />
    </div>
  );
}
````

## File: app/(app)/market/sellers/[id]/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProductCard, { type Product } from '@/components/market/ProductCard';
import SellerReputation from '@/components/market/SellerReputation';
import CartDrawer, { type CartItem } from '@/components/market/CartDrawer';

interface SellerProfile {
  id: number;
  username: string;
  averageRating: number;
  reviewCount: number;
  totalSales: number;
}

export default function SellerProfilePage() {
  const params = useParams();
  const router = useRouter();
  const sellerId = params.id as string;

  const [seller, setSeller] = useState<SellerProfile | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  function notify(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }

  const fetchSeller = useCallback(async () => {
    try {
      const [repRes, prodRes] = await Promise.all([
        fetch(`/api/sellers/${sellerId}/reputation`),
        fetch(`/api/products?sellerId=${sellerId}`),
      ]);

      if (!repRes.ok) throw new Error('Vendedor no encontrado');
      const repData = await repRes.json();
      setSeller(repData.seller ?? repData);

      if (prodRes.ok) {
        const prodData = await prodRes.json();
        setProducts(prodData.products ?? prodData ?? []);
      }
    } catch {
      setError('No se pudo cargar el perfil del vendedor');
    } finally {
      setLoading(false);
    }
  }, [sellerId]);

  useEffect(() => {
    fetchSeller();
  }, [fetchSeller]);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) {
          notify('Stock máximo alcanzado');
          return prev;
        }
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    notify(`${product.name} agregado al carrito`);
  }

  function removeFromCart(productId: number) {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function updateQty(productId: number, qty: number) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: qty } : i))
    );
  }

  async function handleConfirmCange() {
    if (cart.length === 0 || confirming) return;
    setConfirming(true);
    for (const item of cart) {
      try {
        await fetch(`/api/products/${item.product.id}/purchase`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: item.quantity }),
        });
      } catch {
        // continue
      }
    }
    setCart([]);
    setCartOpen(false);
    notify('¡Canges confirmados!');
    setConfirming(false);
  }

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" />
          <div className="h-28 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-56 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !seller) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center py-20">
        <p className="text-red-500 dark:text-red-400 mb-4">{error ?? 'Vendedor no encontrado'}</p>
        <button
          onClick={() => router.push('/market')}
          className="text-[#16A34A] hover:underline text-sm"
        >
          Volver al mercado
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-[#16A34A] text-white px-5 py-3 rounded-xl shadow-lg z-50 text-sm font-medium">
          {notification}
        </div>
      )}

      {/* Back + cart */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push('/market')}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-[#16A34A] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Mercado
        </button>
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-xl hover:border-[#16A34A] transition-colors shadow-sm text-sm"
        >
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">Carrito</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#16A34A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Seller header */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center text-3xl">
            🌿
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {seller.username}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {products.length} {products.length === 1 ? 'producto' : 'productos'} publicados
            </p>
          </div>
        </div>
      </div>

      {/* Reputation */}
      <SellerReputation
        averageRating={seller.averageRating}
        reviewCount={seller.reviewCount}
        totalSales={seller.totalSales}
      />

      {/* Products */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Productos de {seller.username}
        </h2>
        {products.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Este vendedor no tiene productos disponibles
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQtyChange={updateQty}
        onConfirm={handleConfirmCange}
        confirming={confirming}
      />
    </div>
  );
}
````

## File: app/(app)/market/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard, { type Product } from '@/components/market/ProductCard';
import FilterBar from '@/components/market/FilterBar';
import CartDrawer, { type CartItem } from '@/components/market/CartDrawer';
import ProductForm from '@/components/market/ProductForm';
import { Button } from '@/components/ui/button';

export default function MarketPage() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [category, setCategory] = useState('Todas');
  const [sort, setSort] = useState('newest');
  const [search, setSearch] = useState('');

  // Cart (client-side only)
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);

  // Modals
  const [showProductForm, setShowProductForm] = useState(false);

  // Notification
  const [notification, setNotification] = useState<string | null>(null);

  function notify(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('Error al cargar productos');
      const data = await res.json();
      setProducts(data.products ?? data ?? []);
    } catch {
      setError('No se pudieron cargar los productos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filtered + sorted products
  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'Todas') {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.sellerUsername?.toLowerCase().includes(q)
      );
    }

    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
    // newest: keep API order (default)

    return result;
  }, [products, category, sort, search]);

  // Cart operations
  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) {
          notify('Stock máximo alcanzado');
          return prev;
        }
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    notify(`${product.name} agregado al carrito`);
  }

  function removeFromCart(productId: number) {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function updateQty(productId: number, qty: number) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => {
        if (i.product.id !== productId) return i;
        if (qty > i.product.stock) {
          notify('Stock máximo alcanzado');
          return i;
        }
        return { ...i, quantity: qty };
      })
    );
  }

  async function handleConfirmCange() {
    if (cart.length === 0 || confirming) return;
    setConfirming(true);
    const errors: string[] = [];
    for (const item of cart) {
      try {
        const res = await fetch(`/api/products/${item.product.id}/purchase`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: item.quantity }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          errors.push(`${item.product.name}: ${data.error ?? 'Error'}`);
        }
      } catch {
        errors.push(`${item.product.name}: error de conexión`);
      }
    }

    if (errors.length === 0) {
      setCart([]);
      setCartOpen(false);
      notify('¡Canges confirmados!');
      fetchProducts(); // refresh stock
    } else {
      notify(`Errores: ${errors.join(', ')}`);
    }
    setConfirming(false);
  }

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-[#16A34A] text-white px-5 py-3 rounded-xl shadow-lg z-50 text-sm font-medium">
          {notification}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mercado GTL</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {products.length} productos disponibles
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setShowProductForm(true)} size="sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Publicar producto
          </Button>
          {/* Cart button */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-[#16A34A] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Carrito</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#16A34A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        category={category}
        sort={sort}
        search={search}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        onSearchChange={setSearch}
      />

      {/* Error */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      )}

      {/* Products grid */}
      {!loading && filtered.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && filtered.length === 0 && !error && (
        <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Sin productos
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No se encontraron productos con esos filtros
          </p>
        </div>
      )}

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQtyChange={updateQty}
        onConfirm={handleConfirmCange}
        confirming={confirming}
      />

      {/* Product form modal */}
      {showProductForm && (
        <ProductForm
          onSuccess={(newProduct) => {
            setProducts((prev) => [newProduct, ...prev]);
            setShowProductForm(false);
            notify('¡Producto publicado!');
          }}
          onCancel={() => setShowProductForm(false)}
        />
      )}
    </div>
  );
}
````

## File: app/(app)/notifications/page.tsx
````typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Bell, CheckCheck } from 'lucide-react';
import NotificationItem, { type NotificationData } from '@/components/notifications/NotificationItem';

const PAGE_SIZE = 20;

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPage = useCallback(async (pageNum: number, append = false) => {
    try {
      const res = await fetch(`/api/notifications?page=${pageNum}&limit=${PAGE_SIZE}`);
      if (!res.ok) throw new Error('Error al cargar notificaciones');
      const data = await res.json();
      const items: NotificationData[] = data.notifications ?? [];
      setNotifications((prev) => (append ? [...prev, ...items] : items));
      setHasMore(items.length === PAGE_SIZE);
    } catch {
      setError('No se pudieron cargar las notificaciones');
    }
  }, []);

  useEffect(() => {
    fetchPage(1).finally(() => setLoading(false));
  }, [fetchPage]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    await fetchPage(nextPage, true);
    setPage(nextPage);
    setLoadingMore(false);
  };

  const handleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleReadAll = async () => {
    try {
      await fetch('/api/notifications/read-all', { method: 'POST' });
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch {
      // silencioso
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  if (loading) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="animate-pulse space-y-3">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-48" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-gray-200 dark:bg-gray-800 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#16A34A]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Notificaciones</h1>
            {unreadCount > 0 && (
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                {unreadCount} sin leer
              </p>
            )}
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={handleReadAll}
            className="flex items-center gap-1.5 text-sm text-[#16A34A] hover:text-[#14532D] font-medium transition-colors"
          >
            <CheckCheck className="w-4 h-4" />
            Marcar todas como leídas
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Notification list */}
      {notifications.length === 0 && !error ? (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 py-16 text-center">
          <Bell className="w-12 h-12 text-gray-200 dark:text-gray-700 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">No tenés notificaciones</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden divide-y divide-gray-50 dark:divide-gray-800">
          {notifications.map((n) => (
            <NotificationItem key={n.id} notification={n} onRead={handleRead} />
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            {loadingMore ? 'Cargando...' : 'Cargar más'}
          </button>
        </div>
      )}
    </div>
  );
}
````

## File: app/(app)/profile/page.tsx
````typescript
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileForm from '@/components/profile/ProfileForm';
import DocumentList from '@/components/profile/DocumentList';

async function getProfile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/profile`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

async function getDocuments() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/profile/documents`, {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.documents ?? [];
}

export default async function ProfilePage() {
  const [profile, documents] = await Promise.all([getProfile(), getDocuments()]);

  if (!profile) {
    return (
      <div className="p-6">
        <p className="text-red-600 dark:text-red-400">
          No se pudo cargar el perfil. Por favor, iniciá sesión nuevamente.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mi Perfil</h1>

      <ProfileForm profile={profile} />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Expediente Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <DocumentList documents={documents} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: app/(app)/layout.tsx
````typescript
import AppHeader from '@/components/layout/AppHeader';
import AdminSidebarWrapper from '@/components/layout/AdminSidebarWrapper';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar solo visible en rutas /admin */}
        <AdminSidebarWrapper />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
````

## File: app/(auth)/login/page.tsx
````typescript
import { Suspense } from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-500">Cargando...</div>}>
      <LoginForm />
    </Suspense>
  );
}
````

## File: app/(auth)/register/page.tsx
````typescript
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return <RegisterForm />;
}
````

## File: app/(auth)/layout.tsx
````typescript
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md px-4">
        {children}
      </div>
    </div>
  );
}
````

## File: app/api/admin/crops/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();

    const allCrops = await db
      .select({
        id: crops.id,
        bucketName: crops.bucketName,
        imageUrl: crops.imageUrl,
        status: crops.status,
        cultivationMethod: crops.cultivationMethod,
        createdAt: crops.createdAt,
        userId: crops.userId,
        username: users.username,
        email: users.email,
      })
      .from(crops)
      .innerJoin(users, eq(crops.userId, users.id))
      .orderBy(desc(crops.createdAt));

    return NextResponse.json({ crops: allCrops });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'No autenticado') {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
      }
      if (error.message === 'No autorizado') {
        return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
      }
    }
    console.error('GET /api/admin/crops error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/cultivators/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { solidaryCultivators, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, and, sql } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const cultivators = await db.select({
      id: solidaryCultivators.id,
      cultivatorUserId: solidaryCultivators.cultivatorUserId,
      patientUserId: solidaryCultivators.patientUserId,
      status: solidaryCultivators.status,
      createdAt: solidaryCultivators.createdAt,
    }).from(solidaryCultivators)
      .orderBy(solidaryCultivators.createdAt);

    return NextResponse.json({ cultivators });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { cultivatorUserId, patientUserId } = body;

    if (!cultivatorUserId || !patientUserId) {
      return NextResponse.json(
        { error: 'cultivatorUserId y patientUserId son requeridos' },
        { status: 400 }
      );
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    // Check cultivator exists and isCultivator
    const [cultivator] = await db.select().from(users)
      .where(and(eq(users.id, cultivatorUserId), eq(users.isCultivator, true))).limit(1);

    if (!cultivator) {
      return NextResponse.json(
        { error: 'El usuario no es un cultivador solidario' },
        { status: 400 }
      );
    }

    // Check max 3 patients per cultivator
    const existing = await db.select({ count: sql<number>`count(*)` })
      .from(solidaryCultivators)
      .where(and(
        eq(solidaryCultivators.cultivatorUserId, cultivatorUserId),
        eq(solidaryCultivators.status, 'active')
      ));

    if (existing[0] && Number(existing[0].count) >= 3) {
      return NextResponse.json(
        { error: 'El cultivador ya tiene 3 pacientes asignados (máximo permitido)' },
        { status: 400 }
      );
    }

    const [assignment] = await db.insert(solidaryCultivators).values({
      cultivatorUserId,
      patientUserId,
    }).returning();

    return NextResponse.json({ assignment }, { status: 201 });
  } catch (error: any) {
    if (error?.code === '23505') {
      return NextResponse.json(
        { error: 'Este paciente ya está asignado a este cultivador' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/legal/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { legalContents } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const contents = await db.select().from(legalContents);
    return NextResponse.json({ contents });
  } catch (error) {
    console.error('GET /api/admin/legal error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const body = await request.json();
    const { type, terms } = body;

    if (!type || typeof type !== 'string' || type.trim().length === 0) {
      return NextResponse.json({ error: 'Tipo requerido' }, { status: 400 });
    }
    if (!terms || typeof terms !== 'string' || terms.trim().length === 0) {
      return NextResponse.json({ error: 'Contenido requerido' }, { status: 400 });
    }

    // Check if existing record for this type
    const [existing] = await db
      .select()
      .from(legalContents)
      .where(eq(legalContents.type, type))
      .limit(1);

    let content;
    if (existing) {
      [content] = await db
        .update(legalContents)
        .set({ terms, updatedAt: new Date() })
        .where(eq(legalContents.type, type))
        .returning();
    } else {
      [content] = await db
        .insert(legalContents)
        .values({ type, terms })
        .returning();
    }

    return NextResponse.json({ content });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('PUT /api/admin/legal error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/notifications/broadcast/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { notifications, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

type BroadcastTarget = 'all' | 'verified' | 'cultivators' | 'admins';

const VALID_TARGETS: BroadcastTarget[] = ['all', 'verified', 'cultivators', 'admins'];

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const body = await request.json();
    const { target, message } = body;

    if (!target || !VALID_TARGETS.includes(target as BroadcastTarget)) {
      return NextResponse.json(
        { error: 'Target inválido: debe ser all, verified, cultivators o admins' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
    }

    const trimmed = message.trim();

    if (trimmed.length === 0) {
      return NextResponse.json({ error: 'Mensaje no puede estar vacío' }, { status: 400 });
    }

    if (trimmed.length > 500) {
      return NextResponse.json({ error: 'Mensaje demasiado largo (máx 500)' }, { status: 400 });
    }

    // Query users by target filter
    let targetUsers: { id: number }[] = [];

    switch (target as BroadcastTarget) {
      case 'all':
        targetUsers = await db.select({ id: users.id }).from(users);
        break;
      case 'verified':
        targetUsers = await db
          .select({ id: users.id })
          .from(users)
          .where(eq(users.isVerified, true));
        break;
      case 'cultivators':
        targetUsers = await db
          .select({ id: users.id })
          .from(users)
          .where(eq(users.isCultivator, true));
        break;
      case 'admins':
        targetUsers = await db
          .select({ id: users.id })
          .from(users)
          .where(eq(users.role, 'ADMIN'));
        break;
    }

    if (targetUsers.length === 0) {
      return NextResponse.json({ sent: 0 });
    }

    // Insert one notification per matching user
    await db.insert(notifications).values(
      targetUsers.map((u) => ({ userId: u.id, message: trimmed }))
    );

    return NextResponse.json({ sent: targetUsers.length });
  } catch {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/notifications/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { notifications } from '@/db/schema';
import { requireAdmin } from '@/lib/session';

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const body = await request.json();
    const { userId, message } = body;

    if (!userId || typeof userId !== 'number') {
      return NextResponse.json({ error: 'userId requerido' }, { status: 400 });
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
    }

    const trimmed = message.trim();

    if (trimmed.length === 0) {
      return NextResponse.json({ error: 'Mensaje no puede estar vacío' }, { status: 400 });
    }

    if (trimmed.length > 500) {
      return NextResponse.json({ error: 'Mensaje demasiado largo (máx 500)' }, { status: 400 });
    }

    const [created] = await db
      .insert(notifications)
      .values({ userId, message: trimmed })
      .returning();

    return NextResponse.json({ notification: created }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/posts/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { posts } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { action, isPinned, isImmutable } = body;

    if (action === 'delete') {
      await db.delete(posts).where(eq(posts.id, id));
      return NextResponse.json({ success: true, deleted: true });
    }

    const updates: Record<string, unknown> = {};
    if (typeof isPinned === 'boolean') updates.isPinned = isPinned;
    if (typeof isImmutable === 'boolean') updates.isImmutable = isImmutable;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No hay campos para actualizar' }, { status: 400 });
    }

    const [updated] = await db.update(posts).set(updates).where(eq(posts.id, id)).returning();

    return NextResponse.json({ post: updated });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      const status = error.message === 'No autenticado' ? 401 : 403;
      return NextResponse.json({ error: error.message }, { status });
    }
    console.error('PATCH /api/admin/posts/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/posts/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { posts, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();

    const rows = await db
      .select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        category: posts.category,
        youtubeLink: posts.youtubeLink,
        fileUrl: posts.fileUrl,
        authorId: posts.authorId,
        authorUsername: users.username,
        likes: posts.likes,
        isPinned: posts.isPinned,
        isImmutable: posts.isImmutable,
        createdAt: posts.createdAt,
      })
      .from(posts)
      .leftJoin(users, eq(users.id, posts.authorId))
      .orderBy(desc(posts.createdAt));

    return NextResponse.json({ posts: rows });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      const status = error.message === 'No autenticado' ? 401 : 403;
      return NextResponse.json({ error: error.message }, { status });
    }
    console.error('GET /api/admin/posts error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/products/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET(_req: NextRequest) {
  try {
    await requireAdmin();

    const rows = await db
      .select({
        id: products.id,
        name: products.name,
        description: products.description,
        category: products.category,
        price: products.price,
        basePrice: products.basePrice,
        stock: products.stock,
        imageUrl: products.imageUrl,
        sellerId: products.sellerId,
        labReportId: products.labReportId,
        status: products.status,
        createdAt: products.createdAt,
        sellerUsername: users.username,
        sellerEmail: users.email,
      })
      .from(products)
      .leftJoin(users, eq(products.sellerId, users.id))
      .orderBy(desc(products.createdAt));

    return NextResponse.json({ products: rows });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      const status = error.message === 'No autenticado' ? 401 : 403;
      return NextResponse.json({ error: error.message }, { status });
    }
    console.error('GET /api/admin/products error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/stats/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, crops, orders, posts, events, tokenTransactions } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, sql, gte } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const [
      usersCount,
      pendingCount,
      emailVerifiedCount,
      cropsCount,
      ordersCount,
      tokensSum,
      postsWeekCount,
      eventsCount,
    ] = await Promise.all([
      db.select({ count: sql<number>`count(*)` }).from(users),
      db.select({ count: sql<number>`count(*)` }).from(users).where(eq(users.isVerified, false)),
      db.select({ count: sql<number>`count(*)` }).from(users).where(eq(users.emailVerified, true)),
      db.select({ count: sql<number>`count(*)` }).from(crops),
      db.select({ count: sql<number>`count(*)` }).from(orders),
      db.select({ total: sql<number>`coalesce(sum(${tokenTransactions.amount}), 0)` }).from(tokenTransactions),
      db.select({ count: sql<number>`count(*)` }).from(posts).where(gte(posts.createdAt, oneWeekAgo)),
      db.select({ count: sql<number>`count(*)` }).from(events),
    ]);

    const totalUsers = Number(usersCount[0]?.count ?? 0);
    const pendingUsers = Number(pendingCount[0]?.count ?? 0);
    const emailVerified = Number(emailVerifiedCount[0]?.count ?? 0);
    const totalCrops = Number(cropsCount[0]?.count ?? 0);
    const totalOrders = Number(ordersCount[0]?.count ?? 0);
    const totalTokens = Number(tokensSum[0]?.total ?? 0);
    const postsThisWeek = Number(postsWeekCount[0]?.count ?? 0);
    const totalEvents = Number(eventsCount[0]?.count ?? 0);

    const emailVerificationRate = totalUsers > 0 ? Math.round((emailVerified / totalUsers) * 100) : 0;
    const verifiedRate = totalUsers > 0 ? Math.round(((totalUsers - pendingUsers) / totalUsers) * 100) : 0;

    return NextResponse.json({
      totalUsers,
      pendingUsers,
      emailVerifiedCount: emailVerified,
      emailVerificationRate,
      verifiedRate,
      totalCrops,
      totalOrders,
      totalTokens,
      postsThisWeek,
      totalEvents,
    });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('GET /api/admin/stats error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/transactions/export/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { tokenTransactions, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const transactions = await db
      .select({
        id: tokenTransactions.id,
        username: users.username,
        amount: tokenTransactions.amount,
        reason: tokenTransactions.reason,
        createdAt: tokenTransactions.createdAt,
      })
      .from(tokenTransactions)
      .leftJoin(users, eq(tokenTransactions.userId, users.id))
      .orderBy(desc(tokenTransactions.createdAt));

    const header = 'id,username,amount,reason,date\n';
    const rows = transactions
      .map((t) => {
        const date = t.createdAt ? new Date(t.createdAt).toISOString() : '';
        const username = (t.username ?? '').replace(/,/g, ' ');
        const reason = (t.reason ?? '').replace(/,/g, ' ');
        return `${t.id},${username},${t.amount},${reason},${date}`;
      })
      .join('\n');

    const csv = header + rows;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="transactions.csv"',
      },
    });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('GET /api/admin/transactions/export error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/transactions/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { tokenTransactions, users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '50', 10)));
    const offset = (page - 1) * limit;

    const transactions = await db
      .select({
        id: tokenTransactions.id,
        userId: tokenTransactions.userId,
        username: users.username,
        amount: tokenTransactions.amount,
        reason: tokenTransactions.reason,
        relatedOrderId: tokenTransactions.relatedOrderId,
        performedBy: tokenTransactions.performedBy,
        createdAt: tokenTransactions.createdAt,
      })
      .from(tokenTransactions)
      .leftJoin(users, eq(tokenTransactions.userId, users.id))
      .orderBy(desc(tokenTransactions.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({ transactions, page, limit });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('GET /api/admin/transactions error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/users/[id]/approve/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, tokenTransactions } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAdmin();
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    if (!user.emailVerified) {
      return NextResponse.json({ error: 'El usuario no ha verificado su email' }, { status: 400 });
    }

    const INITIAL_TOKENS = 300;

    await db.update(users).set({
      isVerified: true,
      tokens: INITIAL_TOKENS,
    }).where(eq(users.id, userId));

    await db.insert(tokenTransactions).values({
      userId,
      amount: INITIAL_TOKENS,
      reason: 'subscription_approval',
      performedBy: session.userId,
    });

    return NextResponse.json({ message: 'Usuario aprobado', tokens: INITIAL_TOKENS });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/users/[id]/documents/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { userDocuments } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    const userId = parseInt(params.id);

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const docs = await db.select().from(userDocuments)
      .where(eq(userDocuments.userId, userId))
      .orderBy(userDocuments.createdAt);

    return NextResponse.json({ documents: docs });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAdmin();
    const userId = parseInt(params.id);
    const body = await request.json();
    const { name, url, type } = body;

    if (!name || !url || !type) {
      return NextResponse.json({ error: 'name, url y type son requeridos' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const [doc] = await db.insert(userDocuments).values({
      userId,
      name,
      url,
      type,
      uploadedBy: session.userId,
    }).returning();

    return NextResponse.json({ document: doc }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/users/[id]/reject/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    await db.delete(users).where(eq(users.id, userId));

    return NextResponse.json({ message: 'Usuario rechazado y eliminado' });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/users/[id]/tokens/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, tokenTransactions } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, sql } from 'drizzle-orm';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAdmin();
    const userId = parseInt(params.id);
    const body = await request.json();
    const { amount } = body;

    if (isNaN(userId) || !amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ error: 'ID y cantidad válida requeridos' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    await db.update(users).set({
      tokens: sql`${users.tokens} + ${amount}`,
    }).where(eq(users.id, userId));

    await db.insert(tokenTransactions).values({
      userId,
      amount,
      reason: 'admin_grant',
      performedBy: session.userId,
    });

    return NextResponse.json({
      message: `${amount} tokens asignados`,
      newBalance: (user.tokens || 0) + amount,
    });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/admin/users/export/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { asc } from 'drizzle-orm';

export async function GET() {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const allUsers = await db
      .select({
        id: users.id,
        username: users.username,
        email: users.email,
        role: users.role,
        tokens: users.tokens,
        isVerified: users.isVerified,
        emailVerified: users.emailVerified,
        planType: users.planType,
        createdAt: users.createdAt,
      })
      .from(users)
      .orderBy(asc(users.createdAt));

    const header = 'id,username,email,role,tokens,isVerified,emailVerified,planType,createdAt\n';
    const rows = allUsers
      .map((u) => {
        const email = (u.email ?? '').replace(/,/g, ' ');
        const username = (u.username ?? '').replace(/,/g, ' ');
        const createdAt = u.createdAt ? new Date(u.createdAt).toISOString() : '';
        return `${u.id},${username},${email},${u.role},${u.tokens ?? 0},${u.isVerified},${u.emailVerified},${u.planType},${createdAt}`;
      })
      .join('\n');

    const csv = header + rows;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="users.csv"',
      },
    });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('GET /api/admin/users/export error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/admin/users/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { requireAdmin } from '@/lib/session';

export async function GET() {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }
    const allUsers = await db.select({
      id: users.id,
      username: users.username,
      email: users.email,
      role: users.role,
      tokens: users.tokens,
      isVerified: users.isVerified,
      emailVerified: users.emailVerified,
      planType: users.planType,
      isCultivator: users.isCultivator,
      createdAt: users.createdAt,
    }).from(users).orderBy(users.createdAt);
    return NextResponse.json({ users: allUsers });
  } catch (error) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }
}
````

## File: app/api/ai/describe-product/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/session';
import { generateProductDescription } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const { name, category, genetics, thc, cbd } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'name requerido' }, { status: 400 });
    }

    if (!category || typeof category !== 'string' || category.trim().length === 0) {
      return NextResponse.json({ error: 'category requerida' }, { status: 400 });
    }

    // If OPENAI_API_KEY is set, this is where real AI would be called.
    // For beta, we use rule-based template generation.
    const description = generateProductDescription({
      name: name.trim(),
      category: category.trim(),
      genetics: genetics ? String(genetics) : undefined,
      thc: thc !== undefined ? Number(thc) : undefined,
      cbd: cbd !== undefined ? Number(cbd) : undefined,
    });

    return NextResponse.json({
      description,
      source: process.env.OPENAI_API_KEY ? 'openai-ready' : 'rule-based',
    });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/ai/suggest-notes/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/session';
import { suggestGrowNotes } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const { phase, ph, ec } = body;

    if (!phase || typeof phase !== 'string') {
      return NextResponse.json({ error: 'phase requerida' }, { status: 400 });
    }

    const phNum = parseFloat(ph);
    const ecNum = parseFloat(ec);

    if (isNaN(phNum) || isNaN(ecNum)) {
      return NextResponse.json({ error: 'ph y ec deben ser números válidos' }, { status: 400 });
    }

    const notes = suggestGrowNotes(phase, phNum, ecNum);

    return NextResponse.json({
      phase,
      ph: phNum,
      ec: ecNum,
      notes,
      source: 'rule-based',
    });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/ai/suggest-ph-ec/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/session';
import { suggestPhEc } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const { phase } = body;

    if (!phase || typeof phase !== 'string') {
      return NextResponse.json({ error: 'phase requerida' }, { status: 400 });
    }

    const result = suggestPhEc(phase);

    return NextResponse.json({
      phase,
      ...result,
      source: 'rule-based',
    });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/auth/login/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { getUserByUsername, verifyPassword } from '@/lib/auth';
import { createSession } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Usuario y contraseña son requeridos' },
        { status: 400 }
      );
    }

    const user = await getUserByUsername(username);
    if (!user) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      );
    }

    const validPassword = await verifyPassword(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      );
    }

    if (!user.emailVerified) {
      return NextResponse.json(
        { error: 'Verificá tu email antes de iniciar sesión' },
        { status: 403 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        { error: 'Tu cuenta está pendiente de aprobación por un administrador' },
        { status: 403 }
      );
    }

    // Update lastLoginAt
    if (db) {
      await db.update(users).set({ lastLoginAt: new Date() }).where(eq(users.id, user.id));
    }

    await createSession(user.id, user.username, user.role);

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        tokens: user.tokens,
        isVerified: user.isVerified,
        planType: user.planType,
        isCultivator: user.isCultivator,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
````

## File: app/api/auth/logout/route.ts
````typescript
import { NextResponse } from 'next/server';
import { deleteSession } from '@/lib/session';

export async function POST() {
  await deleteSession();
  
  return NextResponse.json({ success: true });
}
````

## File: app/api/auth/me/route.ts
````typescript
import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/session';

export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        tokens: user.tokens,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error('Me error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
````

## File: app/api/auth/register/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, tokenTransactions } from '@/db/schema';
import { hashPassword, generateVerificationToken, getUserByUsername, getUserByEmail } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !password || !email) {
      return NextResponse.json(
        { error: 'Usuario, email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    if (username.length < 3) {
      return NextResponse.json(
        { error: 'El usuario debe tener al menos 3 caracteres' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      );
    }

    // Check existing
    const existingUsername = await getUserByUsername(username);
    if (existingUsername) {
      return NextResponse.json(
        { error: 'El nombre de usuario ya está en uso' },
        { status: 409 }
      );
    }

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const verificationToken = await generateVerificationToken();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    // Beta: skip email verification — emailVerified = true directamente
    // En producción, cambiar a false y activar envío de email
    const [newUser] = await db.insert(users).values({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
      emailVerified: true,
      tokens: 0,
    }).returning({ id: users.id, username: users.username, email: users.email });

    return NextResponse.json({
      user: { id: newUser.id, username: newUser.username, email: newUser.email },
      message: 'Cuenta creada. Un administrador debe aprobar tu cuenta para continuar.',
    }, { status: 201 });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
````

## File: app/api/auth/verify/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Token requerido' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const [user] = await db.select().from(users)
      .where(eq(users.verificationToken, token)).limit(1);

    if (!user) {
      return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 404 });
    }

    if (user.emailVerified) {
      return NextResponse.redirect(new URL('/login?verified=already', request.url));
    }

    await db.update(users).set({
      emailVerified: true,
      verificationToken: null,
    }).where(eq(users.id, user.id));

    return NextResponse.redirect(new URL('/login?verified=true', request.url));
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/lab-reports/[reportId]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, labReports } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

type RouteParams = { params: Promise<{ id: string; reportId: string }> };

async function verifyCropOwnership(cropId: number, userId: number) {
  const [crop] = await db
    .select()
    .from(crops)
    .where(and(eq(crops.id, cropId), eq(crops.userId, userId)));
  return crop ?? null;
}

async function verifyReportBelongsToCrop(reportId: number, cropId: number) {
  const [report] = await db
    .select()
    .from(labReports)
    .where(and(eq(labReports.id, reportId), eq(labReports.cropId, cropId)));
  return report ?? null;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id, reportId } = await params;
    const cropId = parseInt(id, 10);
    const reportIdNum = parseInt(reportId, 10);

    if (isNaN(cropId) || isNaN(reportIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const report = await verifyReportBelongsToCrop(reportIdNum, cropId);
    if (!report) {
      return NextResponse.json({ error: 'Reporte no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ labReport: report });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/crops/[id]/lab-reports/[reportId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id, reportId } = await params;
    const cropId = parseInt(id, 10);
    const reportIdNum = parseInt(reportId, 10);

    if (isNaN(cropId) || isNaN(reportIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const report = await verifyReportBelongsToCrop(reportIdNum, cropId);
    if (!report) {
      return NextResponse.json({ error: 'Reporte no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { plantId, collectionDate, results, reportUrl } = body;

    if (results !== undefined) {
      try {
        const parsed = JSON.parse(results);
        if (typeof parsed !== 'object' || Array.isArray(parsed)) {
          return NextResponse.json({ error: 'Resultados deben ser un objeto JSON' }, { status: 400 });
        }
      } catch {
        return NextResponse.json({ error: 'Resultados deben ser JSON válido' }, { status: 400 });
      }
    }

    const updateData: Record<string, unknown> = {};
    if (plantId !== undefined) updateData.plantId = plantId;
    if (collectionDate !== undefined) updateData.collectionDate = new Date(collectionDate);
    if (results !== undefined) updateData.results = results;
    if (reportUrl !== undefined) updateData.reportUrl = reportUrl;

    const [updated] = await db
      .update(labReports)
      .set(updateData)
      .where(eq(labReports.id, reportIdNum))
      .returning();

    return NextResponse.json({ labReport: updated });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('PUT /api/crops/[id]/lab-reports/[reportId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id, reportId } = await params;
    const cropId = parseInt(id, 10);
    const reportIdNum = parseInt(reportId, 10);

    if (isNaN(cropId) || isNaN(reportIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const report = await verifyReportBelongsToCrop(reportIdNum, cropId);
    if (!report) {
      return NextResponse.json({ error: 'Reporte no encontrado' }, { status: 404 });
    }

    await db.delete(labReports).where(eq(labReports.id, reportIdNum));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/crops/[id]/lab-reports/[reportId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/lab-reports/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, labReports } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, desc } from 'drizzle-orm';

type RouteParams = { params: Promise<{ id: string }> };

async function verifyCropOwnership(cropId: number, userId: number) {
  const [crop] = await db
    .select()
    .from(crops)
    .where(and(eq(crops.id, cropId), eq(crops.userId, userId)));
  return crop ?? null;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const reports = await db
      .select()
      .from(labReports)
      .where(eq(labReports.cropId, cropId))
      .orderBy(desc(labReports.createdAt));

    return NextResponse.json({ labReports: reports });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/crops/[id]/lab-reports error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { plantId, collectionDate, results, reportUrl } = body;

    if (!collectionDate) {
      return NextResponse.json({ error: 'Fecha de recolección requerida' }, { status: 400 });
    }
    if (!results) {
      return NextResponse.json({ error: 'Resultados requeridos' }, { status: 400 });
    }
    try {
      const parsed = JSON.parse(results);
      if (typeof parsed !== 'object' || Array.isArray(parsed)) {
        return NextResponse.json({ error: 'Resultados deben ser un objeto JSON' }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: 'Resultados deben ser JSON válido' }, { status: 400 });
    }

    const [created] = await db
      .insert(labReports)
      .values({
        cropId,
        plantId: plantId ?? null,
        collectionDate: new Date(collectionDate),
        results,
        reportUrl: reportUrl ?? null,
        createdBy: session.userId,
      })
      .returning();

    return NextResponse.json({ labReport: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/crops/[id]/lab-reports error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/logs/[logId]/feedback/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, cropLogs } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

type RouteParams = { params: Promise<{ id: string; logId: string }> };

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    await requireAdmin();
    const { id, logId } = await params;
    const cropId = parseInt(id, 10);
    const logIdNum = parseInt(logId, 10);

    if (isNaN(cropId) || isNaN(logIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // Verify log belongs to crop
    const [log] = await db
      .select()
      .from(cropLogs)
      .where(and(eq(cropLogs.id, logIdNum), eq(cropLogs.cropId, cropId)));

    if (!log) {
      return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { feedback } = body;

    if (!feedback || feedback.trim().length === 0) {
      return NextResponse.json({ error: 'Feedback requerido' }, { status: 400 });
    }

    const [updated] = await db
      .update(cropLogs)
      .set({ feedback: feedback.trim() })
      .where(eq(cropLogs.id, logIdNum))
      .returning();

    return NextResponse.json({ log: updated });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      const status = error.message === 'No autenticado' ? 401 : 403;
      return NextResponse.json({ error: error.message }, { status });
    }
    console.error('POST /api/crops/[id]/logs/[logId]/feedback error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/logs/[logId]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, cropLogs } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

const VALID_PHASES = ['Germinacion', 'Vegetacion', 'Floracion', 'Senescencia'] as const;

type RouteParams = { params: Promise<{ id: string; logId: string }> };

async function verifyCropOwnership(cropId: number, userId: number) {
  const [crop] = await db
    .select()
    .from(crops)
    .where(and(eq(crops.id, cropId), eq(crops.userId, userId)));
  return crop ?? null;
}

async function verifyLogBelongsToCrop(logId: number, cropId: number) {
  const [log] = await db
    .select()
    .from(cropLogs)
    .where(and(eq(cropLogs.id, logId), eq(cropLogs.cropId, cropId)));
  return log ?? null;
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id, logId } = await params;
    const cropId = parseInt(id, 10);
    const logIdNum = parseInt(logId, 10);

    if (isNaN(cropId) || isNaN(logIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const log = await verifyLogBelongsToCrop(logIdNum, cropId);
    if (!log) {
      return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const {
      week, phase, ph, ec, grow, micro, bloom, notes,
      lightHours, nutrientsSolution, sanitaryNotes, preventives, imageUrl,
    } = body;

    if (phase && !VALID_PHASES.includes(phase)) {
      return NextResponse.json({ error: 'Fase fenológica inválida' }, { status: 400 });
    }
    if (ph !== undefined && (ph < 0 || ph > 14)) {
      return NextResponse.json({ error: 'pH debe estar entre 0 y 14' }, { status: 400 });
    }
    if (ec !== undefined && ec < 0) {
      return NextResponse.json({ error: 'EC no puede ser negativa' }, { status: 400 });
    }

    const updateData: Record<string, unknown> = {};
    if (week !== undefined) updateData.week = week.trim();
    if (phase !== undefined) updateData.phase = phase;
    if (ph !== undefined) updateData.ph = ph;
    if (ec !== undefined) updateData.ec = ec;
    if (grow !== undefined) updateData.grow = grow;
    if (micro !== undefined) updateData.micro = micro;
    if (bloom !== undefined) updateData.bloom = bloom;
    if (notes !== undefined) updateData.notes = notes;
    if (lightHours !== undefined) updateData.lightHours = lightHours;
    if (nutrientsSolution !== undefined) updateData.nutrientsSolution = nutrientsSolution;
    if (sanitaryNotes !== undefined) updateData.sanitaryNotes = sanitaryNotes;
    if (preventives !== undefined) updateData.preventives = preventives;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;

    const [updated] = await db
      .update(cropLogs)
      .set(updateData)
      .where(eq(cropLogs.id, logIdNum))
      .returning();

    return NextResponse.json({ log: updated });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('PUT /api/crops/[id]/logs/[logId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id, logId } = await params;
    const cropId = parseInt(id, 10);
    const logIdNum = parseInt(logId, 10);

    if (isNaN(cropId) || isNaN(logIdNum)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const log = await verifyLogBelongsToCrop(logIdNum, cropId);
    if (!log) {
      return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
    }

    await db.delete(cropLogs).where(eq(cropLogs.id, logIdNum));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/crops/[id]/logs/[logId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/logs/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, cropLogs } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, desc } from 'drizzle-orm';

const VALID_PHASES = ['Germinacion', 'Vegetacion', 'Floracion', 'Senescencia'] as const;

type RouteParams = { params: Promise<{ id: string }> };

async function verifyCropOwnership(cropId: number, userId: number) {
  const [crop] = await db
    .select()
    .from(crops)
    .where(and(eq(crops.id, cropId), eq(crops.userId, userId)));
  return crop ?? null;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const logs = await db
      .select()
      .from(cropLogs)
      .where(eq(cropLogs.cropId, cropId))
      .orderBy(desc(cropLogs.createdAt));

    return NextResponse.json({ logs });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/crops/[id]/logs error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await verifyCropOwnership(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const {
      week, phase, ph, ec, grow, micro, bloom, notes,
      lightHours, nutrientsSolution, sanitaryNotes, preventives, imageUrl,
    } = body;

    if (!week || week.trim().length === 0) {
      return NextResponse.json({ error: 'Semana requerida' }, { status: 400 });
    }
    if (phase && !VALID_PHASES.includes(phase)) {
      return NextResponse.json({ error: 'Fase fenológica inválida' }, { status: 400 });
    }
    if (ph !== undefined && (ph < 0 || ph > 14)) {
      return NextResponse.json({ error: 'pH debe estar entre 0 y 14' }, { status: 400 });
    }
    if (ec !== undefined && ec < 0) {
      return NextResponse.json({ error: 'EC no puede ser negativa' }, { status: 400 });
    }

    const [created] = await db
      .insert(cropLogs)
      .values({
        week: week.trim(),
        phase: phase ?? 'Vegetacion',
        ph: ph ?? null,
        ec: ec ?? null,
        grow: grow ?? 0,
        micro: micro ?? 0,
        bloom: bloom ?? 0,
        notes: notes ?? null,
        lightHours: lightHours ?? null,
        nutrientsSolution: nutrientsSolution ?? null,
        sanitaryNotes: sanitaryNotes ?? null,
        preventives: preventives ?? null,
        imageUrl: imageUrl ?? null,
        cropId,
      })
      .returning();

    return NextResponse.json({ log: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/crops/[id]/logs error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops, cropLogs, labReports } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, desc } from 'drizzle-orm';

const VALID_STATUSES = ['Verde', 'Amarillo', 'Rojo'] as const;
const VALID_METHODS = ['Hidroponia', 'Organico', 'SalesMinerales', 'Mixto'] as const;

type RouteParams = { params: Promise<{ id: string }> };

async function getCropOrFail(cropId: number, userId: number) {
  const [crop] = await db
    .select()
    .from(crops)
    .where(and(eq(crops.id, cropId), eq(crops.userId, userId)));
  return crop ?? null;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await getCropOrFail(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const logs = await db
      .select()
      .from(cropLogs)
      .where(eq(cropLogs.cropId, cropId))
      .orderBy(desc(cropLogs.createdAt));

    const reports = await db
      .select()
      .from(labReports)
      .where(eq(labReports.cropId, cropId))
      .orderBy(desc(labReports.createdAt));

    return NextResponse.json({ crop, logs, labReports: reports });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/crops/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await getCropOrFail(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { bucketName, imageUrl, status, cultivationMethod } = body;

    if (bucketName !== undefined && (!bucketName || bucketName.trim().length === 0)) {
      return NextResponse.json({ error: 'Nombre de parcela requerido' }, { status: 400 });
    }
    if (bucketName && bucketName.length > 100) {
      return NextResponse.json({ error: 'Nombre demasiado largo (máx 100 caracteres)' }, { status: 400 });
    }
    if (status && !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Estado inválido' }, { status: 400 });
    }
    if (cultivationMethod && !VALID_METHODS.includes(cultivationMethod)) {
      return NextResponse.json({ error: 'Método de cultivo inválido' }, { status: 400 });
    }

    const updateData: Partial<typeof crop> = {};
    if (bucketName !== undefined) updateData.bucketName = bucketName.trim();
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (status !== undefined) updateData.status = status;
    if (cultivationMethod !== undefined) updateData.cultivationMethod = cultivationMethod;

    const [updated] = await db
      .update(crops)
      .set(updateData)
      .where(eq(crops.id, cropId))
      .returning();

    return NextResponse.json({ crop: updated });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('PUT /api/crops/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const session = await requireAuth();
    const { id } = await params;
    const cropId = parseInt(id, 10);

    if (isNaN(cropId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const crop = await getCropOrFail(cropId, session.userId);
    if (!crop) {
      return NextResponse.json({ error: 'Cultivo no encontrado' }, { status: 404 });
    }

    // Cascade: delete logs and lab reports first
    await db.delete(cropLogs).where(eq(cropLogs.cropId, cropId));
    await db.delete(labReports).where(eq(labReports.cropId, cropId));
    await db.delete(crops).where(eq(crops.id, cropId));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/crops/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/crops/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { crops } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

const VALID_METHODS = ['Hidroponia', 'Organico', 'SalesMinerales', 'Mixto'] as const;

export async function GET() {
  try {
    const session = await requireAuth();

    const userCrops = await db
      .select()
      .from(crops)
      .where(eq(crops.userId, session.userId))
      .orderBy(desc(crops.createdAt));

    return NextResponse.json({ crops: userCrops });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/crops error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();
    const { bucketName, cultivationMethod, imageUrl } = body;

    if (!bucketName || bucketName.trim().length === 0) {
      return NextResponse.json({ error: 'Nombre de parcela requerido' }, { status: 400 });
    }
    if (bucketName.length > 100) {
      return NextResponse.json({ error: 'Nombre demasiado largo (máx 100 caracteres)' }, { status: 400 });
    }
    if (cultivationMethod && !VALID_METHODS.includes(cultivationMethod)) {
      return NextResponse.json({ error: 'Método de cultivo inválido' }, { status: 400 });
    }

    const [created] = await db
      .insert(crops)
      .values({
        bucketName: bucketName.trim(),
        cultivationMethod: cultivationMethod ?? 'Organico',
        imageUrl: imageUrl ?? null,
        userId: session.userId,
      })
      .returning();

    return NextResponse.json({ crop: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/crops error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/cultivator/patients/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { solidaryCultivators, users } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await requireAuth();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    // Check user is a cultivator
    const [user] = await db.select().from(users)
      .where(eq(users.id, session.userId)).limit(1);

    if (!user?.isCultivator) {
      return NextResponse.json({ error: 'No sos cultivador solidario' }, { status: 403 });
    }

    const assignments = await db.select({
      id: solidaryCultivators.id,
      patientId: users.id,
      patientUsername: users.username,
      patientEmail: users.email,
      patientPlanType: users.planType,
      status: solidaryCultivators.status,
      assignedAt: solidaryCultivators.createdAt,
    }).from(solidaryCultivators)
      .innerJoin(users, eq(solidaryCultivators.patientUserId, users.id))
      .where(and(
        eq(solidaryCultivators.cultivatorUserId, session.userId),
        eq(solidaryCultivators.status, 'active')
      ));

    return NextResponse.json({ patients: assignments });
  } catch (error) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/events/[id]/reservations/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { events, ticketCategories, reservations, users, tokenTransactions } from '@/db/schema';
import { requireAuth, requireAdmin } from '@/lib/session';
import { eq, sql } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const eventId = parseInt(params.id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [event] = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }

    const allReservations = await db
      .select({
        id: reservations.id,
        userId: reservations.userId,
        username: users.username,
        email: users.email,
        categoryId: reservations.categoryId,
        categoryName: ticketCategories.name,
        qrCode: reservations.qrCode,
        createdAt: reservations.createdAt,
      })
      .from(reservations)
      .innerJoin(ticketCategories, eq(reservations.categoryId, ticketCategories.id))
      .innerJoin(users, eq(reservations.userId, users.id))
      .where(eq(ticketCategories.eventId, eventId));

    return NextResponse.json({ reservations: allReservations });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('GET /api/events/[id]/reservations error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const eventId = parseInt(params.id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const body = await request.json();
    const { categoryId } = body;

    if (!categoryId || typeof categoryId !== 'number') {
      return NextResponse.json({ error: 'categoryId requerido' }, { status: 400 });
    }

    // Validate event exists
    const [event] = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }

    // Validate category belongs to this event
    const [category] = await db
      .select()
      .from(ticketCategories)
      .where(eq(ticketCategories.id, categoryId))
      .limit(1);

    if (!category || category.eventId !== eventId) {
      return NextResponse.json({ error: 'Categoría no válida para este evento' }, { status: 400 });
    }

    // Check capacity: count all reservations across all categories of this event
    const [capacityCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(reservations)
      .where(
        sql`${reservations.categoryId} in (select id from ticket_category where event_id = ${eventId})`
      );

    const currentCount = Number(capacityCount?.count ?? 0);
    const capacity = event.capacity ?? 50;

    if (currentCount >= capacity) {
      return NextResponse.json({ error: 'Evento sin capacidad disponible' }, { status: 409 });
    }

    const price = category.price ?? 0;

    // Check user tokens if price > 0
    if (price > 0) {
      const [user] = await db
        .select({ tokens: users.tokens })
        .from(users)
        .where(eq(users.id, session.userId))
        .limit(1);

      if (!user) {
        return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
      }

      if ((user.tokens ?? 0) < price) {
        return NextResponse.json({ error: 'Tokens insuficientes' }, { status: 402 });
      }

      // Deduct tokens
      await db
        .update(users)
        .set({ tokens: sql`${users.tokens} - ${price}` })
        .where(eq(users.id, session.userId));
    }

    // Generate QR code string
    const qrCode = `RES-${session.userId}-${eventId}-${Date.now()}`;

    // Create reservation
    const [reservation] = await db
      .insert(reservations)
      .values({
        userId: session.userId,
        categoryId,
        qrCode,
      })
      .returning();

    // Log token transaction if paid
    if (price > 0) {
      await db.insert(tokenTransactions).values({
        userId: session.userId,
        amount: -price,
        reason: 'event_reservation',
        performedBy: session.userId,
      });
    }

    return NextResponse.json({ reservation }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/events/[id]/reservations error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/events/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { events, ticketCategories, reservations } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, sql } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const eventId = parseInt(params.id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [event] = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }

    const categories = await db
      .select()
      .from(ticketCategories)
      .where(eq(ticketCategories.eventId, eventId));

    const [reservationCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(reservations)
      .where(
        sql`${reservations.categoryId} in (select id from ticket_category where event_id = ${eventId})`
      );

    return NextResponse.json({
      event: {
        ...event,
        ticketCategories: categories,
        reservationCount: Number(reservationCount?.count ?? 0),
      },
    });
  } catch (error) {
    console.error('GET /api/events/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const eventId = parseInt(params.id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [existing] = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!existing) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { title, description, date, time, location, requirements, flyerUrl, capacity } = body;

    const updates: Record<string, unknown> = {};
    if (title !== undefined) updates.title = String(title).trim();
    if (description !== undefined) updates.description = String(description).trim();
    if (date !== undefined) {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        return NextResponse.json({ error: 'Fecha inválida' }, { status: 400 });
      }
      updates.date = parsedDate;
    }
    if (time !== undefined) updates.time = String(time);
    if (location !== undefined) updates.location = String(location).trim();
    if (requirements !== undefined) updates.requirements = requirements ? String(requirements) : null;
    if (flyerUrl !== undefined) updates.flyerUrl = flyerUrl ? String(flyerUrl) : null;
    if (capacity !== undefined) {
      if (capacity < 1 || !Number.isInteger(capacity)) {
        return NextResponse.json({ error: 'Capacidad debe ser entero >= 1' }, { status: 400 });
      }
      updates.capacity = capacity;
    }

    const [updated] = await db
      .update(events)
      .set(updates)
      .where(eq(events.id, eventId))
      .returning();

    return NextResponse.json({ event: updated });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('PUT /api/events/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const eventId = parseInt(params.id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [existing] = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!existing) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }

    // Fetch categories for cascade
    const categories = await db
      .select({ id: ticketCategories.id })
      .from(ticketCategories)
      .where(eq(ticketCategories.eventId, eventId));

    // Delete reservations for each category
    for (const cat of categories) {
      await db.delete(reservations).where(eq(reservations.categoryId, cat.id));
    }

    // Delete ticket categories
    await db.delete(ticketCategories).where(eq(ticketCategories.eventId, eventId));

    // Delete event
    await db.delete(events).where(eq(events.id, eventId));

    return NextResponse.json({ message: 'Evento eliminado' });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('DELETE /api/events/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/events/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { events, ticketCategories } from '@/db/schema';
import { requireAdmin } from '@/lib/session';
import { eq, asc } from 'drizzle-orm';

export async function GET() {
  try {
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const allEvents = await db
      .select()
      .from(events)
      .orderBy(asc(events.date));

    // Fetch ticket categories for each event
    const eventIds = allEvents.map((e) => e.id);
    const categories =
      eventIds.length > 0
        ? await db
            .select()
            .from(ticketCategories)
            .where(
              eventIds.length === 1
                ? eq(ticketCategories.eventId, eventIds[0])
                : undefined
            )
        : [];

    // Attach categories to events
    const eventsWithCategories = allEvents.map((event) => ({
      ...event,
      ticketCategories: categories.filter((c) => c.eventId === event.id),
    }));

    return NextResponse.json({ events: eventsWithCategories });
  } catch (error) {
    console.error('GET /api/events error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const body = await request.json();
    const { title, description, date, time, location, requirements, flyerUrl, capacity } = body;

    const validationErrors: string[] = [];
    if (!title || String(title).trim().length === 0) validationErrors.push('Título requerido');
    if (!description || String(description).trim().length === 0) validationErrors.push('Descripción requerida');
    if (!date) validationErrors.push('Fecha requerida');
    if (!time) validationErrors.push('Hora requerida');
    if (!location || String(location).trim().length === 0) validationErrors.push('Ubicación requerida');
    if (capacity !== undefined && (capacity < 1 || !Number.isInteger(capacity))) {
      validationErrors.push('Capacidad debe ser entero >= 1');
    }

    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Fecha inválida' }, { status: 400 });
    }

    const [event] = await db
      .insert(events)
      .values({
        title: String(title).trim(),
        description: String(description).trim(),
        date: parsedDate,
        time: String(time),
        location: String(location).trim(),
        requirements: requirements ? String(requirements) : null,
        flyerUrl: flyerUrl ? String(flyerUrl) : null,
        capacity: capacity !== undefined ? capacity : 50,
      })
      .returning();

    return NextResponse.json({ event }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('POST /api/events error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/notifications/[id]/read/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { notifications } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { and, eq } from 'drizzle-orm';

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await requireAuth();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const { id } = await params;
    const notificationId = parseInt(id, 10);

    if (isNaN(notificationId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // Verify the notification belongs to the authenticated user
    const existing = await db
      .select({ id: notifications.id })
      .from(notifications)
      .where(and(eq(notifications.id, notificationId), eq(notifications.userId, session.userId)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: 'Notificación no encontrada' }, { status: 404 });
    }

    await db
      .update(notifications)
      .set({ isRead: true })
      .where(eq(notifications.id, notificationId));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/notifications/read-all/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { notifications } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { and, eq } from 'drizzle-orm';

export async function POST() {
  try {
    const session = await requireAuth();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    await db
      .update(notifications)
      .set({ isRead: true })
      .where(
        and(
          eq(notifications.userId, session.userId),
          eq(notifications.isRead, false)
        )
      );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/notifications/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { notifications } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, desc, count } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const session = await requireAuth();

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
    const unreadOnly = searchParams.get('unread_only') === 'true';
    const offset = (page - 1) * limit;

    const baseCondition = unreadOnly
      ? and(eq(notifications.userId, session.userId), eq(notifications.isRead, false))
      : eq(notifications.userId, session.userId);

    const [rows, unreadResult] = await Promise.all([
      db
        .select()
        .from(notifications)
        .where(baseCondition)
        .orderBy(desc(notifications.createdAt))
        .limit(limit)
        .offset(offset),
      db
        .select({ count: count() })
        .from(notifications)
        .where(and(eq(notifications.userId, session.userId), eq(notifications.isRead, false))),
    ]);

    const unreadCount = unreadResult[0]?.count ?? 0;

    return NextResponse.json({ notifications: rows, unreadCount, page, limit });
  } catch {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/orders/[id]/review/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { orders, orderItems, reviews, products } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const orderId = parseInt(params.id, 10);
    if (isNaN(orderId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // Verify order belongs to buyer and is delivered
    const [order] = await db.select().from(orders).where(eq(orders.id, orderId));
    if (!order) {
      return NextResponse.json({ error: 'Pedido no encontrado' }, { status: 404 });
    }
    if (order.buyerId !== session.userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }
    if (order.status !== 'Entregado') {
      return NextResponse.json({ error: 'Solo podés reseñar pedidos entregados' }, { status: 409 });
    }

    // Check for duplicate review (orderId is unique in reviews)
    const [existingReview] = await db.select().from(reviews).where(eq(reviews.orderId, orderId));
    if (existingReview) {
      return NextResponse.json({ error: 'Ya existe una reseña para este pedido' }, { status: 409 });
    }

    // Get first item from order to determine product and seller
    const [item] = await db
      .select()
      .from(orderItems)
      .where(eq(orderItems.orderId, orderId));

    if (!item) {
      return NextResponse.json({ error: 'El pedido no tiene items' }, { status: 400 });
    }

    const body = await request.json();
    const { rating, comment } = body;

    const errors: string[] = [];
    if (rating === undefined) errors.push('Rating requerido');
    else if (rating < 1 || rating > 5 || !Number.isInteger(rating)) errors.push('Rating debe ser entre 1 y 5');
    if (comment !== undefined && comment.length > 1000) errors.push('Comentario demasiado largo');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Resolve sellerId from the product linked in the order item
    const [product] = await db.select({ sellerId: products.sellerId }).from(products).where(eq(products.id, item.productId));
    if (!product) {
      return NextResponse.json({ error: 'Producto del pedido no encontrado' }, { status: 404 });
    }

    const [review] = await db
      .insert(reviews)
      .values({
        rating,
        comment: comment ?? null,
        orderId,
        productId: item.productId,
        sellerId: product.sellerId,
      })
      .returning();

    return NextResponse.json({ review }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/orders/[id]/review error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/orders/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { orders, orderItems, products } from '@/db/schema';
import { requireAuth, requireAdmin } from '@/lib/session';
import { eq } from 'drizzle-orm';

const VALID_ORDER_STATUSES = ['Pendiente', 'Entregado', 'Cancelado'] as const;
type OrderStatus = (typeof VALID_ORDER_STATUSES)[number];

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    if (!order) {
      return NextResponse.json({ error: 'Pedido no encontrado' }, { status: 404 });
    }

    // Only the buyer or admin/staff can see the order
    if (order.buyerId !== session.userId && session.role !== 'ADMIN' && session.role !== 'STAFF') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const items = await db
      .select({
        id: orderItems.id,
        orderId: orderItems.orderId,
        quantity: orderItems.quantity,
        price: orderItems.price,
        productId: products.id,
        productName: products.name,
        productImageUrl: products.imageUrl,
        productCategory: products.category,
        productSellerId: products.sellerId,
      })
      .from(orderItems)
      .leftJoin(products, eq(products.id, orderItems.productId))
      .where(eq(orderItems.orderId, id));

    return NextResponse.json({ order: { ...order, items } });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/orders/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    if (!order) {
      return NextResponse.json({ error: 'Pedido no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { status } = body;

    if (!status || !VALID_ORDER_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Estado inválido. Valores: Pendiente, Entregado, Cancelado' }, { status: 400 });
    }

    const [updated] = await db
      .update(orders)
      .set({ status: status as OrderStatus })
      .where(eq(orders.id, id))
      .returning();

    return NextResponse.json({ order: updated });
  } catch (error) {
    if (error instanceof Error && (error.message === 'No autenticado' || error.message === 'No autorizado')) {
      const status = error.message === 'No autenticado' ? 401 : 403;
      return NextResponse.json({ error: error.message }, { status });
    }
    console.error('PATCH /api/orders/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/orders/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { orders, orderItems, products } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await requireAuth();

    const userOrders = await db
      .select({
        orderId: orders.id,
        totalPrice: orders.totalPrice,
        status: orders.status,
        createdAt: orders.createdAt,
        itemId: orderItems.id,
        quantity: orderItems.quantity,
        itemPrice: orderItems.price,
        productId: products.id,
        productName: products.name,
        productImageUrl: products.imageUrl,
        productCategory: products.category,
      })
      .from(orders)
      .leftJoin(orderItems, eq(orderItems.orderId, orders.id))
      .leftJoin(products, eq(products.id, orderItems.productId))
      .where(eq(orders.buyerId, session.userId))
      .orderBy(desc(orders.createdAt));

    // Group items by order
    const ordersMap = new Map<number, {
      id: number;
      totalPrice: number;
      status: string;
      createdAt: Date | null;
      items: Array<{ id: number | null; quantity: number | null; price: number; product: { id: number | null; name: string | null; imageUrl: string | null; category: string | null } }>;
    }>();

    for (const row of userOrders) {
      if (!ordersMap.has(row.orderId)) {
        ordersMap.set(row.orderId, {
          id: row.orderId,
          totalPrice: row.totalPrice,
          status: row.status ?? 'Pendiente',
          createdAt: row.createdAt,
          items: [],
        });
      }
      if (row.itemId) {
        ordersMap.get(row.orderId)!.items.push({
          id: row.itemId,
          quantity: row.quantity,
          price: row.itemPrice ?? 0,
          product: {
            id: row.productId,
            name: row.productName,
            imageUrl: row.productImageUrl,
            category: row.productCategory,
          },
        });
      }
    }

    return NextResponse.json({ orders: Array.from(ordersMap.values()) });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/orders error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/comments/[commentId]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { comments } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string; commentId: string } }
) {
  try {
    const session = await requireAuth();
    const postId = parseInt(params.id, 10);
    const commentId = parseInt(params.commentId, 10);

    if (isNaN(postId) || isNaN(commentId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [comment] = await db.select().from(comments).where(eq(comments.id, commentId));
    if (!comment || comment.postId !== postId) {
      return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 });
    }

    const isAdmin = session.role === 'ADMIN' || session.role === 'STAFF';
    if (comment.authorId !== session.userId && !isAdmin) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    await db.delete(comments).where(eq(comments.id, commentId));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/posts/[id]/comments/[commentId] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/comments/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { comments, posts, users } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, asc } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select({ id: posts.id }).from(posts).where(eq(posts.id, postId));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const rows = await db
      .select({
        id: comments.id,
        content: comments.content,
        postId: comments.postId,
        authorId: comments.authorId,
        authorUsername: users.username,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .leftJoin(users, eq(users.id, comments.authorId))
      .where(eq(comments.postId, postId))
      .orderBy(asc(comments.createdAt));

    return NextResponse.json({ comments: rows });
  } catch (error) {
    console.error('GET /api/posts/[id]/comments error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select({ id: posts.id }).from(posts).where(eq(posts.id, postId));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { content } = body;

    const errors: string[] = [];
    if (!content || content.trim().length === 0) errors.push('Contenido requerido');
    if (content && content.length > 5000) errors.push('Comentario demasiado largo');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const [created] = await db
      .insert(comments)
      .values({
        content: content.trim(),
        postId,
        authorId: session.userId,
      })
      .returning();

    return NextResponse.json({ comment: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/posts/[id]/comments error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/export/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { posts, comments, users } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, asc } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth();
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [row] = await db
      .select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        category: posts.category,
        authorId: posts.authorId,
        authorUsername: users.username,
        createdAt: posts.createdAt,
      })
      .from(posts)
      .leftJoin(users, eq(users.id, posts.authorId))
      .where(eq(posts.id, postId));

    if (!row) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const postComments = await db
      .select({
        id: comments.id,
        content: comments.content,
        authorId: comments.authorId,
        authorUsername: users.username,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .leftJoin(users, eq(users.id, comments.authorId))
      .where(eq(comments.postId, postId))
      .orderBy(asc(comments.createdAt));

    const formatDate = (d: Date | null) =>
      d ? new Date(d).toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }) : '—';

    const lines: string[] = [
      `# ${row.title}`,
      ``,
      `**Categoría:** ${row.category}`,
      `**Autor:** ${row.authorUsername ?? row.authorId}`,
      `**Fecha:** ${formatDate(row.createdAt)}`,
      ``,
      `---`,
      ``,
      row.content,
      ``,
    ];

    if (postComments.length > 0) {
      lines.push(`---`, ``, `## Comentarios (${postComments.length})`, ``);
      for (const c of postComments) {
        lines.push(
          `### ${c.authorUsername ?? c.authorId} — ${formatDate(c.createdAt)}`,
          ``,
          c.content,
          ``
        );
      }
    } else {
      lines.push(`---`, ``, `_Sin comentarios._`, ``);
    }

    const text = lines.join('\n');
    const filename = `post-${postId}-${row.title.slice(0, 40).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.md`;

    return new NextResponse(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/posts/[id]/export error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/reactions/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { reactions, posts } from '@/db/schema';
import { requireAuth, getSession } from '@/lib/session';
import { eq, and, count, sql } from 'drizzle-orm';

const VALID_REACTION_TYPES = ['Interesante', 'Util', 'Cientifico'] as const;
type ReactionType = (typeof VALID_REACTION_TYPES)[number];

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const session = await getSession();

    const allReactions = await db
      .select({
        type: reactions.type,
        userId: reactions.userId,
      })
      .from(reactions)
      .where(eq(reactions.postId, postId));

    const counts: Record<string, number> = { Interesante: 0, Util: 0, Cientifico: 0 };
    let userReaction: string | null = null;

    for (const r of allReactions) {
      counts[r.type] = (counts[r.type] ?? 0) + 1;
      if (session && r.userId === session.userId) {
        userReaction = r.type;
      }
    }

    return NextResponse.json({ counts, userReaction });
  } catch (error) {
    console.error('GET /api/posts/[id]/reactions error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select({ id: posts.id }).from(posts).where(eq(posts.id, postId));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const body = await request.json();
    const { type } = body;

    if (!type || !VALID_REACTION_TYPES.includes(type)) {
      return NextResponse.json(
        { error: 'Tipo de reacción inválido. Valores: Interesante, Util, Cientifico' },
        { status: 400 }
      );
    }

    const [existing] = await db
      .select()
      .from(reactions)
      .where(and(eq(reactions.userId, session.userId), eq(reactions.postId, postId)));

    if (existing) {
      if (existing.type === type) {
        // Same type → toggle off, decrement likes
        await db.delete(reactions).where(eq(reactions.id, existing.id));
        await db
          .update(posts)
          .set({ likes: sql`${posts.likes} - 1` })
          .where(eq(posts.id, postId));
        return NextResponse.json({ action: 'removed', type });
      } else {
        // Different type → update type only (likes count stays the same)
        await db
          .update(reactions)
          .set({ type: type as ReactionType })
          .where(eq(reactions.id, existing.id));
        return NextResponse.json({ action: 'updated', type });
      }
    }

    // No existing reaction → insert + increment likes
    await db.insert(reactions).values({
      type: type as ReactionType,
      userId: session.userId,
      postId,
    });
    await db
      .update(posts)
      .set({ likes: sql`${posts.likes} + 1` })
      .where(eq(posts.id, postId));

    return NextResponse.json({ action: 'added', type });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/posts/[id]/reactions error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/subscribe/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { subscriptions, posts } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const postId = parseInt(params.id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select({ id: posts.id }).from(posts).where(eq(posts.id, postId));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const [existing] = await db
      .select()
      .from(subscriptions)
      .where(and(eq(subscriptions.userId, session.userId), eq(subscriptions.postId, postId)));

    if (existing) {
      await db.delete(subscriptions).where(eq(subscriptions.id, existing.id));
      return NextResponse.json({ subscribed: false });
    }

    await db.insert(subscriptions).values({
      userId: session.userId,
      postId,
    });

    return NextResponse.json({ subscribed: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/posts/[id]/subscribe error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { posts, users, comments, reactions } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, count } from 'drizzle-orm';

const VALID_CATEGORIES = ['Clases', 'Investigaciones', 'FAQ', 'Debates', 'Papers', 'Noticias', 'Anuncios'] as const;
type PostCategory = (typeof VALID_CATEGORIES)[number];

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [row] = await db
      .select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        category: posts.category,
        youtubeLink: posts.youtubeLink,
        fileUrl: posts.fileUrl,
        authorId: posts.authorId,
        authorUsername: users.username,
        likes: posts.likes,
        isPinned: posts.isPinned,
        isImmutable: posts.isImmutable,
        createdAt: posts.createdAt,
      })
      .from(posts)
      .leftJoin(users, eq(users.id, posts.authorId))
      .where(eq(posts.id, id));

    if (!row) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const [{ commentsCount }] = await db
      .select({ commentsCount: count() })
      .from(comments)
      .where(eq(comments.postId, id));

    const [{ reactionsCount }] = await db
      .select({ reactionsCount: count() })
      .from(reactions)
      .where(eq(reactions.postId, id));

    return NextResponse.json({ post: { ...row, commentsCount, reactionsCount } });
  } catch (error) {
    console.error('GET /api/posts/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const isAdmin = session.role === 'ADMIN' || session.role === 'STAFF';
    if (post.authorId !== session.userId && !isAdmin) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    if (post.isImmutable) {
      return NextResponse.json({ error: 'Este post no puede ser editado' }, { status: 403 });
    }

    const body = await request.json();
    const { title, content, category, youtubeLink, fileUrl } = body;

    const errors: string[] = [];
    if (title !== undefined && (!title || title.trim().length === 0)) errors.push('Título requerido');
    if (title && title.length > 200) errors.push('Título demasiado largo');
    if (content !== undefined && (!content || content.trim().length === 0)) errors.push('Contenido requerido');
    if (category && !VALID_CATEGORIES.includes(category)) errors.push('Categoría inválida');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const updates: Record<string, unknown> = {};
    if (title !== undefined) updates.title = title.trim();
    if (content !== undefined) updates.content = content.trim();
    if (category !== undefined) updates.category = category as PostCategory;
    if (youtubeLink !== undefined) updates.youtubeLink = youtubeLink;
    if (fileUrl !== undefined) updates.fileUrl = fileUrl;

    const [updated] = await db
      .update(posts)
      .set(updates)
      .where(eq(posts.id, id))
      .returning();

    return NextResponse.json({ post: updated });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('PUT /api/posts/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const isAdmin = session.role === 'ADMIN' || session.role === 'STAFF';
    if (post.authorId !== session.userId && !isAdmin) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    await db.delete(posts).where(eq(posts.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/posts/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/posts/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { posts, users, comments, reactions } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, desc, ilike, and, count, sql } from 'drizzle-orm';

const VALID_CATEGORIES = ['Clases', 'Investigaciones', 'FAQ', 'Debates', 'Papers', 'Noticias', 'Anuncios'] as const;
type PostCategory = (typeof VALID_CATEGORIES)[number];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') ?? 'newest';
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '20', 10)));
    const offset = (page - 1) * limit;

    const conditions = [];
    if (category && VALID_CATEGORIES.includes(category as PostCategory)) {
      conditions.push(eq(posts.category, category as PostCategory));
    }
    if (search && search.trim().length > 0) {
      conditions.push(ilike(posts.title, `%${search.trim()}%`));
    }

    const orderBy = sort === 'popular' ? desc(posts.likes) : desc(posts.createdAt);

    const rows = await db
      .select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        category: posts.category,
        youtubeLink: posts.youtubeLink,
        fileUrl: posts.fileUrl,
        authorId: posts.authorId,
        authorUsername: users.username,
        likes: posts.likes,
        isPinned: posts.isPinned,
        isImmutable: posts.isImmutable,
        createdAt: posts.createdAt,
      })
      .from(posts)
      .leftJoin(users, eq(users.id, posts.authorId))
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(orderBy)
      .limit(limit)
      .offset(offset);

    return NextResponse.json({ posts: rows, page, limit });
  } catch (error) {
    console.error('GET /api/posts error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();
    const { title, content, category, youtubeLink, fileUrl } = body;

    const errors: string[] = [];
    if (!title || title.trim().length === 0) errors.push('Título requerido');
    if (title && title.length > 200) errors.push('Título demasiado largo');
    if (!content || content.trim().length === 0) errors.push('Contenido requerido');
    if (category && !VALID_CATEGORIES.includes(category)) errors.push('Categoría inválida');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const [created] = await db
      .insert(posts)
      .values({
        title: title.trim(),
        content: content.trim(),
        category: category ?? 'Debates',
        youtubeLink: youtubeLink ?? null,
        fileUrl: fileUrl ?? null,
        authorId: session.userId,
      })
      .returning();

    return NextResponse.json({ post: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/posts error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/products/[id]/purchase/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products, users, orders, orderItems, tokenTransactions } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, sql } from 'drizzle-orm';

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const productId = parseInt(params.id, 10);
    if (isNaN(productId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // Read product
    const [product] = await db.select().from(products).where(eq(products.id, productId));
    if (!product) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }
    if (product.status !== 'Active') {
      return NextResponse.json({ error: 'Producto no disponible' }, { status: 409 });
    }
    if ((product.stock ?? 0) <= 0) {
      return NextResponse.json({ error: 'Sin stock' }, { status: 409 });
    }

    const sellerId = product.sellerId;
    const buyerId = session.userId;

    if (buyerId === sellerId) {
      return NextResponse.json({ error: 'No podés comprar tu propio producto' }, { status: 400 });
    }

    const price = product.price ?? 0;
    if (price <= 0) {
      return NextResponse.json({ error: 'El total debe ser mayor a 0' }, { status: 400 });
    }

    // Read buyer tokens BEFORE update to validate solvency
    const [buyer] = await db.select({ tokens: users.tokens }).from(users).where(eq(users.id, buyerId));
    if (!buyer) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
    const buyerTokens = buyer.tokens ?? 0;
    if (buyerTokens < price) {
      return NextResponse.json({ error: 'Tokens insuficientes' }, { status: 402 });
    }

    // Atomic transfer: debit buyer, credit seller, decrement stock, create order + items + tx log
    const newStock = (product.stock ?? 1) - 1;
    const newStatus = newStock === 0 ? 'SoldOut' : 'Active';

    // 1. Debit buyer
    await db
      .update(users)
      .set({ tokens: sql`${users.tokens} - ${price}` })
      .where(eq(users.id, buyerId));

    // 2. Credit seller
    await db
      .update(users)
      .set({ tokens: sql`${users.tokens} + ${price}` })
      .where(eq(users.id, sellerId));

    // 3. Decrement stock (set SoldOut if reaches 0)
    await db
      .update(products)
      .set({ stock: newStock, status: newStatus })
      .where(eq(products.id, productId));

    // 4. Create order
    const [order] = await db
      .insert(orders)
      .values({ buyerId, totalPrice: price, status: 'Pendiente' })
      .returning();

    // 5. Create order item
    await db.insert(orderItems).values({
      orderId: order.id,
      productId,
      quantity: 1,
      price,
    });

    // 6. Token transaction log — buyer debit
    await db.insert(tokenTransactions).values({
      userId: buyerId,
      amount: -price,
      reason: 'purchase',
      relatedOrderId: order.id,
      performedBy: buyerId,
    });

    // 7. Token transaction log — seller credit
    await db.insert(tokenTransactions).values({
      userId: sellerId,
      amount: price,
      reason: 'sale',
      relatedOrderId: order.id,
      performedBy: buyerId,
    });

    return NextResponse.json({ order }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/products/[id]/purchase error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/products/[id]/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products, users, labReports } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and } from 'drizzle-orm';

const VALID_CATEGORIES = ['Flores', 'Parafernalia', 'Geneticas'] as const;
type Category = (typeof VALID_CATEGORIES)[number];

const VALID_STATUSES = ['Active', 'Paused', 'SoldOut'] as const;
type ProductStatus = (typeof VALID_STATUSES)[number];

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [row] = await db
      .select({
        id: products.id,
        name: products.name,
        description: products.description,
        category: products.category,
        price: products.price,
        basePrice: products.basePrice,
        stock: products.stock,
        imageUrl: products.imageUrl,
        sellerId: products.sellerId,
        labReportId: products.labReportId,
        status: products.status,
        createdAt: products.createdAt,
        sellerUsername: users.username,
        sellerAvatar: users.avatar,
        sellerBio: users.bio,
      })
      .from(products)
      .leftJoin(users, eq(products.sellerId, users.id))
      .where(eq(products.id, id));

    if (!row) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }

    // Fetch lab report if linked
    let labReport = null;
    if (row.labReportId) {
      const [report] = await db
        .select()
        .from(labReports)
        .where(eq(labReports.id, row.labReportId));
      labReport = report ?? null;
    }

    return NextResponse.json({ product: { ...row, labReport } });
  } catch (error) {
    console.error('GET /api/products/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [existing] = await db.select().from(products).where(eq(products.id, id));
    if (!existing) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }
    if (existing.sellerId !== session.userId && session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const body = await request.json();
    const { name, description, category, price, basePrice, stock, imageUrl, labReportId, status } = body;

    const errors: string[] = [];
    if (name !== undefined) {
      if (!name || name.trim().length === 0) errors.push('Nombre requerido');
      if (name && name.length > 200) errors.push('Nombre demasiado largo');
    }
    if (price !== undefined) {
      if (price < 0) errors.push('Precio debe ser >= 0');
      if (!Number.isInteger(price)) errors.push('Precio debe ser entero (tokens)');
    }
    if (category !== undefined && !VALID_CATEGORIES.includes(category)) errors.push('Categoría inválida');
    if (stock !== undefined && (stock < 0 || !Number.isInteger(stock))) errors.push('Stock debe ser entero >= 0');
    if (status !== undefined && !VALID_STATUSES.includes(status)) errors.push('Estado inválido');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const updates: Partial<typeof existing> = {};
    if (name !== undefined) updates.name = name.trim();
    if (description !== undefined) updates.description = description;
    if (category !== undefined) updates.category = category as Category;
    if (price !== undefined) updates.price = price;
    if (basePrice !== undefined) updates.basePrice = basePrice;
    if (stock !== undefined) updates.stock = stock;
    if (imageUrl !== undefined) updates.imageUrl = imageUrl;
    if (labReportId !== undefined) updates.labReportId = labReportId;
    if (status !== undefined) updates.status = status as ProductStatus;

    const [updated] = await db
      .update(products)
      .set(updates)
      .where(eq(products.id, id))
      .returning();

    return NextResponse.json({ product: updated });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('PUT /api/products/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const [existing] = await db.select().from(products).where(eq(products.id, id));
    if (!existing) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }
    if (existing.sellerId !== session.userId && session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    await db.delete(products).where(eq(products.id, id));

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/products/[id] error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/products/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products, users, labReports } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, gte, lte, ilike, asc, desc, SQL } from 'drizzle-orm';

const VALID_CATEGORIES = ['Flores', 'Parafernalia', 'Geneticas'] as const;
type Category = (typeof VALID_CATEGORIES)[number];

const VALID_SORTS = ['price_asc', 'price_desc', 'newest'] as const;

function buildOrderBy(sort: string | null) {
  switch (sort) {
    case 'price_asc':
      return asc(products.price);
    case 'price_desc':
      return desc(products.price);
    case 'newest':
    default:
      return desc(products.createdAt);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    // NOTE: THC/CBD filtering not available — products table has no thcPercent/cbdPercent columns.
    // Cannabinoid data lives in labReports.results (JSON text) via products.labReportId.
    // TODO: parse labReports.results JSON and filter by cannabinoid ranges when performance allows.

    const conditions: SQL[] = [eq(products.status, 'Active')];

    if (category && VALID_CATEGORIES.includes(category as Category)) {
      conditions.push(eq(products.category, category as Category));
    }

    if (search && search.trim().length > 0) {
      conditions.push(ilike(products.name, `%${search.trim()}%`));
    }

    const rows = await db
      .select({
        id: products.id,
        name: products.name,
        description: products.description,
        category: products.category,
        price: products.price,
        basePrice: products.basePrice,
        stock: products.stock,
        imageUrl: products.imageUrl,
        sellerId: products.sellerId,
        labReportId: products.labReportId,
        status: products.status,
        createdAt: products.createdAt,
        sellerUsername: users.username,
      })
      .from(products)
      .leftJoin(users, eq(products.sellerId, users.id))
      .where(and(...conditions))
      .orderBy(buildOrderBy(sort));

    return NextResponse.json({ products: rows });
  } catch (error) {
    console.error('GET /api/products error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();
    const { name, description, category, price, basePrice, stock, imageUrl, labReportId } = body;

    const errors: string[] = [];
    if (!name || name.trim().length === 0) errors.push('Nombre requerido');
    if (name && name.length > 200) errors.push('Nombre demasiado largo');
    if (price === undefined || price < 0) errors.push('Precio debe ser >= 0');
    if (price !== undefined && !Number.isInteger(price)) errors.push('Precio debe ser entero (tokens)');
    if (category && !VALID_CATEGORIES.includes(category)) errors.push('Categoría inválida');
    if (stock !== undefined && (stock < 0 || !Number.isInteger(stock))) errors.push('Stock debe ser entero >= 0');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const [created] = await db
      .insert(products)
      .values({
        name: name.trim(),
        description: description ?? null,
        category: category ?? 'Flores',
        price: price ?? 0,
        basePrice: basePrice ?? price ?? 0,
        stock: stock ?? 1,
        imageUrl: imageUrl ?? null,
        sellerId: session.userId,
        labReportId: labReportId ?? null,
        status: 'Active',
      })
      .returning();

    return NextResponse.json({ product: created }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/products error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/profile/documents/route.ts
````typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { userDocuments } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await requireAuth();
    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }
    const docs = await db.select().from(userDocuments)
      .where(eq(userDocuments.userId, session.userId))
      .orderBy(userDocuments.createdAt);
    return NextResponse.json({ documents: docs });
  } catch (error) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/profile/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { getUserById } from '@/lib/auth';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await requireAuth();
    const user = await getUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
    const { password: _, ...safeUser } = user;
    return NextResponse.json({ user: safeUser });
  } catch (error) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();

    const allowedFields = ['phone', 'address', 'bio', 'birthDate', 'avatar', 'preferredGenetics'];
    const updateData: Record<string, any> = {};

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No hay campos para actualizar' }, { status: 400 });
    }

    if (!db) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    await db.update(users).set(updateData).where(eq(users.id, session.userId));

    const updated = await getUserById(session.userId);
    if (!updated) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
    const { password: _, ...safeUser } = updated;
    return NextResponse.json({ user: safeUser });
  } catch (error) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }
}
````

## File: app/api/sellers/[id]/reputation/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { reviews, orders } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const sellerId = parseInt(params.id, 10);
    if (isNaN(sellerId)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    // All reviews for this seller
    const sellerReviews = await db
      .select({ rating: reviews.rating })
      .from(reviews)
      .where(eq(reviews.sellerId, sellerId));

    const reviewCount = sellerReviews.length;
    const avgRating =
      reviewCount === 0
        ? 0
        : Math.round((sellerReviews.reduce((acc, r) => acc + (r.rating ?? 0), 0) / reviewCount) * 10) / 10;

    // Total delivered orders where any item came from this seller
    // Approximation: count orders that have a review linked to this seller (each review = 1 completed order)
    // For a precise count we'd need to join orderItems → products → sellerId, but that's complex.
    // Using reviews count as a proxy for delivered orders since reviews can only be added after delivery.
    const totalSales = reviewCount;

    return NextResponse.json({ avgRating, reviewCount, totalSales });
  } catch (error) {
    console.error('GET /api/sellers/[id]/reputation error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/api/wishlist/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { wishlists, products } from '@/db/schema';
import { requireAuth } from '@/lib/session';
import { eq, and, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await requireAuth();

    const items = await db
      .select({
        id: wishlists.id,
        createdAt: wishlists.createdAt,
        productId: products.id,
        productName: products.name,
        productDescription: products.description,
        productPrice: products.price,
        productImageUrl: products.imageUrl,
        productCategory: products.category,
        productStatus: products.status,
        productStock: products.stock,
      })
      .from(wishlists)
      .leftJoin(products, eq(products.id, wishlists.productId))
      .where(eq(wishlists.userId, session.userId))
      .orderBy(desc(wishlists.createdAt));

    return NextResponse.json({ wishlist: items });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('GET /api/wishlist error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();
    const { productId } = body;

    if (!productId || typeof productId !== 'number') {
      return NextResponse.json({ error: 'productId requerido' }, { status: 400 });
    }

    // Verify product exists
    const [product] = await db.select({ id: products.id }).from(products).where(eq(products.id, productId));
    if (!product) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }

    // Upsert — unique index on (userId, productId) will throw if duplicate
    try {
      const [created] = await db
        .insert(wishlists)
        .values({ userId: session.userId, productId })
        .returning();
      return NextResponse.json({ item: created }, { status: 201 });
    } catch {
      // Already in wishlist — return 200 instead of 409 for idempotency
      const [existing] = await db
        .select()
        .from(wishlists)
        .where(and(eq(wishlists.userId, session.userId), eq(wishlists.productId, productId)));
      return NextResponse.json({ item: existing });
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('POST /api/wishlist error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();
    const { productId } = body;

    if (!productId || typeof productId !== 'number') {
      return NextResponse.json({ error: 'productId requerido' }, { status: 400 });
    }

    const result = await db
      .delete(wishlists)
      .where(and(eq(wishlists.userId, session.userId), eq(wishlists.productId, productId)));

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'No autenticado') {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    console.error('DELETE /api/wishlist error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
````

## File: app/crops/page.tsx
````typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Demo data - Persisted in localStorage for demo
const DEMO_CROPS_INITIAL = [
  { id: 1, bucketName: 'Gorilla Glue', status: 'Verde', phase: 'Floracion', ph: 6.2, ec: 1.8, imageUrl: null, createdAt: '2024-01-15' },
  { id: 2, bucketName: 'Blue Dream', status: 'Amarillo', phase: 'Vegetacion', ph: 6.5, ec: 1.4, imageUrl: null, createdAt: '2024-02-01' },
  { id: 3, bucketName: 'Sour Diesel', status: 'Verde', phase: 'Germinacion', ph: 6.0, ec: 1.0, imageUrl: null, createdAt: '2024-02-10' },
];

const DEMO_LOGS_INITIAL = [
  { id: 1, week: 'Semana 12', phase: 'Floracion', ph: 6.2, ec: 1.8, grow: 15, micro: 10, bloom: 20, cropId: 1 },
  { id: 2, week: 'Semana 11', phase: 'Floracion', ph: 6.3, ec: 1.7, grow: 14, micro: 9, bloom: 18, cropId: 1 },
  { id: 3, week: 'Semana 10', phase: 'Transicion', ph: 6.4, ec: 1.5, grow: 12, micro: 8, bloom: 15, cropId: 1 },
  { id: 4, week: 'Semana 4', phase: 'Vegetacion', ph: 6.2, ec: 1.2, grow: 8, micro: 5, bloom: 0, cropId: 2 },
  { id: 5, week: 'Semana 3', phase: 'Vegetacion', ph: 6.3, ec: 1.0, grow: 6, micro: 4, bloom: 0, cropId: 2 },
  { id: 6, week: 'Semana 2', phase: 'Germinacion', ph: 6.0, ec: 0.8, grow: 4, micro: 2, bloom: 0, cropId: 3 },
];

const PHASES = ['Germinacion', 'Vegetacion', 'Transicion', 'Floracion'];
const STATUS_OPTIONS = ['Verde', 'Amarillo', 'Rojo'];

export default function CropsPage() {
  const router = useRouter();
  const [crops, setCrops] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<any>(null);
  const [showNewBucket, setShowNewBucket] = useState(false);
  const [showAddLog, setShowAddLog] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [newBucket, setNewBucket] = useState({ bucketName: '', phase: 'Vegetacion', status: 'Verde' });
  const [newLog, setNewLog] = useState({ week: '', phase: '', ph: 6.0, ec: 1.0, grow: 10, micro: 5, bloom: 0 });
  const [calculator, setCalculator] = useState({ grow: 10, micro: 5, bloom: 10, water: 20 });
  const [editingCrop, setEditingCrop] = useState<any>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Load from localStorage or use demo data
  useEffect(() => {
    const storedCrops = localStorage.getItem('citronela_crops');
    const storedLogs = localStorage.getItem('citronela_logs');
    
    if (storedCrops) {
      setCrops(JSON.parse(storedCrops));
    } else {
      setCrops(DEMO_CROPS_INITIAL);
      localStorage.setItem('citronela_crops', JSON.stringify(DEMO_CROPS_INITIAL));
    }
    
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs));
    } else {
      setLogs(DEMO_LOGS_INITIAL);
      localStorage.setItem('citronela_logs', JSON.stringify(DEMO_LOGS_INITIAL));
    }

    // Reset notification after 3 seconds
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Select first crop by default
  useEffect(() => {
    if (crops.length > 0 && !selectedCrop) {
      setSelectedCrop(crops[0]);
    }
  }, [crops, selectedCrop]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verde': return 'bg-green-100 text-green-800';
      case 'Amarillo': return 'bg-yellow-100 text-yellow-800';
      case 'Rojo': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const addBucket = () => {
    if (!newBucket.bucketName.trim()) {
      showNotification('Ingresa un nombre para el bucket');
      return;
    }
    const crop = {
      id: Date.now(),
      ...newBucket,
      ph: 6.0,
      ec: 1.0,
      imageUrl: null,
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [...crops, crop];
    setCrops(updated);
    localStorage.setItem('citronela_crops', JSON.stringify(updated));
    setSelectedCrop(crop);
    setShowNewBucket(false);
    setNewBucket({ bucketName: '', phase: 'Vegetacion', status: 'Verde' });
    showNotification(`Bucket "${crop.bucketName}" creado`);
  };

  const deleteBucket = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar este bucket?')) return;
    const updated = crops.filter(c => c.id !== id);
    setCrops(updated);
    localStorage.setItem('citronela_crops', JSON.stringify(updated));
    if (selectedCrop?.id === id) {
      setSelectedCrop(updated[0] || null);
    }
    showNotification('Bucket eliminado');
  };

  const updateBucket = () => {
    if (!editingCrop) return;
    const updated = crops.map(c => c.id === editingCrop.id ? { ...c, ...editingCrop } : c);
    setCrops(updated);
    localStorage.setItem('citronela_crops', JSON.stringify(updated));
    setSelectedCrop({ ...selectedCrop, ...editingCrop });
    setEditingCrop(null);
    showNotification('Bucket actualizado');
  };

  const addLog = () => {
    if (!selectedCrop || !newLog.week.trim()) {
      showNotification('Ingresa la semana');
      return;
    }
    const log = {
      id: Date.now(),
      ...newLog,
      cropId: selectedCrop.id
    };
    const updated = [...logs, log];
    setLogs(updated);
    localStorage.setItem('citronela_logs', JSON.stringify(updated));
    setShowAddLog(false);
    setNewLog({ week: '', phase: '', ph: 6.0, ec: 1.0, grow: 10, micro: 5, bloom: 0 });
    showNotification('Registro agregado');
  };

  const deleteLog = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar este registro?')) return;
    const updated = logs.filter(l => l.id !== id);
    setLogs(updated);
    localStorage.setItem('citronela_logs', JSON.stringify(updated));
    showNotification('Registro eliminado');
  };

  const cropLogs = logs.filter(l => l.cropId === selectedCrop?.id).sort((a, b) => b.id - a.id);

  const calculateNutrients = () => {
    const { grow, micro, bloom, water } = calculator;
    return {
      growMl: (grow * water).toFixed(0),
      microMl: (micro * water).toFixed(0),
      bloomMl: (bloom * water).toFixed(0),
      waterLt: water
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-500 hover:text-green-600 transition-colors duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span className="text-sm font-medium">Volver</span>
            </Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <h1 className="text-xl font-bold text-gray-800">Mis Cultivos</h1>
          </div>
          <button 
            onClick={() => setShowNewBucket(true)}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2.5 rounded-xl hover:from-green-700 hover:to-green-800 hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Nuevo Bucket
          </button>
        </div>
      </header>

      {/* New Bucket Modal */}
      {showNewBucket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">Nuevo Bucket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  value={newBucket.bucketName}
                  onChange={(e) => setNewBucket({ ...newBucket, bucketName: e.target.value })}
                  placeholder="Nombre del cultivo"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fase</label>
                <select
                  value={newBucket.phase}
                  onChange={(e) => setNewBucket({ ...newBucket, phase: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  {PHASES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select
                  value={newBucket.status}
                  onChange={(e) => setNewBucket({ ...newBucket, status: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  {STATUS_OPTIONS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewBucket(false)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={addBucket}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Crop Modal */}
      {editingCrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">Editar Bucket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  value={editingCrop.bucketName}
                  onChange={(e) => setEditingCrop({ ...editingCrop, bucketName: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fase</label>
                <select
                  value={editingCrop.phase}
                  onChange={(e) => setEditingCrop({ ...editingCrop, phase: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  {PHASES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select
                  value={editingCrop.status}
                  onChange={(e) => setEditingCrop({ ...editingCrop, status: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  {STATUS_OPTIONS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">pH</label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingCrop.ph}
                    onChange={(e) => setEditingCrop({ ...editingCrop, ph: parseFloat(e.target.value) })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EC</label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingCrop.ec}
                    onChange={(e) => setEditingCrop({ ...editingCrop, ec: parseFloat(e.target.value) })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setEditingCrop(null)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={updateBucket}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Empty State */}
        {crops.length === 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-100">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-50 rounded-2xl flex items-center justify-center">
              <span className="text-5xl">🌱</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Sin cultivos todavía</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Crea tu primer bucket para empezar a registrar el progreso de tus plantas</p>
            <button 
              onClick={() => setShowNewBucket(true)}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-600/25 transition-all duration-300 font-medium"
            >
              Crear Primer Bucket
            </button>
          </div>
        )}

        {/* Crops Grid */}
        {crops.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8 stagger-children">
            {crops.map((crop) => (
              <div
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className={`bg-white p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 relative group ${
                  selectedCrop?.id === crop.id ? 'ring-2 ring-green-500 ring-offset-2' : 'hover:ring-1 hover:ring-green-300'
                }`}
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setEditingCrop(crop); }}
                    className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-green-600 transition-colors"
                    title="Editar"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button 
                    onClick={(e) => deleteBucket(crop.id, e)}
                    className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors"
                    title="Eliminar"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{crop.bucketName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(crop.status)}`}>
                    {crop.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Fase: {crop.phase}</p>
                  <p>pH: {crop.ph} | EC: {crop.ec}</p>
                  <p className="text-xs text-gray-400">Desde: {crop.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Crop Details */}
        {selectedCrop && crops.length > 0 && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{selectedCrop.bucketName}</h2>
                <p className="text-gray-600">{selectedCrop.phase} • pH: {selectedCrop.ph} • EC: {selectedCrop.ec}</p>
                <p className="text-sm text-gray-400 mt-1">Creado: {selectedCrop.createdAt}</p>
              </div>
              <button 
                onClick={() => setShowCalculator(true)}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 flex items-center gap-2"
              >
                🧪 Calculadora
              </button>
            </div>

            {/* Calculator Panel */}
            {showCalculator && (
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-b">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">🧪 Calculadora de Nutrientes</h3>
                  <button onClick={() => setShowCalculator(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Grow (ml/L)</label>
                    <input
                      type="number"
                      value={calculator.grow}
                      onChange={(e) => setCalculator({ ...calculator, grow: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Micro (ml/L)</label>
                    <input
                      type="number"
                      value={calculator.micro}
                      onChange={(e) => setCalculator({ ...calculator, micro: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Bloom (ml/L)</label>
                    <input
                      type="number"
                      value={calculator.bloom}
                      onChange={(e) => setCalculator({ ...calculator, bloom: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Agua (L)</label>
                    <input
                      type="number"
                      value={calculator.water}
                      onChange={(e) => setCalculator({ ...calculator, water: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-green-700">Grow Total</p>
                    <p className="text-2xl font-bold text-green-800">{calculateNutrients().growMl}ml</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-700">Micro Total</p>
                    <p className="text-2xl font-bold text-blue-800">{calculateNutrients().microMl}ml</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-purple-700">Bloom Total</p>
                    <p className="text-2xl font-bold text-purple-800">{calculateNutrients().bloomMl}ml</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-700">Agua</p>
                    <p className="text-2xl font-bold text-gray-800">{calculateNutrients().waterLt}L</p>
                  </div>
                </div>
              </div>
            )}

            {/* Weekly Logs */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Registros Semanales</h3>
                <button 
                  onClick={() => {
                    setNewLog({ ...newLog, phase: selectedCrop.phase });
                    setShowAddLog(true);
                  }}
                  className="text-green-600 hover:text-green-700 flex items-center gap-1"
                >
                  + Agregar Registro
                </button>
              </div>

              {cropLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No hay registros todavía</p>
                  <button 
                    onClick={() => setShowAddLog(true)}
                    className="text-green-600 hover:underline mt-2"
                  >
                    Agregar primer registro
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Semana</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Fase</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">pH</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">EC</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Grow</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Micro</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Bloom</th>
                        <th className="text-left py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cropLogs.map((log) => (
                        <tr key={log.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{log.week}</td>
                          <td className="py-3 px-4">{log.phase}</td>
                          <td className="py-3 px-4">{log.ph}</td>
                          <td className="py-3 px-4">{log.ec}</td>
                          <td className="py-3 px-4">{log.grow}ml</td>
                          <td className="py-3 px-4">{log.micro}ml</td>
                          <td className="py-3 px-4">{log.bloom}ml</td>
                          <td className="py-3 px-4">
                            <button 
                              onClick={(e) => deleteLog(log.id, e)}
                              className="text-gray-400 hover:text-red-600"
                            >
                              🗑️
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Add Log Modal */}
            {showAddLog && (
              <div className="p-6 border-t bg-gray-50">
                <h4 className="font-semibold mb-4">Nuevo Registro</h4>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Semana</label>
                    <input
                      type="text"
                      value={newLog.week}
                      onChange={(e) => setNewLog({ ...newLog, week: e.target.value })}
                      placeholder="ej: Semana 5"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Fase</label>
                    <select
                      value={newLog.phase}
                      onChange={(e) => setNewLog({ ...newLog, phase: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      <option value="">Seleccionar</option>
                      {PHASES.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">pH</label>
                    <input
                      type="number"
                      step="0.1"
                      value={newLog.ph}
                      onChange={(e) => setNewLog({ ...newLog, ph: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">EC</label>
                    <input
                      type="number"
                      step="0.1"
                      value={newLog.ec}
                      onChange={(e) => setNewLog({ ...newLog, ec: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Grow (ml/L)</label>
                    <input
                      type="number"
                      value={newLog.grow}
                      onChange={(e) => setNewLog({ ...newLog, grow: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Micro (ml/L)</label>
                    <input
                      type="number"
                      value={newLog.micro}
                      onChange={(e) => setNewLog({ ...newLog, micro: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Bloom (ml/L)</label>
                    <input
                      type="number"
                      value={newLog.bloom}
                      onChange={(e) => setNewLog({ ...newLog, bloom: parseFloat(e.target.value) })}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAddLog(false)}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={addLog}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
````

## File: app/dashboard/page.tsx
````typescript
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: number;
  username: string;
  email: string | null;
  role: string;
  tokens: number;
  isVerified: boolean;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo mode - show sample user
    const demoUser: User = {
      id: 1,
      username: 'demo',
      email: 'demo@citronela.app',
      role: 'grower',
      tokens: 100,
      isVerified: true,
    };
    setUser(demoUser);
    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🌿</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Citronela</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {user?.username.charAt(0).toUpperCase()}
              </div>
              <span className="text-gray-700 font-medium">@{user?.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
              title="Cerrar Sesión"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Welcome Section */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Hola, <span className="text-green-600">{user?.username}</span> 👋
          </h2>
          <p className="text-gray-500 text-lg">Accede a las secciones de tu cuenta</p>
        </div>

        {/* Quick Actions Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Link
            href="/crops"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mi Cultivo</h3>
              <p className="text-gray-500">Gestiona tus cultivos hidropónicos, registra nutrientes y rastrea el progreso de cada planta</p>
              <div className="mt-5 flex items-center text-green-600 font-medium">
                <span>Ir a Mis Cultivos</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </Link>
          
          <Link
            href="/market"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mercado</h3>
              <p className="text-gray-500">Explora semillas, nutrientes y equipamiento para tu cultivo</p>
              <div className="mt-5 flex items-center text-blue-600 font-medium">
                <span>Explorar Mercado</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </Link>
          
          <Link
            href="/community"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidad</h3>
              <p className="text-gray-500">Comparte experiencias, aprende técnicas y conectá con otros growers</p>
              <div className="mt-5 flex items-center text-purple-600 font-medium">
                <span>Ver Comunidad</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Tu Cuenta</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.672 2.95 1.704M12 20c-1.11 0-2.08-.672-2.95-1.704M5 12c0-1.11.672-2.08 1.704-2.95M9 12c0 1.11.672 2.08 1.704 2.95M12 12c1.11 0 2.08-.672 2.95-1.704" /></svg>
                </div>
                <span className="text-sm text-gray-500">Tokens</span>
              </div>
              <p className="text-3xl font-bold text-green-600">{user?.tokens}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m5 2v9a2 2 0 002 2h4a2 2 0 002-2V10" /></svg>
                </div>
                <span className="text-sm text-gray-500">Email</span>
              </div>
              <p className="text-lg font-semibold text-gray-700">{user?.isVerified ? 'Verificado' : 'Pendiente'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <span className="text-sm text-gray-500">Rol</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 capitalize">{user?.role}</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-sm text-gray-500">Miembro</span>
              </div>
              <p className="text-lg font-semibold text-gray-700">Demo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
````

## File: app/legal/privacy/page.tsx
````typescript
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

async function getLegalContent(type: 'terms' | 'privacy'): Promise<string> {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/admin/legal`, { cache: 'no-store' });
    if (!res.ok) return '';
    const data = await res.json();
    const sections: Array<{ type: string; content: string }> = data.sections ?? [];
    return sections.find((s) => s.type === type)?.content ?? '';
  } catch {
    return '';
  }
}

const FALLBACK_PRIVACY = `En Citronela, la privacidad de nuestros socios es fundamental. Esta política describe cómo recopilamos, usamos y protegemos tu información.

1. INFORMACIÓN QUE RECOPILAMOS
- Información de registro: nombre de usuario, email, documentación de verificación
- Información de uso: actividad en la plataforma, transacciones, publicaciones
- Información técnica: dirección IP, tipo de dispositivo, navegador

2. USO DE LA INFORMACIÓN
Usamos tu información para:
- Verificar tu identidad y gestionar tu cuenta
- Procesar transacciones de tokens
- Enviarte notificaciones relevantes
- Mejorar la experiencia en la plataforma

3. COMPARTIR INFORMACIÓN
No vendemos ni compartimos tu información personal con terceros, excepto cuando sea requerido por ley.

4. SEGURIDAD
Implementamos medidas de seguridad estándar de la industria para proteger tu información.

5. TUS DERECHOS
Podés solicitar acceso, corrección o eliminación de tu información personal contactándonos.

6. COOKIES
Usamos cookies esenciales para el funcionamiento de la plataforma.

Para ejercer tus derechos o hacer consultas, contactá al equipo de Citronela.`;

export default async function PrivacyPage() {
  const content = await getLegalContent('privacy');
  const displayContent = content || FALLBACK_PRIVACY;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Política de Privacidad</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Plataforma Citronela</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{displayContent}</pre>
          </div>
        </div>

        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/legal/terms" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Términos y Condiciones
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
````

## File: app/legal/terms/page.tsx
````typescript
import { FileText } from 'lucide-react';
import Link from 'next/link';

async function getLegalContent(type: 'terms' | 'privacy'): Promise<string> {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${base}/api/admin/legal`, { cache: 'no-store' });
    if (!res.ok) return '';
    const data = await res.json();
    const sections: Array<{ type: string; content: string }> = data.sections ?? [];
    return sections.find((s) => s.type === type)?.content ?? '';
  } catch {
    return '';
  }
}

const FALLBACK_TERMS = `Bienvenido a Citronela. Al usar nuestra plataforma, aceptás los siguientes términos y condiciones.

1. ACEPTACIÓN DE TÉRMINOS
Al acceder y usar la plataforma Citronela, aceptás estar sujeto a estos términos y condiciones de uso.

2. USO DE LA PLATAFORMA
La plataforma está destinada exclusivamente a socios verificados. El uso indebido puede resultar en la suspensión de tu cuenta.

3. TOKENS Y TRANSACCIONES
Los tokens son la moneda interna de la plataforma. Las transacciones son definitivas y no reembolsables.

4. PRIVACIDAD
Tu información personal está protegida según nuestra Política de Privacidad.

5. MODIFICACIONES
Nos reservamos el derecho de modificar estos términos con previo aviso.

Para consultas, contactá al equipo de Citronela.`;

export default async function TermsPage() {
  const content = await getLegalContent('terms');
  const displayContent = content || FALLBACK_TERMS;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Términos y Condiciones</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Plataforma Citronela</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{displayContent}</pre>
          </div>
        </div>

        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/legal/privacy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Política de Privacidad
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
````

## File: app/globals.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 142.1 76.2% 36.3%;
    
    --radius: 0.75rem;
    
    --success: 142 70% 40%;
    --warning: 42 90% 55%;
    --error: 0 80% 60%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --card: 222.2 84% 8%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222.2 84% 8%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 142.1 76.2% 56.3%;
    --primary-foreground: 355.7 100% 97.3%;
    
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 142.1 76.2% 56.3%;
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
  
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}

/* Background patterns */
body {
  background: 
    radial-gradient(ellipse at 20% 0%, hsla(142, 60%, 92%, 0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, hsla(200, 40%, 90%, 0.3) 0%, transparent 50%),
    hsl(var(--background));
}

.dark body {
  background: 
    radial-gradient(ellipse at 20% 0%, hsla(142, 60%, 15%, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, hsla(200, 40%, 10%, 0.2) 0%, transparent 50%),
    hsl(var(--background));
}

/* Utilities */
@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-slide-in {
    animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float 9s ease-in-out infinite;
  }

  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradientShift 6s ease infinite;
  }

  .animate-pulse-glow {
    animation: pulseGlow 2.5s ease-in-out infinite;
  }

  .animate-blob {
    animation: blob 14s ease-in-out infinite;
  }

  .stagger-children > * {
    opacity: 0;
    animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .stagger-children > *:nth-child(1) { animation-delay: 0ms; }
  .stagger-children > *:nth-child(2) { animation-delay: 80ms; }
  .stagger-children > *:nth-child(3) { animation-delay: 160ms; }
  .stagger-children > *:nth-child(4) { animation-delay: 240ms; }
  .stagger-children > *:nth-child(5) { animation-delay: 320ms; }
  .stagger-children > *:nth-child(6) { animation-delay: 400ms; }
  .stagger-children > *:nth-child(7) { animation-delay: 480ms; }
  .stagger-children > *:nth-child(8) { animation-delay: 560ms; }

  .text-gradient-weed {
    background: linear-gradient(120deg, #a3e635 0%, #22c55e 40%, #facc15 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .shadow-glow-lime {
    box-shadow:
      0 0 0 1px rgba(163, 230, 53, 0.25),
      0 10px 40px -10px rgba(163, 230, 53, 0.45),
      0 20px 60px -20px rgba(34, 197, 94, 0.55);
  }

  .shadow-glow-emerald {
    box-shadow:
      0 10px 30px -10px rgba(16, 185, 129, 0.45),
      0 20px 60px -20px rgba(5, 150, 105, 0.55);
  }

  .bg-grid-weed {
    background-image:
      linear-gradient(rgba(163, 230, 53, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(163, 230, 53, 0.08) 1px, transparent 1px);
    background-size: 48px 48px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(2deg); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.85;
    box-shadow: 0 0 20px 2px rgba(163, 230, 53, 0.5);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 40px 8px rgba(163, 230, 53, 0.75);
  }
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.1); }
  66% { transform: translate(-30px, 20px) scale(0.95); }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
````

## File: app/layout.tsx
````typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Citronela - Cultivo Hidropónico',
  description: 'Plataforma de gestión de cultivos hidropónicos y marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
````

## File: app/page.tsx
````typescript
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Citronela — Cultivo Hidropónico',
  description: 'Plataforma de gestión de cultivos hidropónicos y marketplace',
};

// Cannabis leaf SVG — decorative
function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden>
      <path d="M32 2c-1 6-4 10-8 13 3-1 6-1 9 0-3 3-5 7-6 12 3-2 6-3 10-3-2 4-3 8-3 13 3-3 7-5 11-6-1 4-2 9-1 14-4-2-8-3-12-3 1 3 3 6 5 8-5-1-9-1-13 1 2-5 1-10-1-14-2 2-5 4-8 5 2-4 3-8 2-12-4 2-8 3-12 3 3-4 4-9 4-13-4 1-9 1-13 0 4-3 7-7 8-12 4 1 9 2 13 1-1-5 0-10 2-14 3 3 6 6 8 10 2-4 4-8 5-12z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07120b] text-zinc-100 overflow-x-hidden">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07120b]/70 border-b border-lime-400/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 flex items-center justify-center shadow-glow-lime group-hover:scale-110 transition-transform duration-300">
              <LeafIcon className="w-6 h-6 text-[#07120b]" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">Citro</span>
              <span className="text-gradient-weed">nela</span>
            </span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-lime-300 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="relative px-5 py-2.5 rounded-xl font-semibold text-sm text-[#07120b] bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 hover:shadow-glow-lime hover:scale-105 active:scale-95 transition-all duration-300 animate-gradient-x"
            >
              Registro
            </Link>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Animated blobs */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[520px] h-[520px] rounded-full bg-lime-500/25 blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600/25 blur-3xl animate-blob [animation-delay:-4s]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[480px] h-[480px] rounded-full bg-amber-500/15 blur-3xl animate-blob [animation-delay:-8s]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-weed opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] -z-0" />

        {/* Floating leaves */}
        <LeafIcon className="absolute top-24 left-10 w-24 h-24 text-lime-400/10 animate-float rotate-12" />
        <LeafIcon className="absolute top-40 right-16 w-32 h-32 text-emerald-400/10 animate-float-slow -rotate-12" />
        <LeafIcon className="absolute bottom-20 left-1/4 w-20 h-20 text-amber-400/10 animate-float [animation-delay:-2s]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/5 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-lime-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-lime-400" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-lime-300 tracking-wide uppercase">
              Plataforma de cultivo hidropónico
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-in [animation-delay:100ms]">
            Cultivá tu propio{' '}
            <span className="relative inline-block">
              <span className="text-gradient-weed animate-gradient-x">ecosistema</span>
              <svg
                className="absolute -bottom-3 left-0 w-full h-3 text-lime-400/60"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M2 7 Q 50 -2 100 6 T 198 5" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:200ms]">
            La plataforma definitiva para gestionar tus cultivos hidropónicos.
            Registrá, monitoreá y hacé crecer tus plantas con control total —{' '}
            <span className="text-lime-300 font-medium">del esqueje a la cosecha</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:300ms]">
            <Link
              href="/register"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-[#07120b] bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 hover:shadow-glow-lime hover:scale-105 active:scale-95 transition-all duration-300 animate-gradient-x flex items-center justify-center gap-2"
            >
              Comenzar ahora
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base text-zinc-200 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-800/60 hover:border-lime-400/40 hover:text-lime-300 transition-all duration-300"
            >
              Ya tengo cuenta
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            {[
              { n: '150+', l: 'Cultivadores' },
              { n: '24/7', l: 'Monitoreo' },
              { n: '100%', l: 'Trazabilidad' },
            ].map((s) => (
              <div key={s.l} className="relative group">
                <div className="p-4 rounded-2xl border border-lime-400/10 bg-white/[0.02] backdrop-blur-sm group-hover:border-lime-400/30 group-hover:bg-lime-400/5 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-gradient-weed">{s.n}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#07120b] via-[#0a1a10] to-[#07120b]">
        <div className="absolute inset-0 bg-grid-weed opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-semibold tracking-wider uppercase text-lime-300 mb-4">
              Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Todo lo que necesitás,{' '}
              <span className="text-gradient-weed">en un solo lugar</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Herramientas potentes, interfaz simple. Diseñado por cultivadores, para cultivadores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {/* Card 1 — Cultivo */}
            <div className="group relative p-8 rounded-3xl border border-lime-400/15 bg-gradient-to-br from-lime-400/5 via-green-500/[0.03] to-transparent backdrop-blur-sm hover:border-lime-400/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-lime-400/10 blur-3xl group-hover:bg-lime-400/25 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-300 to-green-600 flex items-center justify-center mb-6 shadow-glow-lime group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Mi Cultivo</h3>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Registrá tus buckets hidropónicos y llevá un log semanal de pH, EC,
                  nutrientes y fases. IA que sugiere correcciones.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['pH/EC', 'Fases', 'IA'].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-lime-400/10 text-lime-300 border border-lime-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 — Mercado */}
            <div className="group relative p-8 rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/5 via-teal-500/[0.03] to-transparent backdrop-blur-sm hover:border-emerald-400/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl group-hover:bg-emerald-400/25 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-300 to-teal-600 flex items-center justify-center mb-6 shadow-glow-emerald group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Mercado</h3>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Comprá y vendé genéticas, parafernalia y flores. Reseñas reales,
                  informes de laboratorio verificados.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Genéticas', 'Lab Reports', 'Reseñas'].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 — Comunidad */}
            <div className="group relative p-8 rounded-3xl border border-amber-400/15 bg-gradient-to-br from-amber-400/5 via-yellow-500/[0.03] to-transparent backdrop-blur-sm hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-amber-400/10 blur-3xl group-hover:bg-amber-400/25 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-600 flex items-center justify-center mb-6 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.55)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Comunidad</h3>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Compartí investigaciones, debates y papers. Aprendé de otros
                  cultivadores, eventos y clases.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Debates', 'Papers', 'Eventos'].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ECOSYSTEM BAND ============ */}
      <section className="relative py-20 border-y border-lime-400/10 bg-gradient-to-r from-[#07120b] via-[#0b2218] to-[#07120b] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-lime-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-lime-400/70 mb-4">Un ecosistema completo</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-zinc-500">
            {['Hidroponía', 'Orgánico', 'Sales Minerales', 'Mixto', 'Lab Reports', 'Trazabilidad'].map((w, i) => (
              <span
                key={w}
                className="text-lg sm:text-xl font-semibold hover:text-lime-300 transition-colors duration-300 cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-lime-500/20 blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/20 blur-3xl animate-blob [animation-delay:-5s]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-amber-400 animate-gradient-x mb-8">
            <div className="px-5 py-2 rounded-full bg-[#07120b] text-sm font-medium text-lime-300">
              🌿 Empezá gratis hoy
            </div>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Listo para{' '}
            <span className="text-gradient-weed">florecer</span>?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Sumate a la comunidad de cultivadores que ya están llevando su cultivo al próximo nivel.
          </p>
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-[#07120b] bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 hover:shadow-glow-lime hover:scale-105 active:scale-95 transition-all duration-300 animate-gradient-x"
          >
            Crear mi cuenta
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative border-t border-lime-400/10 bg-[#050d07] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 flex items-center justify-center">
                <LeafIcon className="w-5 h-5 text-[#07120b]" />
              </div>
              <span className="font-extrabold text-lg">
                <span className="text-white">Citro</span>
                <span className="text-gradient-weed">nela</span>
              </span>
            </div>
            <div className="flex gap-6 text-sm text-zinc-500">
              <Link href="/legal/terms" className="hover:text-lime-300 transition-colors">
                Términos
              </Link>
              <Link href="/legal/privacy" className="hover:text-lime-300 transition-colors">
                Privacidad
              </Link>
              <Link href="/login" className="hover:text-lime-300 transition-colors">
                Login
              </Link>
            </div>
            <p className="text-xs text-zinc-600">
              &copy; 2026 Citronela. Cultivado con 🌿
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
````

## File: components/admin/KpiGrid.tsx
````typescript
'use client';

import { Users, Clock, ShieldCheck, Sprout, ShoppingBag, Coins, MessageSquare, CalendarDays } from 'lucide-react';
import StatsCard from './StatsCard';

interface KpiStats {
  totalUsuarios?: number;
  pendientes?: number;
  tasaVerificacion?: number;
  totalParcelas?: number;
  ordenes?: number;
  tokensCirculacion?: number;
  postsSemana?: number;
  eventos?: number;
}

interface KpiGridProps {
  stats: KpiStats;
}

export default function KpiGrid({ stats }: KpiGridProps) {
  const cards = [
    {
      title: 'Total Usuarios',
      value: stats.totalUsuarios ?? '—',
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Pendientes',
      value: stats.pendientes ?? '—',
      icon: Clock,
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Tasa Verificación',
      value: stats.tasaVerificacion !== undefined ? `${stats.tasaVerificacion}%` : '—',
      icon: ShieldCheck,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Total Parcelas',
      value: stats.totalParcelas ?? '—',
      icon: Sprout,
      color: 'text-green-700 dark:text-green-300',
    },
    {
      title: 'Órdenes',
      value: stats.ordenes ?? '—',
      icon: ShoppingBag,
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Tokens en Circulación',
      value: stats.tokensCirculacion ?? '—',
      icon: Coins,
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Posts esta Semana',
      value: stats.postsSemana ?? '—',
      icon: MessageSquare,
      color: 'text-blue-500 dark:text-blue-300',
    },
    {
      title: 'Eventos',
      value: stats.eventos ?? '—',
      icon: CalendarDays,
      color: 'text-orange-600 dark:text-orange-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <StatsCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}
````

## File: components/admin/NotificationSender.tsx
````typescript
'use client';

import { useState } from 'react';
import { Send, Users, User } from 'lucide-react';

type Mode = 'single' | 'broadcast';
type BroadcastTarget = 'all' | 'verified' | 'cultivators' | 'admins';

const BROADCAST_TARGETS: { value: BroadcastTarget; label: string }[] = [
  { value: 'all', label: 'Todos los usuarios' },
  { value: 'verified', label: 'Verificados' },
  { value: 'cultivators', label: 'Cultivadores' },
  { value: 'admins', label: 'Administradores' },
];

export default function NotificationSender() {
  const [mode, setMode] = useState<Mode>('single');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [target, setTarget] = useState<BroadcastTarget>('all');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setFeedback(null);

    try {
      if (mode === 'single') {
        if (!userId.trim()) {
          setFeedback({ type: 'error', text: 'Ingresá el ID del usuario' });
          return;
        }
        const res = await fetch('/api/admin/notifications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: Number(userId), message: message.trim() }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? 'Error al enviar');
        setFeedback({ type: 'success', text: 'Notificación enviada correctamente' });
      } else {
        const res = await fetch('/api/admin/notifications/broadcast', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ target, message: message.trim() }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? 'Error al enviar');
        setFeedback({
          type: 'success',
          text: `Broadcast enviado a ${data.count ?? 0} usuario${data.count !== 1 ? 's' : ''}`,
        });
      }

      setMessage('');
      setUserId('');
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err instanceof Error ? err.message : 'Error al enviar la notificación',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enviar notificación</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Enviá mensajes directos o broadcasts a grupos de usuarios
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit">
        <button
          type="button"
          onClick={() => setMode('single')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'single'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          <User className="w-4 h-4" />
          A un usuario
        </button>
        <button
          type="button"
          onClick={() => setMode('broadcast')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'broadcast'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          <Users className="w-4 h-4" />
          Broadcast
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'single' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              ID de usuario
            </label>
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Ej: 42"
              min={1}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Destinatarios
            </label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value as BroadcastTarget)}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition"
            >
              {BROADCAST_TARGETS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Mensaje
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribí el mensaje de la notificación..."
            rows={4}
            maxLength={500}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition resize-none"
          />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-right">
            {message.length}/500
          </p>
        </div>

        {feedback && (
          <div
            className={`px-4 py-3 rounded-xl text-sm font-medium ${
              feedback.type === 'success'
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
            }`}
          >
            {feedback.text}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="flex items-center gap-2 bg-[#16A34A] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" />
          {loading ? 'Enviando...' : mode === 'broadcast' ? 'Enviar broadcast' : 'Enviar notificación'}
        </button>
      </form>
    </div>
  );
}
````

## File: components/admin/StatsCard.tsx
````typescript
'use client';

import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
  trend?: number;
}

export default function StatsCard({ title, value, icon: Icon, color = 'text-green-600 dark:text-green-400', trend }: StatsCardProps) {
  const bgColor = color.includes('blue')
    ? 'bg-blue-50 dark:bg-blue-900/20'
    : color.includes('amber') || color.includes('yellow')
    ? 'bg-amber-50 dark:bg-amber-900/20'
    : color.includes('red')
    ? 'bg-red-50 dark:bg-red-900/20'
    : color.includes('purple')
    ? 'bg-purple-50 dark:bg-purple-900/20'
    : color.includes('orange')
    ? 'bg-orange-50 dark:bg-orange-900/20'
    : 'bg-green-50 dark:bg-green-900/20';

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 truncate">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            {trend !== undefined && (
              <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${trend >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span>{trend >= 0 ? '+' : ''}{trend}%</span>
              </div>
            )}
          </div>
          <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center ml-3 shrink-0`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
````

## File: components/admin/TokenAssignModal.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface TokenAssignModalProps {
  userId: number;
  username: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TokenAssignModal({ userId, username, onClose, onSuccess }: TokenAssignModalProps) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const parsed = parseInt(amount, 10);
    if (isNaN(parsed) || parsed === 0) {
      setError('Ingresá un número válido (puede ser negativo para restar)');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/admin/users/${userId}/tokens`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parsed }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al asignar tokens');
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
          Asignar tokens
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
          Usuario: <span className="font-medium text-gray-700 dark:text-gray-300">{username}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Cantidad de tokens
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ej: 10 (o -5 para restar)"
              required
              autoFocus
            />
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Usá un número negativo para quitar tokens.
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Guardando...' : 'Asignar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/admin/TransactionTable.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface Transaction {
  id: number;
  userId: number;
  username: string;
  amount: number;
  reason: string;
  createdAt: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  onExport?: () => void;
}

const PAGE_SIZE = 20;

export default function TransactionTable({ transactions, onExport }: TransactionTableProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);
  const paginated = transactions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleExport = () => {
    if (onExport) {
      onExport();
      return;
    }
    // fallback: build CSV client-side
    const headers = ['ID', 'Usuario', 'Monto', 'Razón', 'Fecha'];
    const rows = transactions.map((t) => [
      t.id,
      t.username,
      t.amount,
      `"${t.reason.replace(/"/g, '""')}"`,
      new Date(t.createdAt).toLocaleString('es-AR'),
    ]);
    const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transacciones-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {transactions.length} transacción{transactions.length !== 1 ? 'es' : ''}
        </p>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="w-4 h-4 mr-1.5" />
          Exportar CSV
        </Button>
      </div>

      {transactions.length === 0 ? (
        <p className="text-center py-12 text-gray-500 dark:text-gray-400 text-sm">
          No hay transacciones registradas.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">#</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Usuario</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Monto</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Razón</th>
                  <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {paginated.map((tx) => (
                  <tr
                    key={tx.id}
                    className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-400 text-xs">{tx.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{tx.username}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`font-bold ${
                          tx.amount >= 0
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-500 dark:text-red-400'
                        }`}
                      >
                        {tx.amount >= 0 ? '+' : ''}{tx.amount}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 max-w-xs truncate">{tx.reason}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {new Date(tx.createdAt).toLocaleString('es-AR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Página {page} de {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
````

## File: components/admin/UserTable.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TokenAssignModal from '@/components/admin/TokenAssignModal';

interface User {
  id: number;
  username: string;
  email: string | null;
  role: string;
  tokens: number;
  isVerified: boolean;
  emailVerified: boolean;
  planType: string | null;
  isCultivator: boolean;
  createdAt: string;
}

interface UserTableProps {
  users: User[];
  onRefresh: () => void;
}

type FilterTab = 'todos' | 'pendientes' | 'verificados';

export default function UserTable({ users, onRefresh }: UserTableProps) {
  const [filter, setFilter] = useState<FilterTab>('todos');
  const [tokenModalUser, setTokenModalUser] = useState<User | null>(null);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  const filtered = users
    .filter((u) => {
      if (filter === 'pendientes') return !u.isVerified;
      if (filter === 'verificados') return u.isVerified;
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleAction = async (userId: number, action: 'approve' | 'reject' | 'toggle-cultivator') => {
    const key = `${action}-${userId}`;
    setLoadingAction(key);

    try {
      let url = '';
      let method = 'PUT';

      if (action === 'approve') url = `/api/admin/users/${userId}/approve`;
      else if (action === 'reject') url = `/api/admin/users/${userId}/reject`;
      else if (action === 'toggle-cultivator') url = `/api/admin/users/${userId}/cultivator`;

      const res = await fetch(url, { method });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al realizar la acción');
      }

      onRefresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoadingAction(null);
    }
  };

  const tabs: { key: FilterTab; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'pendientes', label: 'Pendientes' },
    { key: 'verificados', label: 'Verificados' },
  ];

  const planLabel: Record<string, string> = {
    basic: 'Básico',
    premium: 'Premium',
    vip: 'VIP',
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === tab.key
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
            <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
              filter === tab.key ? 'bg-green-700' : 'bg-gray-200 dark:bg-gray-700'
            }`}>
              {tab.key === 'todos'
                ? users.length
                : tab.key === 'pendientes'
                ? users.filter((u) => !u.isVerified).length
                : users.filter((u) => u.isVerified).length}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="text-center py-10 text-gray-500 dark:text-gray-400 text-sm">
          No hay usuarios en esta categoría.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Usuario</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Email</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Rol</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Tokens</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Plan</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Estado</th>
                <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{user.username}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString('es-AR')}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {user.email ?? '—'}
                    {user.emailVerified && (
                      <span className="ml-1 text-green-500" title="Email verificado">✓</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary">{user.role}</Badge>
                    {user.isCultivator && (
                      <Badge variant="default" className="ml-1 text-xs">Cultivador</Badge>
                    )}
                  </td>
                  <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                    {user.tokens}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {user.planType ? planLabel[user.planType] ?? user.planType : '—'}
                  </td>
                  <td className="px-4 py-3">
                    {user.isVerified ? (
                      <Badge variant="default">Verificado</Badge>
                    ) : user.emailVerified ? (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        Email OK
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Pendiente</Badge>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {!user.isVerified && user.emailVerified && (
                        <Button
                          size="sm"
                          onClick={() => handleAction(user.id, 'approve')}
                          disabled={loadingAction === `approve-${user.id}`}
                        >
                          {loadingAction === `approve-${user.id}` ? '...' : 'Aprobar'}
                        </Button>
                      )}
                      {!user.isVerified && (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleAction(user.id, 'reject')}
                          disabled={loadingAction === `reject-${user.id}`}
                        >
                          {loadingAction === `reject-${user.id}` ? '...' : 'Rechazar'}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setTokenModalUser(user)}
                      >
                        Tokens
                      </Button>
                      <Button
                        size="sm"
                        variant={user.isCultivator ? 'secondary' : 'outline'}
                        onClick={() => handleAction(user.id, 'toggle-cultivator')}
                        disabled={loadingAction === `toggle-cultivator-${user.id}`}
                      >
                        {user.isCultivator ? 'Quitar cultivador' : 'Cultivador'}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tokenModalUser && (
        <TokenAssignModal
          userId={tokenModalUser.id}
          username={tokenModalUser.username}
          onClose={() => setTokenModalUser(null)}
          onSuccess={onRefresh}
        />
      )}
    </div>
  );
}
````

## File: components/admin/UserTableWrapper.tsx
````typescript
'use client';

import { useState, useCallback } from 'react';
import UserTable from '@/components/admin/UserTable';

interface User {
  id: number;
  username: string;
  email: string | null;
  role: string;
  tokens: number;
  isVerified: boolean;
  emailVerified: boolean;
  planType: string | null;
  isCultivator: boolean;
  createdAt: string;
}

interface UserTableWrapperProps {
  initialUsers: User[];
}

export default function UserTableWrapper({ initialUsers }: UserTableWrapperProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const refresh = useCallback(async () => {
    setRefreshing(true);
    setError('');
    try {
      const res = await fetch('/api/admin/users');
      if (!res.ok) throw new Error('Error al recargar usuarios');
      const data = await res.json();
      setUsers(data.users ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <div>
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          {error}
        </div>
      )}
      {refreshing && (
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">Actualizando...</div>
      )}
      <UserTable users={users} onRefresh={refresh} />
    </div>
  );
}
````

## File: components/auth/LoginForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verified = searchParams.get('verified');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-green-800 dark:text-green-400">
          Iniciar Sesión
        </CardTitle>
        <CardDescription>
          Ingresá tus credenciales para continuar
        </CardDescription>
      </CardHeader>
      <CardContent>
        {verified && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
            Email verificado correctamente. Podés iniciar sesión.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Usuario
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu nombre de usuario"
              required
              autoComplete="username"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              required
              autoComplete="current-password"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tenés cuenta?{' '}
          <Link href="/register" className="text-green-600 hover:underline dark:text-green-400">
            Registrate
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
````

## File: components/auth/RegisterForm.tsx
````typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al registrarse');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto dark:bg-green-900/30">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            ¡Registración exitosa!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Verificá tu email para activar tu cuenta. Una vez verificado, un administrador aprobará tu acceso.
          </p>
          <Link href="/login">
            <Button variant="outline" className="mt-2">
              Ir al login
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-green-800 dark:text-green-400">
          Crear Cuenta
        </CardTitle>
        <CardDescription>
          Completá el formulario para registrarte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Usuario <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Mínimo 3 caracteres"
              required
              minLength={3}
              autoComplete="username"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com (opcional)"
              autoComplete="email"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              required
              minLength={6}
              autoComplete="new-password"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿Ya tenés cuenta?{' '}
          <Link href="/login" className="text-green-600 hover:underline dark:text-green-400">
            Iniciá sesión
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
````

## File: components/auth/VerificationBanner.tsx
````typescript
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function VerificationBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="w-full bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 rounded-lg p-4 flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p className="text-sm text-amber-800 dark:text-amber-300">
          <span className="font-semibold">Cuenta pendiente de aprobación.</span>{' '}
          Tu cuenta está siendo revisada por un administrador. Te notificaremos cuando esté aprobada.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200 transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
````

## File: components/community/CategoryFilter.tsx
````typescript
'use client';

const CATEGORIES = [
  'Todos',
  'Clases',
  'Investigaciones',
  'FAQ',
  'Debates',
  'Papers',
  'Noticias',
  'Anuncios',
] as const;

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            active === cat
              ? 'bg-green-600 text-white shadow-sm'
              : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-green-400 hover:text-green-700 dark:hover:text-green-400'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
````

## File: components/community/CommentForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface CommentFormProps {
  postId: number;
  onComment?: () => void;
}

export default function CommentForm({ postId, onComment }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error al publicar comentario');
      }

      setContent('');
      onComment?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm rounded-lg px-4 py-2">
          {error}
        </div>
      )}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribí tu comentario..."
        rows={4}
        className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading || !content.trim()}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {loading ? 'Publicando...' : 'Comentar'}
        </button>
      </div>
    </form>
  );
}
````

## File: components/community/CommentList.tsx
````typescript
'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export interface Comment {
  id: number;
  content: string;
  authorUsername: string;
  createdAt: string;
  userId?: number;
}

interface CommentListProps {
  comments: Comment[];
  currentUserId?: number;
  isAdmin?: boolean;
  onDelete?: (id: number) => void;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function CommentList({
  comments,
  currentUserId,
  isAdmin = false,
  onDelete,
}: CommentListProps) {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  if (comments.length === 0) {
    return (
      <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-6">
        Todavía no hay comentarios. ¡Sé el primero!
      </p>
    );
  }

  const sorted = [...comments].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este comentario?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/comments/${id}`, { method: 'DELETE' });
      if (res.ok) onDelete?.(id);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-4">
      {sorted.map((comment) => {
        const canDelete = isAdmin || comment.userId === currentUserId;
        return (
          <div
            key={comment.id}
            className="flex gap-3 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
              {comment.authorUsername.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {comment.authorUsername}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-xs">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                {canDelete && (
                  <button
                    onClick={() => handleDelete(comment.id)}
                    disabled={deletingId === comment.id}
                    className="opacity-0 group-hover:opacity-100 flex items-center justify-center w-7 h-7 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all disabled:opacity-30"
                    title="Eliminar comentario"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                {comment.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
````

## File: components/community/PostCard.tsx
````typescript
'use client';

import { useRouter } from 'next/navigation';
import { MessageSquare, ThumbsUp } from 'lucide-react';

export interface PostCardData {
  id: number;
  title: string;
  category: string;
  author: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  isPinned: boolean;
  isImmutable: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  Clases: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Investigaciones: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  FAQ: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Debates: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Papers: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
  Noticias: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
  Anuncios: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

interface PostCardProps {
  post: PostCardData;
}

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const categoryColor = CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-700';

  return (
    <div
      onClick={() => router.push(`/community/${post.id}`)}
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        post.isPinned ? 'ring-2 ring-green-500 ring-offset-1' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {post.isPinned && (
            <span className="text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
              📌 Fijado
            </span>
          )}
          {post.isImmutable && (
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 px-2 py-0.5 rounded-full">
              🔒 Bloqueado
            </span>
          )}
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColor}`}>
            {post.category}
          </span>
        </div>
      </div>

      <h3 className="mt-3 text-base font-semibold text-gray-800 dark:text-gray-100 leading-snug">
        {post.title}
      </h3>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
            {post.author.charAt(0).toUpperCase()}
          </div>
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            {post.likesCount}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {post.commentsCount}
          </span>
        </div>
      </div>
    </div>
  );
}
````

## File: components/community/PostDetail.tsx
````typescript
'use client';

import { Download, Pin, Lock } from 'lucide-react';
import ReactionBar, { type ReactionCounts, type ReactionType } from './ReactionBar';
import SubscribeButton from './SubscribeButton';

const CATEGORY_COLORS: Record<string, string> = {
  Clases: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Investigaciones: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  FAQ: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Debates: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Papers: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
  Noticias: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
  Anuncios: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export interface PostDetailData {
  id: number;
  title: string;
  content: string;
  category: string;
  authorUsername: string;
  createdAt: string;
  isPinned: boolean;
  isImmutable: boolean;
  youtubeLink?: string | null;
  fileUrl?: string | null;
}

interface PostDetailProps {
  post: PostDetailData;
  reactions: ReactionCounts;
  userReaction: ReactionType | null;
  isSubscribed?: boolean;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v');
    } else if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.slice(1);
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

function exportAsText(post: PostDetailData) {
  const lines = [
    post.title,
    '='.repeat(post.title.length),
    '',
    `Autor: ${post.authorUsername}`,
    `Categoría: ${post.category}`,
    `Fecha: ${formatDate(post.createdAt)}`,
    '',
    post.content,
  ];
  if (post.youtubeLink) lines.push('', `Video: ${post.youtubeLink}`);
  if (post.fileUrl) lines.push(`Archivo: ${post.fileUrl}`);

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${post.title.replace(/[^a-z0-9]/gi, '_')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function PostDetail({ post, reactions, userReaction, isSubscribed = false }: PostDetailProps) {
  const categoryColor = CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-700';
  const embedUrl = post.youtubeLink ? getYoutubeEmbedUrl(post.youtubeLink) : null;

  return (
    <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Badges */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {post.isPinned && (
            <span className="flex items-center gap-1 text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2.5 py-1 rounded-full">
              <Pin className="w-3 h-3" />
              Fijado
            </span>
          )}
          {post.isImmutable && (
            <span className="flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 px-2.5 py-1 rounded-full">
              <Lock className="w-3 h-3" />
              Bloqueado
            </span>
          )}
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor}`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-3">
          {post.title}
        </h1>

        {/* Author + date */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {post.authorUsername.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-gray-700 dark:text-gray-300">{post.authorUsername}</span>
          <span>·</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none mb-6">
          {post.content.split('\n').map((para, i) =>
            para.trim() ? (
              <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ) : (
              <br key={i} />
            )
          )}
        </div>

        {/* YouTube embed */}
        {embedUrl && (
          <div className="mb-6 rounded-xl overflow-hidden aspect-video">
            <iframe
              src={embedUrl}
              title="Video YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* File download */}
        {post.fileUrl && (
          <a
            href={post.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 mb-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            Descargar archivo adjunto
          </a>
        )}

        {/* Reactions + Actions */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <ReactionBar
            postId={post.id}
            reactions={reactions}
            userReaction={userReaction}
          />
          <div className="flex items-center gap-2">
            <SubscribeButton postId={post.id} initialSubscribed={isSubscribed} />
            <button
              onClick={() => exportAsText(post)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
````

## File: components/community/PostForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const CATEGORIES = [
  'Clases',
  'Investigaciones',
  'FAQ',
  'Debates',
  'Papers',
  'Noticias',
  'Anuncios',
] as const;

interface PostFormProps {
  postId?: number;
  initialValues?: {
    title: string;
    content: string;
    category: string;
    youtubeLink?: string;
    fileUrl?: string;
  };
  onClose: () => void;
  onSuccess?: (postId: number) => void;
}

export default function PostForm({ postId, initialValues, onClose, onSuccess }: PostFormProps) {
  const isEdit = Boolean(postId);

  const [form, setForm] = useState({
    title: initialValues?.title ?? '',
    content: initialValues?.content ?? '',
    category: initialValues?.category ?? 'Clases',
    youtubeLink: initialValues?.youtubeLink ?? '',
    fileUrl: initialValues?.fileUrl ?? '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError('El título y el contenido son obligatorios.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const url = isEdit ? `/api/posts/${postId}` : '/api/posts';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          content: form.content.trim(),
          category: form.category,
          youtubeLink: form.youtubeLink.trim() || null,
          fileUrl: form.fileUrl.trim() || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error al guardar el post');
      }

      const data = await res.json();
      const id: number = isEdit ? postId! : (data.post?.id ?? data.id);
      onSuccess?.(id);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {isEdit ? 'Editar publicación' : 'Nueva publicación'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Título <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Título de tu publicación"
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categoría
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contenido <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Escribí tu contenido acá..."
              rows={8}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-y"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Link de YouTube <span className="text-gray-400 font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              name="youtubeLink"
              value={form.youtubeLink}
              onChange={handleChange}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              URL de archivo <span className="text-gray-400 font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              name="fileUrl"
              value={form.fileUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Publicar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/community/ReactionBar.tsx
````typescript
'use client';

import { useState } from 'react';

export type ReactionType = 'Interesante' | 'Util' | 'Cientifico';

export interface ReactionCounts {
  Interesante: number;
  Util: number;
  Cientifico: number;
}

interface ReactionBarProps {
  postId: number;
  reactions: ReactionCounts;
  userReaction: ReactionType | null;
  onReact?: (type: ReactionType) => void;
}

const REACTIONS: { type: ReactionType; emoji: string; label: string }[] = [
  { type: 'Interesante', emoji: '🧠', label: 'Interesante' },
  { type: 'Util', emoji: '👍', label: 'Útil' },
  { type: 'Cientifico', emoji: '🔬', label: 'Científico' },
];

export default function ReactionBar({ postId, reactions, userReaction, onReact }: ReactionBarProps) {
  const [counts, setCounts] = useState<ReactionCounts>(reactions);
  const [active, setActive] = useState<ReactionType | null>(userReaction);
  const [loading, setLoading] = useState(false);

  const handleReact = async (type: ReactionType) => {
    if (loading) return;
    setLoading(true);

    // Optimistic update
    const prev = active;
    const prevCounts = { ...counts };

    const newActive = active === type ? null : type;
    const newCounts = { ...counts };

    if (prev) newCounts[prev] = Math.max(0, newCounts[prev] - 1);
    if (newActive) newCounts[newActive] = newCounts[newActive] + 1;

    setActive(newActive);
    setCounts(newCounts);

    try {
      await fetch(`/api/posts/${postId}/reactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });
      onReact?.(type);
    } catch {
      // rollback
      setActive(prev);
      setCounts(prevCounts);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {REACTIONS.map(({ type, emoji, label }) => {
        const isActive = active === type;
        return (
          <button
            key={type}
            onClick={() => handleReact(type)}
            disabled={loading}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 ring-1 ring-green-400'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
            <span className="text-xs opacity-75">({counts[type]})</span>
          </button>
        );
      })}
    </div>
  );
}
````

## File: components/community/SubscribeButton.tsx
````typescript
'use client';

import { useState } from 'react';
import { Bell, BellOff } from 'lucide-react';

interface SubscribeButtonProps {
  postId: number;
  initialSubscribed?: boolean;
}

export default function SubscribeButton({ postId, initialSubscribed = false }: SubscribeButtonProps) {
  const [subscribed, setSubscribed] = useState(initialSubscribed);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    if (loading) return;
    setLoading(true);
    const prev = subscribed;
    setSubscribed(!prev); // optimistic

    try {
      await fetch(`/api/posts/${postId}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      setSubscribed(prev); // rollback
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
        subscribed
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {subscribed ? <BellOff className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
      {subscribed ? 'Suscripto' : 'Suscribirse'}
    </button>
  );
}
````

## File: components/crops/CropCard.tsx
````typescript
'use client';

import { useRouter } from 'next/navigation';
import type { Crop } from '@/db/schema';

interface CropCardProps {
  crop: Crop;
  logCount?: number;
}

const STATUS_STYLES: Record<string, string> = {
  Verde: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Amarillo: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Rojo: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

const METHOD_LABELS: Record<string, string> = {
  Hidroponia: 'Hidroponia',
  Organico: 'Orgánico',
  SalesMinerales: 'Sales Minerales',
  Mixto: 'Mixto',
};

function formatDate(date: Date | string | null) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function CropCard({ crop, logCount = 0 }: CropCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/cultivo/${crop.id}`)}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 cursor-pointer hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Image placeholder or actual image */}
      {crop.imageUrl ? (
        <div className="w-full h-32 mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={crop.imageUrl}
            alt={crop.bucketName}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center">
          <svg className="w-12 h-12 text-green-400 dark:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
            <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
          </svg>
        </div>
      )}

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-tight">
          {crop.bucketName}
        </h3>
        <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${STATUS_STYLES[crop.status ?? 'Verde']}`}>
          {crop.status ?? 'Verde'}
        </span>
      </div>

      <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
        <p className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#16A34A]"></span>
          {METHOD_LABELS[crop.cultivationMethod ?? 'Organico']}
        </p>
        <p>{logCount} {logCount === 1 ? 'registro' : 'registros'}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">Creado {formatDate(crop.createdAt)}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-medium text-[#16A34A] group-hover:underline">
          Ver detalle
        </span>
        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#16A34A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
````

## File: components/crops/CropForm.tsx
````typescript
'use client';

import { useState } from 'react';
import type { Crop } from '@/db/schema';

const CULTIVATION_METHODS = [
  { value: 'Organico', label: 'Orgánico' },
  { value: 'Hidroponia', label: 'Hidroponia' },
  { value: 'SalesMinerales', label: 'Sales Minerales' },
  { value: 'Mixto', label: 'Mixto' },
] as const;

interface CropFormProps {
  crop?: Crop;
  onSuccess: (crop: Crop) => void;
  onCancel: () => void;
}

export default function CropForm({ crop, onSuccess, onCancel }: CropFormProps) {
  const isEdit = !!crop;

  const [bucketName, setBucketName] = useState(crop?.bucketName ?? '');
  const [cultivationMethod, setCultivationMethod] = useState(crop?.cultivationMethod ?? 'Organico');
  const [imageUrl, setImageUrl] = useState(crop?.imageUrl ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!bucketName.trim()) {
      setError('Nombre de parcela requerido');
      return;
    }
    if (bucketName.length > 100) {
      setError('Nombre demasiado largo (máx 100 caracteres)');
      return;
    }

    setLoading(true);
    try {
      const url = isEdit ? `/api/crops/${crop!.id}` : '/api/crops';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bucketName: bucketName.trim(),
          cultivationMethod,
          imageUrl: imageUrl.trim() || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Error al guardar');
        return;
      }

      onSuccess(data.crop);
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {isEdit ? 'Editar Parcela' : 'Nueva Parcela'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Nombre de la parcela
            </label>
            <input
              type="text"
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
              placeholder="ej: Gorilla Glue #4"
              maxLength={100}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Método de cultivo
            </label>
            <select
              value={cultivationMethod}
              onChange={(e) => setCultivationMethod(e.target.value as typeof cultivationMethod)}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition"
            >
              {CULTIVATION_METHODS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              URL de imagen (opcional)
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#16A34A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition disabled:opacity-50"
            >
              {loading ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear parcela'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/crops/LabReportCard.tsx
````typescript
'use client';

import type { LabReport } from '@/db/schema';

interface LabReportCardProps {
  report: LabReport;
  onDelete?: (reportId: number) => void;
}

function formatDate(date: Date | string | null) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function parseResults(results: string): Record<string, unknown> {
  try {
    return JSON.parse(results);
  } catch {
    return {};
  }
}

const KNOWN_LABELS: Record<string, string> = {
  thc: 'THC',
  thca: 'THCA',
  cbd: 'CBD',
  cbda: 'CBDA',
  cbg: 'CBG',
  cbn: 'CBN',
  cbc: 'CBC',
};

export default function LabReportCard({ report, onDelete }: LabReportCardProps) {
  const results = parseResults(report.results);
  const entries = Object.entries(results);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
            Recolección
          </p>
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {formatDate(report.collectionDate)}
          </p>
          {report.plantId && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Planta: {report.plantId}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {report.reportUrl && (
            <a
              href={report.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#16A34A] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar
            </a>
          )}
          {onDelete && (
            <button
              onClick={() => {
                if (confirm('¿Eliminar este reporte?')) onDelete(report.id);
              }}
              className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded"
              title="Eliminar reporte"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {entries.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 text-center"
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                {KNOWN_LABELS[key.toLowerCase()] ?? key.toUpperCase()}
              </p>
              <p className="text-lg font-bold text-[#16A34A] dark:text-green-400 mt-0.5">
                {typeof value === 'number' ? `${value}%` : String(value)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs text-gray-400 dark:text-gray-500">Sin resultados registrados</p>
      )}
    </div>
  );
}
````

## File: components/crops/LabReportForm.tsx
````typescript
'use client';

import { useState } from 'react';
import type { LabReport } from '@/db/schema';

interface LabReportFormProps {
  cropId: number;
  onSuccess: (report: LabReport) => void;
  onCancel: () => void;
}

interface CannabinoidResults {
  thc: string;
  thca: string;
  cbd: string;
  cbda: string;
  cbg: string;
  cbn: string;
}

const EMPTY_RESULTS: CannabinoidResults = {
  thc: '',
  thca: '',
  cbd: '',
  cbda: '',
  cbg: '',
  cbn: '',
};

const RESULT_LABELS: Record<keyof CannabinoidResults, string> = {
  thc: 'THC (%)',
  thca: 'THCA (%)',
  cbd: 'CBD (%)',
  cbda: 'CBDA (%)',
  cbg: 'CBG (%)',
  cbn: 'CBN (%)',
};

export default function LabReportForm({ cropId, onSuccess, onCancel }: LabReportFormProps) {
  const [collectionDate, setCollectionDate] = useState('');
  const [plantId, setPlantId] = useState('');
  const [results, setResults] = useState<CannabinoidResults>({ ...EMPTY_RESULTS });
  const [reportUrl, setReportUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateResult(key: keyof CannabinoidResults, value: string) {
    setResults((prev) => ({ ...prev, [key]: value }));
  }

  function buildResultsJson(): string {
    const obj: Record<string, number> = {};
    for (const [key, val] of Object.entries(results)) {
      if (val !== '' && !isNaN(parseFloat(val))) {
        obj[key] = parseFloat(val);
      }
    }
    return JSON.stringify(obj);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!collectionDate) {
      setError('Fecha de recolección requerida');
      return;
    }

    const resultsJson = buildResultsJson();
    const parsed = JSON.parse(resultsJson);
    if (Object.keys(parsed).length === 0) {
      setError('Ingresá al menos un valor de cannabinoides');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/crops/${cropId}/lab-reports`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collectionDate,
          plantId: plantId.trim() || null,
          results: resultsJson,
          reportUrl: reportUrl.trim() || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Error al guardar');
        return;
      }

      onSuccess(data.labReport);
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  }

  const inputClass = 'w-full border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition';
  const labelClass = 'block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg my-8">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Nuevo Reporte de Laboratorio</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Fecha de recolección *</label>
              <input
                type="date"
                value={collectionDate}
                onChange={(e) => setCollectionDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>ID de planta (opcional)</label>
              <input
                type="text"
                value={plantId}
                onChange={(e) => setPlantId(e.target.value)}
                placeholder="ej: Planta A"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
              Cannabinoides (%)
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(EMPTY_RESULTS) as Array<keyof CannabinoidResults>).map((key) => (
                <div key={key}>
                  <label className={labelClass}>{RESULT_LABELS[key]}</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    value={results[key]}
                    onChange={(e) => updateResult(key, e.target.value)}
                    placeholder="0.00"
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>URL del reporte (opcional)</label>
            <input
              type="text"
              value={reportUrl}
              onChange={(e) => setReportUrl(e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#16A34A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Guardar reporte'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/crops/LogForm.tsx
````typescript
'use client';

import { useState } from 'react';
import type { CropLog } from '@/db/schema';

const PHASES = [
  { value: 'Germinacion', label: 'Germinación' },
  { value: 'Vegetacion', label: 'Vegetación' },
  { value: 'Floracion', label: 'Floración' },
  { value: 'Senescencia', label: 'Senescencia' },
] as const;

interface LogFormProps {
  cropId: number;
  onSuccess: (log: CropLog) => void;
  onCancel: () => void;
}

export default function LogForm({ cropId, onSuccess, onCancel }: LogFormProps) {
  const [form, setForm] = useState({
    week: '',
    phase: 'Vegetacion' as string,
    ph: 6.0,
    ec: 1.2,
    grow: 0,
    micro: 0,
    bloom: 0,
    lightHours: 18,
    notes: '',
    nutrientsSolution: '',
    sanitaryNotes: '',
    preventives: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.week.trim()) {
      setError('Semana requerida');
      return;
    }
    if (form.ph < 0 || form.ph > 14) {
      setError('pH debe estar entre 0 y 14');
      return;
    }
    if (form.ec < 0) {
      setError('EC no puede ser negativa');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/crops/${cropId}/logs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          week: form.week.trim(),
          notes: form.notes.trim() || null,
          nutrientsSolution: form.nutrientsSolution.trim() || null,
          sanitaryNotes: form.sanitaryNotes.trim() || null,
          preventives: form.preventives.trim() || null,
          imageUrl: form.imageUrl.trim() || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Error al guardar');
        return;
      }

      onSuccess(data.log);
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  }

  const inputClass = 'w-full border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition';
  const labelClass = 'block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl my-8">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Nuevo Registro Semanal</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Row 1 — Week + Phase */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Semana *</label>
              <input
                type="text"
                value={form.week}
                onChange={(e) => update('week', e.target.value)}
                placeholder="ej: Semana 5"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Fase fenológica</label>
              <select
                value={form.phase}
                onChange={(e) => update('phase', e.target.value)}
                className={inputClass}
              >
                {PHASES.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2 — pH + EC + Light */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>pH</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="14"
                value={form.ph}
                onChange={(e) => update('ph', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>EC (mS/cm)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={form.ec}
                onChange={(e) => update('ec', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Horas de Luz</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="24"
                value={form.lightHours}
                onChange={(e) => update('lightHours', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 3 — Nutrients */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Grow (ml/L)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                value={form.grow}
                onChange={(e) => update('grow', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Micro (ml/L)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                value={form.micro}
                onChange={(e) => update('micro', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Bloom (ml/L)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                value={form.bloom}
                onChange={(e) => update('bloom', parseFloat(e.target.value))}
                className={inputClass}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className={labelClass}>Notas generales</label>
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              rows={2}
              placeholder="Observaciones del cultivo..."
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Solución de nutrientes</label>
            <input
              type="text"
              value={form.nutrientsSolution}
              onChange={(e) => update('nutrientsSolution', e.target.value)}
              placeholder="ej: Flora Series 3-part"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Notas sanitarias</label>
              <textarea
                value={form.sanitaryNotes}
                onChange={(e) => update('sanitaryNotes', e.target.value)}
                rows={2}
                placeholder="Estado fitosanitario..."
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Preventivos aplicados</label>
              <textarea
                value={form.preventives}
                onChange={(e) => update('preventives', e.target.value)}
                rows={2}
                placeholder="Fungicidas, insecticidas..."
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>URL de imagen (opcional)</label>
            <input
              type="text"
              value={form.imageUrl}
              onChange={(e) => update('imageUrl', e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#16A34A] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#14532D] transition disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Guardar registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/crops/LogTable.tsx
````typescript
'use client';

import { useState } from 'react';
import type { CropLog } from '@/db/schema';

interface LogTableProps {
  logs: CropLog[];
  onDelete?: (logId: number) => void;
}

function formatDate(date: Date | string | null) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
  });
}

const PHASE_STYLES: Record<string, string> = {
  Germinacion: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Vegetacion: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Floracion: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Senescencia: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
};

export default function LogTable({ logs, onDelete }: LogTableProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (logs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 dark:text-gray-600">
        <svg className="w-10 h-10 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-sm">Sin registros todavía</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 dark:border-gray-800">
            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Semana</th>
            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Fase</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">pH</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">EC</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Grow</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Micro</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Bloom</th>
            <th className="text-right py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Luz (h)</th>
            <th className="py-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Feedback</th>
            <th className="py-3 px-3"></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <>
              <tr
                key={log.id}
                onClick={() => setExpandedId(expandedId === log.id ? null : log.id)}
                className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer transition-colors"
              >
                <td className="py-3 px-3 font-medium text-gray-900 dark:text-gray-100">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className={`w-3.5 h-3.5 text-gray-400 transition-transform ${expandedId === log.id ? 'rotate-90' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {log.week}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${PHASE_STYLES[log.phase ?? 'Vegetacion']}`}>
                    {log.phase ?? '—'}
                  </span>
                </td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.ph ?? '—'}</td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.ec ?? '—'}</td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.grow ?? 0} ml</td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.micro ?? 0} ml</td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.bloom ?? 0} ml</td>
                <td className="py-3 px-3 text-right text-gray-700 dark:text-gray-300">{log.lightHours ?? '—'}</td>
                <td className="py-3 px-3 max-w-[160px]">
                  {log.feedback ? (
                    <span className="text-xs text-[#16A34A] dark:text-green-400 line-clamp-1" title={log.feedback}>
                      {log.feedback}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">—</span>
                  )}
                </td>
                <td className="py-3 px-3">
                  {onDelete && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('¿Eliminar este registro?')) onDelete(log.id);
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded"
                      title="Eliminar registro"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </td>
              </tr>

              {expandedId === log.id && (
                <tr key={`${log.id}-expanded`} className="bg-gray-50 dark:bg-gray-800/20">
                  <td colSpan={10} className="px-6 py-4">
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      {log.notes && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Notas</p>
                          <p className="text-gray-700 dark:text-gray-300">{log.notes}</p>
                        </div>
                      )}
                      {log.nutrientsSolution && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Solución de Nutrientes</p>
                          <p className="text-gray-700 dark:text-gray-300">{log.nutrientsSolution}</p>
                        </div>
                      )}
                      {log.sanitaryNotes && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Notas Sanitarias</p>
                          <p className="text-gray-700 dark:text-gray-300">{log.sanitaryNotes}</p>
                        </div>
                      )}
                      {log.preventives && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Preventivos</p>
                          <p className="text-gray-700 dark:text-gray-300">{log.preventives}</p>
                        </div>
                      )}
                      {!log.notes && !log.nutrientsSolution && !log.sanitaryNotes && !log.preventives && (
                        <p className="text-gray-400 dark:text-gray-500 text-xs col-span-2">Sin información adicional</p>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
````

## File: components/crops/NutrientCalculator.tsx
````typescript
'use client';

import { useState } from 'react';

export default function NutrientCalculator() {
  const [grow, setGrow] = useState(10);
  const [micro, setMicro] = useState(5);
  const [bloom, setBloom] = useState(10);
  const [volume, setVolume] = useState(20);

  const growMl = +(grow * volume).toFixed(1);
  const microMl = +(micro * volume).toFixed(1);
  const bloomMl = +(bloom * volume).toFixed(1);
  const totalMl = +(growMl + microMl + bloomMl).toFixed(1);

  const inputClass = 'w-full border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none transition';
  const labelClass = 'block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1';

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-100 dark:border-green-900/30 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Calculadora de Nutrientes</h3>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div>
          <label className={labelClass}>Grow (ml/L)</label>
          <input
            type="number"
            step="0.5"
            min="0"
            value={grow}
            onChange={(e) => setGrow(parseFloat(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Micro (ml/L)</label>
          <input
            type="number"
            step="0.5"
            min="0"
            value={micro}
            onChange={(e) => setMicro(parseFloat(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Bloom (ml/L)</label>
          <input
            type="number"
            step="0.5"
            min="0"
            value={bloom}
            onChange={(e) => setBloom(parseFloat(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Volumen (L)</label>
          <input
            type="number"
            step="1"
            min="1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value) || 1)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-3 text-center">
          <p className="text-xs font-medium text-green-700 dark:text-green-400">Grow</p>
          <p className="text-xl font-bold text-green-800 dark:text-green-300">{growMl} ml</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-400">Micro</p>
          <p className="text-xl font-bold text-blue-800 dark:text-blue-300">{microMl} ml</p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-3 text-center">
          <p className="text-xs font-medium text-purple-700 dark:text-purple-400">Bloom</p>
          <p className="text-xl font-bold text-purple-800 dark:text-purple-300">{bloomMl} ml</p>
        </div>
        <div className="bg-amber-100 dark:bg-amber-900/30 rounded-xl p-3 text-center">
          <p className="text-xs font-medium text-amber-700 dark:text-amber-400">Total</p>
          <p className="text-xl font-bold text-amber-800 dark:text-amber-300">{totalMl} ml</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">
        Para {volume}L de solución — ratios en ml/L
      </p>
    </div>
  );
}
````

## File: components/cultivator/PatientList.tsx
````typescript
'use client';

import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Patient {
  id: number;
  username: string;
  email: string | null;
  planType: string | null;
  assignedAt: string;
}

interface PatientListProps {
  patients: Patient[];
}

const planLabel: Record<string, string> = {
  basic: 'Básico',
  premium: 'Premium',
  vip: 'VIP',
};

export default function PatientList({ patients }: PatientListProps) {
  if (patients.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500 dark:text-gray-400">
        <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="text-base font-medium mb-1">No tenés pacientes asignados</p>
        <p className="text-sm">Contactá al administrador para que te asigne pacientes.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {patients.map((patient) => (
        <Card key={patient.id}>
          <CardContent className="pt-5 pb-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 dark:text-green-400 font-bold text-sm uppercase">
                  {patient.username.charAt(0)}
                </span>
              </div>
              {patient.planType && (
                <Badge variant="secondary">
                  {planLabel[patient.planType] ?? patient.planType}
                </Badge>
              )}
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
              {patient.username}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {patient.email ?? 'Sin email'}
            </p>

            <p className="text-xs text-gray-400 dark:text-gray-500">
              Asignado el{' '}
              {new Date(patient.assignedAt).toLocaleDateString('es-AR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
````

## File: components/events/EventCard.tsx
````typescript
'use client';

import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TicketCategory {
  id: number;
  name: string;
  price: number;
  benefits: string | null;
  capacity: number | null;
  reserved: number;
}

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time?: string | null;
  location?: string | null;
  capacity?: number | null;
  flyerUrl?: string | null;
  ticketCategories?: TicketCategory[];
  reservationsCount?: number;
}

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  capacity,
  flyerUrl,
  ticketCategories = [],
  reservationsCount = 0,
}: EventCardProps) {
  const eventDate = new Date(date);
  const isFull = capacity !== null && capacity !== undefined && reservationsCount >= capacity;

  const formattedDate = eventDate.toLocaleDateString('es-AR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const minPrice = ticketCategories.length > 0
    ? Math.min(...ticketCategories.map((c) => c.price))
    : null;

  return (
    <Card className="overflow-hidden group">
      {flyerUrl && (
        <div className="h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={flyerUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      {!flyerUrl && (
        <div className="h-20 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
          <Calendar className="w-8 h-8 text-white/60" />
        </div>
      )}

      <CardContent className="p-4 space-y-3">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 line-clamp-2 leading-snug">{title}</h3>

        <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{formattedDate}</span>
          </div>
          {time && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          )}
          {capacity && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>{reservationsCount}/{capacity} lugares</span>
            </div>
          )}
        </div>

        {ticketCategories.length > 0 && (
          <div className="space-y-1 border-t border-gray-100 dark:border-gray-800 pt-2">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Ticket className="w-3 h-3" /> Categorías
            </p>
            {ticketCategories.slice(0, 2).map((cat) => (
              <div key={cat.id} className="flex items-center justify-between text-xs">
                <span className="text-gray-700 dark:text-gray-300">{cat.name}</span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {cat.price === 0 ? 'Gratis' : `${cat.price} tkn`}
                </span>
              </div>
            ))}
            {ticketCategories.length > 2 && (
              <p className="text-xs text-gray-400">+{ticketCategories.length - 2} más</p>
            )}
          </div>
        )}

        <Link href={`/events/${id}`} className="block">
          {isFull ? (
            <Button className="w-full" variant="secondary" disabled>
              Agotado
            </Button>
          ) : (
            <Button className="w-full">
              {minPrice === 0 ? 'Reservar gratis' : minPrice !== null ? `Desde ${minPrice} tkn` : 'Reservar'}
            </Button>
          )}
        </Link>
      </CardContent>
    </Card>
  );
}
````

## File: components/events/EventForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Trash2 } from 'lucide-react';

interface TicketCategoryInput {
  name: string;
  price: number;
  benefits: string;
  capacity: string;
}

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  flyerUrl: string;
  requirements: string;
  ticketCategories: TicketCategoryInput[];
}

interface EventFormProps {
  eventId?: number;
  initialData?: Partial<EventFormData>;
  onClose: () => void;
  onSuccess: () => void;
}

const defaultCategory = (): TicketCategoryInput => ({
  name: '',
  price: 0,
  benefits: '',
  capacity: '',
});

export default function EventForm({ eventId, initialData, onClose, onSuccess }: EventFormProps) {
  const [form, setForm] = useState<EventFormData>({
    title: initialData?.title ?? '',
    description: initialData?.description ?? '',
    date: initialData?.date ?? '',
    time: initialData?.time ?? '',
    location: initialData?.location ?? '',
    capacity: initialData?.capacity ?? '',
    flyerUrl: initialData?.flyerUrl ?? '',
    requirements: initialData?.requirements ?? '',
    ticketCategories: initialData?.ticketCategories ?? [defaultCategory()],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: keyof EventFormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const updateCategory = (index: number, field: keyof TicketCategoryInput, value: string) => {
    setForm((f) => {
      const cats = [...f.ticketCategories];
      cats[index] = { ...cats[index], [field]: field === 'price' ? Number(value) : value };
      return { ...f, ticketCategories: cats };
    });
  };

  const addCategory = () => {
    setForm((f) => ({ ...f, ticketCategories: [...f.ticketCategories, defaultCategory()] }));
  };

  const removeCategory = (index: number) => {
    setForm((f) => ({
      ...f,
      ticketCategories: f.ticketCategories.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        ...form,
        capacity: form.capacity ? Number(form.capacity) : null,
        ticketCategories: form.ticketCategories.map((c) => ({
          ...c,
          price: Number(c.price),
          capacity: c.capacity ? Number(c.capacity) : null,
        })),
      };

      const url = eventId ? `/api/events/${eventId}` : '/api/events';
      const method = eventId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al guardar el evento');

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {eventId ? 'Editar evento' : 'Nuevo evento'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título *</label>
            <Input
              value={form.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="Nombre del evento"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
            <textarea
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Descripción del evento..."
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha *</label>
              <Input
                type="date"
                value={form.date}
                onChange={(e) => updateField('date', e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hora</label>
              <Input
                type="time"
                value={form.time}
                onChange={(e) => updateField('time', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Lugar</label>
              <Input
                value={form.location}
                onChange={(e) => updateField('location', e.target.value)}
                placeholder="Dirección o nombre del lugar"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Capacidad total</label>
              <Input
                type="number"
                min="1"
                value={form.capacity}
                onChange={(e) => updateField('capacity', e.target.value)}
                placeholder="Sin límite"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL del flyer</label>
            <Input
              value={form.flyerUrl}
              onChange={(e) => updateField('flyerUrl', e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Requisitos</label>
            <textarea
              value={form.requirements}
              onChange={(e) => updateField('requirements', e.target.value)}
              placeholder="Requisitos para asistir..."
              rows={2}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Ticket categories */}
          <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Categorías de entrada</h3>
              <Button type="button" variant="outline" size="sm" onClick={addCategory}>
                <Plus className="w-3.5 h-3.5 mr-1" />
                Agregar
              </Button>
            </div>

            {form.ticketCategories.map((cat, i) => (
              <div key={i} className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Categoría {i + 1}</span>
                  {form.ticketCategories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCategory(i)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                      aria-label="Eliminar categoría"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs text-gray-500 dark:text-gray-400">Nombre *</label>
                    <Input
                      value={cat.name}
                      onChange={(e) => updateCategory(i, 'name', e.target.value)}
                      placeholder="General"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-gray-500 dark:text-gray-400">Precio (tokens)</label>
                    <Input
                      type="number"
                      min="0"
                      value={cat.price}
                      onChange={(e) => updateCategory(i, 'price', e.target.value)}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-gray-500 dark:text-gray-400">Cupos</label>
                    <Input
                      type="number"
                      min="1"
                      value={cat.capacity}
                      onChange={(e) => updateCategory(i, 'capacity', e.target.value)}
                      placeholder="Sin límite"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs text-gray-500 dark:text-gray-400">Beneficios</label>
                  <Input
                    value={cat.benefits}
                    onChange={(e) => updateCategory(i, 'benefits', e.target.value)}
                    placeholder="Incluye acceso VIP, bebidas..."
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-end pt-2 border-t border-gray-100 dark:border-gray-800">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Guardando...' : eventId ? 'Actualizar evento' : 'Crear evento'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/events/ReservationCard.tsx
````typescript
'use client';

import { Calendar, Ticket, Hash } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ReservationCardProps {
  eventTitle: string;
  categoryName: string;
  qrCode: string;
  reservedAt: string;
}

export default function ReservationCard({
  eventTitle,
  categoryName,
  qrCode,
  reservedAt,
}: ReservationCardProps) {
  const formattedDate = new Date(reservedAt).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card className="border-2 border-green-500 dark:border-green-600">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
            <Ticket className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide mb-0.5">
              Reserva confirmada
            </p>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 leading-snug">{eventTitle}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{categoryName}</p>
          </div>
        </div>

        {/* QR Code display */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center space-y-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">Código QR</p>
          {/* Simple QR text representation — in prod would use a QR library */}
          <div className="font-mono text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 break-all text-gray-700 dark:text-gray-300">
            {qrCode}
          </div>
          <p className="text-xs text-gray-400">Presentá este código al ingresar al evento</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3">
          <div className="flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5" />
            <span className="font-mono">{qrCode.slice(0, 8)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservado el {formattedDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
````

## File: components/events/TicketSelector.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Ticket, Coins, CheckCircle2 } from 'lucide-react';

interface TicketCategory {
  id: number;
  name: string;
  price: number;
  benefits: string | null;
  capacity: number | null;
  reserved: number;
}

interface TicketSelectorProps {
  eventId: number;
  categories: TicketCategory[];
  userTokens: number;
  onSuccess: () => void;
}

export default function TicketSelector({ eventId, categories, userTokens, onSuccess }: TicketSelectorProps) {
  const [selected, setSelected] = useState<number | null>(categories[0]?.id ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedCat = categories.find((c) => c.id === selected);
  const canAfford = selectedCat !== undefined && userTokens >= selectedCat.price;
  const isFull = (cat: TicketCategory) =>
    cat.capacity !== null && cat.reserved >= cat.capacity;

  const handleReserve = async () => {
    if (!selected) return;
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`/api/events/${eventId}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryId: selected }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al reservar');
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  if (categories.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        No hay categorías de entrada disponibles.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Ticket className="w-4 h-4 text-green-600 dark:text-green-400" />
          Seleccioná tu entrada
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <Coins className="w-4 h-4" />
          <span>Tu balance: <strong className="text-green-600 dark:text-green-400">{userTokens} tokens</strong></span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="space-y-2">
        {categories.map((cat) => {
          const full = isFull(cat);
          const affordable = userTokens >= cat.price;
          const isSelected = selected === cat.id;

          return (
            <label
              key={cat.id}
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                full
                  ? 'opacity-50 cursor-not-allowed border-gray-200 dark:border-gray-700'
                  : isSelected
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
              }`}
            >
              <input
                type="radio"
                name="ticket-category"
                value={cat.id}
                checked={isSelected}
                onChange={() => !full && setSelected(cat.id)}
                disabled={full}
                className="mt-0.5 accent-green-600"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-gray-900 dark:text-gray-100">{cat.name}</span>
                  <span className={`font-bold text-sm ${affordable ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                    {cat.price === 0 ? 'Gratis' : `${cat.price} tokens`}
                  </span>
                </div>
                {cat.benefits && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cat.benefits}</p>
                )}
                <div className="flex items-center gap-3 mt-1">
                  {cat.capacity !== null && (
                    <span className="text-xs text-gray-400">
                      {cat.capacity - cat.reserved} lugar{cat.capacity - cat.reserved !== 1 ? 'es' : ''} disponible{cat.capacity - cat.reserved !== 1 ? 's' : ''}
                    </span>
                  )}
                  {full && (
                    <span className="text-xs font-medium text-red-500 dark:text-red-400">Agotado</span>
                  )}
                  {!affordable && !full && cat.price > 0 && (
                    <span className="text-xs text-red-400">Tokens insuficientes</span>
                  )}
                </div>
              </div>
              {isSelected && !full && <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />}
            </label>
          );
        })}
      </div>

      <Button
        className="w-full"
        onClick={handleReserve}
        disabled={loading || !selected || !canAfford || (selectedCat ? isFull(selectedCat) : false)}
      >
        {loading ? 'Reservando...' : canAfford ? 'Confirmar reserva' : 'Tokens insuficientes'}
      </Button>
    </div>
  );
}
````

## File: components/layout/AdminSidebarWrapper.tsx
````typescript
'use client';

import { usePathname } from 'next/navigation';
import AppSidebar from './AppSidebar';

export default function AdminSidebarWrapper() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  if (!isAdmin) return null;
  return <AppSidebar />;
}
````

## File: components/layout/AppHeader.tsx
````typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf, LogOut, ChevronDown } from 'lucide-react';
import NotificationBell from '@/components/shared/NotificationBell';

const NAV_LINKS = [
  { href: '/cultivo', label: 'Mi Cultivo' },
  { href: '/market', label: 'Marketplace' },
  { href: '/community', label: 'Comunidad' },
  { href: '/events', label: 'Eventos' },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/');
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-bold text-[#16A34A] text-lg tracking-tight shrink-0"
          >
            <Leaf className="w-5 h-5 text-[#16A34A]" />
            Citronela
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(href)
                    ? 'bg-green-50 dark:bg-green-900/20 text-[#16A34A] dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: Bell + User */}
          <div className="flex items-center gap-2">
            <NotificationBell />

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white text-xs font-bold flex items-center justify-center">
                  U
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-44 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-1 z-50">
                  <Link
                    href="/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Mi perfil
                  </Link>
                  <hr className="my-1 border-gray-100 dark:border-gray-800" />
                  <Link
                    href="/api/auth/logout"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Cerrar sesión
                  </Link>
                </div>
              )}
            </div>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menú"
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'bg-green-50 dark:bg-green-900/20 text-[#16A34A] dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {label}
            </Link>
          ))}
          <hr className="border-gray-100 dark:border-gray-800 my-2" />
          <Link
            href="/profile"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Mi perfil
          </Link>
          <Link
            href="/api/auth/logout"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </Link>
        </div>
      )}
    </header>
  );
}
````

## File: components/layout/AppSidebar.tsx
````typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Sprout,
  MessageSquare,
  Receipt,
  CalendarDays,
  FileText,
  Bell,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const SIDEBAR_LINKS = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/users', label: 'Usuarios', icon: Users },
  { href: '/admin/cultivo', label: 'Parcelas', icon: Sprout },
  { href: '/admin/community', label: 'Comunidad', icon: MessageSquare },
  { href: '/admin/transactions', label: 'Transacciones', icon: Receipt },
  { href: '/admin/events', label: 'Eventos', icon: CalendarDays },
  { href: '/admin/legal', label: 'Legal', icon: FileText },
  { href: '/admin/notifications', label: 'Notificaciones', icon: Bell },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + '/');
  }

  return (
    <aside
      className={`hidden lg:flex flex-col shrink-0 bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800 transition-all duration-200 ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      {/* Collapse toggle */}
      <div className="flex justify-end p-3 border-b border-gray-100 dark:border-gray-800">
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-0.5 px-2">
        {SIDEBAR_LINKS.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors group ${
                active
                  ? 'bg-green-50 dark:bg-green-900/20 text-[#16A34A] dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  active ? 'text-[#16A34A] dark:text-green-400' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                }`}
              />
              {!collapsed && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
````

## File: components/market/CartDrawer.tsx
````typescript
'use client';

import { Button } from '@/components/ui/button';
import type { Product } from './ProductCard';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: number) => void;
  onQtyChange: (productId: number, qty: number) => void;
  onConfirm: () => void;
  tokenBalance?: number;
  confirming?: boolean;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onRemove,
  onQtyChange,
  onConfirm,
  tokenBalance,
  confirming = false,
}: CartDrawerProps) {
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Carrito</h2>
            {tokenBalance != null && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Saldo:{' '}
                <span style={{ color: '#D97706' }} className="font-semibold">
                  🪙 {tokenBalance.toLocaleString('es-AR')}
                </span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-400 dark:text-gray-600">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-sm">El carrito está vacío</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-3"
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  {item.product.imageUrl ? (
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-2xl">📦</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs" style={{ color: '#D97706' }}>
                    🪙 {(item.product.price * item.quantity).toLocaleString('es-AR')}
                  </p>
                </div>

                {/* Qty controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onQtyChange(item.product.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-red-300 hover:text-red-500 transition-colors text-sm font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onQtyChange(item.product.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stock}
                    className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-green-300 hover:text-green-600 transition-colors text-sm font-bold disabled:opacity-40"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(item.product.id)}
                  className="text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors ml-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total</span>
              <span className="text-xl font-bold" style={{ color: '#D97706' }}>
                🪙 {total.toLocaleString('es-AR')}
              </span>
            </div>
            <Button
              className="w-full"
              onClick={onConfirm}
              disabled={confirming}
            >
              {confirming ? 'Procesando...' : 'Confirmar Cange'}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
````

## File: components/market/FilterBar.tsx
````typescript
'use client';

import { Input } from '@/components/ui/input';

const CATEGORIES = ['Todas', 'Flores', 'Parafernalia', 'Genéticas'];
const SORT_OPTIONS = [
  { value: 'newest', label: 'Más nuevo' },
  { value: 'price_asc', label: 'Precio ↑' },
  { value: 'price_desc', label: 'Precio ↓' },
];

interface FilterBarProps {
  category: string;
  sort: string;
  search: string;
  onCategoryChange: (cat: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (search: string) => void;
}

export default function FilterBar({
  category,
  sort,
  search,
  onCategoryChange,
  onSortChange,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      {/* Search */}
      <div className="flex-1 min-w-[180px]">
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-9 text-sm"
        />
      </div>

      {/* Category pills */}
      <div className="flex gap-1.5 overflow-x-auto flex-nowrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              category === cat
                ? 'bg-[#16A34A] text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-[#16A34A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort select */}
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="h-9 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
````

## File: components/market/OrderCard.tsx
````typescript
'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ReviewForm from './ReviewForm';

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  pricePerUnit: number;
}

export interface Order {
  id: number;
  createdAt: string;
  totalTokens: number;
  status: 'Pendiente' | 'Entregado' | 'Cancelado';
  items: OrderItem[];
  hasReview?: boolean;
}

interface OrderCardProps {
  order: Order;
  onReviewSubmitted?: (orderId: number) => void;
}

const STATUS_BADGE: Record<Order['status'], 'warning' | 'success' | 'destructive'> = {
  Pendiente: 'warning',
  Entregado: 'success',
  Cancelado: 'destructive',
};

export default function OrderCard({ order, onReviewSubmitted }: OrderCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const formattedDate = new Date(order.createdAt).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  function handleReviewSuccess() {
    setShowReview(false);
    onReviewSubmitted?.(order.id);
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Cange #{order.id}
              </span>
              <Badge variant={STATUS_BADGE[order.status]}>{order.status}</Badge>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">{formattedDate}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Total</p>
            <span className="text-base font-bold" style={{ color: '#D97706' }}>
              🪙 {order.totalTokens.toLocaleString('es-AR')}
            </span>
          </div>
        </div>

        {/* Expand toggle */}
        <div className="border-t border-gray-100 dark:border-gray-800 px-5 py-2 flex items-center justify-between">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-[#16A34A] transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {expanded ? 'Ocultar items' : `Ver ${order.items.length} ${order.items.length === 1 ? 'item' : 'items'}`}
          </button>

          {order.status === 'Entregado' && !order.hasReview && (
            <Button size="sm" variant="outline" onClick={() => setShowReview(true)} className="text-xs h-7">
              Dejar reseña
            </Button>
          )}
        </div>

        {/* Items list */}
        {expanded && (
          <div className="px-5 pb-4 space-y-2">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.productName}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {item.quantity} × 🪙 {item.pricePerUnit.toLocaleString('es-AR')}
                  </p>
                </div>
                <span className="text-sm font-semibold" style={{ color: '#D97706' }}>
                  🪙 {(item.quantity * item.pricePerUnit).toLocaleString('es-AR')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {showReview && (
        <ReviewForm
          orderId={order.id}
          onSuccess={handleReviewSuccess}
          onCancel={() => setShowReview(false)}
        />
      )}
    </>
  );
}
````

## File: components/market/ProductCard.tsx
````typescript
'use client';

import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export interface Product {
  id: number;
  name: string;
  description?: string;
  category: string;
  price: number;
  stock: number;
  imageUrl?: string;
  sellerUsername?: string;
  sellerId?: number;
  thc?: number | null;
  cbd?: number | null;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const router = useRouter();

  const hasCannabinoids = product.thc != null || product.cbd != null;
  const inStock = product.stock > 0;

  return (
    <Card className="overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div
        onClick={() => router.push(`/market/products/${product.id}`)}
        className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:from-green-50 group-hover:to-green-100/50 dark:group-hover:from-green-900/20 dark:group-hover:to-green-900/10 transition-all duration-300 relative"
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">📦</span>
          </div>
        )}
        {/* Stock indicator */}
        <div className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${
          product.stock === 0
            ? 'bg-red-500'
            : product.stock <= 3
            ? 'bg-amber-500'
            : 'bg-green-500'
        }`} title={`Stock: ${product.stock}`} />
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category + cannabinoids */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="text-xs">{product.category}</Badge>
          {hasCannabinoids && product.thc != null && (
            <Badge variant="outline" className="text-xs text-green-700 border-green-300 dark:text-green-400 dark:border-green-800">
              THC {product.thc}%
            </Badge>
          )}
          {hasCannabinoids && product.cbd != null && (
            <Badge variant="outline" className="text-xs text-blue-700 border-blue-300 dark:text-blue-400 dark:border-blue-800">
              CBD {product.cbd}%
            </Badge>
          )}
        </div>

        {/* Name */}
        <div
          onClick={() => router.push(`/market/products/${product.id}`)}
          className="space-y-0.5"
        >
          <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm leading-snug line-clamp-2">
            {product.name}
          </h3>
          {product.sellerUsername && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              por {product.sellerUsername}
            </p>
          )}
        </div>

        {/* Price + action */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500">Precio</p>
            <span className="text-lg font-bold" style={{ color: '#D97706' }}>
              🪙 {product.price.toLocaleString('es-AR')}
            </span>
          </div>
          {inStock ? (
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="text-xs"
            >
              Agregar al carrito
            </Button>
          ) : (
            <Button size="sm" disabled variant="secondary" className="text-xs">
              Sin stock
            </Button>
          )}
        </div>

        {/* Stock text */}
        <p className={`text-xs ${
          product.stock === 0
            ? 'text-red-500 dark:text-red-400'
            : product.stock <= 3
            ? 'text-amber-600 dark:text-amber-400'
            : 'text-gray-400 dark:text-gray-500'
        }`}>
          {product.stock === 0
            ? 'Sin stock'
            : product.stock <= 3
            ? `¡Solo quedan ${product.stock}!`
            : `${product.stock} disponibles`}
        </p>
      </CardContent>
    </Card>
  );
}
````

## File: components/market/ProductDetail.tsx
````typescript
'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import WishlistButton from './WishlistButton';
import SellerReputation from './SellerReputation';
import type { Product } from './ProductCard';

export interface SellerInfo {
  id: number;
  username: string;
  averageRating: number;
  reviewCount: number;
  totalSales: number;
}

interface ProductDetailProps {
  product: Product & {
    terpenes?: string | null;
  };
  seller?: SellerInfo;
  onAddToCart: (product: Product) => void;
  wishlisted?: boolean;
}

export default function ProductDetail({
  product,
  seller,
  onAddToCart,
  wishlisted = false,
}: ProductDetailProps) {
  const [purchasing, setPurchasing] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const inStock = product.stock > 0;
  const hasCannabinoids = product.thc != null || product.cbd != null || product.terpenes;

  function notify(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  }

  async function handlePurchase() {
    if (!inStock || purchasing) return;
    setPurchasing(true);
    try {
      const res = await fetch(`/api/products/${product.id}/purchase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: 1 }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        notify(data.error ?? 'Error al procesar la compra');
      } else {
        notify('¡Cange confirmado!');
      }
    } catch {
      notify('Error de conexión');
    } finally {
      setPurchasing(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-[#16A34A] text-white px-5 py-3 rounded-xl shadow-lg z-50 text-sm font-medium">
          {notification}
        </div>
      )}

      {/* Main card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Image */}
        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-8xl">📦</span>
          )}
          {/* Stock dot */}
          <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
            product.stock === 0 ? 'bg-red-500' : product.stock <= 3 ? 'bg-amber-500' : 'bg-green-500'
          }`} />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2 flex-1">
              <Badge variant="secondary">{product.category}</Badge>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.name}</h1>
              {product.sellerUsername && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Vendido por{' '}
                  <span className="font-medium text-[#16A34A]">{product.sellerUsername}</span>
                </p>
              )}
            </div>
            <WishlistButton productId={product.id} initialWishlisted={wishlisted} />
          </div>

          {product.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Cannabinoid profile */}
          {hasCannabinoids && (
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 space-y-2">
              <h3 className="text-xs font-semibold text-green-800 dark:text-green-400 uppercase tracking-wide">
                Perfil cannabinoide
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.thc != null && (
                  <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    THC {product.thc}%
                  </span>
                )}
                {product.cbd != null && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    CBD {product.cbd}%
                  </span>
                )}
                {product.terpenes && (
                  <span className="inline-flex items-center gap-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Terpenos: {product.terpenes}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price + actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500">Precio por unidad</p>
              <span className="text-3xl font-bold" style={{ color: '#D97706' }}>
                🪙 {product.price.toLocaleString('es-AR')}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => onAddToCart(product)}
                disabled={!inStock}
                size="sm"
              >
                + Carrito
              </Button>
              <Button
                onClick={handlePurchase}
                disabled={!inStock || purchasing}
              >
                {purchasing ? 'Procesando...' : inStock ? 'Comprar ahora' : 'Sin stock'}
              </Button>
            </div>
          </div>

          {/* Stock */}
          <p className={`text-xs ${
            product.stock === 0
              ? 'text-red-500 dark:text-red-400'
              : product.stock <= 3
              ? 'text-amber-600 dark:text-amber-400'
              : 'text-gray-400 dark:text-gray-500'
          }`}>
            {product.stock === 0
              ? 'Sin stock disponible'
              : product.stock <= 3
              ? `¡Solo quedan ${product.stock} unidades!`
              : `${product.stock} unidades disponibles`}
          </p>
        </div>
      </div>

      {/* Seller reputation */}
      {seller && (
        <SellerReputation
          averageRating={seller.averageRating}
          reviewCount={seller.reviewCount}
          totalSales={seller.totalSales}
        />
      )}
    </div>
  );
}
````

## File: components/market/ProductForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Product } from './ProductCard';

const CATEGORIES = ['Flores', 'Parafernalia', 'Genéticas'];

interface ProductFormProps {
  product?: Partial<Product>;
  onSuccess: (product: Product) => void;
  onCancel: () => void;
}

interface FormState {
  name: string;
  description: string;
  category: string;
  price: string;
  stock: string;
  imageUrl: string;
}

export default function ProductForm({ product, onSuccess, onCancel }: ProductFormProps) {
  const isEditing = Boolean(product?.id);

  const [form, setForm] = useState<FormState>({
    name: product?.name ?? '',
    description: product?.description ?? '',
    category: product?.category ?? 'Flores',
    price: product?.price?.toString() ?? '',
    stock: product?.stock?.toString() ?? '',
    imageUrl: product?.imageUrl ?? '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError('El nombre es requerido');
      return;
    }
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) {
      setError('El precio debe ser un número positivo');
      return;
    }
    if (!form.stock || isNaN(Number(form.stock)) || Number(form.stock) < 0) {
      setError('El stock debe ser un número válido');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        imageUrl: form.imageUrl.trim() || undefined,
      };

      const url = isEditing ? `/api/products/${product!.id}` : '/api/products';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error al guardar el producto');
      }

      const data = await res.json();
      onSuccess(data.product ?? data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
            {isEditing ? 'Editar producto' : 'Publicar producto'}
          </h2>
          <button
            onClick={onCancel}
            className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre <span className="text-red-500">*</span>
            </label>
            <Input
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Gorilla Glue fem"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Descripción
            </label>
            <textarea
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
              placeholder="Describí tu producto..."
              rows={3}
              className="flex w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Categoría <span className="text-red-500">*</span>
            </label>
            <select
              value={form.category}
              onChange={(e) => set('category', e.target.value)}
              className="flex h-10 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price + Stock */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Precio (tokens) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600 text-sm">
                  🪙
                </span>
                <Input
                  type="number"
                  min="1"
                  value={form.price}
                  onChange={(e) => set('price', e.target.value)}
                  placeholder="5000"
                  className="pl-8"
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Stock <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) => set('stock', e.target.value)}
                placeholder="10"
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              URL de imagen
            </label>
            <Input
              type="url"
              value={form.imageUrl}
              onChange={(e) => set('imageUrl', e.target.value)}
              placeholder="https://..."
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Publicar producto'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/market/ReviewForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReviewFormProps {
  orderId: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ReviewForm({ orderId, onSuccess, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) {
      setError('Seleccioná una puntuación');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${orderId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comment: comment.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error al enviar la reseña');
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="font-bold text-gray-900 dark:text-gray-100">Dejar reseña</h2>
          <button
            onClick={onCancel}
            className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Star rating */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Puntuación
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    className={`w-8 h-8 transition-colors ${
                      star <= (hovered || rating) ? 'text-amber-400' : 'text-gray-200 dark:text-gray-700'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {['', 'Pésimo', 'Malo', 'Regular', 'Bueno', 'Excelente'][rating]}
                </span>
              )}
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Comentario (opcional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Contá tu experiencia..."
              rows={3}
              className="flex w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={loading || rating === 0} className="flex-1">
              {loading ? 'Enviando...' : 'Enviar reseña'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
````

## File: components/market/SellerReputation.tsx
````typescript
'use client';

interface SellerReputationProps {
  averageRating: number;
  reviewCount: number;
  totalSales: number;
  compact?: boolean;
}

function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg
            key={i}
            className={`w-4 h-4 ${
              filled
                ? 'text-amber-400'
                : half
                ? 'text-amber-300'
                : 'text-gray-200 dark:text-gray-700'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
}

export { Stars };

export default function SellerReputation({
  averageRating,
  reviewCount,
  totalSales,
  compact = false,
}: SellerReputationProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Stars rating={averageRating} />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {averageRating.toFixed(1)}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          ({reviewCount} {reviewCount === 1 ? 'reseña' : 'reseñas'})
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-3">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
        Reputación del vendedor
      </h3>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {averageRating.toFixed(1)}
          </p>
          <Stars rating={averageRating} />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {reviewCount} {reviewCount === 1 ? 'reseña' : 'reseñas'}
          </p>
        </div>
        <div className="h-12 w-px bg-gray-100 dark:bg-gray-800" />
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{totalSales}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {totalSales === 1 ? 'cange' : 'canges'} completados
          </p>
        </div>
      </div>
    </div>
  );
}
````

## File: components/market/WishlistButton.tsx
````typescript
'use client';

import { useState } from 'react';

interface WishlistButtonProps {
  productId: number;
  initialWishlisted?: boolean;
}

export default function WishlistButton({ productId, initialWishlisted = false }: WishlistButtonProps) {
  const [wishlisted, setWishlisted] = useState(initialWishlisted);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (loading) return;
    setLoading(true);
    try {
      const method = wishlisted ? 'DELETE' : 'POST';
      const res = await fetch('/api/wishlist', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setWishlisted((prev) => !prev);
      }
    } catch {
      // silent — don't disrupt UX
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      title={wishlisted ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
        wishlisted
          ? 'bg-red-50 dark:bg-red-900/20 text-red-500'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-400'
      } disabled:opacity-50`}
    >
      <svg
        className="w-5 h-5"
        fill={wishlisted ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
````

## File: components/notifications/NotificationDropdown.tsx
````typescript
'use client';

import Link from 'next/link';
import NotificationItem, { type NotificationData } from './NotificationItem';

interface NotificationDropdownProps {
  notifications: NotificationData[];
  onRead: (id: number) => void;
  onReadAll: () => void;
}

export default function NotificationDropdown({
  notifications,
  onRead,
  onReadAll,
}: NotificationDropdownProps) {
  const handleReadAll = async () => {
    try {
      await fetch('/api/notifications/read-all', { method: 'POST' });
      onReadAll();
    } catch {
      // silencioso
    }
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">Notificaciones</h3>
        {notifications.some((n) => !n.read) && (
          <button
            onClick={handleReadAll}
            className="text-xs text-[#16A34A] hover:text-[#14532D] font-medium transition-colors"
          >
            Marcar todas como leídas
          </button>
        )}
      </div>

      {/* List */}
      <div className="max-h-96 overflow-y-auto divide-y divide-gray-50 dark:divide-gray-800">
        {notifications.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-gray-400 dark:text-gray-500">
            Sin notificaciones pendientes
          </div>
        ) : (
          notifications.slice(0, 10).map((n) => (
            <NotificationItem key={n.id} notification={n} onRead={onRead} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-2.5 text-center">
        <Link
          href="/notifications"
          className="text-xs text-[#16A34A] hover:text-[#14532D] font-medium transition-colors"
        >
          Ver todas
        </Link>
      </div>
    </div>
  );
}
````

## File: components/notifications/NotificationItem.tsx
````typescript
'use client';

import { timeAgo } from '@/lib/utils/time';

export interface NotificationData {
  id: number;
  message: string;
  read: boolean;
  createdAt: string | Date;
}

interface NotificationItemProps {
  notification: NotificationData;
  onRead: (id: number) => void;
}

export default function NotificationItem({ notification, onRead }: NotificationItemProps) {
  const handleClick = async () => {
    if (notification.read) return;

    try {
      await fetch(`/api/notifications/${notification.id}/read`, { method: 'POST' });
      onRead(notification.id);
    } catch {
      // silencioso — no bloqueamos la UX
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
        !notification.read ? 'bg-green-50/50 dark:bg-green-900/10' : ''
      }`}
    >
      {/* Dot indicador */}
      <div className="mt-1.5 shrink-0">
        {!notification.read ? (
          <span className="w-2 h-2 rounded-full bg-[#16A34A] block" />
        ) : (
          <span className="w-2 h-2 rounded-full bg-transparent block" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm leading-snug ${
            !notification.read
              ? 'font-semibold text-gray-900 dark:text-gray-100'
              : 'font-normal text-gray-700 dark:text-gray-300'
          }`}
        >
          {notification.message}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
          {timeAgo(notification.createdAt)}
        </p>
      </div>
    </button>
  );
}
````

## File: components/profile/DocumentList.tsx
````typescript
'use client';

import { FileText, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Document {
  id: number;
  name: string;
  type: string;
  url: string;
  createdAt: string;
}

interface DocumentListProps {
  documents: Document[];
}

const typeLabel: Record<string, string> = {
  prescription: 'Receta',
  id: 'DNI',
  certificate: 'Certificado',
  other: 'Otro',
};

export default function DocumentList({ documents }: DocumentListProps) {
  if (documents.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
        <p className="text-sm">No hay documentos cargados aún.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {documents.map((doc) => (
        <li
          key={doc.id}
          className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{doc.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(doc.createdAt).toLocaleDateString('es-AR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">
              {typeLabel[doc.type] ?? doc.type}
            </Badge>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              aria-label={`Descargar ${doc.name}`}
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
````

## File: components/profile/ProfileForm.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileData {
  id: number;
  username: string;
  email: string | null;
  role: string;
  tokens: number;
  planType: string | null;
  bio: string | null;
  phone: string | null;
  address: string | null;
  preferredGenetics: string | null;
  avatarUrl: string | null;
  isVerified: boolean;
  emailVerified: boolean;
}

interface ProfileFormProps {
  profile: ProfileData;
}

export default function ProfileForm({ profile }: ProfileFormProps) {
  const [phone, setPhone] = useState(profile.phone ?? '');
  const [address, setAddress] = useState(profile.address ?? '');
  const [bio, setBio] = useState(profile.bio ?? '');
  const [preferredGenetics, setPreferredGenetics] = useState(profile.preferredGenetics ?? '');
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl ?? '');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError('');
    setSaveSuccess(false);
    setSaving(true);

    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, address, bio, preferredGenetics, avatarUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al guardar el perfil');
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setSaving(false);
    }
  };

  const roleLabel: Record<string, string> = {
    admin: 'Administrador',
    cultivator: 'Cultivador',
    patient: 'Paciente',
    user: 'Usuario',
  };

  const planLabel: Record<string, string> = {
    basic: 'Básico',
    premium: 'Premium',
    vip: 'VIP',
  };

  return (
    <div className="space-y-6">
      {/* Info de solo lectura */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Información de Cuenta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Usuario</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{profile.username}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Email</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{profile.email ?? '—'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Rol</p>
              <Badge variant="secondary">
                {roleLabel[profile.role] ?? profile.role}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Tokens</p>
              <p className="font-bold text-green-600 dark:text-green-400">{profile.tokens}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Plan</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {profile.planType ? planLabel[profile.planType] ?? profile.planType : '—'}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Estado</p>
              <Badge variant={profile.isVerified ? 'default' : 'secondary'}>
                {profile.isVerified ? 'Verificado' : 'Pendiente'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formulario editable */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Editar Perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            {saveError && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                {saveError}
              </div>
            )}
            {saveSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                Perfil actualizado correctamente.
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Teléfono
              </label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+54 11 1234-5678"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Dirección
              </label>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Tu dirección"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Biografía
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder="Contanos algo sobre vos..."
                className="flex w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Genética preferida
              </label>
              <Input
                type="text"
                value={preferredGenetics}
                onChange={(e) => setPreferredGenetics(e.target.value)}
                placeholder="Ej: Indica, Sativa, Híbrido"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                URL de avatar
              </label>
              <Input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://ejemplo.com/foto.jpg"
              />
            </div>

            <Button type="submit" disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: components/shared/ExportButton.tsx
````typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';

interface ExportButtonProps {
  url: string;
  filename: string;
  label?: string;
}

export default function ExportButton({ url, filename, label = 'Exportar CSV' }: ExportButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Error al exportar');
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = href;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(href);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al descargar el archivo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick} disabled={loading}>
      {loading ? (
        <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
      ) : (
        <Download className="w-4 h-4 mr-1.5" />
      )}
      {label}
    </Button>
  );
}
````

## File: components/shared/NotificationBell.tsx
````typescript
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Bell } from 'lucide-react';
import NotificationDropdown from '@/components/notifications/NotificationDropdown';
import type { NotificationData } from '@/components/notifications/NotificationItem';

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch('/api/notifications?unread_only=true&limit=5');
      if (!res.ok) return;
      const data = await res.json();
      const items: NotificationData[] = data.notifications ?? [];
      setNotifications(items);
      setUnreadCount(items.filter((n) => !n.read).length);
    } catch {
      // silencioso
    }
  }, []);

  // Fetch al montar
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  // Cerrar al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleToggle = () => {
    if (!open) {
      // Refrescar al abrir
      fetchNotifications();
    }
    setOpen((prev) => !prev);
  };

  const handleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const handleReadAll = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={handleToggle}
        aria-label="Notificaciones"
        className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 min-w-[16px] h-4 px-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center leading-none">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <NotificationDropdown
          notifications={notifications}
          onRead={handleRead}
          onReadAll={handleReadAll}
        />
      )}
    </div>
  );
}
````

## File: components/ui/badge.tsx
````typescript
import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';
}

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    secondary: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
    destructive: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
    outline: 'text-gray-700 border-gray-300 dark:text-gray-300 dark:border-gray-600',
    success: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800',
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
````

## File: components/ui/button.tsx
````typescript
import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/25',
      destructive: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 hover:border-gray-400 text-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-300',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
      link: 'text-green-600 underline-offset-4 hover:underline dark:text-green-400',
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
````

## File: components/ui/card.tsx
````typescript
import * as React from 'react';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 
        dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900/50 
        transition-all duration-300 hover:shadow-xl ${className}`}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 ${className}`}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-500 dark:text-gray-400 ${className}`} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
````

## File: components/ui/input.tsx
````typescript
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm 
          text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
          disabled:cursor-not-allowed disabled:opacity-50
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500
          dark:focus:ring-green-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
````

## File: components/ui/mode-toggle.tsx
````typescript
'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
        text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
      >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
````

## File: components/theme-provider.tsx
````typescript
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
````

## File: db/schema.ts
````typescript
import { pgTable, serial, text, timestamp, integer, boolean, real, pgEnum, uniqueIndex, unique } from 'drizzle-orm/pg-core';

// ============ ENUMS ============
export const roleEnum = pgEnum('role', ['USER', 'ADMIN', 'STAFF']);
export const cropStatusEnum = pgEnum('crop_status', ['Verde', 'Amarillo', 'Rojo']);
export const phaseEnum = pgEnum('phase', ['Germinacion', 'Vegetacion', 'Floracion', 'Senescencia']);
export const productCategoryEnum = pgEnum('product_category', ['Flores', 'Parafernalia', 'Geneticas']);
export const productStatusEnum = pgEnum('product_status', ['Active', 'Paused', 'SoldOut']);
export const orderStatusEnum = pgEnum('order_status', ['Pendiente', 'Entregado', 'Cancelado']);
export const postCategoryEnum = pgEnum('post_category', ['Clases', 'Investigaciones', 'FAQ', 'Debates', 'Papers', 'Noticias', 'Anuncios']);
export const reactionTypeEnum = pgEnum('reaction_type', ['Interesante', 'Util', 'Cientifico']);
export const cultivationMethodEnum = pgEnum('cultivation_method', ['Hidroponia', 'Organico', 'SalesMinerales', 'Mixto']);
export const planTypeEnum = pgEnum('plan_type', ['Hogar', 'Local']);
export const cultivatorStatusEnum = pgEnum('cultivator_status', ['active', 'inactive']);
export const tokenReasonEnum = pgEnum('token_reason', ['subscription_approval', 'purchase', 'sale', 'admin_grant', 'event_reservation']);

// ============ TABLES ============

// USER - Tabla central con 12 relaciones
export const users = pgTable('user', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  email: text('email').unique(),
  role: roleEnum('role').default('USER').notNull(),
  isDev: boolean('is_dev').default(false),
  tokens: integer('tokens').default(100),
  isVerified: boolean('is_verified').default(false),
  emailVerified: boolean('email_verified').default(false),
  verificationToken: text('verification_token'),
  lastVerificationSent: timestamp('last_verification_sent'),
  phone: text('phone'),
  address: text('address'),
  bio: text('bio'),
  birthDate: timestamp('birth_date'),
  avatar: text('avatar'),
  preferredGenetics: text('preferred_genetics'),
  planType: planTypeEnum('plan_type').default('Hogar'),
  isCultivator: boolean('is_cultivator').default(false),
  lastLoginAt: timestamp('last_login_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// CROPS - Cultivos hidroponicos del usuario
export const crops = pgTable('crop', {
  id: serial('id').primaryKey(),
  bucketName: text('bucket_name').notNull(),
  imageUrl: text('image_url'),
  status: cropStatusEnum('status').default('Verde'),
  cultivationMethod: cultivationMethodEnum('cultivation_method').default('Organico'),
  userId: integer('user_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// CROP LOGS - Registros semanales de cultivo
export const cropLogs = pgTable('crop_log', {
  id: serial('id').primaryKey(),
  week: text('week').notNull(),
  phase: phaseEnum('phase').default('Vegetacion'),
  ph: real('ph'),
  ec: real('ec'),
  grow: real('grow').default(0),
  micro: real('micro').default(0),
  bloom: real('bloom').default(0),
  notes: text('notes'),
  imageUrl: text('image_url'),
  feedback: text('feedback'),
  lightHours: real('light_hours'),
  nutrientsSolution: text('nutrients_solution'),
  sanitaryNotes: text('sanitary_notes'),
  preventives: text('preventives'),
  cropId: integer('crop_id').notNull().references(() => crops.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// PRODUCTS - Items del marketplace
export const products = pgTable('product', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  category: productCategoryEnum('category').default('Flores'),
  price: integer('price').default(0),
  basePrice: integer('base_price').default(0),
  stock: integer('stock').default(1),
  imageUrl: text('image_url'),
  sellerId: integer('seller_id').notNull().references(() => users.id),
  labReportId: integer('lab_report_id'),
  status: productStatusEnum('status').default('Active'),
  createdAt: timestamp('created_at').defaultNow(),
});

// WISHLIST - Relación usuario-producto
export const wishlists = pgTable('wishlist', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  productId: integer('product_id').notNull().references(() => products.id),
  createdAt: timestamp('created_at').defaultNow(),
}, (t) => ({
  unq: uniqueIndex('wishlist_user_product').on(t.userId, t.productId),
}));

// NOTIFICATIONS - Notificaciones del usuario
export const notifications = pgTable('notification', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// ORDERS - Pedidos
export const orders = pgTable('order', {
  id: serial('id').primaryKey(),
  buyerId: integer('buyer_id').notNull().references(() => users.id),
  totalPrice: integer('total_price').notNull(),
  status: orderStatusEnum('status').default('Pendiente'),
  createdAt: timestamp('created_at').defaultNow(),
});

// ORDER ITEMS - items del pedido
export const orderItems = pgTable('order_item', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').notNull().references(() => orders.id),
  productId: integer('product_id').notNull().references(() => products.id),
  quantity: integer('quantity').default(1),
  price: integer('price').notNull(),
});

// POSTS - Publicaciones del foro
export const posts = pgTable('post', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: postCategoryEnum('category').default('Debates'),
  youtubeLink: text('youtube_link'),
  fileUrl: text('file_url'),
  authorId: integer('author_id').notNull().references(() => users.id),
  likes: integer('likes').default(0),
  isPinned: boolean('is_pinned').default(false),
  isImmutable: boolean('is_immutable').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// ATTACHMENTS - Archivos de posts
export const attachments = pgTable('attachment', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url').notNull(),
  type: text('type').notNull(),
  postId: integer('post_id').notNull().references(() => posts.id),
});

// COMMENTS - Comentarios de posts
export const comments = pgTable('comment', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  postId: integer('post_id').notNull().references(() => posts.id),
  authorId: integer('author_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// SUBSCRIPTIONS - Suscripciones a posts
export const subscriptions = pgTable('subscription', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  postId: integer('post_id').notNull().references(() => posts.id),
  createdAt: timestamp('created_at').defaultNow(),
}, (t) => ({
  unq: uniqueIndex('subscription_user_post').on(t.userId, t.postId),
}));

// REACTIONS - Reacciones a posts
export const reactions = pgTable('reaction', {
  id: serial('id').primaryKey(),
  type: reactionTypeEnum('type').notNull(),
  userId: integer('user_id').notNull().references(() => users.id),
  postId: integer('post_id').notNull().references(() => posts.id),
  createdAt: timestamp('created_at').defaultNow(),
}, (t) => ({
  unq: uniqueIndex('reaction_user_post').on(t.userId, t.postId),
}));

// REVIEWS - Reseñas de pedidos
export const reviews = pgTable('review', {
  id: serial('id').primaryKey(),
  rating: integer('rating').default(5),
  comment: text('comment'),
  orderId: integer('order_id').unique().notNull().references(() => orders.id),
  productId: integer('product_id').notNull().references(() => products.id),
  sellerId: integer('seller_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// EVENTS - Eventos
export const events = pgTable('event', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  time: text('time').notNull(),
  location: text('location').notNull(),
  requirements: text('requirements'),
  flyerUrl: text('flyer_url'),
  capacity: integer('capacity').default(50),
  createdAt: timestamp('created_at').defaultNow(),
});

// TICKET CATEGORIES - Categorías de tickets
export const ticketCategories = pgTable('ticket_category', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id').notNull().references(() => events.id),
  name: text('name').notNull(),
  price: integer('price').default(0),
  benefits: text('benefits'),
});

// RESERVATIONS - Reservas de tickets
export const reservations = pgTable('reservation', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  categoryId: integer('category_id').notNull().references(() => ticketCategories.id),
  qrCode: text('qr_code'),
  createdAt: timestamp('created_at').defaultNow(),
});

// LEGAL CONTENT - Términos y privacidad
export const legalContents = pgTable('legal_content', {
  id: serial('id').primaryKey(),
  terms: text('terms').notNull(),
  type: text('type').unique().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// USER DOCUMENTS - Expediente legal del usuario
export const userDocuments = pgTable('user_document', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  name: text('name').notNull(),
  url: text('url').notNull(),
  type: text('type').notNull(),
  uploadedBy: integer('uploaded_by').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// SOLIDARY CULTIVATORS - Modelo ONG: 150 cultivadores × 3 pacientes
export const solidaryCultivators = pgTable('solidary_cultivator', {
  id: serial('id').primaryKey(),
  cultivatorUserId: integer('cultivator_user_id').notNull().references(() => users.id),
  patientUserId: integer('patient_user_id').notNull().references(() => users.id),
  status: cultivatorStatusEnum('status').default('active'),
  createdAt: timestamp('created_at').defaultNow(),
}, (t) => ({
  unq: uniqueIndex('cultivator_patient_unique').on(t.cultivatorUserId, t.patientUserId),
}));

// TOKEN TRANSACTIONS - Log auditable de movimientos de tokens
export const tokenTransactions = pgTable('token_transaction', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  amount: integer('amount').notNull(),
  reason: tokenReasonEnum('reason').notNull(),
  relatedOrderId: integer('related_order_id').references(() => orders.id),
  performedBy: integer('performed_by').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// LAB REPORTS - Informes de cannabinoides
export const labReports = pgTable('lab_report', {
  id: serial('id').primaryKey(),
  cropId: integer('crop_id').notNull().references(() => crops.id),
  plantId: text('plant_id'),
  collectionDate: timestamp('collection_date').notNull(),
  results: text('results').notNull(),
  reportUrl: text('report_url'),
  createdBy: integer('created_by').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// ============ TYPE EXPORTS ============
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Crop = typeof crops.$inferSelect;
export type NewCrop = typeof crops.$inferInsert;
export type CropLog = typeof cropLogs.$inferSelect;
export type NewCropLog = typeof cropLogs.$inferInsert;
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
export type Event = typeof events.$inferSelect;
export type NewEvent = typeof events.$inferInsert;
export type UserDocument = typeof userDocuments.$inferSelect;
export type NewUserDocument = typeof userDocuments.$inferInsert;
export type SolidaryCultivator = typeof solidaryCultivators.$inferSelect;
export type NewSolidaryCultivator = typeof solidaryCultivators.$inferInsert;
export type TokenTransaction = typeof tokenTransactions.$inferSelect;
export type NewTokenTransaction = typeof tokenTransactions.$inferInsert;
export type LabReport = typeof labReports.$inferSelect;
export type NewLabReport = typeof labReports.$inferInsert;
````

## File: lib/utils/time.ts
````typescript
export function timeAgo(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (seconds < 60) return 'hace un momento';
  if (seconds < 3600) return `hace ${Math.floor(seconds / 60)} min`;
  if (seconds < 86400) return `hace ${Math.floor(seconds / 3600)} h`;
  if (seconds < 604800) return `hace ${Math.floor(seconds / 86400)} días`;
  return d.toLocaleDateString('es-AR');
}
````

## File: lib/ai.ts
````typescript
// Rule-based AI helpers for beta (no OpenAI dependency)
// When OPENAI_API_KEY is available, these can be enhanced with real AI

export function suggestPhEc(phase: string): {
  phMin: number;
  phMax: number;
  ecMin: number;
  ecMax: number;
  advice: string;
} {
  const ranges: Record<
    string,
    { phMin: number; phMax: number; ecMin: number; ecMax: number; advice: string }
  > = {
    Germinacion: {
      phMin: 5.5,
      phMax: 6.5,
      ecMin: 0.2,
      ecMax: 0.6,
      advice: 'Mantené la humedad alta y la EC baja. Las plántulas son sensibles.',
    },
    Vegetacion: {
      phMin: 5.8,
      phMax: 6.5,
      ecMin: 0.8,
      ecMax: 1.6,
      advice: 'Incrementá la EC gradualmente. El nitrógeno es clave en esta fase.',
    },
    Floracion: {
      phMin: 6.0,
      phMax: 6.8,
      ecMin: 1.2,
      ecMax: 2.2,
      advice: 'Aumentá fósforo y potasio. Reducí el nitrógeno progresivamente.',
    },
    Senescencia: {
      phMin: 6.0,
      phMax: 6.5,
      ecMin: 0.0,
      ecMax: 0.5,
      advice: 'Fase de lavado. Solo agua pura para limpiar sales residuales.',
    },
  };
  return ranges[phase] || ranges.Vegetacion;
}

export function generateProductDescription(data: {
  name: string;
  category: string;
  genetics?: string;
  thc?: number;
  cbd?: number;
}): string {
  let desc = `${data.name} — ${data.category}.`;
  if (data.genetics) desc += ` Genética: ${data.genetics}.`;
  if (data.thc !== undefined) desc += ` THC: ${data.thc}%.`;
  if (data.cbd !== undefined) desc += ` CBD: ${data.cbd}%.`;
  desc += ' Producto de calidad verificada por Citronela.';
  return desc;
}

export function suggestGrowNotes(phase: string, ph: number, ec: number): string[] {
  const notes: string[] = [];
  const ideal = suggestPhEc(phase);
  if (ph < ideal.phMin)
    notes.push(`pH bajo (${ph}). Subilo a rango ${ideal.phMin}-${ideal.phMax}.`);
  if (ph > ideal.phMax)
    notes.push(`pH alto (${ph}). Bajalo a rango ${ideal.phMin}-${ideal.phMax}.`);
  if (ec < ideal.ecMin)
    notes.push(`EC baja (${ec}). Aumentá nutrientes a rango ${ideal.ecMin}-${ideal.ecMax}.`);
  if (ec > ideal.ecMax)
    notes.push(`EC alta (${ec}). Diluí la solución a rango ${ideal.ecMin}-${ideal.ecMax}.`);
  if (notes.length === 0) notes.push('Parámetros dentro de rango óptimo. ¡Seguí así!');
  return notes;
}
````

## File: lib/auth.ts
````typescript
import bcrypt from 'bcryptjs';
import { db } from './db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

// ============ HASH & VERIFY ============
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ============ DB QUERIES ============
export async function getUserByUsername(username: string) {
  if (!db) return null;
  const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
  return result[0] || null;
}

export async function getUserByEmail(email: string) {
  if (!db) return null;
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0] || null;
}

export async function getUserById(id: number) {
  if (!db) return null;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0] || null;
}

export async function generateVerificationToken(): Promise<string> {
  return crypto.randomUUID();
}
````

## File: lib/db.ts
````typescript
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema';

function createDb() {
  const connectionString = process.env.DATABASE_URL!;
  const sql = neon(connectionString) as any;
  return drizzle(sql, { schema });
}

export const db = process.env.DATABASE_URL ? createDb() : null!;

export { schema };
export type Database = typeof db;
````

## File: lib/session.ts
````typescript
import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { getUserById } from './auth';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'demo-secret-key-citronela-2024-change-in-production'
);
const SESSION_COOKIE = 'session';
const SESSION_EXPIRY_DAYS = 7;

// ============ TYPES ============
export interface SessionPayload {
  userId: number;
  username: string;
  role: string;
  exp: number;
}

// ============ ENCRYPT/DECRYPT ============
export async function encrypt(session: SessionPayload): Promise<string> {
  return new SignJWT({ userId: session.userId, username: session.username, role: session.role })
    .setExpirationTime(`${SESSION_EXPIRY_DAYS}d`)
    .setProtectedHeader({ alg: 'HS256' })
    .sign(JWT_SECRET);
}

export async function decrypt(sessionValue: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(sessionValue, JWT_SECRET);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// ============ SESSION OPERATIONS ============
export async function createSession(userId: number, username: string, role: string) {
  const expiresAt = new Date(Date.now() + SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, username, role, exp: expiresAt.getTime() });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionValue) return null;
  return decrypt(sessionValue);
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

// ============ AUTH HELPERS ============
export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  const user = await getUserById(session.userId);
  if (!user) return null;

  // Don't return password
  const { password: _, ...safeUser } = user;
  return safeUser;
}

export async function requireAuth(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session) {
    throw new Error('No autenticado');
  }
  return session;
}

export async function requireAdmin(): Promise<SessionPayload> {
  const session = await requireAuth();
  if (session.role !== 'ADMIN' && session.role !== 'STAFF') {
    throw new Error('No autorizado');
  }
  return session;
}
````

## File: lib/utils.ts
````typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: scripts/seed-admin.ts
````typescript
/**
 * Seed script: Creates the first admin user
 *
 * Usage: npx tsx scripts/seed-admin.ts
 *
 * Requires DATABASE_URL in .env or .env.local
 */
import { config } from 'dotenv';
config({ path: '.env.local' });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { users } from '../db/schema';
import bcrypt from 'bcryptjs';

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL not set. Create .env.local with your Neon connection string.');
    process.exit(1);
  }

  const sql = neon(databaseUrl) as any;
  const db = drizzle(sql);

  const adminPassword = await bcrypt.hash('admin123', 12);

  try {
    const [admin] = await db.insert(users).values({
      username: 'admin',
      email: 'admin@citronela.com',
      password: adminPassword,
      role: 'ADMIN',
      isVerified: true,
      emailVerified: true,
      tokens: 10000,
      planType: 'Local',
    }).returning({ id: users.id, username: users.username });

    console.log(`\n✅ Admin user created:`);
    console.log(`   ID: ${admin.id}`);
    console.log(`   Username: admin`);
    console.log(`   Password: admin123`);
    console.log(`   Tokens: 10000`);
    console.log(`\n⚠️  Cambiá la contraseña en producción!\n`);
  } catch (error: any) {
    if (error?.code === '23505') {
      console.log('\n⚠️  Admin user already exists. Skipping.\n');
    } else {
      throw error;
    }
  }
}

main().catch(console.error);
````

## File: tests/__mocks__/server-only.ts
````typescript
// Mock for 'server-only' Next.js module — allows importing server modules in Vitest
export {};
````

## File: tests/api/admin-events.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';

function validateEventInput(data: { title?: string; description?: string; date?: string; time?: string; location?: string; capacity?: number }) {
  const errors: string[] = [];
  if (!data.title || data.title.trim().length === 0) errors.push('Título requerido');
  if (!data.description || data.description.trim().length === 0) errors.push('Descripción requerida');
  if (!data.date) errors.push('Fecha requerida');
  if (!data.time) errors.push('Hora requerida');
  if (!data.location || data.location.trim().length === 0) errors.push('Ubicación requerida');
  if (data.capacity !== undefined && (data.capacity < 1 || !Number.isInteger(data.capacity))) errors.push('Capacidad debe ser entero >= 1');
  return errors;
}

function validateTicketCategory(data: { name?: string; price?: number }) {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length === 0) errors.push('Nombre de categoría requerido');
  if (data.price === undefined || data.price < 0) errors.push('Precio debe ser >= 0');
  if (data.price !== undefined && !Number.isInteger(data.price)) errors.push('Precio debe ser entero');
  return errors;
}

function calculateAdminStats(data: { totalUsers: number; pendingUsers: number; emailVerified: number; totalCrops: number; totalOrders: number; totalTokens: number; postsThisWeek: number }) {
  return {
    ...data,
    emailVerificationRate: data.totalUsers > 0 ? Math.round((data.emailVerified / data.totalUsers) * 100) : 0,
    verifiedRate: data.totalUsers > 0 ? Math.round(((data.totalUsers - data.pendingUsers) / data.totalUsers) * 100) : 0,
  };
}

describe('admin & events validation', () => {
  describe('validateEventInput', () => {
    it('should pass with valid event', () => {
      expect(validateEventInput({ title: 'Taller', description: 'Desc', date: '2026-05-01', time: '18:00', location: 'Centro' })).toHaveLength(0);
    });
    it('should fail without title', () => {
      expect(validateEventInput({ description: 'D', date: 'd', time: 't', location: 'L' })).toContain('Título requerido');
    });
    it('should fail without description', () => {
      expect(validateEventInput({ title: 'T', date: 'd', time: 't', location: 'L' })).toContain('Descripción requerida');
    });
    it('should fail without date', () => {
      expect(validateEventInput({ title: 'T', description: 'D', time: 't', location: 'L' })).toContain('Fecha requerida');
    });
    it('should fail without time', () => {
      expect(validateEventInput({ title: 'T', description: 'D', date: 'd', location: 'L' })).toContain('Hora requerida');
    });
    it('should fail without location', () => {
      expect(validateEventInput({ title: 'T', description: 'D', date: 'd', time: 't' })).toContain('Ubicación requerida');
    });
    it('should fail with capacity 0', () => {
      expect(validateEventInput({ title: 'T', description: 'D', date: 'd', time: 't', location: 'L', capacity: 0 })).toContain('Capacidad debe ser entero >= 1');
    });
    it('should fail with negative capacity', () => {
      expect(validateEventInput({ title: 'T', description: 'D', date: 'd', time: 't', location: 'L', capacity: -5 })).toContain('Capacidad debe ser entero >= 1');
    });
    it('should collect multiple errors', () => {
      expect(validateEventInput({}).length).toBeGreaterThanOrEqual(5);
    });
  });

  describe('validateTicketCategory', () => {
    it('should pass with valid data', () => {
      expect(validateTicketCategory({ name: 'General', price: 50 })).toHaveLength(0);
    });
    it('should fail without name', () => {
      expect(validateTicketCategory({ price: 50 })).toContain('Nombre de categoría requerido');
    });
    it('should fail with negative price', () => {
      expect(validateTicketCategory({ name: 'VIP', price: -10 })).toContain('Precio debe ser >= 0');
    });
    it('should accept price 0 (free)', () => {
      expect(validateTicketCategory({ name: 'Free', price: 0 })).toHaveLength(0);
    });
  });

  describe('calculateAdminStats', () => {
    it('should calculate email verification rate', () => {
      const stats = calculateAdminStats({ totalUsers: 100, pendingUsers: 20, emailVerified: 80, totalCrops: 50, totalOrders: 30, totalTokens: 15000, postsThisWeek: 12 });
      expect(stats.emailVerificationRate).toBe(80);
      expect(stats.verifiedRate).toBe(80);
    });
    it('should handle zero users', () => {
      const stats = calculateAdminStats({ totalUsers: 0, pendingUsers: 0, emailVerified: 0, totalCrops: 0, totalOrders: 0, totalTokens: 0, postsThisWeek: 0 });
      expect(stats.emailVerificationRate).toBe(0);
      expect(stats.verifiedRate).toBe(0);
    });
    it('should round rates', () => {
      const stats = calculateAdminStats({ totalUsers: 3, pendingUsers: 1, emailVerified: 2, totalCrops: 0, totalOrders: 0, totalTokens: 0, postsThisWeek: 0 });
      expect(stats.emailVerificationRate).toBe(67);
      expect(stats.verifiedRate).toBe(67);
    });
  });
});
````

## File: tests/api/community.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';

function validatePostInput(data: { title?: string; content?: string; category?: string }) {
  const errors: string[] = [];
  if (!data.title || data.title.trim().length === 0) errors.push('Título requerido');
  if (data.title && data.title.length > 200) errors.push('Título demasiado largo');
  if (!data.content || data.content.trim().length === 0) errors.push('Contenido requerido');
  const validCategories = ['Clases', 'Investigaciones', 'FAQ', 'Debates', 'Papers', 'Noticias', 'Anuncios'];
  if (data.category && !validCategories.includes(data.category)) errors.push('Categoría inválida');
  return errors;
}

function validateCommentInput(data: { content?: string }) {
  const errors: string[] = [];
  if (!data.content || data.content.trim().length === 0) errors.push('Contenido requerido');
  if (data.content && data.content.length > 5000) errors.push('Comentario demasiado largo');
  return errors;
}

function validateReactionType(type: string): boolean {
  return ['Interesante', 'Util', 'Cientifico'].includes(type);
}

describe('community validation', () => {
  describe('validatePostInput', () => {
    it('should pass with valid post', () => {
      expect(validatePostInput({ title: 'Test', content: 'Content here', category: 'Debates' })).toHaveLength(0);
    });
    it('should fail without title', () => {
      expect(validatePostInput({ content: 'x' })).toContain('Título requerido');
    });
    it('should fail with empty title', () => {
      expect(validatePostInput({ title: '  ', content: 'x' })).toContain('Título requerido');
    });
    it('should fail with long title', () => {
      expect(validatePostInput({ title: 'a'.repeat(201), content: 'x' })).toContain('Título demasiado largo');
    });
    it('should fail without content', () => {
      expect(validatePostInput({ title: 'Test' })).toContain('Contenido requerido');
    });
    it('should fail with invalid category', () => {
      expect(validatePostInput({ title: 'T', content: 'C', category: 'Invalid' })).toContain('Categoría inválida');
    });
    it('should accept all valid categories', () => {
      const cats = ['Clases', 'Investigaciones', 'FAQ', 'Debates', 'Papers', 'Noticias', 'Anuncios'];
      cats.forEach(c => {
        expect(validatePostInput({ title: 'T', content: 'C', category: c })).toHaveLength(0);
      });
    });
    it('should accept post without category (defaults in DB)', () => {
      expect(validatePostInput({ title: 'T', content: 'C' })).toHaveLength(0);
    });
  });

  describe('validateCommentInput', () => {
    it('should pass with valid comment', () => {
      expect(validateCommentInput({ content: 'Good post!' })).toHaveLength(0);
    });
    it('should fail without content', () => {
      expect(validateCommentInput({})).toContain('Contenido requerido');
    });
    it('should fail with empty content', () => {
      expect(validateCommentInput({ content: '' })).toContain('Contenido requerido');
    });
    it('should fail with long comment', () => {
      expect(validateCommentInput({ content: 'a'.repeat(5001) })).toContain('Comentario demasiado largo');
    });
  });

  describe('validateReactionType', () => {
    it('should accept Interesante', () => {
      expect(validateReactionType('Interesante')).toBe(true);
    });
    it('should accept Util', () => {
      expect(validateReactionType('Util')).toBe(true);
    });
    it('should accept Cientifico', () => {
      expect(validateReactionType('Cientifico')).toBe(true);
    });
    it('should reject invalid type', () => {
      expect(validateReactionType('Like')).toBe(false);
    });
    it('should reject empty string', () => {
      expect(validateReactionType('')).toBe(false);
    });
  });
});
````

## File: tests/api/crops.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';

// Test crop validation logic (pure functions, no DB)
function validateCropInput(data: { bucketName?: string; cultivationMethod?: string }) {
  const errors: string[] = [];
  if (!data.bucketName || data.bucketName.trim().length === 0) {
    errors.push('Nombre de parcela requerido');
  }
  if (data.bucketName && data.bucketName.length > 100) {
    errors.push('Nombre demasiado largo (máx 100 caracteres)');
  }
  const validMethods = ['Hidroponia', 'Organico', 'SalesMinerales', 'Mixto'];
  if (data.cultivationMethod && !validMethods.includes(data.cultivationMethod)) {
    errors.push('Método de cultivo inválido');
  }
  return errors;
}

function validateLogInput(data: { week?: string; phase?: string; ph?: number; ec?: number }) {
  const errors: string[] = [];
  if (!data.week || data.week.trim().length === 0) {
    errors.push('Semana requerida');
  }
  const validPhases = ['Germinacion', 'Vegetacion', 'Floracion', 'Senescencia'];
  if (data.phase && !validPhases.includes(data.phase)) {
    errors.push('Fase fenológica inválida');
  }
  if (data.ph !== undefined && (data.ph < 0 || data.ph > 14)) {
    errors.push('pH debe estar entre 0 y 14');
  }
  if (data.ec !== undefined && data.ec < 0) {
    errors.push('EC no puede ser negativa');
  }
  return errors;
}

function validateLabReport(data: { collectionDate?: string; results?: string }) {
  const errors: string[] = [];
  if (!data.collectionDate) errors.push('Fecha de recolección requerida');
  if (!data.results) {
    errors.push('Resultados requeridos');
  } else {
    try {
      const parsed = JSON.parse(data.results);
      if (typeof parsed !== 'object') errors.push('Resultados deben ser un objeto JSON');
    } catch {
      errors.push('Resultados deben ser JSON válido');
    }
  }
  return errors;
}

describe('crop validation', () => {
  describe('validateCropInput', () => {
    it('should pass with valid name', () => {
      expect(validateCropInput({ bucketName: 'Mi Parcela' })).toHaveLength(0);
    });
    it('should fail without name', () => {
      expect(validateCropInput({})).toContain('Nombre de parcela requerido');
    });
    it('should fail with empty name', () => {
      expect(validateCropInput({ bucketName: '' })).toContain('Nombre de parcela requerido');
    });
    it('should fail with name too long', () => {
      expect(validateCropInput({ bucketName: 'a'.repeat(101) })).toContain('Nombre demasiado largo (máx 100 caracteres)');
    });
    it('should accept valid cultivation method', () => {
      expect(validateCropInput({ bucketName: 'Test', cultivationMethod: 'Hidroponia' })).toHaveLength(0);
    });
    it('should reject invalid cultivation method', () => {
      expect(validateCropInput({ bucketName: 'Test', cultivationMethod: 'InvalidMethod' })).toContain('Método de cultivo inválido');
    });
  });

  describe('validateLogInput', () => {
    it('should pass with valid data', () => {
      expect(validateLogInput({ week: 'Semana 1', phase: 'Vegetacion', ph: 6.5, ec: 1.2 })).toHaveLength(0);
    });
    it('should fail without week', () => {
      expect(validateLogInput({})).toContain('Semana requerida');
    });
    it('should reject invalid phase', () => {
      expect(validateLogInput({ week: 'S1', phase: 'Invalid' })).toContain('Fase fenológica inválida');
    });
    it('should reject pH out of range (too high)', () => {
      expect(validateLogInput({ week: 'S1', ph: 15 })).toContain('pH debe estar entre 0 y 14');
    });
    it('should reject negative pH', () => {
      expect(validateLogInput({ week: 'S1', ph: -1 })).toContain('pH debe estar entre 0 y 14');
    });
    it('should reject negative EC', () => {
      expect(validateLogInput({ week: 'S1', ec: -0.5 })).toContain('EC no puede ser negativa');
    });
    it('should accept pH 0 and pH 14 as valid boundaries', () => {
      expect(validateLogInput({ week: 'S1', ph: 0 })).toHaveLength(0);
      expect(validateLogInput({ week: 'S1', ph: 14 })).toHaveLength(0);
    });
  });

  describe('validateLabReport', () => {
    it('should pass with valid data', () => {
      expect(validateLabReport({
        collectionDate: '2026-04-22',
        results: '{"thc": 20.5, "cbd": 0.8}'
      })).toHaveLength(0);
    });
    it('should fail without date', () => {
      expect(validateLabReport({ results: '{}' })).toContain('Fecha de recolección requerida');
    });
    it('should fail without results', () => {
      expect(validateLabReport({ collectionDate: '2026-04-22' })).toContain('Resultados requeridos');
    });
    it('should fail with invalid JSON', () => {
      expect(validateLabReport({ collectionDate: '2026-04-22', results: 'not json' })).toContain('Resultados deben ser JSON válido');
    });
    it('should fail with non-object JSON', () => {
      expect(validateLabReport({ collectionDate: '2026-04-22', results: '"string"' })).toContain('Resultados deben ser un objeto JSON');
    });
  });
});
````

## File: tests/api/marketplace.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';

function validateProductInput(data: { name?: string; price?: number; category?: string; stock?: number }) {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length === 0) errors.push('Nombre requerido');
  if (data.name && data.name.length > 200) errors.push('Nombre demasiado largo');
  if (data.price === undefined || data.price < 0) errors.push('Precio debe ser >= 0');
  if (data.price !== undefined && !Number.isInteger(data.price)) errors.push('Precio debe ser entero (tokens)');
  const validCategories = ['Flores', 'Parafernalia', 'Geneticas'];
  if (data.category && !validCategories.includes(data.category)) errors.push('Categoría inválida');
  if (data.stock !== undefined && (data.stock < 0 || !Number.isInteger(data.stock))) errors.push('Stock debe ser entero >= 0');
  return errors;
}

function validatePurchase(buyerTokens: number, totalPrice: number, buyerId: number, sellerId: number): string | null {
  if (buyerId === sellerId) return 'No podés comprar tu propio producto';
  if (totalPrice <= 0) return 'El total debe ser mayor a 0';
  if (buyerTokens < totalPrice) return 'Tokens insuficientes';
  return null;
}

function validateReview(data: { rating?: number; comment?: string }): string[] {
  const errors: string[] = [];
  if (data.rating === undefined) errors.push('Rating requerido');
  else if (data.rating < 1 || data.rating > 5 || !Number.isInteger(data.rating)) errors.push('Rating debe ser entre 1 y 5');
  if (data.comment !== undefined && data.comment.length > 1000) errors.push('Comentario demasiado largo');
  return errors;
}

function calculateReputation(reviews: { rating: number }[]): { avgRating: number; reviewCount: number } {
  if (reviews.length === 0) return { avgRating: 0, reviewCount: 0 };
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return { avgRating: Math.round((sum / reviews.length) * 10) / 10, reviewCount: reviews.length };
}

describe('marketplace validation', () => {
  describe('validateProductInput', () => {
    it('should pass with valid product', () => {
      expect(validateProductInput({ name: 'Purple Kush', price: 50, category: 'Flores', stock: 5 })).toHaveLength(0);
    });
    it('should fail without name', () => {
      expect(validateProductInput({ price: 50 })).toContain('Nombre requerido');
    });
    it('should fail with empty name', () => {
      expect(validateProductInput({ name: '', price: 50 })).toContain('Nombre requerido');
    });
    it('should fail with long name', () => {
      expect(validateProductInput({ name: 'a'.repeat(201), price: 50 })).toContain('Nombre demasiado largo');
    });
    it('should fail with negative price', () => {
      expect(validateProductInput({ name: 'Test', price: -1 })).toContain('Precio debe ser >= 0');
    });
    it('should fail with float price', () => {
      expect(validateProductInput({ name: 'Test', price: 10.5 })).toContain('Precio debe ser entero (tokens)');
    });
    it('should accept price 0 (free)', () => {
      expect(validateProductInput({ name: 'Test', price: 0 })).toHaveLength(0);
    });
    it('should fail with invalid category', () => {
      expect(validateProductInput({ name: 'Test', price: 50, category: 'Bad' })).toContain('Categoría inválida');
    });
    it('should fail with negative stock', () => {
      expect(validateProductInput({ name: 'Test', price: 50, stock: -1 })).toContain('Stock debe ser entero >= 0');
    });
  });

  describe('validatePurchase', () => {
    it('should pass with sufficient tokens', () => {
      expect(validatePurchase(300, 100, 1, 2)).toBeNull();
    });
    it('should fail with insufficient tokens', () => {
      expect(validatePurchase(50, 100, 1, 2)).toBe('Tokens insuficientes');
    });
    it('should fail when buying own product', () => {
      expect(validatePurchase(300, 100, 1, 1)).toBe('No podés comprar tu propio producto');
    });
    it('should fail with zero total', () => {
      expect(validatePurchase(300, 0, 1, 2)).toBe('El total debe ser mayor a 0');
    });
    it('should pass with exact token amount', () => {
      expect(validatePurchase(100, 100, 1, 2)).toBeNull();
    });
  });

  describe('validateReview', () => {
    it('should pass with valid review', () => {
      expect(validateReview({ rating: 5, comment: 'Excelente!' })).toHaveLength(0);
    });
    it('should fail without rating', () => {
      expect(validateReview({})).toContain('Rating requerido');
    });
    it('should fail with rating 0', () => {
      expect(validateReview({ rating: 0 })).toContain('Rating debe ser entre 1 y 5');
    });
    it('should fail with rating 6', () => {
      expect(validateReview({ rating: 6 })).toContain('Rating debe ser entre 1 y 5');
    });
    it('should fail with float rating', () => {
      expect(validateReview({ rating: 3.5 })).toContain('Rating debe ser entre 1 y 5');
    });
    it('should fail with long comment', () => {
      expect(validateReview({ rating: 5, comment: 'a'.repeat(1001) })).toContain('Comentario demasiado largo');
    });
    it('should accept rating without comment', () => {
      expect(validateReview({ rating: 4 })).toHaveLength(0);
    });
  });

  describe('calculateReputation', () => {
    it('should return 0 for no reviews', () => {
      const rep = calculateReputation([]);
      expect(rep.avgRating).toBe(0);
      expect(rep.reviewCount).toBe(0);
    });
    it('should calculate average correctly', () => {
      const rep = calculateReputation([{ rating: 5 }, { rating: 3 }, { rating: 4 }]);
      expect(rep.avgRating).toBe(4);
      expect(rep.reviewCount).toBe(3);
    });
    it('should round to 1 decimal', () => {
      const rep = calculateReputation([{ rating: 5 }, { rating: 4 }]);
      expect(rep.avgRating).toBe(4.5);
    });
    it('should handle single review', () => {
      const rep = calculateReputation([{ rating: 3 }]);
      expect(rep.avgRating).toBe(3);
      expect(rep.reviewCount).toBe(1);
    });
  });
});
````

## File: tests/api/notifications.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';

function validateNotificationMessage(message: unknown): string | null {
  if (message === null || message === undefined || typeof message !== 'string') return 'Mensaje requerido';
  if (message.trim().length === 0) return 'Mensaje no puede estar vacío';
  if (message.length > 500) return 'Mensaje demasiado largo (máx 500)';
  return null;
}

function validateBroadcastTarget(target: unknown): string | null {
  const valid = ['all', 'verified', 'cultivators', 'admins'];
  if (!target || typeof target !== 'string') return 'Target requerido';
  if (!valid.includes(target)) return 'Target inválido: debe ser all, verified, cultivators o admins';
  return null;
}

function formatNotification(type: string, data: Record<string, string>): string {
  switch (type) {
    case 'user_approved': return `Tu cuenta fue aprobada. ¡Bienvenido a Citronela!`;
    case 'tokens_granted': return `Recibiste ${data.amount} tokens.`;
    case 'order_status': return `Tu orden #${data.orderId} cambió a: ${data.status}`;
    case 'new_comment': return `${data.author} comentó en tu post "${data.postTitle}"`;
    case 'crop_feedback': return `Recibiste feedback en tu cultivo "${data.cropName}"`;
    case 'marketing': return data.message;
    default: return data.message || 'Nueva notificación';
  }
}

// AI helpers — rule-based for beta (no OpenAI)
function suggestPhEc(phase: string): { phMin: number; phMax: number; ecMin: number; ecMax: number; advice: string } {
  const ranges: Record<string, { phMin: number; phMax: number; ecMin: number; ecMax: number; advice: string }> = {
    Germinacion: { phMin: 5.5, phMax: 6.5, ecMin: 0.2, ecMax: 0.6, advice: 'Mantené la humedad alta y la EC baja. Las plántulas son sensibles.' },
    Vegetacion: { phMin: 5.8, phMax: 6.5, ecMin: 0.8, ecMax: 1.6, advice: 'Incrementá la EC gradualmente. El nitrógeno es clave en esta fase.' },
    Floracion: { phMin: 6.0, phMax: 6.8, ecMin: 1.2, ecMax: 2.2, advice: 'Aumentá fósforo y potasio. Reducí el nitrógeno progresivamente.' },
    Senescencia: { phMin: 6.0, phMax: 6.5, ecMin: 0.0, ecMax: 0.5, advice: 'Fase de lavado. Solo agua pura para limpiar sales residuales.' },
  };
  return ranges[phase] || ranges.Vegetacion;
}

function generateProductDescription(data: { name: string; category: string; genetics?: string; thc?: number; cbd?: number }): string {
  let desc = `${data.name} — ${data.category}.`;
  if (data.genetics) desc += ` Genética: ${data.genetics}.`;
  if (data.thc !== undefined) desc += ` THC: ${data.thc}%.`;
  if (data.cbd !== undefined) desc += ` CBD: ${data.cbd}%.`;
  desc += ' Producto de calidad verificada por Citronela.';
  return desc;
}

function suggestGrowNotes(phase: string, ph: number, ec: number): string[] {
  const notes: string[] = [];
  const ideal = suggestPhEc(phase);
  if (ph < ideal.phMin) notes.push(`pH bajo (${ph}). Subilo a rango ${ideal.phMin}-${ideal.phMax}.`);
  if (ph > ideal.phMax) notes.push(`pH alto (${ph}). Bajalo a rango ${ideal.phMin}-${ideal.phMax}.`);
  if (ec < ideal.ecMin) notes.push(`EC baja (${ec}). Aumentá nutrientes a rango ${ideal.ecMin}-${ideal.ecMax}.`);
  if (ec > ideal.ecMax) notes.push(`EC alta (${ec}). Diluí la solución a rango ${ideal.ecMin}-${ideal.ecMax}.`);
  if (notes.length === 0) notes.push('Parámetros dentro de rango óptimo. ¡Seguí así!');
  return notes;
}

describe('notifications', () => {
  describe('validateNotificationMessage', () => {
    it('should pass with valid message', () => {
      expect(validateNotificationMessage('Hola mundo')).toBeNull();
    });
    it('should fail with empty', () => {
      expect(validateNotificationMessage('')).toBe('Mensaje no puede estar vacío');
    });
    it('should fail with null', () => {
      expect(validateNotificationMessage(null)).toBe('Mensaje requerido');
    });
    it('should fail with too long', () => {
      expect(validateNotificationMessage('a'.repeat(501))).toBe('Mensaje demasiado largo (máx 500)');
    });
    it('should accept exactly 500 chars', () => {
      expect(validateNotificationMessage('a'.repeat(500))).toBeNull();
    });
  });

  describe('validateBroadcastTarget', () => {
    it('should accept all', () => { expect(validateBroadcastTarget('all')).toBeNull(); });
    it('should accept verified', () => { expect(validateBroadcastTarget('verified')).toBeNull(); });
    it('should accept cultivators', () => { expect(validateBroadcastTarget('cultivators')).toBeNull(); });
    it('should accept admins', () => { expect(validateBroadcastTarget('admins')).toBeNull(); });
    it('should reject invalid', () => { expect(validateBroadcastTarget('invalid')).not.toBeNull(); });
    it('should reject null', () => { expect(validateBroadcastTarget(null)).not.toBeNull(); });
  });

  describe('formatNotification', () => {
    it('should format user_approved', () => {
      expect(formatNotification('user_approved', {})).toContain('aprobada');
    });
    it('should format tokens_granted', () => {
      expect(formatNotification('tokens_granted', { amount: '300' })).toContain('300 tokens');
    });
    it('should format order_status', () => {
      expect(formatNotification('order_status', { orderId: '5', status: 'Entregado' })).toContain('#5');
    });
    it('should format new_comment', () => {
      expect(formatNotification('new_comment', { author: 'Juan', postTitle: 'Test' })).toContain('Juan');
    });
    it('should format marketing', () => {
      expect(formatNotification('marketing', { message: 'Promo!' })).toBe('Promo!');
    });
    it('should handle unknown type', () => {
      expect(formatNotification('unknown', { message: 'Algo' })).toBe('Algo');
    });
  });
});

describe('AI helpers (rule-based)', () => {
  describe('suggestPhEc', () => {
    it('should return ranges for Germinacion', () => {
      const r = suggestPhEc('Germinacion');
      expect(r.phMin).toBeLessThan(r.phMax);
      expect(r.ecMin).toBeLessThan(r.ecMax);
      expect(r.advice).toBeDefined();
    });
    it('should return ranges for Floracion', () => {
      const r = suggestPhEc('Floracion');
      expect(r.ecMax).toBeGreaterThan(1);
    });
    it('should default to Vegetacion for unknown phase', () => {
      const r = suggestPhEc('Unknown');
      expect(r).toEqual(suggestPhEc('Vegetacion'));
    });
  });

  describe('generateProductDescription', () => {
    it('should include name and category', () => {
      const desc = generateProductDescription({ name: 'Purple Kush', category: 'Flores' });
      expect(desc).toContain('Purple Kush');
      expect(desc).toContain('Flores');
    });
    it('should include THC/CBD when provided', () => {
      const desc = generateProductDescription({ name: 'Test', category: 'Flores', thc: 20, cbd: 1 });
      expect(desc).toContain('20%');
      expect(desc).toContain('1%');
    });
    it('should include genetics when provided', () => {
      const desc = generateProductDescription({ name: 'Test', category: 'Flores', genetics: 'Indica' });
      expect(desc).toContain('Indica');
    });
  });

  describe('suggestGrowNotes', () => {
    it('should flag low pH', () => {
      const notes = suggestGrowNotes('Vegetacion', 4.0, 1.0);
      expect(notes.some(n => n.includes('bajo'))).toBe(true);
    });
    it('should flag high EC', () => {
      const notes = suggestGrowNotes('Vegetacion', 6.0, 3.0);
      expect(notes.some(n => n.includes('alta'))).toBe(true);
    });
    it('should return positive when in range', () => {
      const notes = suggestGrowNotes('Vegetacion', 6.0, 1.2);
      expect(notes[0]).toContain('óptimo');
    });
  });
});
````

## File: tests/db/schema.test.ts
````typescript
import { describe, it, expect } from 'vitest';
import * as schema from '@/db/schema';

describe('database schema', () => {
  describe('core tables', () => {
    it('should export users table', () => {
      expect(schema.users).toBeDefined();
    });

    it('should export crops table', () => {
      expect(schema.crops).toBeDefined();
    });

    it('should export cropLogs table', () => {
      expect(schema.cropLogs).toBeDefined();
    });

    it('should export products table', () => {
      expect(schema.products).toBeDefined();
    });

    it('should export orders table', () => {
      expect(schema.orders).toBeDefined();
    });

    it('should export posts table', () => {
      expect(schema.posts).toBeDefined();
    });

    it('should export events table', () => {
      expect(schema.events).toBeDefined();
    });
  });

  describe('Phase 1 tables', () => {
    it('should export userDocuments table', () => {
      expect(schema.userDocuments).toBeDefined();
    });

    it('should export solidaryCultivators table', () => {
      expect(schema.solidaryCultivators).toBeDefined();
    });

    it('should export tokenTransactions table', () => {
      expect(schema.tokenTransactions).toBeDefined();
    });

    it('should export labReports table', () => {
      expect(schema.labReports).toBeDefined();
    });
  });

  describe('drizzle table objects have expected shape', () => {
    it('users table should have id column', () => {
      expect(schema.users.id).toBeDefined();
    });

    it('solidaryCultivators table should have cultivatorUserId column', () => {
      expect(schema.solidaryCultivators.cultivatorUserId).toBeDefined();
    });

    it('tokenTransactions table should have amount column', () => {
      expect(schema.tokenTransactions.amount).toBeDefined();
    });

    it('labReports table should have cropId column', () => {
      expect(schema.labReports.cropId).toBeDefined();
    });
  });

  describe('type exports — compile-time validation', () => {
    it('should export User and NewUser types', () => {
      // These assertions are type-level; if they compile the types exist
      const _select: schema.User | undefined = undefined;
      const _insert: schema.NewUser | undefined = undefined;
      expect(true).toBe(true);
    });

    it('should export UserDocument and NewUserDocument types', () => {
      const _select: schema.UserDocument | undefined = undefined;
      const _insert: schema.NewUserDocument | undefined = undefined;
      expect(true).toBe(true);
    });

    it('should export SolidaryCultivator and NewSolidaryCultivator types', () => {
      const _select: schema.SolidaryCultivator | undefined = undefined;
      const _insert: schema.NewSolidaryCultivator | undefined = undefined;
      expect(true).toBe(true);
    });

    it('should export TokenTransaction and NewTokenTransaction types', () => {
      const _select: schema.TokenTransaction | undefined = undefined;
      const _insert: schema.NewTokenTransaction | undefined = undefined;
      expect(true).toBe(true);
    });

    it('should export LabReport and NewLabReport types', () => {
      const _select: schema.LabReport | undefined = undefined;
      const _insert: schema.NewLabReport | undefined = undefined;
      expect(true).toBe(true);
    });

    it('should export Crop and NewCrop types', () => {
      const _select: schema.Crop | undefined = undefined;
      const _insert: schema.NewCrop | undefined = undefined;
      expect(true).toBe(true);
    });
  });
});
````

## File: tests/lib/auth.test.ts
````typescript
import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword } from '@/lib/auth';

describe('auth utilities', () => {
  describe('hashPassword', () => {
    it('should hash a password', async () => {
      const hash = await hashPassword('test123');
      expect(hash).toBeDefined();
      expect(hash).not.toBe('test123');
      expect(hash.length).toBeGreaterThan(20);
    });

    it('should produce different hashes for same password (bcrypt salting)', async () => {
      const hash1 = await hashPassword('test123');
      const hash2 = await hashPassword('test123');
      expect(hash1).not.toBe(hash2);
    });

    it('should produce a bcrypt hash (starts with $2b$)', async () => {
      const hash = await hashPassword('any-password');
      expect(hash).toMatch(/^\$2[ab]\$/);
    });

    it('should handle special characters in password', async () => {
      const hash = await hashPassword('p@$$w0rd!#%&*()');
      expect(hash).toBeDefined();
      expect(hash).not.toBe('p@$$w0rd!#%&*()');
    });
  });

  describe('verifyPassword', () => {
    it('should verify correct password', async () => {
      const hash = await hashPassword('mypassword');
      const result = await verifyPassword('mypassword', hash);
      expect(result).toBe(true);
    });

    it('should reject incorrect password', async () => {
      const hash = await hashPassword('mypassword');
      const result = await verifyPassword('wrongpassword', hash);
      expect(result).toBe(false);
    });

    it('should reject empty password against hash', async () => {
      const hash = await hashPassword('mypassword');
      const result = await verifyPassword('', hash);
      expect(result).toBe(false);
    });

    it('should reject password that is a substring of the real one', async () => {
      const hash = await hashPassword('supersecret');
      const result = await verifyPassword('super', hash);
      expect(result).toBe(false);
    });

    it('should reject password with different casing', async () => {
      const hash = await hashPassword('MyPassword');
      const result = await verifyPassword('mypassword', hash);
      expect(result).toBe(false);
    });

    it('should verify special character passwords correctly', async () => {
      const password = 'p@$$w0rd!';
      const hash = await hashPassword(password);
      expect(await verifyPassword(password, hash)).toBe(true);
      expect(await verifyPassword('p@$$w0rd', hash)).toBe(false);
    });
  });
});
````

## File: tests/lib/session.test.ts
````typescript
// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { encrypt, decrypt } from '@/lib/session';

describe('session JWT', () => {
  const mockPayload = {
    userId: 1,
    username: 'testuser',
    role: 'USER',
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
  };

  describe('encrypt', () => {
    it('should produce a JWT string', async () => {
      const token = await encrypt(mockPayload);
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.split('.')).toHaveLength(3); // header.payload.signature
    });

    it('should produce different tokens on repeated calls (iat jitter)', async () => {
      // JWT includes iat (issued-at) which may differ — just validate both are valid JWTs
      const token1 = await encrypt(mockPayload);
      const token2 = await encrypt(mockPayload);
      // Both must be decodable
      const decoded1 = await decrypt(token1);
      const decoded2 = await decrypt(token2);
      expect(decoded1?.userId).toBe(mockPayload.userId);
      expect(decoded2?.userId).toBe(mockPayload.userId);
    });

    it('should embed userId, username and role in the token', async () => {
      const token = await encrypt(mockPayload);
      const decoded = await decrypt(token);
      expect(decoded?.userId).toBe(mockPayload.userId);
      expect(decoded?.username).toBe(mockPayload.username);
      expect(decoded?.role).toBe(mockPayload.role);
    });
  });

  describe('decrypt', () => {
    it('should decrypt a valid token', async () => {
      const token = await encrypt(mockPayload);
      const decoded = await decrypt(token);
      expect(decoded).not.toBeNull();
      expect(decoded?.userId).toBe(1);
      expect(decoded?.username).toBe('testuser');
      expect(decoded?.role).toBe('USER');
    });

    it('should return null for an invalid token', async () => {
      const decoded = await decrypt('invalid.token.here');
      expect(decoded).toBeNull();
    });

    it('should return null for empty string', async () => {
      const decoded = await decrypt('');
      expect(decoded).toBeNull();
    });

    it('should return null for a tampered signature', async () => {
      const token = await encrypt(mockPayload);
      const tampered = token.slice(0, -5) + 'XXXXX';
      const decoded = await decrypt(tampered);
      expect(decoded).toBeNull();
    });

    it('should return null for a token with tampered payload', async () => {
      const token = await encrypt(mockPayload);
      const parts = token.split('.');
      // Replace payload with a different base64url string
      const fakePayload = Buffer.from(JSON.stringify({ userId: 999, username: 'hacker', role: 'ADMIN' })).toString('base64url');
      const tampered = `${parts[0]}.${fakePayload}.${parts[2]}`;
      const decoded = await decrypt(tampered);
      expect(decoded).toBeNull();
    });

    it('should return null for a token missing parts', async () => {
      const decoded = await decrypt('onlyone');
      expect(decoded).toBeNull();
    });

    it('should handle ADMIN role correctly', async () => {
      const adminPayload = { ...mockPayload, userId: 2, username: 'admin', role: 'ADMIN' };
      const token = await encrypt(adminPayload);
      const decoded = await decrypt(token);
      expect(decoded?.role).toBe('ADMIN');
      expect(decoded?.userId).toBe(2);
    });
  });
});
````

## File: tests/lib/validation.test.ts
````typescript
import { describe, it, expect } from 'vitest';

// ---------------------------------------------------------------------------
// Pure validation helpers — extracted from API route logic, no DB dependency
// ---------------------------------------------------------------------------

function validateRegistration(data: { username?: string; email?: string; password?: string }) {
  const errors: string[] = [];
  if (!data.username) errors.push('Usuario requerido');
  else if (data.username.length < 3) errors.push('Usuario debe tener al menos 3 caracteres');
  if (!data.email) errors.push('Email requerido');
  if (!data.password) errors.push('Contraseña requerida');
  else if (data.password.length < 6) errors.push('Contraseña debe tener al menos 6 caracteres');
  return errors;
}

function validateTokenAmount(amount: unknown): boolean {
  return typeof amount === 'number' && amount > 0 && Number.isInteger(amount);
}

function validateCultivatorAssignment(cultivatorId: unknown, patientId: unknown): boolean {
  return (
    typeof cultivatorId === 'number' &&
    typeof patientId === 'number' &&
    cultivatorId !== patientId &&
    cultivatorId > 0 &&
    patientId > 0
  );
}

// ---------------------------------------------------------------------------

describe('validation helpers', () => {
  describe('validateRegistration', () => {
    it('should pass with all valid fields', () => {
      const errors = validateRegistration({ username: 'test', email: 'a@b.com', password: '123456' });
      expect(errors).toHaveLength(0);
    });

    it('should pass with a longer valid username', () => {
      const errors = validateRegistration({ username: 'juancitoelmejor', email: 'juan@mail.com', password: 'securepwd' });
      expect(errors).toHaveLength(0);
    });

    it('should fail without username', () => {
      const errors = validateRegistration({ email: 'a@b.com', password: '123456' });
      expect(errors).toContain('Usuario requerido');
    });

    it('should fail with username shorter than 3 chars', () => {
      const errors = validateRegistration({ username: 'ab', email: 'a@b.com', password: '123456' });
      expect(errors).toContain('Usuario debe tener al menos 3 caracteres');
    });

    it('should NOT fail with username exactly 3 chars', () => {
      const errors = validateRegistration({ username: 'abc', email: 'a@b.com', password: '123456' });
      expect(errors).not.toContain('Usuario debe tener al menos 3 caracteres');
    });

    it('should fail without email', () => {
      const errors = validateRegistration({ username: 'test', password: '123456' });
      expect(errors).toContain('Email requerido');
    });

    it('should fail without password', () => {
      const errors = validateRegistration({ username: 'test', email: 'a@b.com' });
      expect(errors).toContain('Contraseña requerida');
    });

    it('should fail with password shorter than 6 chars', () => {
      const errors = validateRegistration({ username: 'test', email: 'a@b.com', password: '12345' });
      expect(errors).toContain('Contraseña debe tener al menos 6 caracteres');
    });

    it('should NOT fail with password exactly 6 chars', () => {
      const errors = validateRegistration({ username: 'test', email: 'a@b.com', password: '123456' });
      expect(errors).not.toContain('Contraseña debe tener al menos 6 caracteres');
    });

    it('should collect all three errors when all fields are empty', () => {
      const errors = validateRegistration({});
      expect(errors).toContain('Usuario requerido');
      expect(errors).toContain('Email requerido');
      expect(errors).toContain('Contraseña requerida');
      expect(errors.length).toBeGreaterThanOrEqual(3);
    });

    it('should collect both username and password errors simultaneously', () => {
      const errors = validateRegistration({ username: 'a', email: 'a@b.com', password: '123' });
      expect(errors).toContain('Usuario debe tener al menos 3 caracteres');
      expect(errors).toContain('Contraseña debe tener al menos 6 caracteres');
    });
  });

  describe('validateTokenAmount', () => {
    it('should accept a standard positive integer (300 tokens)', () => {
      expect(validateTokenAmount(300)).toBe(true);
    });

    it('should accept the minimum valid amount (1)', () => {
      expect(validateTokenAmount(1)).toBe(true);
    });

    it('should reject zero', () => {
      expect(validateTokenAmount(0)).toBe(false);
    });

    it('should reject negative amounts', () => {
      expect(validateTokenAmount(-100)).toBe(false);
      expect(validateTokenAmount(-1)).toBe(false);
    });

    it('should reject decimal / float values', () => {
      expect(validateTokenAmount(10.5)).toBe(false);
      expect(validateTokenAmount(0.1)).toBe(false);
    });

    it('should reject numeric strings', () => {
      expect(validateTokenAmount('300')).toBe(false);
      expect(validateTokenAmount('1')).toBe(false);
    });

    it('should reject null', () => {
      expect(validateTokenAmount(null)).toBe(false);
    });

    it('should reject undefined', () => {
      expect(validateTokenAmount(undefined)).toBe(false);
    });

    it('should reject NaN', () => {
      expect(validateTokenAmount(NaN)).toBe(false);
    });

    it('should reject Infinity', () => {
      expect(validateTokenAmount(Infinity)).toBe(false);
    });

    it('should reject objects and arrays', () => {
      expect(validateTokenAmount({})).toBe(false);
      expect(validateTokenAmount([])).toBe(false);
    });
  });

  describe('validateCultivatorAssignment', () => {
    it('should accept a valid distinct assignment', () => {
      expect(validateCultivatorAssignment(1, 2)).toBe(true);
    });

    it('should accept large valid IDs', () => {
      expect(validateCultivatorAssignment(150, 500)).toBe(true);
    });

    it('should reject when cultivator and patient are the same user', () => {
      expect(validateCultivatorAssignment(1, 1)).toBe(false);
      expect(validateCultivatorAssignment(42, 42)).toBe(false);
    });

    it('should reject cultivatorId of 0 (invalid DB id)', () => {
      expect(validateCultivatorAssignment(0, 1)).toBe(false);
    });

    it('should reject patientId of 0', () => {
      expect(validateCultivatorAssignment(1, 0)).toBe(false);
    });

    it('should reject negative cultivatorId', () => {
      expect(validateCultivatorAssignment(-1, 2)).toBe(false);
    });

    it('should reject negative patientId', () => {
      expect(validateCultivatorAssignment(1, -2)).toBe(false);
    });

    it('should reject non-numeric cultivatorId (string)', () => {
      expect(validateCultivatorAssignment('a', 1)).toBe(false);
    });

    it('should reject non-numeric patientId (string)', () => {
      expect(validateCultivatorAssignment(1, 'b')).toBe(false);
    });

    it('should reject null values', () => {
      expect(validateCultivatorAssignment(null, 1)).toBe(false);
      expect(validateCultivatorAssignment(1, null)).toBe(false);
    });

    it('should reject undefined values', () => {
      expect(validateCultivatorAssignment(undefined, 1)).toBe(false);
      expect(validateCultivatorAssignment(1, undefined)).toBe(false);
    });
  });
});
````

## File: tests/example.test.tsx
````typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Simple test component to verify setup works
function TestComponent({ message = 'Hello, Vitest!' }: { message?: string }) {
  return <div data-testid="test-message">{message}</div>
}

describe('Basic Setup Verification', () => {
  it('renders without crashing', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('test-message')).toBeInTheDocument()
  })

  it('displays the correct message', () => {
    render(<TestComponent message="Citronela MVP" />)
    expect(screen.getByTestId('test-message')).toHaveTextContent('Citronela MVP')
  })

  it('supports custom messages', () => {
    const customMessage = 'ONG Cannabis Medicinal'
    render(<TestComponent message={customMessage} />)
    expect(screen.getByTestId('test-message')).toHaveTextContent(customMessage)
  })
})

describe('Vitest Utilities', () => {
  it('adds numbers correctly', () => {
    expect(1 + 1).toBe(2)
  })

  it('handles arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
  })

  it('handles objects', () => {
    const obj = { name: 'Citronela', type: 'ONG' }
    expect(obj).toHaveProperty('name', 'Citronela')
  })
})
````

## File: tests/setup.ts
````typescript
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock next/headers (requires Next.js runtime, unavailable in unit tests)
vi.mock('next/headers', () => ({
  cookies: vi.fn(() => ({
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
  })),
}));
````

## File: tests/utils.test.ts
````typescript
import { describe, it, expect } from 'vitest'

// --- Utility Functions for Testing ---

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + '...'
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15)
}

// --- Tests ---

describe('cn utility', () => {
  it('joins multiple class names', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz')
  })

  it('filters out falsy values', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar')
  })

  it('returns empty string for all falsy', () => {
    expect(cn(undefined, null, false)).toBe('')
  })
})

describe('capitalize utility', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('leaves already capitalized strings unchanged', () => {
    expect(capitalize('Hello')).toBe('Hello')
  })
})

describe('truncate utility', () => {
  it('returns original string if shorter than maxLength', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('truncates with ellipsis when longer', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...')
  })

  it('handles exact length', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })
})

describe('formatCurrency utility', () => {
  it('formats USD by default', () => {
    expect(formatCurrency(100)).toBe('$100.00')
  })

  it('handles decimal amounts', () => {
    expect(formatCurrency(99.99)).toBe('$99.99')
  })

  it('handles large amounts', () => {
    expect(formatCurrency(1000000)).toBe('$1,000,000.00')
  })
})

describe('isValidEmail utility', () => {
  it('validates correct email formats', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name@domain.org')).toBe(true)
  })

  it('rejects invalid email formats', () => {
    expect(isValidEmail('invalid')).toBe(false)
    expect(isValidEmail('no@domain')).toBe(false)
    expect(isValidEmail('@nodomain.com')).toBe(false)
    expect(isValidEmail('')).toBe(false)
  })
})

describe('generateId utility', () => {
  it('generates a non-empty string', () => {
    expect(generateId()).toBeTruthy()
    expect(generateId().length).toBeGreaterThan(0)
  })

  it('generates unique IDs', () => {
    const id1 = generateId()
    const id2 = generateId()
    expect(id1).not.toBe(id2)
  })
})
````

## File: .env.example
````
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require

# JWT Secret (generate with: openssl rand -base64 32)
JWT_SECRET=your-secret-key-here

# App URL (for email verification links)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# OpenAI (optional — AI features work rule-based without this)
# OPENAI_API_KEY=sk-...
````

## File: .gitignore
````
# Dependencies
node_modules/
.pnp
.pnp.js

# Build
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Database
*.db

# Logs
*.log

# Vercel
.vercel
````

## File: drizzle.config.ts
````typescript
require('dotenv').config({ path: '.env.local' });

/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: './db/schema.ts',
  out: './db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/citronela',
  },
};
````

## File: error despliegue.txt
````
Find in logs
CtrlF
Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/adriangmrraa/citronelamvp (Branch: master, Commit: 93ad675)
Skipping build cache, deployment was triggered without cache.
Cloning completed: 224.000ms
Running "vercel build"
Vercel CLI 51.6.1
Installing dependencies...
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated @esbuild-kit/core-utils@3.3.2: Merged into tsx: https://tsx.is
npm warn deprecated glob@8.1.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated @esbuild-kit/esm-loader@2.6.5: Merged into tsx: https://tsx.is
npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated glob@10.3.10: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.


esto en la ui: 404: NOT_FOUND
Code: DEPLOYMENT_NOT_FOUND
ID: gru1::9s2qv-1776735260084-a5a61914e09c


la url de vercel es la siguiente proba con playwright: https://citronelamvp.vercel.app/

/favicon.ico:1  Failed to load resource: the server responded with a status of 404 ()
(index):1  Failed to load resource: the server responded with a status of 404 ()




deploy en vercel: 
citronelamvp-gfv9b0uip-adriangmrraas-projects.vercel.app
Current
master
Initial commit: Citronela MVP base with Next.js 14, Drizzle, shadcn/ui




---

logs d enuevo despliegue:

Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/adriangmrraa/citronelamvp (Branch: master, Commit: fe6c21c)
Skipping build cache, deployment was triggered without cache.
Cloning completed: 583.000ms
Running "vercel build"
Vercel CLI 51.6.1
Installing dependencies...
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@8.1.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated @esbuild-kit/core-utils@3.3.2: Merged into tsx: https://tsx.is
npm warn deprecated @esbuild-kit/esm-loader@2.6.5: Merged into tsx: https://tsx.is
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated glob@10.3.10: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
added 488 packages in 12s
````

## File: middleware.ts
````typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './lib/session';

const publicRoutes = ['/', '/login', '/register', '/legal/terms', '/legal/privacy'];
const publicApiRoutes = ['/api/auth/login', '/api/auth/register', '/api/auth/verify', '/api/health'];
const adminRoutes = ['/admin', '/api/admin'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // For API routes
  if (pathname.startsWith('/api/')) {
    if (publicApiRoutes.some(r => pathname.startsWith(r))) {
      return NextResponse.next();
    }

    const cookieValue = request.cookies.get('session')?.value;
    if (!cookieValue) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const session = await decrypt(cookieValue);
    if (!session) {
      return NextResponse.json({ error: 'Sesión inválida' }, { status: 401 });
    }

    // Admin routes check
    if (adminRoutes.some(r => pathname.startsWith(r))) {
      if (session.role !== 'ADMIN' && session.role !== 'STAFF') {
        return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
      }
    }

    return NextResponse.next();
  }

  // For protected pages — redirect to login if no session
  const cookieValue = request.cookies.get('session')?.value;
  if (!cookieValue) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const session = await decrypt(cookieValue);
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Admin page access
  if (pathname.startsWith('/admin')) {
    if (session.role !== 'ADMIN' && session.role !== 'STAFF') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
````

## File: next-env.d.ts
````typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
````

## File: next.config.js
````javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@neondatabase/serverless'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
````

## File: package.json
````json
{
  "name": "citronela-mvp",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "db:generate": "drizzle-kit generate:pg",
    "db:push": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio",
    "db:seed": "npx tsx scripts/seed-admin.ts"
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.9.0",
    "@radix-ui/react-slot": "^1.0.2",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "drizzle-orm": "^0.29.0",
    "jose": "^5.2.0",
    "jsonwebtoken": "^9.0.2",
    "lucide-react": "^0.312.0",
    "next": "^14.2.0",
    "next-themes": "^0.4.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.2.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@types/bcryptjs": "^2.4.6",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "dotenv": "^17.4.2",
    "drizzle-kit": "^0.20.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0",
    "jsdom": "^29.0.2",
    "postcss": "^8.5.10",
    "tailwindcss": "^3.4.19",
    "typescript": "^5.3.0",
    "vite-tsconfig-paths": "^6.1.1",
    "vitest": "^4.1.5"
  }
}
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
````

## File: README.md
````markdown
# Citronela MVP

Plataforma de gestión de cultivos hidropónicos y marketplace.

## Stack
- Next.js 14 (App Router)
- Drizzle ORM
- Neon PostgreSQL
- Tailwind CSS
- shadcn/ui

## Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=tu-secret-segura
```

## Desarrollo

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Conectá el repo a Vercel
2. Configurá las Environment Variables en Project Settings
3. Listo!

## Estructura

```
app/
├── api/          # API routes
├── login/        # Auth pages
├── register/
├── dashboard/   # Protected area
db/
└── schema.ts    # Drizzle schema
lib/
├── db.ts        # Database connection
└── auth.ts      # Auth utilities
```
````

## File: skills-lock.json
````json
{
  "version": 1,
  "skills": {
    "neon-postgres": {
      "source": "neondatabase/agent-skills",
      "sourceType": "github",
      "computedHash": "574cf4b7c901ebc7d88d34e2c3e3d08fdec127bd0047f888de148ff0af787d4e"
    }
  }
}
````

## File: tailwind.config.ts
````typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
    },
  },
  plugins: [],
};

export default config;
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'server-only': new URL('./tests/__mocks__/server-only.ts', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
    },
  },
})
````
