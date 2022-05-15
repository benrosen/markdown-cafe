import type {
  MutationResolvers,
  PageResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pages: QueryResolvers['pages'] = () => {
  return db.page.findMany()
}

export const page: QueryResolvers['page'] = ({ id }) => {
  return db.page.findUnique({
    where: { id },
  })
}

export const createPage: MutationResolvers['createPage'] = ({ input }) => {
  return db.page.create({
    data: input,
  })
}

export const updatePage: MutationResolvers['updatePage'] = ({ id, input }) => {
  return db.page.update({
    data: input,
    where: { id },
  })
}

export const deletePage: MutationResolvers['deletePage'] = ({ id }) => {
  return db.page.delete({
    where: { id },
  })
}

export const Page: PageResolvers = {
  flags: (_obj, { root }) =>
    db.page.findUnique({ where: { id: root.id } }).flags(),
}
