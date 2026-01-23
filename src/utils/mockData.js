export const mockData = Array.from({ length:70 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  status: i % 2 === 0 ? "Active" : "Inactive",
  date: `2026-01-${(i % 30) + 1}`,
}));
