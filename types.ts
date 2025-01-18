export type User = {
  id: number
  FirstName: string
  LastName: string
  Phone: string
  Email: string
}

export type TableHeader<T> = {
  value: string
  key: keyof T
}

export type FormData = {
  FirstName: string
  LastName: string
  Phone: string
  Email: string
}
