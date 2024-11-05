export function buildQueryString<T extends object[]>(...queryParamsList: T) {
  const searchParams = new URLSearchParams()
  for (const queryParams of queryParamsList) {
    for (const [name, value] of Object.entries(queryParams)) {
      searchParams.append(name, value)
    }
  }
  return searchParams.toString()
}
