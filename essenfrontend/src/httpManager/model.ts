export type Image = {
  id: string
  attributes: {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: any
    url: string
  }
}

export type Product = {
  id: string
  attributes: {
    Title: string
    ShortDescription: string
    LongDescription: string
    Images: {
      data: Image[]
    }
  }
}