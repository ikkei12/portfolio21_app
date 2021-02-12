import { Category } from '~/@types/Article'

export class CategoryHook {
  static getCategoryFromIds(categoryIds: Number[]): Category[] {
    const fs = require('fs')
    const categoriesJsonData = JSON.parse(
      fs.readFileSync('content/categories.json', 'utf8')
    ).categories
    const categories: Category[] = []
    if (!categoryIds) return []
    categoryIds.forEach((categoryId) => {
      const res = categoriesJsonData.find((category: Category) => {
        return category.id === categoryId
      })
      categories.push(res)
    })

    return categories
  }
}
