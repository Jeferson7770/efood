class Items {
  title: string
  description: string
  category: string
  estrela: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    estrela: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.estrela = estrela
    this.image = image
    this.infos = infos
  }
}

export default Items
