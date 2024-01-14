export interface Course {
  id?: number
  name?: string
  createTime?: string
}

export interface User {
  id?: number
  level?: number
  name?: string
  address?: string
  insertTime?: string
  sex?: string
  title?: Title
  courses?: Course[]
}

export interface Title {
  id?: number
  name?: string
}

export interface GithubUser {
  name?: string
  company?: string
  public_repos?: number
  followers?: number
  repos_url?: string
  login?: string
  avatar_url?: string
  url?: string
}

export interface GithubRepos {
  name?: string
  html_url?: string
  pushed_at?: string
  language?: string
  size?: number
  forks?: number
  stargazers_count?: number
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
