export default `
  type HeldItem {
    item: Item,
  }

  type Item {
    id: Int,
    name: String,
    cost: Int,
    fling_power: Int,
    category: ItemCategory,
    attributes: [ItemAttribute]
  }

  type ItemCategory {
    id: Int,
    name: String,
    items: [Item],
  }

  type ItemAttribute {
    id: Int,
    name: String,
    items: [Item],
    description: String,
  }
`