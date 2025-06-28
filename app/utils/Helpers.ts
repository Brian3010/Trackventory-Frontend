export function FormatRoute(route: string) {
  const formatedRoute = route
    .split('/') // [ '', 'dashboard' ]
    .filter(Boolean) // [ 'dashboard' ]
    .pop() // 'dashboard'
    ?.replace(/-/g, ' ') // Replace dashes with spaces (if any)
    .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize first letter

  return formatedRoute;
}
