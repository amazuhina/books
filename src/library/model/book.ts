import { OptionsType } from "./generalTypes";

export interface BookResponse {
  items: BookItem[]
  totalItems: number
  kind: string
}

export interface BookItem {
  accessInfo : any
  etag: string
  id: string
  kind: string
  saleInfo: any
  searchInfo: Record<string, string>
  selfLink: string
  volumeInfo: BookItemVolumeInfo
}

export interface BookItemVolumeInfo {
  allowAnonLogging: boolean
  authors: string[]
  canonicalVolumeLink: string
  categories: string[]
  contentVersion: string
  description: string
  imageLinks: Record<'smallThumbnail' | 'thumbnail', string>
  industryIdentifiers: Record<string, string>[]
  infoLink: string
  language: string
  maturityRating: string
  pageCount: number
  panelizationSummary: Record<string, boolean>
  previewLink: string
  printType: string
  publishedDate: string
  publisher: string
  readingModes: Record<string, boolean>
  title: string
}

export const categoriesOption: OptionsType[] = [
  {
    label: 'Все',
    value: 'all'
  },
  {
    label: 'Искусство',
    value: 'art'
  },
  {
    label: 'Биографии',
    value: 'biography'
  },
  {
    label: 'Компьютеры',
    value: 'computers'
  },
  {
    label: 'История',
    value: 'history'
  },
  {
    label: 'Медицина',
    value: 'medical'
  },
  {
    label: 'Поэзия',
    value: 'poetry'
  },
]

