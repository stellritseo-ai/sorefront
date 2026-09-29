<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Sore Fronts Of Dallas site
- Single-page marketing site: all sections are components in `src/components/site/`, composed in `src/routes/index.tsx`, navigated by hash anchors — keeps one scroll narrative for a one-location business.
- All copy, services, FAQ and (empty) reviews live in `src/data/site.ts` so business facts change in one place.
- Reviews array is intentionally empty; render a placeholder instead of inventing testimonials.
