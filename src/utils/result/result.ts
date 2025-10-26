export type Result<
  T,
  E = {
    message: string;
  },
> = { ok: true; value: T } | { ok: false; error: E };
